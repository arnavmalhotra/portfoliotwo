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
  title: "Arnav Malhotra - Software Engineering Student",
  description: "Software Engineering student at York University passionate about full-stack development, AI/ML, and building impactful solutions.",
  keywords: ["Arnav Malhotra", "Software Engineer", "York University", "Full Stack Developer", "AI/ML", "Toronto"],
  authors: [{ name: "Arnav Malhotra" }],
  creator: "Arnav Malhotra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arnavmalhotra.com",
    siteName: "Arnav Malhotra Portfolio",
    title: "Arnav Malhotra - Software Engineering Student",
    description: "Software Engineering student at York University passionate about full-stack development, AI/ML, and building impactful solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Malhotra - Software Engineering Student",
    description: "Software Engineering student at York University passionate about full-stack development, AI/ML, and building impactful solutions.",
  },
  robots: {
    index: true,
    follow: true,
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
