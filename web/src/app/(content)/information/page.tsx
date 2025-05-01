import Link from 'next/link';

export default function Information() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-12">
        <Link 
          href="/" 
          className="font-[family-name:var(--font-social)] text-sm hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-[family-name:var(--font-bold-right-grotesk)] mb-6">
          Information
        </h1>
      </header>
      
      <div className="font-[family-name:var(--font-social)] space-y-6">
        <p>
          This page contains information about Jasmine Ross and will be populated with content about the artist, contact details, and other relevant information.
        </p>
        
        <p>
          For any inquiries, please check back later when this section is complete.
        </p>
      </div>
    </div>
  );
}