// src/components/ArticleCard.tsx
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface ArticleCardProps {
  title: string;
  slug: string; // Usar slug en lugar de id
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  isExpanded?: boolean; // Opcional
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug, // Usar slug en lugar de id
  excerpt,
  date,
  readTime,
  tags,
  isExpanded = false, // Valor predeterminado
}) => {
  return (
    <Card
      className={`hover:shadow-lg transition-shadow duration-300 ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <CardHeader>
        <Link
          href={`/articles/${slug}`} // Cambiar la ruta para usar el slug
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
        >
          {title}
        </Link>
        <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
          <span className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
