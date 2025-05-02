"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function ColorOtherWorks() {
  return (
    <PhotoSeries
      title="Other Works"
      imageCount={13} // Update with actual count when images are available
      basePath="/other-works"
      imagePrefix="JR-OW-"
    />
  );
}