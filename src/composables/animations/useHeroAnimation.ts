import { onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const baseSkillWords = [
  'DEVELOP',
  'DESIGN',
  'CREATE',
  'BUILD',
  'DEPLOY',
  'OPTIMIZE',
  'INNOVATE',
  'ARCHITECT',
  'ENGINEER',
  'SOLVE',
  'RUN',
  'SKI',
  'CODE',
  'EXPLORE',
  'LEARN',
  'LIFT',
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useHeroAnimation() {
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let wordIndex = 0;
  const skillWords = shuffleArray(baseSkillWords);
  const wordTimelines: gsap.core.Timeline[] = [];

  const animateHero = () => {
    return new Promise<void>(resolve => {
      timeline
        .to('#hero h1 div:first-child .letter', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power4.out',
        })
        .to(
          '#hero h1 div:last-child .letter',
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.4'
        )
        .to('#job', {
          opacity: 1,
          duration: 0.1,
          onComplete: () => {
            const wordElement = document.querySelector('#job .word');
            if (wordElement) {
              wordElement.textContent = skillWords[wordIndex];
              animateWord(wordElement);
              resolve();
            }
          },
        });
    });
  };

  const animateWord = (wordElement: Element, isFirst = false) => {
    const currentWord = skillWords[wordIndex];
    const el = wordElement as HTMLElement;

    if (isFirst) {
      el.style.opacity = '0';
      el.textContent = currentWord;

      timeline.to(el, {
        opacity: 1,
        duration: 0.4,
        onComplete: () => {
          setTimeout(() => {
            wordIndex = (wordIndex + 1) % skillWords.length;
            animateWord(wordElement, false);
          }, 2000);
        },
      });
      return;
    }

    const wordTimeline = gsap
      .timeline()
      .to(el, {
        duration: 0.6,
        rotateX: -90,
        opacity: 0,
        transformOrigin: 'center center',
        transformPerspective: 1000,
        ease: 'power2.in',
      })
      .call(() => {
        el.textContent = currentWord;
      })
      .to(el, {
        duration: 0.6,
        rotateX: 0,
        opacity: 1,
        ease: 'power2.out',
        onComplete: () => {
          setTimeout(() => {
            wordIndex = (wordIndex + 1) % skillWords.length;
            if (wordIndex === 0) {
              shuffleArray(skillWords);
            }
            animateWord(wordElement);
          }, 2000);
        },
      });

    wordTimelines.push(wordTimeline);
  };

  onBeforeUnmount(() => {
    timeline.kill();
    wordTimelines.forEach(tl => tl.kill());
  });

  return {
    timeline,
    animateHero,
  };
}
