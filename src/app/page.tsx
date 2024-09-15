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
  {
    id: 2,
    title: "Optimización de rendimiento en Next.js",
    excerpt:
      "Descubre técnicas avanzadas para mejorar la velocidad y la eficiencia de tu aplicación Next.js, desde la optimización de imágenes hasta la carga incremental.",
    date: "2023-09-10",
    readTime: "7 min",
    tags: ["Next.js", "Performance"],
  },
  {
    id: 3,
    title: "TypeScript: Tips y trucos",
    excerpt:
      "Mejora tu productividad con estos consejos de TypeScript que te ayudarán a escribir código más seguro y mantenible en tus proyectos.",
    date: "2023-09-05",
    readTime: "6 min",
    tags: ["TypeScript", "JavaScript"],
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Dev Blog</h1>
        <p className="text-xl mb-8">
          Explora las últimas tendencias y tecnologías en desarrollo web
        </p>
        <Button asChild>
          <Link href="/articles">Explorar artículos</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Artículos recientes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/articles">Ver todos los artículos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
