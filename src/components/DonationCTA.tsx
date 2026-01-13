// components/DonationCTA.tsx
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function DonationCTA() {
  return (
    <section className="py-16 bg-[#5E5D47] text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-white"
        >
          Apoie Nossa Causa
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-[#A8A88A]">Doe via PIX, cartão ou depósito. Garantimos transparência e impacto real nas comunidades.</p>
        <Link href="/doacoes">
          <Button variant="secondary" className="text-lg">Doe Agora</Button>
        </Link>
      </div>
    </section>
  );
}