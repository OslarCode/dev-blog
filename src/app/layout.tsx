import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Blog",
  description:
    "Informando y educando a desarrolladores web sobre las últimas tendencias y tecnologías",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-gray-50">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
