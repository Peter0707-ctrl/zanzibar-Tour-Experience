import { useState, useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0,
  } = options;

  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !isRevealed)) {
          if (delay > 0) {
            setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, once, delay, isRevealed]);

  return { ref, isRevealed };
};
