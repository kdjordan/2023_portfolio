import { gsap } from 'gsap';

function fadeInHero() {
  return () => {
    gsap.fromTo('#hero', { y: -100 }, { y: 0, opacity: 1, duration:.5, ease: 'power1.out'})
  }
}

export function animateJobChange() {
  gsap.from('#job', { duration: 1.5, opacity: 0, y: -10, ease: 'power1.out'})
}


export function toggleMobileNav(isOpen: boolean) {
  const tl: GSAPTimeline = gsap.timeline();
  const links = document.querySelectorAll('#overlay > ul > li')
  const upper = document.querySelectorAll('#upper')
  const middle = document.querySelectorAll('#middle')
  const lower = document.querySelectorAll('#lower')
  if (isOpen !== true) {
    tl.to(middle, {rotation: -360,
      transformOrigin:"50% 50%"})
      tl.to([upper, lower], {x: 0, opacity: 1})
    tl.to([links, '#overlay > ul > button'], { x: 1000,  stagger: {amount: .10, ease: 'power1.out'}}, "-=.5")
    .to('#overlay', { duration: .2, x: '100%', ease: 'power1.out'}, '-=.7')
  } else {
    // tl.to([upper,middle, lower], { x: 50})
    tl.to(middle, {rotation: 360,
      transformOrigin:"50% 50%"})
      tl.to([upper, lower], { x: 100, opacity: 0 })
    tl.set([links, '#overlay > ul > button'], { x: 1000 })
    tl.to('#overlay', { duration: .2, xPercent: -100, ease: 'power1.out'})
    .to([links, 'button'], { x: 0,  stagger: {amount: .10, ease: 'power1.out'}})
  }
}

export function introAnimation() {          
  const tl: GSAPTimeline = gsap.timeline();
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  .to('.top-nav',{ opacity: 1 })
  .from(['#logo', '.nav-right rect'], { opacity: 0, y: -100, duration: .1, stagger: {
    amount: .5,
    from: 'start',
    ease: 'ease'
    }
  })
  .to('.top-nav', { borderBottom: '1px solid #9FF279', duration: .5, onComplete: fadeInHero()})
}

export function fadeInTextBlock(selector: string) {   
  gsap.from(selector, { opacity:0, duration:2, ease:'power1.out', scrollTrigger: {
		trigger: selector,
		start: '25% 75%'
	}})
}
