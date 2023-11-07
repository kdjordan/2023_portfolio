import { gsap } from 'gsap';

export function animateNav() {        
  
  const tl: GSAPTimeline = gsap.timeline();
  
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  tl.to('.top-nav',{ opacity: 1, borderBottom: '1px solid #9FF279', duration: 2})
  tl.from(['#logo', 'li'],{ opacity: 0,y: -100,  duration: .25, stagger: {
    amount: 1,
    from: 'start',
    ease: 'ease'
  }})
  
}

export function animateHero() { 
  console.log(document.querySelector('.hero'))
  const hero: HTMLElement | null  = document.querySelector('.hero')
  
  const tl2: GSAPTimeline = gsap.timeline();
  tl2.to(hero, {opacity: 1, x:-1000})
  
}