import { onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const chars = '!<>-_\\/[]{}—=+*^?#________';
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

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function scrambleText(finalText: string, progress: number): string {
  const length = finalText.length;
  return Array.from({ length }, (_, i) => {
    if (progress >= i / length) {
      return finalText[i];
    }
    return chars[Math.floor(Math.random() * chars.length)];
  }).join('');
}

export function useHeroAnimation() {
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let scrambleInterval: number;
  let wordIndex = 0;
  const skillWords = shuffleArray(baseSkillWords);

  const animateWord = (jobElement: Element) => {
    let progress = 0;
    const finalText = `>>> ${skillWords[wordIndex]}`;
    jobElement.textContent = scrambleText(finalText, 0);

    scrambleInterval = window.setInterval(() => {
      progress += 0.1;
      jobElement.textContent = scrambleText(finalText, progress);

      if (progress >= 1) {
        clearInterval(scrambleInterval);
        jobElement.textContent = finalText;

        setTimeout(() => {
          wordIndex = (wordIndex + 1) % skillWords.length;
          if (wordIndex === 0) {
            shuffleArray(skillWords);
          }
          animateWord(jobElement);
        }, 2000);
      }
    }, 50);
  };

  const animateHero = () => {
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
      .add(() => {
        const jobElement = document.querySelector('#job');
        if (jobElement) {
          gsap.to(jobElement, { opacity: 1, duration: 0.1 });
          animateWord(jobElement);
        }
      }, '+=0.2');
  };

  onBeforeUnmount(() => {
    timeline.kill();
    if (scrambleInterval) {
      clearInterval(scrambleInterval);
    }
  });

  return {
    timeline,
    animateHero,
  };
}
