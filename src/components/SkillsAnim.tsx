// src/components/SkillsAnim.tsx
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsAnim() {
  useEffect(() => {
    gsap.from('.skill-icon', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%', // déclenche quand la section atteint 80% de la hauteur du viewport
        toggleActions: 'play none none none',
        markers: true, // tu peux mettre false ou retirer ensuite
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  return null; // pas besoin de rendu
}
