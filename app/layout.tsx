import type { Metadata } from "next";
import InteractiveCursor from "@/components/InteractiveCursor";
import "./globals.css";

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
    <html lang="en">
      <body>
        <InteractiveCursor />
        {children}
      </body>
    </html>
  );
}