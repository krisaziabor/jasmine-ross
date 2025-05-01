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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLeftSide, setIsLeftSide] = useState(false);
  const [isRubberbanding, setIsRubberbanding] = useState(false);
  const [rubberOffset, setRubberOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const totalImages = images.length;

  // Format a page number with leading zero if needed
  const formatPageNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

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
      // Trigger rubberbanding effect for first image
      setIsRubberbanding(true);
      setRubberOffset(20);
      
      setTimeout(() => {
        setRubberOffset(0);
        setTimeout(() => {
          setIsRubberbanding(false);
        }, 300);
      }, 200);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Trigger rubberbanding effect for last image
      setIsRubberbanding(true);
      setRubberOffset(-20);
      
      setTimeout(() => {
        setRubberOffset(0);
        setTimeout(() => {
          setIsRubberbanding(false);
        }, 300);
      }, 200);
    }
  };

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === images.length - 1;

  // Handle mouse movement to track position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      // Determine if mouse is on left or right side
      const isLeft = x < rect.width / 2;
      setIsLeftSide(isLeft);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    // Always apply the effect regardless of whether we're at the edge
    if (isLeftSide) {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Always apply the effect regardless of whether we're at the edge
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Get the cursor text based on the side and disabled state
  const getCursorText = () => {
    const formattedCurrentPage = formatPageNumber(currentIndex + 1);
    const formattedTotalPages = formatPageNumber(totalImages);
    
    if (isLeftSide) {
      if (isPreviousDisabled) {
        // Show current page but visually indicate we're at the beginning
        return `${formattedCurrentPage}/${formattedTotalPages}`;
      } else {
        // Show previous page number
        return `${formatPageNumber(currentIndex)}/${formattedTotalPages}`;
      }
    } else {
      if (isNextDisabled) {
        // Show current page but visually indicate we're at the end
        return `${formattedCurrentPage}/${formattedTotalPages}`;
      } else {
        // Show next page number
        return `${formatPageNumber(currentIndex + 2)}/${formattedTotalPages}`;
      }
    }
  };
  
  // Determine if the cursor should appear disabled
  const isCursorDisabled = (isLeftSide && isPreviousDisabled) || (!isLeftSide && isNextDisabled);

  // Generate a unique class name if none provided
  const uniqueClassName = className || `image-carousel-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div 
      ref={containerRef}
      className={`relative ${uniqueClassName} select-none`}
      style={{ 
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Image Container with rubberbanding effect */}
      <div 
        ref={imageContainerRef}
        className="w-full h-full flex items-center justify-center transition-transform"
        style={{ 
          transform: isRubberbanding ? `translateX(${rubberOffset}px)` : 'translateX(0)',
          transitionDuration: isRubberbanding ? '300ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
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

      {/* Custom Cursor Overlay */}
      {isHovering && (
        <div 
          className="absolute pointer-events-none z-50 flex items-center justify-center font-[family-name:var(--font-caslon)] text-base"
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '25px'
          }}
        >
          <span 
            className={`bg-white px-2.5 py-1 rounded-full transition-opacity ${isCursorDisabled ? 'opacity-40' : 'opacity-90'}`}
          >
            {getCursorText()}
          </span>
        </div>
      )}

      {/* Custom cursor styles - only within this container */}
      <style jsx>{`
        /* Only hide cursor within this specific component */
        .${uniqueClassName} {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}