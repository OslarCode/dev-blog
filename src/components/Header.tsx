import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Dev Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Button variant="link" asChild>
              <Link href="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/articles">Artículos</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/categories">Categorías</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/tags">Etiquetas</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/about">Acerca de</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/contact">Contacto</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
