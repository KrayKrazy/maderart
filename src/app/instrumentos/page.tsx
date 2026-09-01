import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luthieria & Restauração | Maderart",
  description: "Especialistas em manutenção, afinação e reforma de pianos e instrumentos de madeira em Santo Antônio do Descoberto (SAD) e Brasília.",
};

export default function Instrumentos() {
  return (
    <>
      <section className="relative h-[65vh] w-full bg-[var(--color-green-dark)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/img/portfolio2.jpg" alt="Instrumentos" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[var(--color-green-dark)] via-[rgba(26,46,26,0.6)] to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mt-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(200,149,42,0.15)] text-[var(--color-gold-light)] text-xs font-bold uppercase tracking-[3px] mb-6 border border-[rgba(200,149,42,0.3)]">
            LUTHIERIA PREMIUM
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5rem] text-[var(--color-gold)] mb-6 leading-[1.1] drop-shadow-2xl">
            AFINAÇÃO & <br/>RESTAURAÇÃO
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            A precisão da marcenaria de alto nível aplicada à acústica e reforma de pianos e instrumentos musicais clássicos.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[4px] text-[var(--color-gold)] mb-3">Mestre Pianista</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-green-dark)] mb-6">Pianos: Afinação e Restauração Completa</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mb-8"></div>
            
            <p className="text-[var(--color-green-dark)]/80 text-lg leading-relaxed mb-8">
              O piano é uma obra de engenharia complexa. Na Maderart, unimos nossa expertise em madeiras nobres ao conhecimento técnico de luthieria para oferecer um serviço completo para o seu instrumento, mantendo a afinação impecável e a madeira lustrosa.
            </p>
            <ul className="space-y-6 mb-10 text-[var(--color-green-dark)]/90 font-medium">
              <li className="flex items-start gap-4">
                <span className="text-[var(--color-gold)] font-heading text-3xl leading-none mt-1">1</span>
                <div>
                  <strong className="block text-xl mb-1">Afinação Profissional</strong>
                  <span className="text-sm opacity-80">Ajuste preciso da tensão das cordas para garantir o tom perfeito e a harmonia do instrumento.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--color-gold)] font-heading text-3xl leading-none mt-1">2</span>
                <div>
                  <strong className="block text-xl mb-1">Reforma do Móvel</strong>
                  <span className="text-sm opacity-80">Restauração da estrutura de madeira, polimento francês e envernizamento com acabamento de luxo.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--color-gold)] font-heading text-3xl leading-none mt-1">3</span>
                <div>
                  <strong className="block text-xl mb-1">Manutenção de Mecanismo</strong>
                  <span className="text-sm opacity-80">Troca de feltros, embuchamento, reparo de martelos e regulagem de peso das teclas.</span>
                </div>
              </li>
            </ul>
            <Link href="https://wa.me/5561996366598?text=Olá!%20Gostaria%20de%20falar%20sobre%20afinação%20e%20reforma%20de%20piano." className="btn-gold px-10 py-4 rounded font-bold uppercase tracking-wider inline-block">
              Agendar Avaliação
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-80 relative rounded-2xl overflow-hidden shadow-2xl">
               <Image src="/img/portfolio1.jpg" alt="Detalhe em madeira" fill className="object-cover" />
            </div>
            <div className="h-80 relative rounded-2xl overflow-hidden shadow-2xl mt-12">
               <Image src="/img/paubrasil.jpg" alt="Madeira Nobre" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-green-dark)] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "url('/img/portfolio3.jpg')", backgroundSize: "cover"}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="block text-xs font-bold uppercase tracking-[4px] text-[var(--color-gold)] mb-3">Cordas & Acústica</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-gold)] mb-6">Manutenção em Instrumentos de Madeira</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-white/60 text-lg">Tratamos instrumentos de corda acústicos com o mesmo rigor, respeito e técnica de polimento que dedicamos aos nossos móveis de alto padrão.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-2xl hover:border-[var(--color-gold)] transition-colors duration-500">
              <h3 className="font-heading text-3xl text-[var(--color-gold-light)] mb-4">Violões e Guitarras</h3>
              <p className="text-white/70 leading-relaxed">Colagem de cavalete, reparo de trincas no tampo harmônico, hidratação de escala, troca de trastes e regulagem geral de braço (tensor).</p>
            </div>
            <div className="glass-panel p-10 rounded-2xl hover:border-[var(--color-gold)] transition-colors duration-500">
              <h3 className="font-heading text-3xl text-[var(--color-gold-light)] mb-4">Orquestrais</h3>
              <p className="text-white/70 leading-relaxed">Ajustes precisos em violinos, violas, violoncelos e contrabaixos acústicos. Ajuste de alma, cravelhas, cavalete e restauração de verniz tradicional.</p>
            </div>
            <div className="glass-panel p-10 rounded-2xl hover:border-[var(--color-gold)] transition-colors duration-500">
              <h3 className="font-heading text-3xl text-[var(--color-gold-light)] mb-4">Restauração</h3>
              <p className="text-white/70 leading-relaxed">Para instrumentos que sofreram quedas ou ação do tempo. Reconstrução de partes danificadas utilizando madeiras compatíveis acusticamente e seladoras nobres.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}