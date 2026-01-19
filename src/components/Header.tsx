"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown, Globe } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
          ? "bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">IA</span>
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
              IAPOAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              Início
            </Link>

            {/* Quem Somos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("quemSomos")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all flex items-center gap-1">
                Quem Somos
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === "quemSomos" && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 min-w-[200px] border border-gray-200 dark:border-gray-700">
                  {dropdowns.quemSomos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#044217] dark:hover:text-[#62B67F] transition-all"
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
              <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all flex items-center gap-1">
                O Que Fazemos
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === "oQueFazemos" && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 min-w-[200px] border border-gray-200 dark:border-gray-700">
                  {dropdowns.oQueFazemos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#044217] dark:hover:text-[#62B67F] transition-all"
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
              <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all flex items-center gap-1">
                Onde Atuamos
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === "ondeAtuamos" && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 min-w-[200px] border border-gray-200 dark:border-gray-700">
                  {dropdowns.ondeAtuamos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#044217] dark:hover:text-[#62B67F] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/noticias"
              className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#044217] dark:hover:text-[#62B67F] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              Atendimento
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language */}
            <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all hidden sm:block">
              <Globe className="w-5 h-5" />
            </button>

            {/* Donate Button */}
            <Link
              href="/doacoes"
              className="hidden lg:block px-4 py-2 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Doar
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
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
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>

            {/* Mobile Dropdowns */}
            <div className="space-y-1">
              <div className="font-semibold text-gray-900 dark:text-white px-4 py-2 text-xs uppercase tracking-wider">
                Quem Somos
              </div>
              {dropdowns.quemSomos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-semibold text-gray-900 dark:text-white px-4 py-2 text-xs uppercase tracking-wider">
                O Que Fazemos
              </div>
              {dropdowns.oQueFazemos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <div className="font-semibold text-gray-900 dark:text-white px-4 py-2 text-xs uppercase tracking-wider">
                Onde Atuamos
              </div>
              {dropdowns.ondeAtuamos.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 pl-8 pr-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/noticias"
              className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Notícias
            </Link>
            <Link
              href="/cultura"
              className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Cultura
            </Link>
            <Link
              href="/ouvidoria"
              className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Atendimento
            </Link>

            <Link
              href="/doacoes"
              className="block mt-4 mx-4 px-4 py-3 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white text-sm font-medium rounded-lg text-center"
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