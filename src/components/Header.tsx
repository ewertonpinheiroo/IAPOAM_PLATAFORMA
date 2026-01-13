// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Transparência", href: "/transparencia" },
    { label: "Contato", href: "#footer" },
  ];

  return (
    <header className="bg-[#06100F] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.png" alt="IAPOAM Logo" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-[#A8A88A] hover:text-[#86886A]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/doacoes">
          <Button variant="primary">Fazer Doação</Button>
        </Link>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1A221E] px-4 py-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="block py-2 text-[#A8A88A] hover:text-[#86886A]" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/doacoes" className="block py-2">
            <Button variant="primary" className="w-full">Fazer Doação</Button>
          </Link>
        </div>
      )}
    </header>
  );
}