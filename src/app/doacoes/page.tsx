"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy } from "lucide-react";

export default function Doacoes() {
  const handleCopyPix = () => {
    navigator.clipboard.writeText("13.955.659/0001-43");
    alert("Chave PIX copiada!");
  };

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
          <h1 className="text-4xl font-bold text-[#86886A] mb-4">Faça Sua Doação</h1>
          <p className="text-lg text-[#A8A88A] max-w-2xl mx-auto">
            Sua contribuição apoia o desenvolvimento, inclusão e defesa dos povos originários da Amazônia. Toda doação é utilizada com transparência.
          </p>
        </motion.section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Selecione um Valor</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[50, 100, 200, 500].map((value) => (
              <Card key={value} className="p-4 text-center cursor-pointer hover:shadow-lg bg-[#1A221E]">
                <p className="text-xl font-bold text-[#86886A]">R$ {value}</p>
              </Card>
            ))}
          </div>
          <input
            type="number"
            placeholder="Valor customizado (R$)"
            className="mt-4 w-full max-w-xs mx-auto block p-2 border border-[#2D3128] rounded bg-[#1A221E] text-[#A8A88A]"
          />
          <p className="text-sm text-[#A8A88A] mt-2">Destinado a projetos de inclusão social, cultural e sustentável.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Métodos de Pagamento</h2>
          <Card className="p-6 mb-6 bg-[#1A221E] text-[#A8A88A]">
            <h3 className="text-xl font-bold text-[#86886A] mb-4">PIX (Recomendado)</h3>
            <p>Chave PIX (CNPJ): 13.955.659/0001-43</p>
            <Button variant="primary" onClick={handleCopyPix} className="mt-2">
              <Copy className="mr-2 h-4 w-4" /> Copiar Chave
            </Button>
            <Image src="/images/qr-pix.png" alt="QR Code PIX" width={200} height={200} className="mx-auto mt-4" />
            <ol className="list-decimal ml-6 mt-4 text-sm text-[#A8A88A]">
              <li>Abra seu app de banco.</li>
              <li>Escaneie o QR ou cole a chave.</li>
              <li>Confirme o valor e envie.</li>
              <li>Envie comprovante para iapoam@email.com para recibo.</li>
            </ol>
          </Card>
          <Card className="p-6 mb-6 bg-[#1A221E] text-[#A8A88A]">
            <h3 className="text-xl font-bold text-[#86886A] mb-4">Cartão de Crédito/Débito</h3>
            <p>Em breve disponível. Fique atento!</p>
          </Card>
          <Card className="p-6 bg-[#1A221E] text-[#A8A88A]">
            <h3 className="text-xl font-bold text-[#86886A] mb-4">Depósito Bancário</h3>
            <p>Banco: [Insira Banco], Agência: [Insira], Conta: [Insira]</p>
            <p>Favorecido: Instituto de Apoio aos Povos Originários da Amazônia</p>
            <p>Envie comprovante para iapoam@email.com.</p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#86886A] mb-6">Garantias e Transparência</h2>
          <Card className="p-6 bg-[#1A221E] text-[#A8A88A]">
            <p>Certificado de Utilidade Pública Estadual (2019) e Municipal (2021). Todos os dados são protegidos. Recursos alocados em projetos auditados.</p>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}