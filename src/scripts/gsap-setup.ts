export function initGSAP() {
  if (typeof window === 'undefined') return;

  import('gsap').then(({ gsap }) => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // ===== Basic .reveal ─ fade + slide up =====
      document.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // ===== Stagger containers =====
      document.querySelectorAll('.reveal-stagger').forEach((container) => {
        const items = container.querySelectorAll(':scope > *');
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // ===== Work cards — subtle scale + opacity =====
      document.querySelectorAll('.work-card').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ===== Parallax on work card media =====
      document.querySelectorAll('.work-card__media').forEach((el) => {
        gsap.to(el, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
        });
      });

      // ===== Manifesto word-by-word =====
      const mt = document.getElementById('manifestoText');
      if (mt) {
        const words = mt.querySelectorAll('.word');
        ScrollTrigger.create({
          trigger: mt,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
          onUpdate: (self) => {
            const count = Math.floor(self.progress * words.length);
            words.forEach((w, i) => {
              if (i <= count) w.classList.add('in');
              else w.classList.remove('in');
            });
          }
        });
      }

      // ===== Refresh on load & after lazy images load =====
      window.addEventListener('load', () => ScrollTrigger.refresh());
      setTimeout(() => ScrollTrigger.refresh(), 1500);
      setTimeout(() => ScrollTrigger.refresh(), 3500);

      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        (img as HTMLImageElement).addEventListener('load', () => ScrollTrigger.refresh());
      });
    });
  });
}
