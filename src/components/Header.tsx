"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/iapoam",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/iapoam",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@iapoam",
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-2xl"
          : "bg-white/95 backdrop-blur-xl shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Aumentado e sem texto */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/images/logo.png"
                alt="IAPOAM - Instituto de Apoio aos Povos Originários da Amazônia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
            >
              Início
            </Link>

            {/* Quem Somos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("quemSomos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all flex items-center gap-1">
                Quem Somos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "quemSomos" && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-gray-200">
                  {dropdowns.quemSomos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* O Que Fazemos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("oQueFazemos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all flex items-center gap-1">
                O Que Fazemos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "oQueFazemos" && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-gray-200">
                  {dropdowns.oQueFazemos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Onde Atuamos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("ondeAtuamos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all flex items-center gap-1">
                Onde Atuamos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "ondeAtuamos" && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-gray-200">
                  {dropdowns.ondeAtuamos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/noticias"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
            >
              Atendimento
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Social Media Links - Desktop - Espaçamento aumentado */}
            <div className="hidden lg:flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-600 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Donate Button */}
            <Link
              href="/doacoes"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white text-sm font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Doar
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>

            {/* Mobile Dropdowns */}
            <div className="space-y-1">
              <div className="font-bold text-gray-900 px-4 py-2 text-xs uppercase tracking-wider">
                Quem Somos
              </div>
              {dropdowns.quemSomos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-bold text-gray-900 px-4 py-2 text-xs uppercase tracking-wider">
                O Que Fazemos
              </div>
              {dropdowns.oQueFazemos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-bold text-gray-900 px-4 py-2 text-xs uppercase tracking-wider">
                Onde Atuamos
              </div>
              {dropdowns.ondeAtuamos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-8 pr-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/noticias"
              className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#044217] rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Atendimento
            </Link>

            {/* Social Media Links - Mobile - Espaçamento aumentado */}
            <div className="flex items-center justify-center gap-6 py-6 border-t border-gray-200 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-[#044217] hover:bg-gray-50 rounded-lg transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <Link
              href="/doacoes"
              className="block mt-4 mx-4 px-6 py-4 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white text-sm font-bold rounded-lg text-center shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              Doar Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 