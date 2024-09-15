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
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <Link
          href={`/articles/${id}`}
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
      <CardFooter>
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
