import { gsap } from 'gsap';

function animateHero(): () => void { 
  return () => {
    console.log(document.querySelector('#hero'))
    const hero: HTMLElement | null  = document.querySelector('#hero')
    
    const tl2: GSAPTimeline = gsap.timeline();
    tl2.set(hero, { y:-100 })
    tl2.to(hero, { opacity: 1, y:0, duration: 2})
  }

}
  

export function animateNav() {        
  const tl: GSAPTimeline = gsap.timeline();
  
  tl.set('.top-nav',{ opacity: 0, borderBottom: 'none' })
  .to('.top-nav',{ opacity: 1, })
  .from(['#logo', 'li'], { opacity: 0, y: -100, duration: .25, stagger: {
    amount: 1,
    from: 'start',
    ease: 'ease'
  }
})
.to('.top-nav',{ borderBottom: '1px solid #9FF279', duration: 2, onComplete: animateHero() } )
}



