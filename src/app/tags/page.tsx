// src/app/tags/page.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Simulamos algunas etiquetas para el ejemplo
const tags = [
  { id: 1, name: "React", count: 15 },
  { id: 2, name: "Next.js", count: 12 },
  { id: 3, name: "TypeScript", count: 10 },
  { id: 4, name: "JavaScript", count: 20 },
  { id: 5, name: "CSS", count: 8 },
  { id: 6, name: "HTML", count: 5 },
  { id: 7, name: "Node.js", count: 7 },
  { id: 8, name: "Express", count: 6 },
];

export default function TagsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Etiquetas</h1>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Link href={`/tags/${tag.id}`} key={tag.id}>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              {tag.name} <span className="ml-2 text-xs">({tag.count})</span>
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
