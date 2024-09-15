import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simulamos algunos artículos para el ejemplo
const articles = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    excerpt: "Aprende cómo los Hooks pueden simplificar tu código en React...",
  },
  {
    id: 2,
    title: "Optimización de rendimiento en Next.js",
    excerpt:
      "Descubre técnicas avanzadas para mejorar la velocidad de tu aplicación Next.js...",
  },
  {
    id: 3,
    title: "TypeScript: Tips y trucos",
    excerpt: "Mejora tu productividad con estos consejos de TypeScript...",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Últimos artículos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/articles/${article.id}`}>Leer más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild>
          <Link href="/articles">Ver todos los artículos</Link>
        </Button>
      </div>
    </div>
  );
}
