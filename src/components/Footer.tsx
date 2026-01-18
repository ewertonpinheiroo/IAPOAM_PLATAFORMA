"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart,
  Shield,
  ChevronRight
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/o-que-fazemos", label: "O Que Fazemos" },
    { href: "/onde-atuamos", label: "Onde Atuamos" },
  ];

  const supportLinks = [
    { href: "/doacoes", label: "Doações" },
    { href: "/transparencia", label: "Transparência" },
    { href: "/ouvidoria", label: "Ouvidoria" },
    { href: "/noticias", label: "Notícias" },
  ];

  const legalLinks = [
    { href: "/cultura", label: "Cultura Indígena" },
    { href: "/politica-privacidade", label: "Política de Privacidade" },
    { href: "/termos-uso", label: "Termos de Uso" },
  ];

  const socialLinks = [
    { 
      href: "https://instagram.com/iapoam", 
      icon: <Instagram className="w-5 h-5" />, 
      label: "Instagram",
      hoverColor: "hover:text-pink-500"
    },
    { 
      href: "https://facebook.com/iapoam", 
      icon: <Facebook className="w-5 h-5" />, 
      label: "Facebook",
      hoverColor: "hover:text-blue-500"
    },
    { 
      href: "https://youtube.com/iapoam", 
      icon: <Youtube className="w-5 h-5" />, 
      label: "YouTube",
      hoverColor: "hover:text-red-500"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#044217] to-[#044217]/95 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#62B67F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DBE89C] rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Logo IAPOAM" 
                width={180} 
                height={70}
                className="brightness-0 invert"
              />
            </Link>
            <h3 className="text-xl font-bold text-[#DBE89C] mb-3">
              Instituto de Apoio aos Povos Originários da Amazônia
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Desde 2011 promovendo inclusão, defesa de direitos e sustentabilidade para etnias indígenas e quilombolas da Amazônia.
            </p>
            
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 mb-4">
              <Shield className="w-5 h-5 text-[#62B67F]" />
              <div className="text-sm">
                <div className="font-semibold text-white">Utilidade Pública</div>
                <div className="text-white/70 text-xs">Municipal e Estadual</div>
              </div>
            </div>

            {/* CNPJ */}
            <p className="text-sm text-white/60">
              <strong>CNPJ:</strong> 13.955.659/0001-43
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#DBE89C] mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-[#62B67F] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#62B67F] rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div>
            <h4 className="text-lg font-bold text-[#DBE89C] mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              Apoie & Participe
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-[#62B67F] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#62B67F] rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold text-[#DBE89C] mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              Contato
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="https://maps.google.com/?q=Aldeia+Uka+Anama+Manaus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-[#62B67F] transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#62B67F]" />
                  <span className="text-sm">Aldeia Uka Anamã, Manaus/AM</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5592999999999" 
                  className="flex items-center gap-3 text-white/80 hover:text-[#62B67F] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#62B67F]" />
                  <span className="text-sm">(92) 9999-9999</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@iapoam.org.br" 
                  className="flex items-center gap-3 text-white/80 hover:text-[#62B67F] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#62B67F]" />
                  <span className="text-sm">contato@iapoam.org.br</span>
                </a>
              </li>
            </ul>

            {/* Legal Links */}
            <div>
              <h5 className="text-sm font-semibold text-white/70 mb-3">Informações</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-white/60 hover:text-white/90 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                © {currentYear} IAPOAM. Todos os direitos reservados.
              </p>
              <p className="text-white/50 text-xs mt-1">
                Desenvolvido com <Heart className="w-3 h-3 inline-block text-[#62B67F]" /> para os povos originários
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <span className="text-white/70 text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-[#62B67F] transition-colors duration-300 group"
            >
              Voltar ao topo
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust Seal Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span>Organização Sem Fins Lucrativos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span>Apartidária</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span>Não Religiosa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#62B67F] rounded-full"></div>
              <span>Transparência Total</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}