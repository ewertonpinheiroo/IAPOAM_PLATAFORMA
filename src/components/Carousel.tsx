"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/projects/maloca.jpeg", alt: "Projeto Maloca - IAPOAM" },
  { src: "/images/projects/digital.jpeg", alt: "Inclusão Digital - IAPOAM" },
  { src: "/images/projects/cuiam.jpg", alt: "Projeto Cuiam - IAPOAM" },
  { src: "/images/projects/cidadania.jpg", alt: "Cidadania - IAPOAM" },
  { src: "/images/hero-bg.png", alt: "Projeto IAPOAM" },
];

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#E5EEE2] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#044217] mb-4">
            Nossas Ações e Projetos
          </h2>
          <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-[#044217]/70 max-w-2xl mx-auto">
            Conheça os projetos que transformam vidas e preservam culturas na Amazônia
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#044217]/5">
            <div className="relative aspect-[16/9]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#044217]/40 to-transparent"></div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#044217] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#62B67F]"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#044217] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#62B67F]"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-[#044217]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {current + 1} / {images.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#62B67F] ${
                  index === current
                    ? "w-12 h-3 bg-[#044217]"
                    : "w-3 h-3 bg-[#044217]/30 hover:bg-[#044217]/50"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails - Desktop Only */}
          <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#62B67F] ${
                  index === current
                    ? "ring-4 ring-[#044217] scale-105 shadow-lg"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === current ? "bg-transparent" : "bg-[#044217]/20"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-[#044217]/60 hover:text-[#044217] transition-colors"
          >
            {isAutoPlaying ? "⏸ Pausar" : "▶ Reproduzir"} apresentação automática
          </button>
        </div>
      </div>
    </section>
  );
}