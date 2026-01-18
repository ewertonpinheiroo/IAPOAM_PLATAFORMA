"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Inclusão Social",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Defesa de Direitos",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      text: "Sustentabilidade",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradiente mais sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#044217]/95 via-[#044217]/85 to-[#044217]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#044217] via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#62B67F] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#DBE89C] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge
              variant="success"
              className="mb-6 bg-[#62B67F]/20 backdrop-blur-sm border border-[#62B67F]/30 text-white px-6 py-2 text-sm md:text-base"
            >
              Desde 2011 transformando vidas na Amazônia
            </Badge>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Apoio aos Povos
            <span className="block text-[#DBE89C] mt-2">Originários da Amazônia</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-[#E5EEE2] mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Promovemos inclusão, defesa de direitos e sustentabilidade para etnias indígenas e
            quilombolas através de ações concretas e transformadoras.
          </p>

          {/* Features Pills */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 text-white hover:bg-white/20 transition-all duration-300"
              >
                {feature.icon}
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/doacoes">
              <Button
                variant="primary"
                className="text-base md:text-lg px-8 py-4 bg-[#62B67F] hover:bg-[#62B67F]/90 shadow-2xl hover:shadow-[#62B67F]/50 group min-w-[200px]"
              >
                Doe Agora
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/quem-somos">
              <Button
                variant="outline"
                className="text-base md:text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#044217] shadow-lg min-w-[200px]"
              >
                Conheça Nosso Trabalho
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { number: "35+", label: "Etnias Atendidas" },
              { number: "253", label: "Comunidades" },
              { number: "29.506", label: "Indígenas em Manaus" },
              { number: "15+", label: "Anos de História" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#DBE89C] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Role para explorar</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          className="w-full h-24 fill-[#E5EEE2]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}