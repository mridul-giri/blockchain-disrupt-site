// src/lib/animation.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in animations for sections
    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Stagger animations for lists
    gsap.utils.toArray(".stagger-list").forEach((list) => {
      const items = list.querySelectorAll(".stagger-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: list,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Parallax effect
    gsap.utils.toArray(".parallax-section").forEach((section) => {
      const depth = section.dataset.depth || 0.2;

      gsap.to(section, {
        y: () => ScrollTrigger.maxScroll(window) * depth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
  }
}

// Component-specific animations
export function animateCounter(element, targetValue, duration = 2) {
  let startValue = 0;
  const increment = targetValue / (duration * 60); // 60fps

  const updateCounter = () => {
    startValue += increment;
    if (startValue < targetValue) {
      element.textContent = Math.ceil(startValue);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = targetValue;
    }
  };

  updateCounter();
}

// Text typing animation
export function typeText(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}
