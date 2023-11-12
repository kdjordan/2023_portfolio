import { gsap } from 'gsap';

function animateHero(): () => void { 
  return () => {
    gsap.fromTo ('#hero', { y:-100, opacity:0 }, {opacity: 1, y:0, duration: 2 })
  }
}

export function toggleMobileNav(isOpen: boolean) {
  console.log('isOpen', isOpen)
  const tl: GSAPTimeline = gsap.timeline();
  const links = document.querySelectorAll('#overlay > ul > li')
  console.log(links)
  if (isOpen === true) {
    tl.to([links, 'button'], { x: 1000,  stagger: {amount: .25, ease: 'power1.out'}})
    .to('#overlay', { xPercent: 100, ease: 'power1.out'})
  } else {
    tl.set([links, 'button'], { x: 1000 })
    tl.to('#overlay', { xPercent: -100, ease: 'power1.out'})
    .to([links, 'button'], { x: 0,  stagger: {amount: .25, ease: 'power1.out'}})
  }

}

  
export function introAnimation() {        
  const tl: GSAPTimeline = gsap.timeline();
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  .to('.top-nav',{ opacity: 1, })
  .from(['#logo', '.nav-right rect'], { opacity: 0, y: -100, duration: .25, stagger: {
    amount: 1,
    from: 'start',
    ease: 'ease'
    }
  })
  .to('.top-nav', { borderBottom: '1px solid #9FF279', duration: .5, onComplete: animateHero() })
}

export function fadeInTextBlock(selector: string) {   
  gsap.from(selector, { opacity:0, duration:2, ease:'power1.out', scrollTrigger: {
		trigger: selector,
		start: '25% 75%'
	}})
}
