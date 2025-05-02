"use client";

import { useMemo, useState } from "react";
import PageTransition from "./PageTransition";
import ImageCarousel from "./ImageCarousel";

interface PhotoSeriesProps {
  title: string;
  imageCount: number;
  basePath: string;
  imagePrefix: string;
  imageExtension?: string;
}

/**
 * Reusable component for photo series with a consistent layout
 * 
 * @param title - The title of the photo series
 * @param imageCount - Number of images in the series
 * @param basePath - Base path to the images folder
 * @param imagePrefix - Prefix for image filenames
 * @param imageExtension - File extension (default: 'jpg')
 */
export default function PhotoSeries({ 
  title, 
  imageCount, 
  basePath, 
  imagePrefix,
  imageExtension = 'jpg' 
}: PhotoSeriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Generate image paths for the series
  const images = useMemo(() => {
    return Array.from({ length: imageCount }, (_, i) => {
      const imageNumber = i + 1;
      const formattedNumber = imageNumber < 10 ? `0${imageNumber}` : `${imageNumber}`;
      return `${basePath}/${imagePrefix}${formattedNumber}.${imageExtension}`;
    });
  }, [imageCount, basePath, imagePrefix, imageExtension]);

  // Format the image number display
  const formatImageNumber = (index: number) => {
    return (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)] px-6 pb-8">
        {/* Photo gallery in the middle */}
        <div className="w-full max-w-3xl">
          <div className="relative w-full aspect-[3/4] max-h-[calc(100vh-260px)]">
            <ImageCarousel 
              images={images} 
              className="image-gallery"
              onImageChange={setCurrentIndex}
            />
          </div>
        </div>

        {/* Title at the bottom with current image number */}
        <div className="flex items-center mt-12">
          <h2 className="font-[family-name:var(--font-caslon)] text-base">
            {title}
          </h2>
          <div className="mx-2 h-3 w-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm font-[family-name:var(--font-caslon)]">
            {formatImageNumber(currentIndex)}
          </span>
        </div>
      </div>
    </PageTransition>
  );
}