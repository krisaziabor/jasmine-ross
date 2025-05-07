"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function BWFilm4x5() {
  return (
    <PhotoSeries
      title="4x5"
      imageCount={3} // Update with actual count when images are available
      basePath="/4by5"
      imagePrefix="JR45-"
    />
  );
}
