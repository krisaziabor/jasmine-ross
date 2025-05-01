"use client";

import Link from 'next/link';
import PageTransition from "@/components/PageTransition";

export default function AquiAPesarDeLasIguanas() {
  return (
    <PageTransition>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link 
            href="/writing/photojournalism" 
            className="font-[family-name:var(--font-social)] text-sm hover:underline mb-4 inline-block"
          >
            ← Back to Photojournalism
          </Link>
          <h1 className="text-3xl font-[family-name:var(--font-bold-right-grotesk)] mb-2">
            Aquí, a pesar de las iguanas (2025)
          </h1>
          <div className="text-gray-600 font-[family-name:var(--font-social)]">
            <p>Published in 2025</p>
          </div>
        </header>
        
        <div className="prose prose-lg font-[family-name:var(--font-social)]">
          {/* Article content will go here */}
          <p>
            This is a placeholder for the article content. The actual content will be added later.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </article>
    </PageTransition>
  );
}