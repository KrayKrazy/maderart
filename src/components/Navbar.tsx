"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-gold)]">
            <Image src="/img/logo.jpg" alt="Maderart Logo" fill className="object-cover" />
          </div>
          <span className="font-heading text-3xl tracking-widest text-[var(--color-gold)] title-glow">
            MADERART
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center font-bold text-sm tracking-widest text-white/90">
          <Link href="/#sobre" className="hover:text-[var(--color-gold)] transition-colors uppercase">Sobre</Link>
          <Link href="/#madeiras" className="hover:text-[var(--color-gold)] transition-colors uppercase">Madeiras</Link>
          <Link href="/#portfolio" className="hover:text-[var(--color-gold)] transition-colors uppercase">Portfólio</Link>
          <Link href="/instrumentos" className="hover:text-[var(--color-gold)] transition-colors uppercase">Luthieria</Link>
          <Link href="https://wa.me/5561996366598" className="btn-gold px-6 py-2 rounded-full text-xs uppercase tracking-wider text-[var(--color-green-dark)]">
            Orçamento
          </Link>
        </div>

        <button 
          className="md:hidden text-[var(--color-gold)] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[var(--color-green-dark)] flex flex-col items-center justify-center gap-8 z-40 text-white font-heading text-3xl">
            <Link href="/#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
            <Link href="/#madeiras" onClick={() => setMobileMenuOpen(false)}>Madeiras</Link>
            <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfólio</Link>
            <Link href="/instrumentos" onClick={() => setMobileMenuOpen(false)}>Luthieria</Link>
          </div>
        )}
      </div>
    </nav>
  );
}