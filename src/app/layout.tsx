import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theinspectionacademy.com'),
  title: "The Inspection Academy | Texas Home Inspector Training",
  description: "Pass your Texas home inspector exam on the first try. TREC-approved courses with proven Adult Learning Theory. Get licensed faster with our comprehensive training program.",
  keywords: ["Texas home inspector training", "TREC approved courses", "home inspector licensing", "Texas inspector exam prep"],
  openGraph: {
    title: "The Inspection Academy | Texas Home Inspector Training",
    description: "Pass your Texas home inspector exam on the first try. TREC-approved courses with proven Adult Learning Theory.",
    type: "website",
    locale: "en_US",
    siteName: "The Inspection Academy",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Inspection Academy - Texas Home Inspector Training',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
