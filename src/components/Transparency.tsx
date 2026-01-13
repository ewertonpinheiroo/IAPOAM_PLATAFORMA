// components/Transparency.tsx
"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Link from "next/link";

export function Transparency() {
  return (
    <section id="transparency" className="py-16 bg-[#06100F]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#86886A] mb-8 text-center"
        >
          Transparência
        </motion.h2>
        <Card className="max-w-2xl mx-auto p-6 bg-[#1A221E] text-white">
          <p className="text-[#A8A88A]">Compromisso com a transparência: Certificações de utilidade pública, relatórios anuais e uso responsável de recursos.</p>
          <p className="mt-2 text-[#A8A88A]">CNPJ: 13.955.659/0001-43</p>
          <Link href="/transparencia" className="text-[#5E5D47] hover:underline mt-4 block">Ver Relatórios Detalhados</Link>
        </Card>
      </div>
    </section>
  );
}