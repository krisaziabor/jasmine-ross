"use client";

import { useMemo, useState, Children, isValidElement } from "react";
import PageTransition from "./PageTransition";
import ImageCarousel from "./ImageCarousel";
import FadeInSection from "./FadeInSection";

interface WritingWithPhotosProps {
  title: string;
  imageCount: number;
  basePath: string;
  imagePrefix: string;
  imageExtension?: string;
  captions?: string[];
  children: React.ReactNode;
}

/**
 * Component for writing pieces with photos displayed in a carousel
 * Text on the left, images on the right
 * 
 * @param title - The title of the piece
 * @param imageCount - Number of images in the series
 * @param basePath - Base path to the images folder
 * @param imagePrefix - Prefix for image filenames
 * @param imageExtension - File extension (default: 'jpg')
 * @param captions - Optional array of captions for each image
 * @param children - The text content to display
 */
export default function WritingWithPhotos({ 
  imageCount, 
  basePath, 
  imagePrefix,
  imageExtension = 'jpg',
  captions = [],
  children
}: WritingWithPhotosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Generate image paths for the series
  const images = useMemo(() => {
    return Array.from({ length: imageCount }, (_, i) => {
      const imageNumber = i + 1;
      const formattedNumber = imageNumber < 10 ? `0${imageNumber}` : `${imageNumber}`;
      return `${basePath}/${imagePrefix}${formattedNumber}.${imageExtension}`;
    });
  }, [imageCount, basePath, imagePrefix, imageExtension]);

  // Wrap each child element with FadeInSection
  const wrapChildrenWithFade = (children: React.ReactNode) => {
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        // For div/h1/p elements, wrap them in FadeInSection
        return (
          <FadeInSection delay={index * 100}>
            {child}
          </FadeInSection>
        );
      }
      return child;
    });
  };

  // Extract the first 3 children (title and intro) and the rest
  const childrenArray = Children.toArray(children);
  const headerContent = childrenArray.slice(0, 3); // Publication date, title, subtitle
  const mainContent = childrenArray.slice(3);      // The main text content
  
  // Format the image number display
  const formatImageNumber = (index: number) => {
    return (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-20 pb-2 sm:pb-4 gap-5 sm:gap-6 overflow-y-auto scrollbar-hide">
        {/* Header content at the top */}
        <div className="prose prose-lg max-w-5xl mx-auto w-full pt-5 sm:pt-6">
          {wrapChildrenWithFade(headerContent)}
        </div>
        
        {/* Photo gallery in the middle */}
        <div className="w-full sm:w-11/12 md:w-4/5 max-w-5xl mx-auto my-2 sm:my-4 aspect-[4/3] relative">
          <div className="w-full h-full">
            <ImageCarousel 
              images={images} 
              className="image-gallery"
              onImageChange={setCurrentIndex}
            />
          </div>
          
          {/* Image counter and caption */}
          <div className="flex items-center mt-2 sm:mt-3">
            <span className="text-gray-500 text-sm font-[family-name:var(--font-caslon)]">
              {formatImageNumber(currentIndex)}
            </span>
            <div className="mx-2 h-3 w-px bg-gray-300"></div>
            {captions && captions[currentIndex] && (
              <p className="font-[family-name:var(--font-caslon)] text-sm sm:text-base text-gray-700">
                {captions[currentIndex]}
              </p>
            )}
          </div>
        </div>
        
        {/* Remaining content with greyed-out and fade effect - only on desktop */}
        <div className="prose prose-lg max-w-5xl mx-auto w-full md:opacity-70 md:hover:opacity-100 md:transition-opacity md:duration-300 md:text-fade pb-4">
          {wrapChildrenWithFade(mainContent)}
        </div>
      </div>
    </PageTransition>
  );
}


