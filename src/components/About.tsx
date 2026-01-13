// components/About.tsx
"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section id="about" className="py-16 bg-[#06100F]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#86886A] mb-8 text-center"
        >
          Sobre o IAPOAM
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1A221E] text-white">
            <h3 className="text-2xl font-semibold text-[#86886A] mb-4">Missão e Valores</h3>
            <p className="text-[#A8A88A]">Liderado pela Cacique Kamila Silva Prestes (Etnia MURA), promovemos assistência ao desenvolvimento, inclusão de etnias e comunidades quilombolas no Amazonas, nacional e internacionalmente.</p>
            <p className="mt-2 text-[#A8A88A]">Princípios: Não discriminação de raça, cor, gênero, credo, ideologia, situação econômica ou classe social. Gestão gratuita, sem remuneração a diretores.</p>
          </Card>
          <Card className="bg-[#1A221E] text-white">
            <h3 className="text-2xl font-semibold text-[#86886A] mb-4">Dados Institucionais</h3>
            <ul className="list-disc ml-6 text-[#A8A88A]">
              <li>Nome: Instituto de Apoio aos Povos Originários da Amazônia</li>
              <li>Sigla: IAPOAM</li>
              <li>Fundação: 15 de Fevereiro de 2011</li>
              <li>CNPJ: 13.955.659/0001-43</li>
              <li>Reconhecimentos: Utilidade Pública Estadual (Lei 4.757/2019) e Municipal (PL 380/2021)</li>
            </ul>
            <Badge className="mt-4">Apartidária e Não Religiosa</Badge>
          </Card>
        </div>
      </div>
    </section>
  );
}