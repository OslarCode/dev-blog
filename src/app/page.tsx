// src/app/page.tsx
import React from "react";
import Link from "next/link";
import ArticleList from "@/components/articles/ArticleList";
import { getArticles } from "@/lib/api";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const { articles } = await getArticles(1, 3); // Obtiene los 3 artículos más recientes

  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Dev Blog</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          Explora las últimas tendencias y tecnologías en desarrollo web
        </p>
        <Button asChild size="lg">
          <Link href="/articles">Explorar artículos</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Artículos recientes</h2>
        <ArticleList articles={articles} />
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/articles">Ver todos los artículos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
