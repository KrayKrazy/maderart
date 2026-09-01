import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full bg-[var(--color-green-dark)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/img/hero.jpg" alt="Maderart" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[rgba(26,46,26,0.95)] via-[rgba(26,46,26,0.7)] to-transparent"></div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(200,149,42,0.15)] text-[var(--color-gold-light)] text-xs font-bold uppercase tracking-[2px] mb-6 border border-[rgba(200,149,42,0.3)]">
              SANTO ANTÔNIO DO DESCOBERTO
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-4 leading-[1.05] drop-shadow-xl">
              MARCENARIA <br/> <span className="text-[var(--color-gold)]">RÚSTICA &</span><br/> PLANEJADA
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 font-sans max-w-xl leading-relaxed">
              Tradição e excelência em móveis sob medida e luthieria. Transformamos madeiras nobres em obras de arte que duram gerações.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/5561996366598" className="btn-gold px-8 py-4 rounded font-bold uppercase tracking-wider shadow-xl inline-flex items-center gap-2">
                Solicitar Orçamento
              </Link>
              <Link href="/#portfolio" className="btn-ghost px-8 py-4 rounded font-bold uppercase tracking-wider inline-flex items-center gap-2">
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="bg-[var(--color-green-dark)] py-5 border-b border-[rgba(200,149,42,0.15)]">
        <div className="max-w-7xl mx-auto px-6 flex justify-around flex-wrap gap-4">
          <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span className="text-[var(--color-gold)] text-lg">✦</span> 100% Artesanal
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span className="text-[var(--color-gold)] text-lg">✦</span> Madeiras Nobres
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span className="text-[var(--color-gold)] text-lg">✦</span> Sob Medida
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span className="text-[var(--color-gold)] text-lg">✦</span> Luthieria e Pianos
          </div>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/img/madeiras.jpg" alt="Madeiras Nobres" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-[0_12px_36px_rgba(200,149,42,0.4)] hidden md:block">
              <span className="font-heading text-6xl text-[var(--color-green-dark)] leading-none block text-center">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-green-dark)] text-center block mt-2">Artesanal & Exclusivo</span>
            </div>
          </div>
          <div className="pl-0 md:pl-10">
            <span className="block text-xs font-bold uppercase tracking-[4px] text-[var(--color-gold)] mb-3">História & Tradição</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-green-dark)] mb-6 leading-tight">A paixão pela arte de esculpir o tempo</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mb-8"></div>
            
            <p className="text-[var(--color-green-dark)]/80 text-lg leading-relaxed mb-6">
              A Maderart nasceu da paixão pela madeira e pelo trabalho artesanal feito com cuidado e extrema precisão. Localizados em Santo Antônio do Descoberto (SAD), nossa oficina é um reduto onde a tradição da marcenaria fina se encontra com o design contemporâneo.
            </p>
            <p className="text-[var(--color-green-dark)]/80 text-lg leading-relaxed mb-8">
              Trabalhamos exclusivamente com as espécies mais nobres do Brasil: Pau Brasil, Mogno, Ipê e Cedro Rosa. Respeitamos cada fio e veio natural da madeira, resultando em móveis, portas entalhadas e pergolados que são verdadeiras joias para residências e espaços comerciais.
            </p>
            
            <div className="flex gap-8 mt-8">
              <div>
                <span className="font-heading text-4xl text-[var(--color-green-dark)] block">20+</span>
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-green-dark)]/60">Anos de Ofício</span>
              </div>
              <div>
                <span className="font-heading text-4xl text-[var(--color-green-dark)] block">SAD</span>
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-green-dark)]/60">Santo Antônio / Entorno</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MADEIRAS */}
      <section id="madeiras" className="py-24 bg-[var(--color-green-dark)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="block text-xs font-bold uppercase tracking-[4px] text-[var(--color-gold)] mb-3">Matéria Prima</span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Trabalhamos com madeiras Premium</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl text-[var(--color-gold)]">★</span>
              </div>
              <h3 className="font-heading text-3xl text-[var(--color-gold)] mb-4">Pau Brasil</h3>
              <p className="text-white/60 leading-relaxed mb-6">Madeira histórica, densa e de durabilidade incomparável. Seus veios avermelhados conferem um luxo absurdo a qualquer peça.</p>
              <div className="h-40 w-full relative rounded-lg overflow-hidden">
                <Image src="/img/paubrasil.jpg" alt="Pau Brasil" fill className="object-cover" />
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl text-[var(--color-gold)]">★</span>
              </div>
              <h3 className="font-heading text-3xl text-[var(--color-gold)] mb-4">Mogno</h3>
              <p className="text-white/60 leading-relaxed mb-6">O rei das madeiras para instrumentos e móveis finos. Excelente estabilidade acústica e visual clássico inconfundível.</p>
              <div className="h-40 w-full relative rounded-lg overflow-hidden bg-[#3b2015]">
                {/* Fallback color/image */}
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl text-[var(--color-gold)]">★</span>
              </div>
              <h3 className="font-heading text-3xl text-[var(--color-gold)] mb-4">Ipê & Cedro</h3>
              <p className="text-white/60 leading-relaxed mb-6">O Ipê oferece resistência extrema para pergolados. O Cedro Rosa traz aroma agradável e maciez para entalhes refinados.</p>
              <div className="h-40 w-full relative rounded-lg overflow-hidden bg-[#4a3424]">
                {/* Fallback color/image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS / BASTIDORES (RESTAURADO) */}
      <section id="bastidores" className="py-24 bg-[var(--color-green-mid)] border-t border-[rgba(200,149,42,0.15)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="block text-xs font-bold uppercase tracking-[4px] text-[var(--color-gold)] mb-3">Oficina & Rotina</span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Por trás da Maderart</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-6"></div>
            <p className="text-white/60 max-w-2xl mx-auto">Um pouco do nosso trabalho bruto na oficina, mostrando o cuidado desde a prancha bruta até o acabamento final.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-2xl border border-[rgba(200,149,42,0.2)] bg-black/50 group">
              <video src="/vid/video1.mp4" className="absolute inset-0 w-full h-full object-cover" controls preload="metadata"></video>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-2xl border border-[rgba(200,149,42,0.2)] bg-black/50 group">
              <video src="/vid/video2.mp4" className="absolute inset-0 w-full h-full object-cover" controls preload="metadata"></video>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-2xl border border-[rgba(200,149,42,0.2)] bg-black/50 group">
              <video src="/vid/video3.mp4" className="absolute inset-0 w-full h-full object-cover" controls preload="metadata"></video>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO & CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-green-dark)] via-[var(--color-green)] to-[var(--color-green-dark)] border-t border-b border-[rgba(200,149,42,0.2)] text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/img/portfolio1.jpg" fill className="object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-10">
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-gold)] mb-6 drop-shadow-xl">Transforme sua casa ou seu instrumento.</h2>
          <p className="text-white/80 text-xl mb-10">Converse conosco diretamente pelo WhatsApp e faça um orçamento sem compromisso. Atendemos SAD, Brasília e Entorno.</p>
          <Link href="https://wa.me/5561996366598" className="btn-gold px-12 py-5 rounded font-bold uppercase tracking-[2px] shadow-2xl inline-block text-lg">
            Fale com a Maderart
          </Link>
        </div>
      </section>
    </>
  );
}