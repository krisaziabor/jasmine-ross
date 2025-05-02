'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // We only care about the first entry, which is the div we're observing
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Once we've seen this element, we don't need to observe it anymore
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className="fade-in-section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 20}px)`,
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}