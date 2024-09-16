// src/app/articles/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Función para obtener el contenido del artículo desde un archivo Markdown usando el slug
async function getArticleBySlug(slug: string) {
  const filePath = path.join("src/content/articles", `${slug}.md`);
  console.log(`File path: ${filePath}`); // Debugging

  if (!fs.existsSync(filePath)) {
    throw new Error(`No se encontró el archivo para el slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  console.log(`File contents: ${fileContents}`); // Debugging
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    data,
    contentHtml,
  };
}

// Predefinir las rutas estáticas
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content/articles"));

  return files.map((filename) => {
    const filePath = path.join("src/content/articles", filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    if (!data.slug) {
      throw new Error(`No se encontró el slug en el archivo ${filename}`);
    }

    return {
      slug: data.slug, // Usar el slug del frontmatter
    };
  });
}

// Generar metadata dinámica
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  return {
    title: article.data.title,
    description: article.data.excerpt,
  };
}

// Página que renderiza el artículo dinámico
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.data.title}</h1>
      <div className="text-sm text-gray-500">
        {article.data.date} • {article.data.readTime}
      </div>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
    </div>
  );
}
