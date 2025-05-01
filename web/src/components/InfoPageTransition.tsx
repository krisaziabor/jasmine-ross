"use client";

import { ReactNode, useEffect, useState } from "react";

interface InfoPageTransitionProps {
  children: ReactNode;
}

export default function InfoPageTransition({ children }: InfoPageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay before showing content to ensure CSS transition works
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all duration-[1000ms] ease-in-out w-full h-full ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
}