"use client";

import PageTransition from "@/components/PageTransition";
import ImageCarousel from "@/components/ImageCarousel";
import { useMemo, useState } from "react";

export default function ColorBeautyPlus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Generate image paths for all Beauty Plus images
  const images = useMemo(() => {
    return Array.from({ length: 11 }, (_, i) => {
      const imageNumber = i + 1;
      const formattedNumber = imageNumber < 10 ? `0${imageNumber}` : `${imageNumber}`;
      return `/beauty-plus/JR-BP-${formattedNumber}.jpg`;
    });
  }, []);

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
            Beauty Plus
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