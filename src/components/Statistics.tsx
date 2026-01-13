// components/Statistics.tsx
"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const stats = [
  { number: "35+", label: "Etnias Atendidas" },
  { number: "253", label: "Comunidades" },
  { number: "29.506", label: "Indígenas em Manaus" },
  { number: "2011", label: "Fundação" },
];

export function Statistics() {
  return (
    <section id="stats" className="py-16 bg-[#1A221E]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#86886A] mb-8 text-center"
        >
          Números de Impacto
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="text-center p-6 bg-[#2D3128] text-white">
                <p className="text-4xl font-bold text-[#86886A]">{stat.number}</p>
                <p className="text-lg text-[#A8A88A]">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}