import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(current);
    return () => observer.unobserve(current);
  }, [threshold]);

  return { ref, isVisible };
}
