"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/articles", label: "Artículos" },
    { href: "/categories", label: "Categorías" },
    { href: "/tags", label: "Etiquetas" },
    { href: "/about", label: "Acerca de" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Dev Blog
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button key={item.href} variant="link" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
