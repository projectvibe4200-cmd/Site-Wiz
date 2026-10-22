import type { Metadata } from "next";
import InteractiveCursor from "@/components/InteractiveCursor";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Site-Wiz — Professional Websites for $100/month",
  description:
    "Professional website design, development, hosting, maintenance and support for $100/month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <InteractiveCursor />
        {children}
      </body>
    </html>
  );
}