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

      // Skill bars timeline
      const skillBarsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: skillBarsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Parent panel animation
      skillBarsTimeline.fromTo(
        skillBarsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );

      // Bars fill animation (in)
      skillBarsTimeline.fromTo(
        skillBarsRef.current?.querySelectorAll('.skill-bar-fill'),
        { width: 0 },
        {
          width: (i, el) => el.getAttribute('data-width'),
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.05
        },
        "<" // after parent
      );

      // Bars fill animation (out, on reverse) - now synced with parent exit
      skillBarsTimeline.to(
        skillBarsRef.current?.querySelectorAll('.skill-bar-fill'),
        {
          width: 0,
          duration: 0.5,
          ease: "power2.in"
        },
        "<" // at the same time as parent animates out
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