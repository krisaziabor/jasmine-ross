"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function ColorBeautyPlus() {
  return (
    <PhotoSeries
      title="Beauty Plus"
      imageCount={12}
      basePath="/beauty-plus"
      imagePrefix="JR-BP-0"
    />
  );
}