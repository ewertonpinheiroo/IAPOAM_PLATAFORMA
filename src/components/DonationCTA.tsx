"use client";

import Link from "next/link";

export default function DonationCTA() {
  const impactCards = [
    {
      amount: "R$ 50",
      impact: "Contribui com kits de higiene para famílias indígenas"
    },
    {
      amount: "R$ 100",
      impact: "Apoia programas de capacitação tecnológica"
    },
    {
      amount: "R$ 250",
      impact: "Financia projetos de preservação cultural"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
          
          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-[#044217] to-[#62B67F] p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Faça a Diferença
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Apoie Nossos Projetos
              </h2>

              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Sua contribuição fortalece a luta pelos direitos dos povos originários e amplia o impacto positivo nas comunidades que atendemos em toda a região amazônica.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12">
            
            {/* Impact Cards */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Veja o Impacto da Sua Doação
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {impactCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-3">
                      {card.amount}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {card.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center mb-12">
              <Link
                href="/doacoes"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Fazer uma Doação
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                Sua doação é 100% destinada aos nossos projetos
              </p>
            </div>

            {/* Alternative Support */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Outras Formas de Apoiar
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/voluntario"
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#044217] dark:group-hover:text-[#62B67F] transition-colors">
                      Seja Voluntário
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Doe seu tempo e conhecimento
                    </p>
                  </div>
                </Link>

                <Link
                  href="/parcerias"
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#044217] dark:group-hover:text-[#62B67F] transition-colors">
                      Seja Parceiro
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Parcerias empresariais
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#62B67F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Doações Seguras</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#62B67F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Transparência Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#62B67F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">CNPJ: 13.955.659/0001-43</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}