// src/app/layout.tsx
import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dev Blog",
    template: "%s | Dev Blog",
  },
  description:
    "Informando y educando a desarrolladores web sobre las últimas tendencias y tecnologías",
  openGraph: {
    title: "Dev Blog",
    description:
      "Informando y educando a desarrolladores web sobre las últimas tendencias y tecnologías",
    url: "https://devblog.com",
    siteName: "Dev Blog",
    images: [
      {
        url: "https://devblog.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Blog",
    description:
      "Informando y educando a desarrolladores web sobre las últimas tendencias y tecnologías",
    images: ["https://devblog.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-white dark:bg-gray-900">
      <body
        className={`${inter.className} min-h-screen flex flex-col text-gray-800 dark:text-gray-200`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
