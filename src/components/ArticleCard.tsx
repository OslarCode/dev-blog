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
  id: number;
  title: string;
  excerpt: string;
  content: string; // Nuevo: Contenido completo del artículo
  date: string;
  readTime: string;
  tags: string[];
  isExpanded: boolean; // Nuevo: Estado de expansión
  onToggle: () => void; // Nuevo: Función para alternar expansión
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  content,
  date,
  readTime,
  tags,
  isExpanded,
  onToggle,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <Link
          href={`/articles/${title}`}
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
        <p className="text-gray-600">{isExpanded ? content : excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <button
          onClick={onToggle}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 text-sm"
        >
          {isExpanded ? "Mostrar menos" : "Leer más"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
