import React from "react";
import ArticleCard from "@/components/ArticleCard";

// Simulamos algunos artículos para el ejemplo
const articles = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    excerpt: "Aprende cómo los Hooks pueden simplificar tu código en React...",
    date: "2023-09-15",
    readTime: "5 min",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Optimización de rendimiento en Next.js",
    excerpt:
      "Descubre técnicas avanzadas para mejorar la velocidad de tu aplicación Next.js...",
    date: "2023-09-10",
    readTime: "7 min",
    tags: ["Next.js", "Performance"],
  },
  {
    id: 3,
    title: "TypeScript: Tips y trucos",
    excerpt: "Mejora tu productividad con estos consejos de TypeScript...",
    date: "2023-09-05",
    readTime: "6 min",
    tags: ["TypeScript", "JavaScript"],
  },
  // Agrega más artículos aquí
];

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Artículos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
