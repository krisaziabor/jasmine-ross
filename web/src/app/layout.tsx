import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


const rightgroteskbold = localFont({
  src: "../../fonts/PPRightGrotesk-Bold.woff2",
  variable: "--font-bold-right-grotesk",
  weight: "700",
});

const rightgroteskmedium = localFont({
  src: "../../fonts/PPRightGrotesk-Medium.woff2",
  variable: "--font-medium-right-grotesk",
  weight: "500",
});

const rightgrotesklight = localFont({
  src: "../../fonts/PPRightGrotesk-Light.woff2",
  variable: "--font-light-right-grotesk",
  weight: "300",
});

const caslon = localFont({
  src: "../../fonts/ACaslonPro-Regular.woff2",
  variable: "--font-caslon",
  weight: "400",
});

const caslonbold = localFont({
  src: "../../fonts/ACaslonPro-Bold.woff2",
  variable: "--font-bold-caslon",
  weight: "700",
});

const caslonitalic = localFont({
  src: "../../fonts/ACaslonPro-Italic.woff2",
  variable: "--font-italic-caslon",
  weight: "400",
  style: "italic",
});

const caslonbolditalic = localFont({
  src: "../../fonts/ACaslonPro-BoldItalic.woff2",
  variable: "--font-bold-italic-caslon",
  weight: "700",
  style: "italic",
});

const caslonsemibold = localFont({
  src: "../../fonts/ACaslonPro-Semibold.woff2",
  variable: "--font-semibold-caslon",
  weight: "600",
});

const caslonsemibolditalic = localFont({
  src: "../../fonts/ACaslonPro-SemiboldItalic.woff2",
  variable: "--font-semibold-italic-caslon",
  weight: "600",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jasminerross.com'),
  title: "Jasmine Ross",
  description:
    "Oakland-based photography graduate from Yale.",
  icons: {
    icon: "jr-icon.ico",
    apple: "/JRLanding2.jpg",
  },

  // This is where you can add your Open Graph details:
  openGraph: {
    title: "Jasmine Ross",
    description:
    "Oakland-based photography graduate from Yale.",
    url: "https://jasminerross.com",
    siteName: "Jasmine Ross",
    images: [
      {
        url: "/JRLanding2.jpg",
        width: 630,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // And here are Twitter-specific tags (many platforms also read them):
  twitter: {
    card: "summary_large_image",
    title: "Jasmine Ross",
    description:
      "Oakland-based photography graduate from Yale.",
    images: ["/JRLanding2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={`${caslon.variable} ${caslonbold.variable} ${caslonbolditalic.variable} ${caslonsemibold.variable} ${caslonsemibolditalic.variable} ${caslonitalic.variable} ${rightgroteskbold.variable} ${rightgroteskmedium.variable} ${rightgrotesklight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}