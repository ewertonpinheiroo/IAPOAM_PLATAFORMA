"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function Transparencia() {
  return (
    <div className="min-h-screen bg-[#06100F]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#86886A] mb-4">Transparência e Prestação de Contas</h1>
          <p className="text-lg text-[#A8A88A] max-w-2xl mx-auto">
            Comprometidos com a transparência total. Acesse relatórios, certificações e como usamos os recursos.
          </p>
        </motion.section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Relatórios Financeiros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-[#1A221E] text-[#A8A88A]">
              <h3 className="text-[#86886A]">Relatório Anual 2023</h3>
              <a href="/downloads/relatorio-2023.pdf" download className="text-[#5E5D47] hover:underline">Download PDF</a>
            </Card>
            {/* Adicione mais cards para relatórios */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Distribuição de Recursos</h2>
          <Card className="p-6 bg-[#1A221E] text-[#A8A88A]">
            <p>50% Assistência Social | 30% Cultura | 20% Sustentabilidade</p>
            {/* Adicione gráfico simples com CSS ou lib futura */}
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Certificações e Parcerias</h2>
          <Card className="p-6 bg-[#1A221E] text-[#A8A88A]">
            <ul className="list-disc ml-6">
              <li>Utilidade Pública Estadual (Lei 4.757/2019)</li>
              <li>Utilidade Pública Municipal (PL 380/2021)</li>
              <li>Parcerias: Sejusc Amazonas, Fepiam, Secretaria Municipal de Mulher</li>
            </ul>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}