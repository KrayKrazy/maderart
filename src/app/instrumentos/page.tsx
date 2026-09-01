import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afinação e Reforma de Pianos e Instrumentos | Maderart",
  description: "Especialistas em manutenção, afinação e reforma de pianos e instrumentos de madeira em Santo Antônio do Descoberto (SAD) e Brasília.",
};

export default function Instrumentos() {
  return (
    <>
      <section className="relative h-[60vh] w-full bg-maderart-green-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* We use a generic wood background since we don't have a piano image yet, but styling fits */}
          <Image src="/img/portfolio2.jpg" alt="Instrumentos" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mt-10">
          <h1 className="font-heading text-4xl md:text-6xl text-maderart-yellow mb-6 drop-shadow-lg leading-tight">
            LUTHIERIA & RESTAURAÇÃO
          </h1>
          <p className="text-white text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
            A precisão da marcenaria de alto nível aplicada à afinação e reforma de pianos e instrumentos musicais.
          </p>
        </div>
      </section>

      <section className="py-24 bg-maderart-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-maderart-green-dark mb-6">Pianos: Afinação e Restauração Completa</h2>
            <div className="w-16 h-2 bg-maderart-yellow mb-8 rounded-full"></div>
            <p className="text-lg text-maderart-text/80 mb-6 leading-relaxed">
              O piano é uma obra de engenharia complexa. Na Maderart, unimos nossa expertise em madeiras nobres ao conhecimento técnico de luthieria para oferecer um serviço completo para o seu instrumento.
            </p>
            <ul className="space-y-4 mb-8 text-maderart-text/80">
              <li className="flex items-start gap-3">
                <span className="text-maderart-yellow font-bold text-xl">✓</span>
                <span><strong>Afinação Profissional:</strong> Ajuste preciso da tensão das cordas para garantir o tom perfeito e harmonia do instrumento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maderart-yellow font-bold text-xl">✓</span>
                <span><strong>Reforma do Móvel:</strong> Restauração da estrutura de madeira do piano, tratamento contra pragas, polimento e envernizamento com acabamento de luxo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maderart-yellow font-bold text-xl">✓</span>
                <span><strong>Manutenção de Mecanismo:</strong> Troca de feltros, embuchamento, reparo de martelos e regulagem de peso das teclas.</span>
              </li>
            </ul>
            <Link href="https://wa.me/5561996366598?text=Olá!%20Gostaria%20de%20falar%20sobre%20afinação%20e%20reforma%20de%20piano." className="inline-block bg-maderart-green hover:bg-maderart-green-dark text-maderart-yellow font-bold px-8 py-3 rounded text-sm tracking-wider uppercase transition-all shadow-lg">
              Agendar Avaliação do Piano
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
               <Image src="/img/portfolio1.jpg" alt="Detalhe em madeira" fill className="object-cover" />
            </div>
            <div className="h-64 relative rounded-lg overflow-hidden shadow-md mt-10">
               <Image src="/img/paubrasil.jpg" alt="Madeira Nobre" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-maderart-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-maderart-yellow mb-6">Manutenção em Instrumentos de Madeira</h2>
            <div className="w-20 h-2 bg-maderart-yellow mb-6 rounded-full mx-auto"></div>
            <p className="max-w-2xl mx-auto text-white/80">Tratamos instrumentos de corda acústicos com o mesmo rigor e respeito que dedicamos aos nossos móveis de alto padrão.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-maderart-green-dark p-8 rounded-xl border border-maderart-yellow/10">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Violões e Guitarras</h3>
              <p className="text-white/70 mb-4">Colagem de cavalete, reparo de trincas no tampo harmônico, hidratação de escala, troca de trastes e regulagem geral de braço (tensor).</p>
            </div>
            <div className="bg-maderart-green-dark p-8 rounded-xl border border-maderart-yellow/10">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Instrumentos Orquestrais</h3>
              <p className="text-white/70 mb-4">Ajustes em violinos, violas, violoncelos e contrabaixos acústicos. Ajuste de alma, cravelhas, cavalete e restauração de verniz tradicional.</p>
            </div>
            <div className="bg-maderart-green-dark p-8 rounded-xl border border-maderart-yellow/10">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Restauração Estrutural</h3>
              <p className="text-white/70 mb-4">Para instrumentos que sofreram quedas ou ação do tempo. Reconstrução de partes danificadas utilizando madeiras compatíveis acusticamente.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}