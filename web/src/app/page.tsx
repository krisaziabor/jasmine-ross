"use client";

import Image from "next/image";
import MainMenu from "@/components/MainMenu";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8 md:py-12 flex flex-col">

            {/* Header */}
      <header className="mb-12 md:mb-16 text-center">
        <Link href="/">
          <h1 className="font-[family-name:var(--font-bold-caslon)] hover:font-[family-name:var(--font-bold-italic-caslon)] text-4xl md:text-5xl lg:text-6xl transition-all cursor-pointer">
            JASMINE ROSS
          </h1>
        </Link>
      </header>

      {/* Two Column Layout with Adjusted Spacing */}
      <div className="flex-grow flex flex-col md:flex-row justify-center">
        <div className="flex justify-center w-full h-full">
          {/* Content Container - Constrains width and centers columns */}
          <div className="flex flex-col md:flex-row max-w-4xl w-full justify-center h-full">
            
            {/* Mobile Image (only shown on mobile) */}
            <div className="md:hidden flex items-stretch justify-center h-[calc(100vh-300px)] w-full mb-10 mt-2">
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src="/JRLanding2.jpg"
                  alt="Featured work"
                  fill={true}
                  sizes="100vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
            
            {/* Left Column - Menu (matched to image container height) */}
            <div className="md:w-1/3 lg:w-1/3 md:pr-6 lg:pr-8 mb-8 md:mb-0 flex items-stretch h-auto md:h-[calc(100vh-250px)]">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex-grow">
                  <MainMenu className="h-full" />
                </div>
                {/* Information Link */}
                <div className="mt-4">
                  <Link
                    href="/information"
                    className="font-[family-name:var(--font-semibold-caslon)] hover:font-[family-name:var(--font-semibold-italic-caslon)]"
                  >
                    Information
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Image (only shown on desktop) */}
            <div className="hidden md:flex md:w-2/3 lg:w-2/3 items-stretch justify-center h-[calc(100vh-250px)]">
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src="/JRLanding2.jpg"
                  alt="Featured work"
                  fill={true}
                  sizes="66vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}