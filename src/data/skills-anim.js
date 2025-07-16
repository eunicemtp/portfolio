// public/js/skills-anim.js
console.log('Script GSAP chargé');
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  gsap.from('.skill-icon', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%',
      toggleActions: 'play none none none',
      markers: true, // ← pour tester et visualiser quand ça se déclenche (supprime-le ensuite)
    },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
  });
});
