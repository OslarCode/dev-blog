// src/lib/api.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "@/types/article";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export async function getArticles(
  page = 1,
  pageSize = 10
): Promise<{ articles: Article[]; totalPages: number }> {
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename): Article => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readTime: data.readTime,
      tags: data.tags,
      content,
    };
  });

  // Ordenar artículos por fecha, del más reciente al más antiguo
  articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(articles.length / pageSize);
  const paginatedArticles = articles.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return {
    articles: paginatedArticles,
    totalPages,
  };
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readTime: data.readTime,
    tags: data.tags,
    content,
  };
}
