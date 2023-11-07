import { gsap } from 'gsap';

function animateHero(): () => void { 
  return () => {
    gsap.fromTo ('#hero', { y:-100, opacity:0 }, {opacity: 1, y:0, duration: 2, onComplete: animateBackground()})
  }
}

function animateBackground(): () => void  {
  return () => {
    gsap.set('body', {css: {className: 'dots'}, })
  }
}
  

export function introAnimation() {        
  const tl: GSAPTimeline = gsap.timeline();
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  .to('.top-nav',{ opacity: 1, })
  .from(['#logo', 'li'], { opacity: 0, y: -100, duration: .25, stagger: {
    amount: 1,
    from: 'start',
    ease: 'ease'
    }
  })
  .to('.top-nav', { borderBottom: '1px solid #9FF279', duration: .5, onComplete: animateHero() })
}



