"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Instagram, Facebook, Youtube, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    quemSomos: [
      { href: "/quem-somos/missao", label: "Missão e Objetivos" },
      { href: "/quem-somos/equipe", label: "Equipe e Parceiros" },
      { href: "/transparencia", label: "Transparência" },
    ],
    oQueFazemos: [
      { href: "/o-que-fazemos/programa-mura", label: "Programa Mura" },
      { href: "/o-que-fazemos/programa-satere", label: "Programa Sateré" },
    ],
    ondeAtuamos: [
      { href: "/onde-atuamos/areas", label: "Áreas de Atuação" },
      { href: "/onde-atuamos/comunidades", label: "Comunidades Indígenas" },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Social e Google Translate */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-[#DBE89C]">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/institutoindigenaiapoam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#044217] hover:text-[#62B67F] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/povosindigenasiapoam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#044217] hover:text-[#62B67F] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/iapoam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#044217] hover:text-[#62B67F] transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <div id="google_translate_element" className="text-sm"></div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo IAPOAM"
              width={160}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2]"
            >
              Home
            </Link>

            {/* Quem Somos Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("quemSomos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2] flex items-center gap-1">
                Quem Somos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "quemSomos" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[220px] border border-[#DBE89C]">
                  {dropdowns.quemSomos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#044217] hover:bg-[#E5EEE2] hover:text-[#62B67F] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* O Que Fazemos Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("oQueFazemos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2] flex items-center gap-1">
                O Que Fazemos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "oQueFazemos" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[220px] border border-[#DBE89C]">
                  {dropdowns.oQueFazemos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#044217] hover:bg-[#E5EEE2] hover:text-[#62B67F] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Onde Atuamos Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("ondeAtuamos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2] flex items-center gap-1">
                Onde Atuamos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "ondeAtuamos" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[220px] border border-[#DBE89C]">
                  {dropdowns.ondeAtuamos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#044217] hover:bg-[#E5EEE2] hover:text-[#62B67F] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/noticias"
              className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2]"
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2]"
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="px-4 py-2 text-[#044217] hover:text-[#62B67F] font-medium transition-colors rounded-lg hover:bg-[#E5EEE2]"
            >
              Ouvidoria
            </Link>

            <Link href="/doacoes" className="ml-4">
              <Button variant="primary">Doe Agora</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#044217] p-2 hover:bg-[#E5EEE2] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#DBE89C] shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Dropdowns */}
            <div className="space-y-1">
              <div className="font-semibold text-[#044217] px-4 py-2 text-sm">
                Quem Somos
              </div>
              {dropdowns.quemSomos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-semibold text-[#044217] px-4 py-2 text-sm">
                O Que Fazemos
              </div>
              {dropdowns.oQueFazemos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-semibold text-[#044217] px-4 py-2 text-sm">
                Onde Atuamos
              </div>
              {dropdowns.ondeAtuamos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/noticias"
              className="block py-3 px-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="block py-3 px-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="block py-3 px-4 text-[#044217] hover:bg-[#E5EEE2] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ouvidoria
            </Link>

            <div className="pt-4 flex gap-4 px-4">
              <a
                href="https://instagram.com/iapoam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#044217] hover:text-[#62B67F]"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/iapoam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#044217] hover:text-[#62B67F]"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/iapoam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#044217] hover:text-[#62B67F]"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            <Link href="/doacoes" className="block pt-4 px-4">
              <Button variant="primary" className="w-full">
                Doe Agora
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}