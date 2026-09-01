"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-luxury py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 relative z-50 group">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[var(--color-gold)] shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110">
            <Image src="/img/logo.jpg" alt="Maderart Logo" fill className="object-cover" />
          </div>
          <span className="font-heading text-3xl tracking-[0.15em] text-gradient-gold">
            MADERART
          </span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center font-bold text-[0.8rem] tracking-[0.2em] text-[var(--color-cream)]">
          <Link href="/#sobre" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1">SOBRE</Link>
          <Link href="/#madeiras" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1">MADEIRAS</Link>
          <Link href="/#portfolio" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1">PORTFÓLIO</Link>
          <Link href="/instrumentos" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1">LUTHIERIA</Link>
          <Link href="https://wa.me/5561996366598" className="btn-premium-gold px-8 py-3 rounded-sm text-[0.7rem] uppercase tracking-[0.2em] ml-4">
            ORÇAMENTO
          </Link>
        </div>

        <button 
          className="md:hidden text-[var(--color-gold)] z-50 hover:scale-110 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 w-full h-screen bg-[var(--color-green-dark)]/95 flex flex-col items-center justify-center gap-10 z-40"
            >
              <Link href="/#sobre" onClick={() => setMobileMenuOpen(false)} className="font-heading text-4xl text-gradient-gold">Sobre a Maderart</Link>
              <Link href="/#madeiras" onClick={() => setMobileMenuOpen(false)} className="font-heading text-4xl text-gradient-gold">Madeiras Nobres</Link>
              <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="font-heading text-4xl text-gradient-gold">Portfólio</Link>
              <Link href="/instrumentos" onClick={() => setMobileMenuOpen(false)} className="font-heading text-4xl text-gradient-gold">Luthieria e Pianos</Link>
              <Link href="https://wa.me/5561996366598" onClick={() => setMobileMenuOpen(false)} className="btn-premium-gold px-12 py-4 rounded-sm text-sm uppercase tracking-[0.2em] mt-4">
                Falar no WhatsApp
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
