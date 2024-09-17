// src/components/articles/MarkdownRendered.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={tomorrow}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img({ src, alt }) {
          return (
            <Image
              src={src || ""}
              alt={alt || ""}
              width={600}
              height={400}
              className="rounded-lg my-4"
            />
          );
        },
        // Puedes añadir más componentes personalizados aquí
        // Por ejemplo, para renderizar badges:
        p({ children }) {
          if (typeof children === "string" && children.startsWith("badge:")) {
            const badgeText = children.slice(6).trim();
            return <Badge>{badgeText}</Badge>;
          }
          return <p>{children}</p>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
