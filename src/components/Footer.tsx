// components/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#06100F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#86886A]">IAPOAM</h3>
            <p className="text-[#A8A88A]">Instituto de Apoio aos Povos Originários da Amazônia</p>
            <p className="text-[#A8A88A]">CNPJ: 13.955.659/0001-43</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#86886A]">Contato</h3>
            <p className="flex items-center text-[#A8A88A]"><MapPin className="mr-2" /> Aldeia Uka Anamã, Comunidade Betel, Km 1 Ramal Água Cristalina, Brasileirinho, Estrada do Puraquequara, s/n, Manaus/AM - CEP 69.009-000</p>
            <p className="flex items-center mt-2 text-[#A8A88A]"><Phone className="mr-2" /> [Telefone]</p>
            <p className="flex items-center mt-2 text-[#A8A88A]"><Mail className="mr-2" /> iapoam@email.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#86886A]">Links Úteis</h3>
            <ul>
              <li><Link href="/doacoes" className="hover:underline text-[#5E5D47]">Doações</Link></li>
              <li><Link href="/transparencia" className="hover:underline text-[#5E5D47]">Transparência</Link></li>
              <li><Link href="#projects" className="hover:underline text-[#5E5D47]">Projetos</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8 text-[#A8A88A]">© 2026 IAPOAM. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}