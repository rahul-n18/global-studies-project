import './style.css';

document.addEventListener("DOMContentLoaded", (event) => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Hero Parallax Effect
  gsap.to(".hero-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Reveal Elements Setup
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // trigger when top of element hits 85% of viewport
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate Bar Charts Width
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar) => {
    const width = bar.style.getPropertyValue('--w');
    gsap.to(bar, {
      width: width,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".chart-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Numbers count-up Effect (Simulated for stats)
  const statsNum = document.querySelectorAll('.stat h3, .l-stat h3');
  
  // Custom Parallax on images if needed
  gsap.utils.toArray('.section').forEach((section, i) => {
    // If it has a background image we could parallax it
    if(section.classList.contains('network') || section.classList.contains('microplastics')) {
      gsap.to(section, {
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", 
          end: "bottom top",
          scrub: true
        }
      });
    }
  });
});
