// components/AreasDeAtuacao.tsx
"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const areas = [
  { title: "Cidadania e Inclusão", description: "Ações de cidadania e inclusão digital (doação de computadores)." },
  { title: "Cultura Indígena", description: "Preservação e promoção de tradições culturais." },
  { title: "Meio Ambiente e Sustentabilidade", description: "Projetos de proteção ambiental na Amazônia." },
  { title: "Habitação", description: "Apoio a moradias dignas em comunidades." },
  { title: "Saúde Indígena", description: "Assistência médica e prevenção em etnias." },
  { title: "Assistência Social", description: "Atendimento a famílias vulneráveis." },
];

export function AreasDeAtuacao() {
  return (
    <section id="areas" className="py-16 bg-[#1A221E]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#86886A] mb-8 text-center"
        >
          Áreas de Atuação
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="bg-[#2D3128] text-white">
                <h3 className="text-xl font-semibold text-[#86886A] mb-2">{area.title}</h3>
                <p className="text-[#A8A88A]">{area.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}