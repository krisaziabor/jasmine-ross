"use client";

import PageTransition from "@/components/PageTransition";

export default function ColorOtherWorks() {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold mb-6">Other Color Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Photo gallery will go here */}
          <p className="text-gray-500 col-span-full">Content coming soon</p>
        </div>
      </div>
    </PageTransition>
  );
}