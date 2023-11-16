import { gsap } from 'gsap';

function fadeInHero() {
  return () => {
    console.log('fading hero')
    gsap.fromTo('#hero', { y: -100 }, { y: 0, opacity: 1, duration:.5, ease: 'power1.out'})
  }
}

export function animateJobChange() {
  gsap.from('#job', { duration: 1.5, opacity: 0, x: 10, ease: 'power1.out'})
}


export function toggleMobileNav(isOpen: boolean) {
  console.log('isOpen', isOpen)
  const tl: GSAPTimeline = gsap.timeline();
  const links = document.querySelectorAll('#overlay > ul > li')
  if (isOpen === true) {
    tl.to([links, 'button'], { x: 1000,  stagger: {amount: .10, ease: 'power1.out'}})
    .to('#overlay', { duration: .2, xPercent: 100, ease: 'power1.out'})
  } else {
    tl.set([links, 'button'], { x: 1000 })
    tl.to('#overlay', { duration: .2, xPercent: -100, ease: 'power1.out'})
    .to([links, 'button'], { x: 0,  stagger: {amount: .10, ease: 'power1.out'}})
  }
}

export function introAnimation() {          
  const tl: GSAPTimeline = gsap.timeline();
  console.log('running')
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  .to('.top-nav',{ opacity: 1 })
  .from(['#logo', '.nav-right rect'], { opacity: 0, y: -100, duration: .1, stagger: {
    amount: .5,
    from: 'start',
    ease: 'ease'
    },  onComplete: () => console.log('here')
  })
  .to('.top-nav', { borderBottom: '1px solid #9FF279', duration: .5, onComplete: fadeInHero()})
}

export function fadeInTextBlock(selector: string) {   
  gsap.from(selector, { opacity:0, duration:2, ease:'power1.out', scrollTrigger: {
		trigger: selector,
		start: '25% 75%'
	}})
}
