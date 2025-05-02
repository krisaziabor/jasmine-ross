"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function ColorBeautyPlus() {
  return (
    <PhotoSeries
      title="Beauty Plus"
      imageCount={11}
      basePath="/beauty-plus"
      imagePrefix="JR-BP-"
    />
  );
}