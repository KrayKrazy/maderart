"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstrumentosClient() {
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
      <section className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/img/portfolio2.jpg" alt="Instrumentos" fill className="object-cover scale-105" priority />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[var(--color-green-dark)] via-[#121F12]/80 to-[#121F12]/40"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className="inline-block py-1.5 px-6 rounded-full bg-[rgba(212,175,55,0.05)] text-[var(--color-gold-light)] text-[0.65rem] font-bold uppercase tracking-[0.4em] mb-8 border border-[var(--color-gold)]/30 backdrop-blur-md">
              LUTHIERIA PREMIUM
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-gradient-gold mb-8 leading-[0.9] drop-shadow-2xl">
              AFINAÇÃO & <br/>RESTAURAÇÃO
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[var(--color-cream)]/80 text-xl font-sans max-w-2xl mx-auto font-light leading-relaxed">
              A extrema precisão da marcenaria de alto nível aplicada à acústica e reforma de pianos e instrumentos musicais clássicos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.span variants={fadeInUp} className="flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
              <span className="w-12 h-[1px] bg-[var(--color-gold)]"></span> Mestre Pianista
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-5xl md:text-6xl text-[var(--color-cream)] mb-10 leading-[1.1]">
              Pianos: Afinação e <br/><span className="text-gradient-gold">Restauração</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-[var(--color-cream)]/70 text-lg leading-relaxed mb-10 font-light">
              O piano é uma obra de engenharia complexa. Na Maderart, unimos nossa expertise em madeiras nobres ao conhecimento técnico de luthieria para oferecer um serviço completo para o seu instrumento, garantindo a afinação impecável e a ressonância perfeita.
            </motion.p>
            
            <motion.ul variants={stagger} className="space-y-8 mb-12">
              {[
                { num: "1", title: "Afinação Profissional", desc: "Ajuste preciso da tensão das cordas para garantir o tom perfeito." },
                { num: "2", title: "Reforma do Móvel", desc: "Polimento francês, envernizamento e tratamento contra pragas." },
                { num: "3", title: "Mecanismo", desc: "Troca de feltros, embuchamento e regulagem de peso das teclas." }
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-6">
                  <span className="text-gradient-gold font-heading text-4xl leading-none mt-1 opacity-80">{item.num}</span>
                  <div>
                    <strong className="block text-2xl mb-2 text-[var(--color-gold-light)] font-heading tracking-wide">{item.title}</strong>
                    <span className="text-[var(--color-cream)]/60 font-light leading-relaxed">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Link href="https://wa.me/5561996366598" className="btn-premium-gold px-10 py-5 text-[0.7rem] uppercase tracking-[0.2em] inline-block shadow-2xl">
                Agendar Avaliação
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-[var(--color-gold)]/10 blur-[100px] z-0 rounded-full"></div>
            <div className="h-[400px] relative rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[var(--color-gold)]/20 z-10">
               <Image src="/img/portfolio1.jpg" alt="Detalhe em madeira" fill className="object-cover" />
            </div>
            <div className="h-[400px] relative rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[var(--color-gold)]/20 mt-16 z-10">
               <Image src="/img/paubrasil.jpg" alt="Madeira Nobre" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a110a] relative overflow-hidden border-t border-[var(--color-gold)]/10">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity" style={{backgroundImage: "url('/img/portfolio3.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a110a]/80 to-[#0a110a] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4">Cordas & Acústica</span>
            <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-cream)] mb-6">Instrumentos de <span className="text-gradient-gold">Madeira</span></h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-[var(--color-cream)]/60 text-lg font-light leading-relaxed">Tratamos instrumentos de corda acústicos com o mesmo rigor e polimento dedicado aos nossos móveis de luxo.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Violões e Guitarras", d: "Colagem de cavalete, reparo de trincas no tampo harmônico, hidratação de escala, troca de trastes e regulagem geral." },
              { t: "Orquestrais", d: "Ajustes precisos em violinos, violas, violoncelos e contrabaixos acústicos. Ajuste de alma, cravelhas e verniz tradicional." },
              { t: "Restauração", d: "Reconstrução de partes danificadas utilizando madeiras compatíveis acusticamente e seladoras premium." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-luxury p-12 rounded-sm group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-heading text-3xl text-[var(--color-gold-light)] mb-6 relative z-10">{item.t}</h3>
                <p className="text-[var(--color-cream)]/60 font-light leading-relaxed relative z-10">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
