"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function OuvidoriaTeaser() {
  return (
    <section className="py-16 bg-[#244A32]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#C9C85E] mb-6">
          Canal de Ouvidoria e Denúncias
        </h2>
        <p className="text-lg text-[#A8DADC] max-w-3xl mx-auto mb-8">
          Denuncie discriminação, preconceito, violência ou violações de direitos indígenas. Seu relato é confidencial e será tratado com seriedade.
        </p>
        <Link href="/ouvidoria">
          <Button variant="primary">Acessar Ouvidoria</Button>
        </Link>
      </div>
    </section>
  );
}