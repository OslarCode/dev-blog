import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simulamos algunas categorías para el ejemplo
const categories = [
  { id: 1, name: "Frontend", count: 15 },
  { id: 2, name: "Backend", count: 12 },
  { id: 3, name: "DevOps", count: 8 },
  { id: 4, name: "Diseño UI/UX", count: 10 },
  { id: 5, name: "Bases de Datos", count: 7 },
  { id: 6, name: "Seguridad Web", count: 5 },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Categorías</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{category.count} artículos</p>
              <Link
                href={`/categories/${category.id}`}
                className="text-blue-600 hover:underline"
              >
                Ver artículos
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
