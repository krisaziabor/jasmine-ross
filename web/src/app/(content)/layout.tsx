"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInformationPage = pathname === '/information';
  
  // For information page, don't render the layout header as the page has a fixed position
  if (isInformationPage) {
    return <>{children}</>;
  }
  
  return (
    <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8 md:py-12">
      <header className="mb-12 md:mb-16 text-center">
        <Link href="/">
          <h1 className="font-[family-name:var(--font-bold-caslon)] hover:font-[family-name:var(--font-bold-italic-caslon)] text-4xl md:text-5xl lg:text-6xl transition-all cursor-pointer">
            JASMINE ROSS
          </h1>
        </Link>
      </header>
      
      <main>{children}</main>
    </div>
  );
}