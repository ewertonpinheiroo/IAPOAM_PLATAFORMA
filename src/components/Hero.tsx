"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "35+", label: "Etnias" },
    { number: "253", label: "Comunidades" },
    { number: "29.506", label: "Indígenas" },
    { number: "2011", label: "Fundação" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#044217] via-[#055a1f] to-[#044217] pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#044217]/60 via-[#055a1f]/50 to-[#044217]/70"></div>
      </div>

      {/* Grafismo Indígena - Esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 z-0 opacity-20">
        <Image
          src="/images/grafismo.png"
          alt="Grafismo Indígena"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Grafismo Indígena - Direita */}
      <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 z-0 opacity-20 scale-x-[-1]">
        <Image
          src="/images/grafismo.png"
          alt="Grafismo Indígena"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Overlay com padrão de grafismo sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(98,182,127,0.03)_48%,rgba(98,182,127,0.03)_52%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo - MAIOR */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="flex justify-center mb-12">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-[#62B67F]/30 to-[#62B67F]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm"></div>
                <Image
                  src="/images/logo_hero.png"
                  alt="IAPOAM - Instituto de Apoio aos Povos Originários da Amazônia"
                  width={288}
                  height={288}
                  className="relative rounded-full shadow-2xl hover:scale-105 transition-transform duration-500 ring-4 ring-white/20"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-lg">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full mr-2 animate-pulse shadow-lg shadow-[#62B67F]/50"></div>
              <span className="text-sm font-semibold text-white tracking-wide">
                Resistência • Cultura • Direitos • Sustentabilidade • Ancestralidade
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-white drop-shadow-lg">Instituto de Apoio aos</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62B67F] via-[#7FD99F] to-[#62B67F] drop-shadow-2xl animate-gradient">
              Povos Originários
            </span>
            <br />
            <span className="text-white drop-shadow-lg">da Amazônia</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 drop-shadow-md ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Promovemos cidadania, defesa de direitos, cultura e sustentabilidade para povos indígenas 
            e comunidades quilombolas. Atuando desde 2011 com transparência, comprometimento 
            e respeito aos povos originários da Amazônia.
          </p>

          {/* CTA Button - ÚNICO */}
          <div
            className={`flex justify-center items-center mb-16 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/doacoes"
              className="group px-10 py-5 bg-white text-[#044217] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Faça Sua Doação e Transforme Vidas
              <svg
                className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#62B67F] hover:bg-white/15 hover:shadow-xl hover:shadow-[#62B67F]/20 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80 font-semibold tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Informações Adicionais */}
          <div
            className={`mt-12 transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
              Liderada pela cacique <span className="text-white/90 font-semibold">Kamila Silva Prestes</span>, 
              da etnia Mura, nossa missão é fortalecer a cultura indígena, garantir direitos fundamentais 
              e promover desenvolvimento sustentável nas comunidades originárias do Amazonas.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1400 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-bold uppercase tracking-wider drop-shadow">Explorar</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce shadow-lg"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}