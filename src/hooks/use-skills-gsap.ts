import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSkillsGsapAnimations(activeTab: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabChipsRef = useRef<HTMLDivElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Helper to animate skill bars after parent
  const animateSkillBars = () => {
    const skillBars = skillBarsRef.current?.querySelectorAll('.skill-bar-fill');
    skillBars?.forEach((bar, index) => {
      const targetWidth = bar.getAttribute('data-width');
      gsap.to(bar, {
        width: targetWidth,
        duration: 1,
        ease: "power2.out",
        delay: 0.05 * index
      });
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Tabs panel (left) animation
      gsap.fromTo(
        tabsRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skill bars panel (right) animation, then trigger bar fill
      gsap.fromTo(
        skillBarsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillBarsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: animateSkillBars,
            onEnterBack: animateSkillBars
          }
        }
      );

      // UI Libraries badges
      gsap.fromTo(
        ".ui-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".ui-libraries-section",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Animate tech tags in the active tab when tab changes
  useEffect(() => {
    const activeTabContent = cardsRef.current?.querySelector(
      '[data-state="active"]'
    ) as HTMLElement | null;
    const techTags = activeTabContent?.querySelectorAll('.tech-tag');
    if (techTags && techTags.length > 0) {
      gsap.fromTo(
        techTags,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [activeTab]);


  return {
    sectionRef,
    headerRef,
    tabsRef,
    tabChipsRef,
    skillBarsRef,
    cardsRef
  };
} 