"use client";

import PhotoSeries from "@/components/PhotoSeries";

export default function BWFilm35mm() {
  return (
    <PhotoSeries
      title="35mm"
      imageCount={6} // Update with actual count when images are available
      basePath="/35mm"
      imagePrefix="JR-35-0"
    />
  );
}