import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BINU AI",
  description: "숏폼 속 빈 공간, 브랜드 가치로 채우다",
  openGraph: {
    title: "BINU AI",
    description: "숏폼 속 빈 공간, 브랜드 가치로 채우다",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BINU AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BINU AI",
    description: "숏폼 속 빈 공간, 브랜드 가치로 채우다",
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
