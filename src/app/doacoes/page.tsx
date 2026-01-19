"use client";

import { useState } from "react";
import { Copy, Check, CreditCard, Building2, QrCode, Heart, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export default function Doacoes() {
  const [copiado, setCopiado] = useState("");
  const [valorSelecionado, setValorSelecionado] = useState(null);
  const [valorCustom, setValorCustom] = useState("");

  const handleCopy = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiado(tipo);
    setTimeout(() => setCopiado(""), 2000);
  };

  const valoresSugeridos = [
    { valor: 50, impacto: "Material escolar para 5 crianças" },
    { valor: 100, impacto: "Kit alimentação para 1 família" },
    { valor: 200, impacto: "Consulta médica completa" },
    { valor: 500, impacto: "Equipamento de inclusão digital" }
  ];

  const beneficios = [
    {
      
      title: "Transparência Total"
    },
    {
      
      title: "Impacto Direto"
    },
    {
      
      title: "Certificado Oficial"
    }
  ];

  return (
    <div className="min-h-screen bg-[#E5EEE2]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-linear-to-br from-[#044217] to-[#044217]/90 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#62B67F] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DBE89C] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
             
              
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Faça sua Doação
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Sua contribuição apoia diretamente povos indígenas e quilombolas da Amazônia. 
                Toda doação é usada com transparência e responsabilidade.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap justify-center gap-4">
                {beneficios.map((beneficio, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 text-white"
                  >
                    {beneficio.icon}
                    <span className="font-medium text-sm">{beneficio.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 fill-[#E5EEE2]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Valores Sugeridos */}
        <section className="py-20 bg-[#E5EEE2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#044217] mb-4">
                Escolha um Valor
              </h2>
              <p className="text-lg text-[#044217]/70 max-w-2xl mx-auto">
                Selecione o valor da sua doação ou defina um valor personalizado
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {valoresSugeridos.map((item) => (
                  <button
                    key={item.valor}
                    onClick={() => {
                      setValorSelecionado(item.valor);
                      setValorCustom("");
                    }}
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      valorSelecionado === item.valor
                        ? "bg-linear-to-br from-[#044217] to-[#044217]/90 text-white shadow-2xl scale-105"
                        : "bg-white text-[#044217] border-2 border-[#DBE89C] hover:border-[#62B67F]"
                    }`}
                  >
                    <div className="relative z-10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">
                        R$ {item.valor}
                      </p>
                      <p className={`text-sm mb-3 ${valorSelecionado === item.valor ? 'text-white/80' : 'text-[#044217]/60'}`}>
                        doação única
                      </p>
                      <div className={`h-px w-full mb-3 ${valorSelecionado === item.valor ? 'bg-white/20' : 'bg-[#DBE89C]'}`}></div>
                      <p className={`text-xs leading-relaxed ${valorSelecionado === item.valor ? 'text-white/90' : 'text-[#044217]/70'}`}>
                        {item.impacto}
                      </p>
                    </div>
                    
                    {valorSelecionado === item.valor && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-6 h-6 text-[#62B67F]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <input
                  type="number"
                  placeholder="Ou digite outro valor (R$)"
                  value={valorCustom}
                  onChange={(e) => {
                    setValorCustom(e.target.value);
                    setValorSelecionado(null);
                  }}
                  className="px-6 py-4 rounded-xl bg-white border-2 border-[#DBE89C] text-[#044217] placeholder-[#044217]/40 w-full max-w-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#62B67F] focus:border-transparent shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Métodos de Doação */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">
                Formas de Pagamento
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#044217] mb-4">
                Métodos de Doação
              </h2>
              <div className="w-24 h-1 bg-[#62B67F] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* PIX */}
              <Card className="border-2 border-[#DBE89C] hover:border-[#62B67F] transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-[#044217] to-[#044217]/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <QrCode className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#044217]">PIX</h3>
                    <Badge variant="success" className="text-xs">Recomendado</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#E5EEE2] rounded-xl p-4 border border-[#DBE89C]">
                    <p className="text-xs text-[#044217]/70 mb-2 font-semibold">Chave CNPJ</p>
                    <p className="text-[#044217] font-mono text-sm md:text-base break-all font-bold">
                      13.955.659/0001-43
                    </p>
                  </div>

                  <Button
                    onClick={() => handleCopy("13.955.659/0001-43", "pix")}
                    variant={copiado === "pix" ? "secondary" : "primary"}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {copiado === "pix" ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copiar Chave PIX
                      </>
                    )}
                  </Button>

                  <div className="bg-white p-4 rounded-xl border-2 border-[#DBE89C]">
                    <p className="text-xs text-[#044217]/70 mb-3 text-center font-semibold">QR Code PIX</p>
                    <div className="w-full h-48 flex items-center justify-center bg-[#E5EEE2] rounded-lg">
                      <QrCode className="w-20 h-20 text-[#044217]/20" />
                    </div>
                    <p className="text-xs text-[#044217]/50 text-center mt-2">Escaneie com seu app bancário</p>
                  </div>
                </div>
              </Card>

              {/* Depósito Bancário */}
              <Card className="border-2 border-[#DBE89C] hover:border-[#62B67F] transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-[#62B67F] to-[#62B67F]/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#044217]">Depósito</h3>
                    <p className="text-sm text-[#044217]/60">Transferência bancária</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                    <p className="text-xs text-[#044217]/70 font-semibold mb-1">Banco</p>
                    <p className="text-[#044217] font-bold">Caixa Econômica Federal</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                      <p className="text-xs text-[#044217]/70 font-semibold mb-1">Agência</p>
                      <p className="text-[#044217] font-mono font-bold">1549</p>
                    </div>
                    <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                      <p className="text-xs text-[#044217]/70 font-semibold mb-1">Operação</p>
                      <p className="text-[#044217] font-mono font-bold">1292</p>
                    </div>
                  </div>

                  <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-[#044217]/70 font-semibold">Conta Corrente</p>
                      <button
                        onClick={() => handleCopy("000573362875-4", "conta")}
                        className="text-[#62B67F] hover:text-[#044217] transition-colors"
                      >
                        {copiado === "conta" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-[#044217] font-mono text-sm font-bold break-all">
                      000573362875-4
                    </p>
                  </div>

                  <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                    <p className="text-xs text-[#044217]/70 font-semibold mb-2">Favorecido</p>
                    <p className="text-[#044217] text-xs leading-relaxed font-medium">
                      Instituto de Apoio aos Povos Originários da Amazônia - IAPOAM
                    </p>
                  </div>

                  <div className="bg-[#E5EEE2] rounded-xl p-3 border border-[#DBE89C]">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-[#044217]/70 font-semibold">CNPJ</p>
                      <button
                        onClick={() => handleCopy("13.955.659/0001-43", "cnpj")}
                        className="text-[#62B67F] hover:text-[#044217] transition-colors"
                      >
                        {copiado === "cnpj" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-[#044217] font-mono text-sm font-bold">
                      13.955.659/0001-43
                    </p>
                  </div>
                </div>
              </Card>

              {/* Cartão de Crédito - Em Breve */}
              <Card className="border-2 border-[#DBE89C] opacity-60 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <Badge variant="warning" className="text-xs">Em breve</Badge>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-[#044217]/40 to-[#044217]/30 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-[#044217]/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#044217]/70">Cartão</h3>
                    <p className="text-sm text-[#044217]/50">Crédito e débito</p>
                  </div>
                </div>

                <div className="bg-[#E5EEE2] rounded-xl p-8 text-center border border-[#DBE89C]">
                  <CreditCard className="w-16 h-16 text-[#044217]/30 mx-auto mb-4" />
                  <p className="text-[#044217]/60 text-sm leading-relaxed">
                    Pagamento via cartão estará disponível em breve através de plataforma segura.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparência Section */}
        <section className="py-20 bg-linear-to-b from-[#E5EEE2] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-linear-to-br from-white to-[#E5EEE2] border-2 border-[#62B67F]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-[#044217] to-[#044217]/80 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#044217] mb-2">
                      Transparência e Prestação de Contas
                    </h3>
                    <Badge variant="success" className="text-xs">
                      Certificado de Utilidade Pública
                    </Badge>
                  </div>
                </div>

                <p className="text-[#044217]/80 leading-relaxed mb-6">
                  Todas as doações recebidas são utilizadas exclusivamente para apoiar projetos 
                  voltados aos povos indígenas e quilombolas da Amazônia. Publicamos relatórios 
                  periódicos de prestação de contas para garantir total transparência no uso dos recursos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-[#DBE89C]">
                    <CheckCircle2 className="w-8 h-8 text-[#62B67F] mb-2" />
                    <h4 className="font-bold text-[#044217] mb-1">100% Transparente</h4>
                    <p className="text-sm text-[#044217]/70">Todos os relatórios são públicos</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#DBE89C]">
                    <CheckCircle2 className="w-8 h-8 text-[#62B67F] mb-2" />
                    <h4 className="font-bold text-[#044217] mb-1">Auditoria Externa</h4>
                    <p className="text-sm text-[#044217]/70">Contas verificadas anualmente</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="inline-flex items-center gap-2">
                    Ver Relatórios de Transparência
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
