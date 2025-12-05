import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * Custom hook for common GSAP animations
 */
export const usePageAnimation = () => {
  useGSAP(() => {
    // Fade in animation for page elements
    gsap.fromTo(
      "[data-animate='fade-in']",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
    );

    // Hero text animation
    gsap.fromTo(
      "[data-animate='hero']",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  });
};

/**
 * Specific hook for hero section animations
 */
export const useHeroAnimation = (ref) => {
  useGSAP(() => {
    if (ref?.current) {
      gsap.fromTo(
        "h1, h2, h3",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1 },
        { scope: ref.current }
      );
    }
  }, { scope: ref });
};