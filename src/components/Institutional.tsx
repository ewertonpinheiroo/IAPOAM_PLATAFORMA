"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heart, Users, Award, Target } from "lucide-react";

export function Institutional() {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Missão",
      description: "Promover dignidade e direitos",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "35+ Etnias",
      description: "Atendidas em toda região",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Reconhecimento",
      description: "Utilidade Pública Municipal e Estadual",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Desde 2011",
      description: "Transformando vidas",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            Quem Somos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#044217] mb-4">
            Sobre o IAPOAM
          </h2>
          <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#044217]/70 max-w-3xl mx-auto">
            Uma organização dedicada à defesa dos direitos, inclusão social e preservação cultural
            dos povos indígenas e quilombolas da Amazônia
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#E5EEE2] to-[#DBE89C] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full text-[#044217] mb-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#044217] mb-1">{item.title}</h3>
              <p className="text-sm text-[#044217]/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Quem Somos Card */}
          <Card className="bg-gradient-to-br from-white to-[#E5EEE2] border-l-4 border-l-[#044217]">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#044217] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#044217] mb-2">Quem Somos</h3>
                <Badge variant="info" className="text-xs">
                  CNPJ: 13.955.659/0001-43
                </Badge>
              </div>
            </div>
            <p className="text-[#044217]/80 leading-relaxed mb-4">
              O Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM) é uma organização
              apartidária e não religiosa fundada em 15 de fevereiro de 2011.
            </p>
            <p className="text-[#044217]/80 leading-relaxed">
              Liderada pela Cacique Kamila Silva Prestes (etnia Mura), atuamos na defesa dos
              direitos, inclusão social e preservação cultural dos povos indígenas e quilombolas,
              promovendo dignidade e autonomia em suas comunidades.
            </p>
          </Card>

          {/* Nossa Fundadora Card */}
          <Card className="bg-gradient-to-br from-white to-[#DBE89C]/30 border-l-4 border-l-[#62B67F]">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#62B67F] rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#044217] mb-2">Nossa Fundadora</h3>
                <Badge variant="success" className="text-xs">
                  Cacique da Etnia Mura
                </Badge>
              </div>
            </div>
            <p className="text-[#044217]/80 leading-relaxed mb-4">
              Kamila Silva Prestes, cacique da etnia Mura, fundou o IAPOAM com o objetivo de
              promover a inclusão digital, assistência social e preservação cultural das
              comunidades originárias.
            </p>
            <p className="text-[#044217]/80 leading-relaxed">
              Sua liderança visionária e dedicação incansável inspiram ações transformadoras em
              toda a região amazônica, fortalecendo as tradições e defendendo os direitos dos povos
              originários.
            </p>
          </Card>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-[#044217] to-[#044217]/90 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-[#DBE89C] font-medium">Anos de Atuação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">253</div>
              <div className="text-[#DBE89C] font-medium">Comunidades Atendidas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-[#DBE89C] font-medium">Compromisso e Transparência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}