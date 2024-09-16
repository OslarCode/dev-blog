// src/app/api/articles/route.ts
import { NextResponse } from "next/server";
import { getArticles } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const { articles, totalPages } = await getArticles(page, pageSize);

  return NextResponse.json({ articles, totalPages });
}
