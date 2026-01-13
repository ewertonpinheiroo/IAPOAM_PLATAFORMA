// components/Hero.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Amazônia"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Apoio aos Povos Originários da Amazônia
        </h1>
        <p className="text-xl text-[#A8A88A] mb-8">
          Promovendo inclusão, defesa de direitos e sustentabilidade para etnias indígenas e quilombolas.
        </p>
        <Link href="/doacoes">
          <Button variant="primary" className="text-lg">
            Apoie Nossa Causa
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}