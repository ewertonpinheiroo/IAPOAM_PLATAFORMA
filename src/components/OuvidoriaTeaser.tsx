"use client";

import Link from "next/link";

export function OuvidoriaTeaser() {
  const contactMethods = [
    {
      title: "Formulário",
      description: "Preencha seu relato por escrito de forma estruturada"
    },
    {
      title: "Vídeo",
      description: "Envie sua denúncia em formato de vídeo"
    },
    {
      title: "Áudio",
      description: "Grave e envie seu relato em áudio"
    }
  ];

  const reportTypes = [
    "Discriminação",
    "Preconceito",
    "Violência",
    "Abusos",
    "Violação de Direitos"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#044217] to-[#0a5a28] dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-white">
                Canal Seguro e Confidencial
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Canal de Denúncias e Acolhimento
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Um espaço seguro e confidencial para denunciar abusos, preconceitos, discriminação e violações de direitos indígenas.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-10">
              Sua voz importa. Este canal foi criado para que povos indígenas possam relatar situações de violência, preconceito, discriminação ou qualquer violação de seus direitos com segurança e dignidade.
            </p>
            
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Confidentiality Guarantee */}
            <div className="bg-gradient-to-r from-[#62B67F]/10 to-[#044217]/10 dark:from-[#62B67F]/5 dark:to-[#044217]/5 rounded-2xl p-6 border-l-4 border-[#62B67F] mb-8">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Confidencialidade Garantida
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Todos os relatos são tratados com absoluta confidencialidade e seriedade. Você pode optar por permanecer anônimo ou se identificar.
              </p>
            </div>

            {/* Report Types */}
            <div className="text-center mb-8">
              <p className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
                Você pode denunciar:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {reportTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-900 dark:text-white text-sm font-medium hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/ouvidoria"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#62B67F] hover:bg-[#4a9d68] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Acessar Canal de Denúncias
              <svg
                className="w-5 h-5 ml-2"
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
            <p className="text-white/80 text-sm mt-4">
              Sua denúncia será analisada por nossa equipe especializada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}