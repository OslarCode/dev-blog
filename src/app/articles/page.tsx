// src/app/articles/page.tsx
import React from "react";
import ArticleList from "@/components/articles/ArticleList";
import { getArticles } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artículos | Dev Blog",
  description: "Lista de todos los artículos en Dev Blog",
};

export default async function ArticlesPage() {
  const { articles, totalPages } = await getArticles(1, 10); // Obtiene la primera página con 10 artículos

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Artículos</h1>
      <ArticleList articles={articles} />
      {/* Aquí puedes añadir controles de paginación si lo deseas */}
    </div>
  );
}
