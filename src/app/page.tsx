"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Hammer } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-noise">
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero.jpg" alt="Maderart" fill className="object-cover scale-105" priority />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#121F12] via-[rgba(18,31,18,0.7)] to-transparent"></div>
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#121F12] via-transparent to-black/40"></div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block py-1.5 px-4 bg-[rgba(212,175,55,0.1)] border border-[var(--color-gold)]/40 text-[var(--color-gold-light)] text-[0.65rem] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                Santo Antônio do Descoberto
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-[var(--color-cream)] mb-6 leading-[0.95] drop-shadow-2xl">
              MARCENARIA <br/> 
              <span className="text-gradient-gold">RÚSTICA &</span><br/> 
              PLANEJADA
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[var(--color-cream)]/80 text-lg md:text-xl mb-12 font-sans max-w-xl leading-relaxed font-light">
              Tradição e excelência em móveis sob medida e luthieria fina. Transformamos as madeiras mais nobres do Brasil em obras de arte atemporais.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <Link href="https://wa.me/5561996366598" className="btn-premium-gold px-10 py-5 text-[0.8rem] tracking-[0.2em] shadow-2xl inline-flex items-center gap-3">
                <span>SOLICITAR ORÇAMENTO</span>
              </Link>
              <Link href="/#portfolio" className="border border-[var(--color-gold)]/50 bg-[var(--color-green-dark)]/50 hover:bg-[var(--color-gold)]/10 text-[var(--color-gold-light)] px-10 py-5 text-[0.8rem] uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md">
                VER PROJETOS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STRIP */}
      <section className="bg-gradient-to-r from-[var(--color-green-dark)] via-[var(--color-green-light)] to-[var(--color-green-dark)] border-y border-[var(--color-gold)]/20 py-6 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 flex justify-around flex-wrap gap-8">
          {[
            { icon: <ShieldCheck size={20} className="text-[var(--color-gold)]" />, text: "100% Artesanal" },
            { icon: <Star size={20} className="text-[var(--color-gold)]" />, text: "Madeiras Nobres" },
            { icon: <Hammer size={20} className="text-[var(--color-gold)]" />, text: "Sob Medida" },
            { icon: <Check size={20} className="text-[var(--color-gold)]" />, text: "Luthieria Fina" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[var(--color-cream)]/70 text-xs font-bold uppercase tracking-[0.25em]">
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="py-32 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-[700px] w-full overflow-hidden border border-[var(--color-gold)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <Image src="/img/madeiras.jpg" alt="Madeiras Nobres" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121F12] to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass-luxury p-10 hidden md:flex flex-col items-center justify-center min-w-[250px]">
              <span className="font-heading text-7xl text-gradient-gold leading-none mb-2">20+</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--color-cream)] text-center">Anos de<br/>Tradição</span>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.span variants={fadeInUp} className="flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
              <span className="w-12 h-[1px] bg-[var(--color-gold)]"></span> História
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-5xl md:text-6xl text-[var(--color-cream)] mb-10 leading-[1.1]">
              A arte de esculpir <br/><span className="text-gradient-gold">o tempo.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-[var(--color-cream)]/70 text-lg leading-relaxed font-light">
              <p>
                A Maderart nasceu da paixão visceral pela madeira e pelo trabalho manual feito com devoção. Em nossa oficina em Santo Antônio do Descoberto (SAD), a tradição da marcenaria de luxo se funde com a precisão exigida pela alta luthieria.
              </p>
              <p>
                Trabalhamos de forma artesanal com as espécies mais espetaculares do Brasil: Pau Brasil, Mogno, Ipê e Cedro Rosa. Preservamos o desenho natural, a textura e o aroma de cada prancha, entregando obras exclusivas que resistem ao teste das décadas.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-[var(--color-gold)]/10">
              <div>
                <span className="block text-[var(--color-gold)] mb-2"><Star size={24}/></span>
                <span className="block text-[var(--color-cream)] font-bold mb-1">Qualidade Premium</span>
                <span className="text-[var(--color-cream)]/50 text-sm">Acabamento impecável e seladoras nobres.</span>
              </div>
              <div>
                <span className="block text-[var(--color-gold)] mb-2"><ShieldCheck size={24}/></span>
                <span className="block text-[var(--color-cream)] font-bold mb-1">Atendimento Local</span>
                <span className="text-[var(--color-cream)]/50 text-sm">SAD, Brasília e todo o Entorno.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MADEIRAS PREMIUM */}
      <section id="madeiras" className="py-32 relative bg-[#0a110a] border-y border-[var(--color-gold)]/10">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('/img/portfolio3.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a110a] via-transparent to-[#0a110a]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
            <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4">Matéria Prima</span>
            <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-cream)] mb-8">Nossas <span className="text-gradient-gold">Joias Naturais</span></h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              { title: "Pau Brasil", desc: "Madeira histórica, densa e de durabilidade incomparável. Veios avermelhados de puro luxo.", img: "/img/paubrasil.jpg" },
              { title: "Mogno", desc: "O rei das madeiras para instrumentos e móveis finos. Acústica perfeita e visual clássico.", img: "/img/madeiras.jpg" },
              { title: "Ipê & Cedro", desc: "Resistência extrema para ambientes externos e maciez aromática para entalhes finos.", img: "/img/portfolio2.jpg" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 mb-6 overflow-hidden border border-[var(--color-gold)]/20 shadow-2xl">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121F12] via-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-heading text-3xl text-[var(--color-gold)] mb-3">{item.title}</h3>
                <p className="text-[var(--color-cream)]/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BASTIDORES & VÍDEOS */}
      <section id="bastidores" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4">A Oficina</span>
            <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-cream)] mb-6">Por trás da <span className="text-gradient-gold">Maderart</span></h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-8"></div>
            <p className="text-[var(--color-cream)]/60 max-w-2xl mx-auto font-light text-lg">Acompanhe a transformação bruta da madeira até o polimento de alto brilho em nossa oficina.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="relative rounded-sm overflow-hidden aspect-[9/16] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-gold)]/30 group"
              >
                <video src={`/vid/video${num}.mp4`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" controls preload="metadata"></video>
                <div className="absolute top-4 right-4 glass-luxury px-3 py-1 text-[0.6rem] uppercase tracking-widest text-[var(--color-gold)] z-10 pointer-events-none">
                  Bastidores
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 relative overflow-hidden bg-[#0a110a]">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{backgroundImage: "url('/img/portfolio1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-green-dark)] via-[var(--color-green-dark)]/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-6xl md:text-8xl text-gradient-gold mb-8 drop-shadow-2xl">
              Pronto para criar <br/>o seu projeto?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-cream)]/80 text-xl mb-12 font-light max-w-2xl mx-auto">
              Seja para um ambiente rústico completo, móveis planejados de alto luxo ou a reforma do seu piano. O requinte começa com um clique.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="https://wa.me/5561996366598" className="btn-premium-gold px-12 py-6 text-sm uppercase tracking-[0.2em] shadow-2xl inline-block">
                Falar com o Mestre Marceneiro
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
