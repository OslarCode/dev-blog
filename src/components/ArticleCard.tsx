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
import { CalendarIcon, ClockIcon } from "lucide-react";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  tags,
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
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
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`/articles/${id}`}>Leer más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
