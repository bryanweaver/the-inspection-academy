import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
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
  title: "The Inspection Academy | Texas Home Inspector Training",
  description: "Pass your Texas home inspector exam on the first try. TREC-approved courses with proven Adult Learning Theory. Get licensed faster with our comprehensive training program.",
  keywords: ["Texas home inspector training", "TREC approved courses", "home inspector licensing", "Texas inspector exam prep"],
  openGraph: {
    title: "The Inspection Academy | Texas Home Inspector Training",
    description: "Pass your Texas home inspector exam on the first try. TREC-approved courses with proven Adult Learning Theory.",
    type: "website",
    locale: "en_US",
    siteName: "The Inspection Academy",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
