import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "CCF Lab - Cancer Signalling & Therapeutic Discovery",
    template: "%s | CCF Lab",
  },
  description:
    "The CCF Lab at IMCB A*STAR and NUS investigates cancer signalling pathways, p53 biology, and therapeutic strategies for cancer treatment.",
  openGraph: {
    title: "CCF Lab - Cancer Signalling & Therapeutic Discovery",
    description:
      "The CCF Lab at NUS Pathology and IMCB A*STAR investigates cancer signalling pathways, p53 biology, and therapeutic strategies for cancer treatment.",
    url: "https://cheokchitfanglab.com",
    siteName: "CCF Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CCF Lab",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCF Lab - Cancer Signalling & Therapeutic Discovery",
    description:
      "The CCF Lab at NUS Pathology and IMCB A*STAR investigates cancer signalling pathways, p53 biology, and therapeutic strategies for cancer treatment.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
