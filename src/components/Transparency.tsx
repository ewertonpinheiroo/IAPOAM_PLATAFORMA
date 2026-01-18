"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  FileText, 
  Download, 
  Shield, 
  Eye,
  CheckCircle2,
  BarChart3,
  FileCheck,
  Award,
  ExternalLink,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const documents = [
  {
    title: "Relatório Anual 2024",
    description: "Prestação de contas completa do ano fiscal",
    icon: <FileText className="w-6 h-6" />,
    size: "2.4 MB",
    date: "Janeiro 2025",
    category: "Relatórios"
  },
  {
    title: "Demonstrativo Financeiro",
    description: "Balanço patrimonial e demonstração de resultados",
    icon: <BarChart3 className="w-6 h-6" />,
    size: "1.8 MB",
    date: "Dezembro 2024",
    category: "Financeiro"
  },
  {
    title: "Certificados e Títulos",
    description: "Utilidade Pública Municipal e Estadual",
    icon: <Award className="w-6 h-6" />,
    size: "956 KB",
    date: "2024",
    category: "Certificações"
  },
  {
    title: "Estatuto Social",
    description: "Documento de constituição e normas",
    icon: <FileCheck className="w-6 h-6" />,
    size: "1.2 MB",
    date: "Atualizado 2024",
    category: "Institucional"
  },
];

const certifications = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Utilidade Pública Municipal",
    description: "Certificado pela Prefeitura de Manaus",
    status: "Ativo"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Utilidade Pública Estadual",
    description: "Certificado pelo Governo do Amazonas",
    status: "Ativo"
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "CNPJ Regular",
    description: "Situação cadastral ativa",
    status: "Regular"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Prestação de Contas",
    description: "Relatórios públicos e auditados",
    status: "Em dia"
  },
];

export function Transparency() {
  const [hoveredDoc, setHoveredDoc] = useState<number | null>(null);

  return (
    <section id="transparency" className="py-24 bg-gradient-to-b from-white to-[#E5EEE2] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#044217] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#62B67F] rounded-full blur-3xl"></div>
      </div>

      {/* Shield Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 0 L20 5 L30 10 L40 5 L30 0' fill='%23044217' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            Compromisso com a Transparência
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#044217] mb-4">
            Transparência Total
          </h2>
          <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#044217]/70 max-w-3xl mx-auto">
            Acreditamos que a transparência é fundamental para construir confiança. Todos os nossos documentos, certificações e relatórios estão disponíveis para consulta pública.
          </p>
        </div>

        {/* CNPJ Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#044217] to-[#044217]/90 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#62B67F]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DBE89C]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-[#62B67F]" />
                  <h3 className="text-2xl font-bold">Informações Institucionais</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white/90"><strong>CNPJ:</strong> 13.955.659/0001-43</p>
                  <p className="text-white/90"><strong>Fundação:</strong> 15 de fevereiro de 2011</p>
                  <p className="text-white/90"><strong>Natureza:</strong> Organização Apartidária e Não Religiosa</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link href="https://www.gov.br/receitafederal/pt-br" target="_blank">
                  <Button variant="secondary" className="flex items-center gap-2">
                    Verificar CNPJ
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#044217] text-center mb-8">
            Certificações e Reconhecimentos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-white border-2 border-[#DBE89C] hover:border-[#62B67F] text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#044217] to-[#044217]/80 text-white rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-[#044217] mb-2 group-hover:text-[#62B67F] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-[#044217]/70 mb-3">
                  {cert.description}
                </p>
                <Badge 
                  variant="success" 
                  className="text-xs"
                >
                  {cert.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-[#044217]">
              Documentos Disponíveis
            </h3>
            <Link href="/transparencia">
              <Button variant="outline" className="flex items-center gap-2">
                Ver Todos
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredDoc(index)}
                onMouseLeave={() => setHoveredDoc(null)}
                className="group"
              >
                <Card className={`bg-white border-2 transition-all duration-300 ${
                  hoveredDoc === index 
                    ? 'border-[#62B67F] shadow-xl scale-105' 
                    : 'border-[#DBE89C]'
                }`}>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#044217] to-[#044217]/80 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {doc.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold text-[#044217] group-hover:text-[#62B67F] transition-colors">
                            {doc.title}
                          </h4>
                          <Badge variant="warning" className="text-xs mt-1">
                            {doc.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-[#044217]/70 mb-3">
                        {doc.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#044217]/60">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {doc.date}
                          </span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button className="flex-shrink-0 p-3 bg-[#E5EEE2] hover:bg-[#62B67F] text-[#044217] hover:text-white rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-[#E5EEE2] to-white border-2 border-[#DBE89C] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#62B67F]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#044217]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 py-8">
              <Eye className="w-16 h-16 text-[#62B67F] mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#044217] mb-4">
                Portal de Transparência Completo
              </h3>
              <p className="text-lg text-[#044217]/70 mb-8 max-w-2xl mx-auto">
                Acesse nosso portal completo para visualizar todos os relatórios financeiros, atas de reuniões, planos de ação e documentos institucionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/transparencia">
                  <Button variant="primary" className="flex items-center gap-2">
                    Acessar Portal Completo
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/ouvidoria">
                  <Button variant="outline" className="flex items-center gap-2">
                    Canal de Ouvidoria
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DBE89C]">
              <div className="text-4xl font-bold text-[#044217] mb-2">100%</div>
              <div className="text-sm text-[#044217]/70">Documentos Públicos</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DBE89C]">
              <div className="text-4xl font-bold text-[#044217] mb-2">15+</div>
              <div className="text-sm text-[#044217]/70">Anos de Prestação de Contas</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DBE89C]">
              <div className="text-4xl font-bold text-[#044217] mb-2">0</div>
              <div className="text-sm text-[#044217]/70">Pendências Fiscais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}