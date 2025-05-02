"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function ColorOtherWorks() {
  return (
    <PhotoSeries
      title="Other Works"
      imageCount={11} // Update with actual count when images are available
      basePath="/other-works"
      imagePrefix="JR-OW-"
    />
  );
}