"use client";

import { useState } from "react";

const impactAreas = [
  {
    title: "Proteção Territorial",
    description: "Defesa dos direitos e terras dos povos originários",
    metric: "253",
    label: "Comunidades"
  },
  {
    title: "Preservação Ambiental",
    description: "Floresta em pé e sustentabilidade na Amazônia",
    metric: "15+",
    label: "Anos"
  },
  {
    title: "Fortalecimento Cultural",
    description: "Valorização dos saberes tradicionais indígenas",
    metric: "35+",
    label: "Etnias"
  }
];

const timeline = [
  { year: "2011", event: "Fundação do IAPOAM" },
  { year: "15+", event: "Anos de Atuação" },
  { year: "35+", event: "Etnias Atendidas" },
  { year: "253", event: "Comunidades Alcançadas" }
];

export default function Statistics() {
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#62B67F] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nosso Impacto
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compromisso com a Amazônia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mais de uma década dedicada à defesa dos direitos dos povos originários e à preservação da floresta amazônica
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
                {item.year}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {item.event}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Áreas de Impacto
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredArea(index)}
                onMouseLeave={() => setHoveredArea(null)}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#62B67F]/5 to-[#044217]/5 dark:from-[#62B67F]/10 dark:to-[#044217]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
                      {area.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {area.label}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#044217] dark:group-hover:text-[#62B67F] transition-colors duration-300">
                    {area.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Quem Somos
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  O <span className="font-semibold text-gray-900 dark:text-white">Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM)</span> é uma organização <span className="font-semibold">apartidária e não religiosa</span>, fundada em 15 de fevereiro de 2011, dedicada à defesa dos direitos dos povos originários e à preservação da floresta amazônica.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#62B67F]/10 to-[#044217]/10 dark:from-[#62B67F]/5 dark:to-[#044217]/5 rounded-2xl p-6 lg:p-8 border border-[#62B67F]/20 dark:border-[#62B67F]/30">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-6 h-6 text-[#044217] dark:text-[#62B67F] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Nossa Missão</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Desenvolvemos projetos e ações em parceria com comunidades, instituições e organizações, promovendo o <span className="font-semibold text-gray-900 dark:text-white">fortalecimento sociocultural</span>, a <span className="font-semibold text-gray-900 dark:text-white">proteção territorial</span>, a <span className="font-semibold text-gray-900 dark:text-white">sustentabilidade ambiental</span> e o respeito aos <span className="font-semibold text-gray-900 dark:text-white">saberes tradicionais</span>.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/80 dark:border-gray-700/80">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed italic">
                  "Com mais de uma década de atuação, reafirmamos nosso compromisso com a justiça social, a valorização dos povos indígenas e a manutenção da floresta em pé, contribuindo para um futuro mais justo, equilibrado e sustentável na Amazônia."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span className="font-medium">Organização Apartidária</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span className="font-medium">Não Religiosa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span className="font-medium">CNPJ: 13.955.659/0001-43</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}