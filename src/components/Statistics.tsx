"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  Calendar,
  Award,
  Heart,
  Target,
  Sparkles
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { 
    number: "35+", 
    label: "Etnias Atendidas",
    icon: <Users className="w-6 h-6" />,
    description: "Diversidade cultural preservada",
    color: "from-[#044217] to-[#044217]/80"
  },
  { 
    number: "253", 
    label: "Comunidades",
    icon: <MapPin className="w-6 h-6" />,
    description: "Alcance em toda região amazônica",
    color: "from-[#62B67F] to-[#62B67F]/80"
  },
  { 
    number: "29.506", 
    label: "Indígenas em Manaus",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "População assistida na capital",
    color: "from-[#044217] to-[#044217]/80"
  },
  { 
    number: "2011", 
    label: "Fundação",
    icon: <Calendar className="w-6 h-6" />,
    description: "15+ anos transformando vidas",
    color: "from-[#62B67F] to-[#62B67F]/80"
  },
];

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Reconhecimento Oficial",
    description: "Utilidade Pública Municipal e Estadual",
    color: "bg-[#044217]"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Impacto Social",
    description: "Milhares de vidas transformadas",
    color: "bg-[#62B67F]"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Projetos Ativos",
    description: "Múltiplas frentes de atuação simultâneas",
    color: "bg-[#044217]"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Transparência Total",
    description: "Prestação de contas pública e regular",
    color: "bg-[#62B67F]"
  },
];

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      const targetNumber = stat.number.includes('+') 
        ? parseInt(stat.number.replace('+', ''))
        : stat.number.includes('.')
        ? parseInt(stat.number.replace(/\./g, ''))
        : parseInt(stat.number);

      let current = 0;
      const increment = targetNumber / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          current = targetNumber;
          clearInterval(timer);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, interval);
    });
  };

  const formatNumber = (num: number, original: string) => {
    if (original.includes('.')) {
      return num.toLocaleString('pt-BR');
    }
    return num.toString() + (original.includes('+') ? '+' : '');
  };

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#E5EEE2] to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#044217] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#62B67F] rounded-full blur-3xl"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#044217 1px, transparent 1px), linear-gradient(90deg, #044217 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            Nosso Impacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#044217] mb-4">
            Números de Impacto
          </h2>
          <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#044217]/70 max-w-3xl mx-auto">
            Mais de uma década dedicada à transformação social e preservação cultural dos povos originários da Amazônia
          </p>
        </div>

        {/* Main Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="h-full bg-white border-2 border-[#DBE89C] hover:border-[#62B67F] group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-[#044217] mb-2 group-hover:text-[#62B67F] transition-colors duration-500">
                  {isVisible ? formatNumber(counts[index], stat.number) : '0'}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-[#044217]/80 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-[#044217]/60">
                  {stat.description}
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#DBE89C]/20 to-transparent rounded-tl-full"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#044217] mb-3">
              Nossos Diferenciais
            </h3>
            <p className="text-[#044217]/70 max-w-2xl mx-auto">
              Compromisso com excelência e transparência em todas as nossas ações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#DBE89C] hover:border-[#62B67F] group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.color} text-white rounded-2xl mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-[#044217] mb-2 group-hover:text-[#62B67F] transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-sm text-[#044217]/70">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#044217] via-[#044217]/95 to-[#044217] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#62B67F]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DBE89C]/20 rounded-full blur-3xl"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>

            <div className="relative z-10 text-center text-white">
              <Badge variant="success" className="mb-4 bg-[#62B67F]/30 backdrop-blur-sm border border-[#62B67F]/50">
                Certificação de Utilidade Pública
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Transparência e Compromisso com a Comunidade
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto">
                Reconhecidos oficialmente pelos municípios e estados onde atuamos, mantemos nossos relatórios e prestações de contas sempre atualizados e acessíveis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
                  <span>CNPJ: 13.955.659/0001-43</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#DBE89C] rounded-full"></div>
                  <span>Fundado em 15/02/2011</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
                  <span>Apartidário e Não Religioso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}