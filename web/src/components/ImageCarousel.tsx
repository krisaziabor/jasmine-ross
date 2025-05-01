'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  width: number;
  height: number;
  className?: string;
}

export default function ImageCarousel({ images, width, height, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLeftSide, setIsLeftSide] = useState(false);
  const [actualImageDimensions, setActualImageDimensions] = useState({ width, height });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const totalImages = images.length;

  // Effect to detect actual rendered image dimensions
  useEffect(() => {
    if (imageRef.current) {
      const updateActualDimensions = () => {
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          
          // Only update if dimensions have changed significantly
          if (Math.abs(rect.width - actualImageDimensions.width) > 5 || 
              Math.abs(rect.height - actualImageDimensions.height) > 5) {
            setActualImageDimensions({
              width: rect.width,
              height: rect.height
            });
          }
        }
      };

      // Initial check
      updateActualDimensions();
      
      // Check on window resize
      window.addEventListener('resize', updateActualDimensions);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', updateActualDimensions);
      };
    }
  }, [currentIndex, actualImageDimensions.width, actualImageDimensions.height]);

  // Format a page number with leading zero if needed
  const formatPageNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  // Get the previous, current, and next page numbers (1-based)
  const currentPage = currentIndex + 1;
  const prevPage = currentIndex;
  const nextPage = currentIndex + 2;
  
  // Format page numbers for display
  const formattedCurrentPage = formatPageNumber(currentPage);
  const formattedTotalPages = formatPageNumber(totalImages);
  const formattedPrevPage = formatPageNumber(prevPage);
  const formattedNextPage = formatPageNumber(nextPage);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
      
      // Determine if mouse is on left or right side of the actual visible image
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
    if (isLeftSide) {
      if (!isPreviousDisabled) goToPrevious();
    } else {
      if (!isNextDisabled) goToNext();
    }
  };

  // Determine appropriate cursor style
  const getCursorStyle = () => {
    if (!isHovering) return 'cursor-default';
    
    if (isLeftSide) {
      return isPreviousDisabled ? 'cursor-not-allowed' : 'cursor-pointer';
    } else {
      return isNextDisabled ? 'cursor-not-allowed' : 'cursor-pointer';
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      if (!isPreviousDisabled) goToPrevious();
    } else if (e.key === 'ArrowRight') {
      if (!isNextDisabled) goToNext();
    }
  };

  // Get the cursor text based on the side and disabled state
  const getCursorText = () => {
    if (isLeftSide) {
      if (isPreviousDisabled) {
        // Left side, disabled (first image)
        return `< ${formattedCurrentPage}/${formattedTotalPages}`;
      } else {
        // Left side, enabled (show previous image number)
        return `< ${formattedPrevPage}/${formattedTotalPages}`;
      }
    } else {
      if (isNextDisabled) {
        // Right side, disabled (last image)
        return `> ${formattedCurrentPage}/${formattedTotalPages}`;
      } else {
        // Right side, enabled (show next image number)
        return `> ${formattedNextPage}/${formattedTotalPages}`;
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`image-carousel-container relative ${className} ${getCursorStyle()} select-none`}
      style={{ 
        // Set explicit dimensions to match the expected image size
        width: `${width}px`, 
        height: `${height}px`,
        // Use grid to center the image while maintaining the full container size
        display: 'grid',
        placeItems: 'center'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center image-fade ${index === currentIndex ? 'active' : ''}`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <div className="relative">
              <Image
                ref={index === currentIndex ? imageRef : undefined}
                src={image}
                alt={`Image ${index + 1}`}
                width={width}
                height={height}
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom Cursor Overlay */}
      {isHovering && (
        <div 
          className="absolute pointer-events-none z-10 flex items-center font-[family-name:var(--font-medium-right-grotesk)] text-xs bg-white bg-opacity-75 px-2 py-1 rounded"
          style={{ 
            left: `${mousePosition.x + 20}px`, 
            top: `${mousePosition.y}px`,
            opacity: isLeftSide 
              ? (isPreviousDisabled ? 0.5 : 1) 
              : (isNextDisabled ? 0.5 : 1)
          }}
        >
          <span>{getCursorText()}</span>
        </div>
      )}

      {/* Invisible half-width click areas that extend to full container */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute top-0 right-0 w-1/2 h-full z-0"
        aria-hidden="true"
      />
    </div>
  );
}