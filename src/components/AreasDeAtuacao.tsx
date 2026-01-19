"use client";

import { useState } from "react";
import Link from "next/link";

const areas = [
  { 
    id: "cidadania",
    title: "Cidadania e Inclusão",
    description: "Promovemos ações de cidadania e inclusão digital através de doação de computadores, capacitação tecnológica e facilitação do acesso a serviços essenciais para as comunidades indígenas.",
    initiatives: [
      "Doação de equipamentos de informática",
      "Programas de capacitação digital",
      "Facilitação de acesso a direitos básicos",
      "Inclusão tecnológica comunitária"
    ]
  },
  { 
    id: "cultura",
    title: "Cultura Indígena",
    description: "Trabalhamos na preservação e promoção das tradições culturais ancestrais, fortalecendo a identidade e valorizando o patrimônio imaterial dos povos originários.",
    initiatives: [
      "Preservação de tradições ancestrais",
      "Realização de eventos culturais",
      "Valorização das línguas nativas",
      "Documentação do patrimônio cultural"
    ]
  },
  { 
    id: "ambiente",
    title: "Meio Ambiente e Sustentabilidade",
    description: "Desenvolvemos projetos de proteção ambiental na Amazônia com foco em desenvolvimento sustentável, conservação da biodiversidade e educação ecológica.",
    initiatives: [
      "Programas de reflorestamento",
      "Educação ambiental comunitária",
      "Projetos de desenvolvimento sustentável",
      "Conservação da biodiversidade"
    ]
  },
  { 
    id: "habitacao",
    title: "Habitação",
    description: "Oferecemos apoio para garantir moradias dignas em comunidades indígenas, proporcionando condições adequadas de vida e infraestrutura básica.",
    initiatives: [
      "Reforma e melhoria de moradias",
      "Implementação de infraestrutura básica",
      "Projetos de saneamento",
      "Construção sustentável"
    ]
  },
  { 
    id: "saude",
    title: "Saúde Indígena",
    description: "Prestamos assistência médica e desenvolvemos ações de prevenção, integrando a saúde tradicional com práticas modernas de medicina.",
    initiatives: [
      "Atendimento médico básico",
      "Programas de medicina preventiva",
      "Atenção à saúde materno-infantil",
      "Integração de saberes tradicionais"
    ]
  },
  { 
    id: "social",
    title: "Assistência Social",
    description: "Realizamos atendimento integral a famílias em situação de vulnerabilidade com programas de apoio e fortalecimento dos vínculos comunitários.",
    initiatives: [
      "Apoio emergencial a famílias",
      "Programas de segurança alimentar",
      "Fortalecimento de vínculos familiares",
      "Desenvolvimento comunitário"
    ]
  },
];

export default function AreasDeAtuacao() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { number: "6", label: "Áreas de Atuação" },
    { number: "35+", label: "Etnias Atendidas" },
    { number: "253", label: "Comunidades" },
    { number: "15+", label: "Anos de Experiência" },
  ];

  return (
    <section id="areas" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nossas Frentes de Trabalho
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Atuamos de forma integrada em seis áreas fundamentais para promover o bem-estar e a autonomia dos povos originários
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-3 mx-auto">
              {areas.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-[#044217] to-[#62B67F] text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F]'
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-xl min-h-[500px]">
          <div className="max-w-5xl mx-auto">
            {/* Active Tab Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {areas[activeTab].title}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                  {areas[activeTab].description}
                </p>
              </div>

              {/* Initiatives Grid */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Principais Iniciativas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {areas[activeTab].initiatives.map((initiative, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#62B67F] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {initiative}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Faça Parte Dessa Transformação
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Sua contribuição fortalece nossas ações e amplia o impacto positivo nas comunidades que atendemos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/doacoes"
                className="px-8 py-4 bg-white text-[#044217] font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Apoie Nossos Projetos
              </Link>
              <Link
                href="/voluntario"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Seja Voluntário
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}