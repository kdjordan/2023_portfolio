import { gsap } from 'gsap';

function fadeInHero() {
  return () => {
    const tl = gsap.timeline();
    tl.fromTo('#hero', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power1.out' }).fromTo(
      '#job',
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power1.out' },
      '-=1' // Start slightly before the hero animation finishes
    );
  };
}

export function animateJobChange() {
  gsap.fromTo('#job', { y: -10, opacity: 0 }, { duration: 1.5, y: 0, opacity: 1, ease: 'power1.out' });
}

export function toggleMobileNav(isOpen: boolean) {
  const tl: GSAPTimeline = gsap.timeline();
  const links = document.querySelectorAll('#overlay > ul > li');
  const upper = document.querySelectorAll('#upper');
  const middle = document.querySelectorAll('#middle');
  const lower = document.querySelectorAll('#lower');
  if (isOpen !== true) {
    tl.to(middle, { rotation: -360, transformOrigin: '50% 50%' });
    tl.to([upper, lower], { x: 0, opacity: 1 });
    tl.to([links, '#overlay > ul > button'], { x: 1000, stagger: { amount: 0.1, ease: 'power1.out' } }, '-=.5').to(
      '#overlay',
      { duration: 0.2, xPercent: 100, ease: 'power1.out' },
      '-=.7'
    );
  } else {
    // tl.to([upper,middle, lower], { x: 50})
    tl.to(middle, { rotation: 360, transformOrigin: '50% 50%' });
    tl.to([upper, lower], { x: 100, opacity: 0 });
    tl.set([links, '#overlay > ul > button'], { x: 1000 });
    tl.to('#overlay', { duration: 0.2, xPercent: -100, ease: 'power1.out' }).to([links, 'button'], {
      x: 0,
      stagger: { amount: 0.1, ease: 'power1.out' },
    });
  }
}

export function introAnimation() {
  const tl: GSAPTimeline = gsap.timeline();
  tl.set('.top-nav', { opacity: 0 })
    .to('.top-nav', { opacity: 1 })
    .from('.nav-right rect', {
      opacity: 0,
      y: -100,
      duration: 0.1,
      stagger: {
        amount: 0.5,
        from: 'start',
        ease: 'ease',
      },
    })
    .add(fadeInHero());
}

export function fadeInTextBlock(selector: string) {
  gsap.from(selector, {
    opacity: 0,
    duration: 2,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: selector,
      start: '25% 75%',
    },
  });
}

export function horozontilScrolling(items: string[]) {
  console.log(items);
}
