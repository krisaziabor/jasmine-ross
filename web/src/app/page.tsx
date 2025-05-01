import Image from "next/image";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <div className="min-h-screen px-8 md:px-12 lg:px-16 py-8 md:py-12 flex flex-col">
      {/* Header */}
      <header className="mb-12 md:mb-16 text-center">
        <h1 className="font-[family-name:var(--font-bold-caslon)] text-4xl md:text-5xl lg:text-6xl">
          JASMINE ROSS
        </h1>
      </header>

      {/* Two Column Layout with Adjusted Spacing */}
      <div className="flex-grow flex flex-col md:flex-row justify-center">
        <div className="flex justify-center w-full">
          {/* Content Container - Constrains width and centers columns */}
          <div className="flex flex-col md:flex-row max-w-4xl w-full justify-center">
            {/* Left Column - Menu (adjusted to match image height) */}
            <div className="md:w-1/3 lg:w-1/3 md:pr-6 lg:pr-8 mb-8 md:mb-0 flex items-stretch">
              <div className="flex flex-col justify-between w-full">
                <MainMenu />
                {/* Information Link */}
                <div className="mt-4">
                  <a
                    href="/information"
                    className="font-[family-name:var(--font-semibold-caslon)] hover:underline"
                  >
                    Information
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image (now sets height dynamically) */}
            <div className="md:w-2/3 lg:w-2/3 flex items-stretch justify-center">
              <Image
                src="/JRWalkingDiotima.jpg"
                alt="Featured work"
                width={535} 
                height={338} 
                className="object-contain h-full m-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}