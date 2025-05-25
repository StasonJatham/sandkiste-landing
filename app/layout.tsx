import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandkiste.io - F*ck Phishing",
  description:
    "Coming soon - We're building something awesome to help you stay safe from phishing attacks.",
  keywords: ["phishing", "security", "cybersecurity", "sandbox", "coming soon"],
  icons: {
    icon: '/shovel.png',
  },
  openGraph: {
    title: "Sandkiste.io - F*ck Phishing",
    description: "Coming soon - Stay safe from phishing attacks.",
    url: "https://sandkiste.io",
    type: "website",
    images: [
      {
        url: "https://sandkiste.io/social.png",
        width: 1200,
        height: 630,
        alt: "Sandkiste.io Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandkiste.io - F*ck Phishing",
    description: "Coming soon - Stay safe from phishing attacks.",
    images: ["https://sandkiste.io/social.png"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overscroll-none bg-background"
    >
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="sandkiste-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
