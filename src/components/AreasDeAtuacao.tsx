"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Users, 
  Palette, 
  Leaf, 
  Home, 
  Heart, 
  HandHeart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const areas = [
  { 
    title: "Cidadania e Inclusão", 
    description: "Ações de cidadania e inclusão digital através de doação de computadores, capacitação tecnológica e acesso a serviços essenciais.",
    icon: <Users className="w-8 h-8" />,
    color: "from-[#044217] to-[#044217]/80",
    highlights: [
      "Doação de equipamentos",
      "Capacitação digital",
      "Acesso a direitos básicos"
    ]
  },
  { 
    title: "Cultura Indígena", 
    description: "Preservação e promoção de tradições culturais ancestrais, fortalecendo a identidade dos povos originários.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-[#62B67F] to-[#62B67F]/80",
    highlights: [
      "Preservação de tradições",
      "Eventos culturais",
      "Valorização da língua"
    ]
  },
  { 
    title: "Meio Ambiente e Sustentabilidade", 
    description: "Projetos de proteção ambiental na Amazônia com foco em desenvolvimento sustentável e conservação.",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-[#044217] to-[#044217]/80",
    highlights: [
      "Reflorestamento",
      "Educação ambiental",
      "Desenvolvimento sustentável"
    ]
  },
  { 
    title: "Habitação", 
    description: "Apoio a moradias dignas em comunidades indígenas, garantindo condições adequadas de vida.",
    icon: <Home className="w-8 h-8" />,
    color: "from-[#62B67F] to-[#62B67F]/80",
    highlights: [
      "Reforma de moradias",
      "Infraestrutura básica",
      "Saneamento"
    ]
  },
  { 
    title: "Saúde Indígena", 
    description: "Assistência médica e prevenção em etnias, com atenção especial à saúde tradicional e moderna.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-[#044217] to-[#044217]/80",
    highlights: [
      "Atendimento médico",
      "Medicina preventiva",
      "Saúde materno-infantil"
    ]
  },
  { 
    title: "Assistência Social", 
    description: "Atendimento a famílias vulneráveis com programas de apoio integral e fortalecimento comunitário.",
    icon: <HandHeart className="w-8 h-8" />,
    color: "from-[#62B67F] to-[#62B67F]/80",
    highlights: [
      "Apoio emergencial",
      "Segurança alimentar",
      "Fortalecimento familiar"
    ]
  },
];

export function AreasDeAtuacao() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="areas" className="py-24 bg-gradient-to-b from-white to-[#E5EEE2] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#044217] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#62B67F] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            Nossas Frentes de Trabalho
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#044217] mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#044217]/70 max-w-3xl mx-auto">
            Atuamos de forma integrada em seis áreas fundamentais para promover o bem-estar e a autonomia dos povos originários
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Card 
                className={`h-full bg-white border-2 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'border-[#62B67F] shadow-2xl scale-105' 
                    : 'border-[#DBE89C] hover:border-[#62B67F]/50'
                }`}
              >
                {/* Icon Header */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${area.color} text-white p-5 rounded-2xl inline-flex shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                    {area.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#044217] mb-3 group-hover:text-[#62B67F] transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-[#044217]/70 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {area.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#62B67F] flex-shrink-0 mt-0.5" />
                      <span className="text-[#044217]/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <button 
                  className={`flex items-center gap-2 font-semibold transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'text-[#62B67F]'
                      : 'text-[#044217]/60 hover:text-[#62B67F]'
                  }`}
                >
                  Saiba mais
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-1' : ''
                  }`} />
                </button>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${area.color} opacity-5 rounded-bl-full transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-10' : ''
                }`}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#044217] to-[#044217]/90 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#62B67F]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DBE89C]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Faça Parte Dessa Transformação
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Sua contribuição fortalece nossas ações e amplia o impacto positivo nas comunidades que atendemos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#62B67F] hover:bg-[#62B67F]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Apoie Nossos Projetos
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  Seja Voluntário
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "6", label: "Áreas de Atuação" },
            { number: "35+", label: "Etnias Atendidas" },
            { number: "253", label: "Comunidades" },
            { number: "15+", label: "Anos de Experiência" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#DBE89C]"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#044217] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-[#044217]/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}