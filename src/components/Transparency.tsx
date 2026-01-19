"use client";

import Link from "next/link";
import { useState } from "react";

const documents = [
  {
    title: "Relatório Anual 2024",
    description: "Prestação de contas completa do ano fiscal",
    category: "Relatórios",
    size: "2.4 MB",
    date: "Janeiro 2025"
  },
  {
    title: "Demonstrativo Financeiro",
    description: "Balanço patrimonial e demonstração de resultados",
    category: "Financeiro",
    size: "1.8 MB",
    date: "Dezembro 2024"
  },
  {
    title: "Certificados e Títulos",
    description: "Utilidade Pública Municipal e Estadual",
    category: "Certificações",
    size: "956 KB",
    date: "2024"
  },
  {
    title: "Estatuto Social",
    description: "Documento de constituição e normas",
    category: "Institucional",
    size: "1.2 MB",
    date: "Atualizado 2024"
  },
];

const certifications = [
  {
    title: "Utilidade Pública Municipal",
    description: "Certificado pela Prefeitura de Manaus",
    status: "Ativo"
  },
  {
    title: "Utilidade Pública Estadual",
    description: "Certificado pelo Governo do Amazonas",
    status: "Ativo"
  },
  {
    title: "CNPJ Regular",
    description: "Situação cadastral ativa",
    status: "Regular"
  },
  {
    title: "Prestação de Contas",
    description: "Relatórios públicos e auditados",
    status: "Em dia"
  },
];

export function Transparency() {
  const [hoveredDoc, setHoveredDoc] = useState<number | null>(null);

  return (
    <section id="transparency" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <svg className="w-4 h-4 text-[#62B67F] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Compromisso com a Transparência
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Transparência Total
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Acreditamos que a transparência é fundamental para construir confiança. Todos os nossos documentos, certificações e relatórios estão disponíveis para consulta pública.
          </p>
        </div>

        {/* CNPJ Highlight */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-2xl font-bold">Informações Institucionais</h3>
                </div>
                <div className="space-y-2 text-white/90">
                  <p><span className="font-semibold">CNPJ:</span> 13.955.659/0001-43</p>
                  <p><span className="font-semibold">Fundação:</span> 15 de fevereiro de 2011</p>
                  <p><span className="font-semibold">Natureza:</span> Organização Apartidária e Não Religiosa</p>
                </div>
              </div>
              <Link
                href="https://www.gov.br/receitafederal/pt-br"
                target="_blank"
                className="flex-shrink-0 px-6 py-3 bg-white text-[#044217] font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Verificar CNPJ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Certificações e Reconhecimentos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-2xl text-white mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {cert.description}
                </p>
                <span className="inline-block px-3 py-1 bg-[#62B67F]/10 dark:bg-[#62B67F]/20 text-[#044217] dark:text-[#62B67F] text-xs font-medium rounded-full">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Documentos Disponíveis
            </h3>
            <Link
              href="/transparencia"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all duration-300 flex items-center gap-2"
            >
              Ver Todos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredDoc(index)}
                onMouseLeave={() => setHoveredDoc(null)}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#044217] to-[#62B67F] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {doc.title}
                        </h4>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                          {doc.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {doc.date}
                        </span>
                        <span>{doc.size}</span>
                      </div>
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#62B67F] hover:text-white rounded-lg transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 text-center shadow-xl">
          <svg className="w-16 h-16 text-[#62B67F] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Portal de Transparência Completo
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Acesse nosso portal completo para visualizar todos os relatórios financeiros, atas de reuniões, planos de ação e documentos institucionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transparencia"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#044217] to-[#62B67F] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Acessar Portal Completo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/ouvidoria"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] transition-all duration-300"
            >
              Canal de Ouvidoria
            </Link>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Documentos Públicos</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Prestação de Contas</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#044217] to-[#62B67F] mb-2">
              0
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Pendências Fiscais</div>
          </div>
        </div>
      </div>
    </section>
  );
}