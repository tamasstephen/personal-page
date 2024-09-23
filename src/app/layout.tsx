import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Navigation } from "./components";

export const metadata: Metadata = {
  title: "Tamás Stephen Frontend Developer",
  description:
    "Tamás Stephen is a frontend developer specializing in React, Next.js, and TypeScript. Explore his portfolio.",
  verification: {
    google: "z-bM2fxskfZrgX9Wh4_E5W6oWyf-ZAlcQPSWXgN4Res",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body
        className={`${inter.className} antialiased has-[.open-menu]:overflow-hidden h-full flex flex-col`}
      >
        <div
          id="skip"
          className="absolute top-[-999px] left-[-999px] has-[:focus]:left-10 has-[:focus]:top-10 transition-all duration-300 bg-black p-2 z-50 rounded-md"
        >
          <a className="text-white" href="#about">
            Skip Content
          </a>
        </div>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
