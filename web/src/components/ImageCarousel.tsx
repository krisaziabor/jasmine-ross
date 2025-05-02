'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  width?: number;
  height?: number;
  className?: string;
  onImageChange?: (index: number) => void;
}

export default function ImageCarousel({ 
  images, 
  className = '',
  onImageChange
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);




  // Add effect to notify parent of index changes
  useEffect(() => {
    if (onImageChange) {
      onImageChange(currentIndex);
    }
  }, [currentIndex, onImageChange]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Go to the last image
      setCurrentIndex(images.length - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Go back to the first image
      setCurrentIndex(0);
    }
  };


  // Handle click based on screen side
  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      
      // Determine if click is on left or right side
      const isLeft = x < rect.width / 2;
      
      if (isLeft) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };


  // Generate a unique class name if none provided
  const uniqueClassName = className || `image-carousel-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div 
      ref={containerRef}
      className={`relative ${uniqueClassName} select-none cursor-move`}
      style={{ 
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden'
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Image Container */}
      <div 
        ref={imageContainerRef}
        className="w-full h-full flex items-center justify-center transition-transform"
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center image-fade ${index === currentIndex ? 'active' : ''}`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              priority={index === 0}
              sizes="(max-width: 1200px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>


      {/* Custom cursor styles - only within this container */}
      <style jsx>{`
        /* Set cursor to move within this component */
        .${uniqueClassName} {
          cursor: move !important;
          cursor: pointer !important;
        }
        
        .${uniqueClassName}:active {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  );
}