// components/Projects.tsx
"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Projeto Maloca Social", description: "Atendimento a famílias em vulnerabilidade social na Comunidade Betel (Manaus).", image: "/images/projects/maloca.jpeg" },
  { title: "Inclusão Digital", description: "Doação de computadores e treinamento para comunidades.", image: "/images/projects/digital.jpeg" },
  { title: "Centro Cultural CUIAM", description: "Espaço para preservação cultural indígena.", image: "/images/projects/cuiam.jpg" },
  { title: "Ações de Cidadania", description: "Parcerias com Sejusc, Fepiam e Secretaria Municipal de Mulher.", image: "/images/projects/cidadania.jpg" },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#06100F]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#86886A] mb-8 text-center"
        >
          Projetos em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="overflow-hidden bg-[#1A221E] text-white">
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#86886A] mb-2">{project.title}</h3>
                  <p className="text-[#A8A88A]">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}