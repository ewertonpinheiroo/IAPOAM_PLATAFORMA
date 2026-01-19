"use client";

import Image from "next/image";
import { useState } from "react";

export function Institutional() {
  const [activeTab, setActiveTab] = useState<"mission" | "founder">("mission");

  const highlights = [
    {
      number: "35+",
      label: "Etnias Atendidas",
      description: "Em toda a região amazônica"
    },
    {
      number: "253",
      label: "Comunidades",
      description: "Alcançadas com nossos projetos"
    },
    {
      number: "15+",
      label: "Anos",
      description: "De história e dedicação"
    },
    {
      number: "100%",
      label: "Transparência",
      description: "Em todas as nossas ações"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#62B67F] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Conheça Nossa História
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre o IAPOAM
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Uma organização dedicada à defesa dos direitos, inclusão social e preservação cultural
            dos povos indígenas e quilombolas da Amazônia
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
                {item.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === "mission"
                ? "bg-gradient-to-r from-[#044217] to-[#62B67F] text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F]"
            }`}
          >
            Quem Somos
          </button>
          <button
            onClick={() => setActiveTab("founder")}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === "founder"
                ? "bg-gradient-to-r from-[#044217] to-[#62B67F] text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F]"
            }`}
          >
            Nossa Fundadora
          </button>
        </div>

        {/* Content */}
        {activeTab === "mission" && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Quem Somos
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      CNPJ: 13.955.659/0001-43
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    O <span className="font-semibold text-gray-900 dark:text-white">Instituto de Apoio aos Povos Originários da Amazônia (IAPOAM)</span> é uma organização apartidária e não religiosa, fundada em 15 de fevereiro de 2011, com atuação voltada à defesa dos direitos dos povos originários e à preservação da floresta amazônica.
                  </p>
                  <p>
                    O IAPOAM desenvolve projetos e ações em parceria com comunidades, instituições e organizações, promovendo o fortalecimento sociocultural, a proteção territorial, a sustentabilidade ambiental e o respeito aos saberes tradicionais.
                  </p>
                  <p>
                    Com mais de uma década de atuação, o Instituto reafirma seu compromisso com a justiça social, a valorização dos povos indígenas e a manutenção da floresta em pé, contribuindo para um futuro mais justo, equilibrado e sustentável na Amazônia.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">253</div>
                  <div className="text-sm opacity-90">Comunidades Atendidas</div>
                </div>
                <div className="bg-gradient-to-br from-[#62B67F] to-[#044217] rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">35+</div>
                  <div className="text-sm opacity-90">Etnias</div>
                </div>
                <div className="col-span-2 bg-gray-100 dark:bg-gray-700 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Anos de Dedicação</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "founder" && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#044217] to-[#62B67F] p-8 lg:p-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Nossa Fundadora
              </h3>
              <p className="text-white/90 text-lg">Liderança e Inspiração</p>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                {/* Photo */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#62B67F] to-[#044217] rounded-full blur-2xl opacity-20"></div>
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                      <Image
                        src="/images/Kamila_perfil.png"
                        alt="Kamila Katusawa Mura - Fundadora do IAPOAM"
                        width={320}
                        height={320}
                        className="relative rounded-full border-4 border-white dark:border-gray-700 shadow-2xl object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#62B67F] to-[#044217] text-white px-6 py-3 rounded-2xl shadow-xl border-4 border-white dark:border-gray-800">
                      <div className="text-2xl font-bold">15 Anos</div>
                      <div className="text-xs">IAPOAM</div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      Kamila Katusawa Mura
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#62B67F] text-white text-sm font-medium rounded-full">
                        Mura
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                        Coordenadora Social
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                        Gestora Social
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p className="text-lg leading-relaxed">
                      Liderança indígena e gestora social com <span className="font-semibold text-gray-900 dark:text-white">mais de 13 anos de experiência</span> na defesa dos direitos dos povos originários em contexto urbano.
                    </p>
                    
                    <p className="leading-relaxed">
                      Fundadora e atual Coordenadora Social do IAPOAM, com sólida expertise na articulação de políticas públicas, gestão de Organizações da Sociedade Civil (OSC) e implementação de ações de cidadania.
                    </p>
                    
                    <p className="leading-relaxed">
                      Atuação estratégica como <span className="font-semibold text-gray-900 dark:text-white">Tuxaua</span>, sendo responsável por marcos históricos de visibilidade étnica e reconhecimento institucional junto a órgãos como o IBGE e conselhos de assistência social (CMAS/SUAS).
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative p-6 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-2xl">
                    <p className="text-lg lg:text-xl font-medium text-white italic leading-relaxed">
                      "Fazer o bem: os povos indígenas precisam de oportunidade, renda, inclusão social e direitos para todos."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}