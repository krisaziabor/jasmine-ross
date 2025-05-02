"use client";

import Link from "next/link";
import InfoPageTransition from "@/components/InfoPageTransition";

export default function Information() {
  return (
    <div className="fixed inset-0 w-full h-full z-10 overflow-y-auto bg-black">
      <InfoPageTransition>
        <div className="w-full min-h-full overflow-y-auto flex flex-col bg-black text-white px-8 md:px-12 lg:px-16 py-8 md:py-12">
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
            <div className="flex justify-center w-full min-h-full">
              {/* Content Container - Constrains width and centers columns */}
              <div className="flex flex-col md:flex-row max-w-4xl w-full justify-center pb-8 md:h-full">
                {/* Left Column - Contact Information */}
                <div className="md:w-1/3 lg:w-1/3 md:pr-6 lg:pr-8 mb-8 md:mb-0 flex items-stretch h-auto md:h-[calc(100vh-250px)] order-2 md:order-1">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="space-y-8 flex-grow overflow-y-auto pr-2">
                      {/* CONTACT Section */}
                      <div className="menu-category">
                        <h2 className="font-[family-name:var(--font-medium-right-grotesk)] text-lg mb-2">
                          CONTACT
                        </h2>
                        <div className="space-y-4">
                          {/* Email */}
                          <div>
                            <h3 className="font-[family-name:var(--font-medium-right-grotesk)] text-xs mb-1">
                              EMAIL
                            </h3>
                            <a
                              href="mailto:jasmine.ross@yale.edu"
                              className="font-[family-name:var(--font-caslon)] text-sm hover:font-[family-name:var(--font-italic-caslon)]"
                            >
                              jasmine.ross@yale.edu
                            </a>
                          </div>

                          {/* Instagram */}
                          <div>
                            <h3 className="font-[family-name:var(--font-medium-right-grotesk)] text-xs mb-1">
                              INSTAGRAM
                            </h3>
                            <a
                              href="https://instagram.com/jassyrennee"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-[family-name:var(--font-caslon)] text-sm hover:font-[family-name:var(--font-italic-caslon)]"
                            >
                              @jassyrennee
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* EDUCATION Section */}
                      <div className="menu-category">
                        <h2 className="font-[family-name:var(--font-medium-right-grotesk)] text-lg mb-2">
                          EDUCATION
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-[family-name:var(--font-medium-right-grotesk)] text-xs mb-2">
                              YALE UNIVERSITY
                            </h3>
                            <div className="font-[family-name:var(--font-caslon)] text-sm mb-1">
                              B.A. in Art (Photography)
                            </div>
                            <div className="font-[family-name:var(--font-caslon)] text-sm">
                              B.A. in Ethics, Politics, and Economics
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Re-enter Gallery Link - Desktop only */}
                    <div className="mt-4 hidden md:block">
                      <Link
                        href="/"
                        className="font-[family-name:var(--font-semibold-caslon)] hover:font-[family-name:var(--font-semibold-italic-caslon)]"
                      >
                        Re-enter gallery
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Column - Artist Statement */}
                <div className="md:w-2/3 lg:w-2/3 flex items-stretch h-auto md:h-[calc(100vh-250px)] order-1 md:order-2 mb-12 md:mb-0">
                  <div className="font-[family-name:var(--font-caslon)] space-y-6 flex flex-col w-full">
                    {/* <h2 className="font-[family-name:var(--font-medium-right-grotesk)] text-lg mb-3">
                  ARTIST STATEMENT
                </h2> */}
                    <p>
                      Jasmine Ross is an Oakland-based photographer whose
                      practice centers on both fashion and documentary
                      portraiture.
                    </p>
                    <p>
                      She is currently graduating in May from Yale University
                      with a BA in Ethics, Politics, and Economics and Art. 
                    </p>
                    <p>
                    For
                      further information about print details and purchases,
                      please contact her via email.
                    </p>
                  </div>
                </div>

                {/* Mobile Re-enter Gallery Link (bottom position) */}
                <div className="md:hidden w-full mt-10 order-3">
                  <Link
                    href="/"
                    className="font-[family-name:var(--font-semibold-caslon)] hover:font-[family-name:var(--font-semibold-italic-caslon)]"
                  >
                    Re-enter gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoPageTransition>
    </div>
  );
}
