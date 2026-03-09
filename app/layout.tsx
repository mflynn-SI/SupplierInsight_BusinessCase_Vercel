import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SI Risk Intelligence - ELT Strategic Briefing",
  description: "A Strategic Growth Initiative for Source Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
