import React from 'react';
import Link from 'next/link';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="mb-12">
        <div className="flex items-center mb-8">
          <Link href="/" className="text-xl font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="mt-20 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Jasmine Ross. All rights reserved.</p>
      </footer>
    </div>
  );
}