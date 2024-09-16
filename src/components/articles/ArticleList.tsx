// src/components/ArticleList.tsx
import React from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "@/types/Article";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          title={article.title}
          slug={article.slug}
          excerpt={article.excerpt}
          date={article.date}
          readTime={article.readTime}
          tags={article.tags}
        />
      ))}
    </div>
  );
};

export default ArticleList;
