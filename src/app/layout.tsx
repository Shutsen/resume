import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Geert Van Campenhout | Full Stack TypeScript Developer",
  description: "Full Stack TypeScript Developer specializing in React, Next.js, and AI automation. Co-founder of Kaimeleon and Global Pet Sitter. Based in Luxembourg.",
  keywords: ["TypeScript", "React", "Next.js", "Full Stack Developer", "AI", "Luxembourg", "Freelance"],
  authors: [{ name: "Geert Van Campenhout" }],
  openGraph: {
    title: "Geert Van Campenhout | Full Stack TypeScript Developer",
    description: "Full Stack TypeScript Developer specializing in React, Next.js, and AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
