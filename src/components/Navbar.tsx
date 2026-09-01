import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maderart-green/95 backdrop-blur-md border-b border-maderart-yellow/20 h-20 px-4 md:px-10 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image src="/img/logo.jpg" alt="Maderart Logo" width={160} height={50} className="rounded-md object-contain h-12 w-auto" />
      </Link>
      <nav className="hidden md:flex gap-8">
        <Link href="/#sobre" className="text-sm font-semibold text-white/70 uppercase tracking-widest hover:text-maderart-yellow transition-colors">Tradição</Link>
        <Link href="/#madeiras" className="text-sm font-semibold text-white/70 uppercase tracking-widest hover:text-maderart-yellow transition-colors">Madeiras</Link>
        <Link href="/instrumentos" className="text-sm font-semibold text-white/70 uppercase tracking-widest hover:text-maderart-yellow transition-colors">Instrumentos</Link>
        <Link href="/#portfolio" className="text-sm font-semibold text-white/70 uppercase tracking-widest hover:text-maderart-yellow transition-colors">Portfólio</Link>
      </nav>
      <a href="https://wa.me/5561996366598" className="bg-maderart-yellow hover:bg-maderart-yellow-hover text-maderart-green-dark font-bold px-6 py-2.5 rounded text-sm tracking-wider uppercase transition-all shadow-[0_4px_14px_rgba(244,197,34,0.3)] hover:shadow-[0_6px_20px_rgba(244,197,34,0.5)] hidden md:inline-block">
        Orçamento
      </a>
    </header>
  );
}