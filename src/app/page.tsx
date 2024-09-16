import React from "react";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";

// Simulamos algunos artículos para el ejemplo
const articles = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    excerpt:
      "Aprende cómo los Hooks pueden simplificar tu código en React y mejorar la reutilización de lógica en tus componentes.",
    date: "2023-09-15",
    readTime: "5 min",
    tags: ["React", "JavaScript"],
  },
  // ... (otros artículos)
];

export default function Home() {
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
        <div className="space-y-12">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              readTime={article.readTime}
              tags={article.tags}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/articles">Ver todos los artículos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
