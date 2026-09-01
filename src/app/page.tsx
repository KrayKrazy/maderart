import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-[85vh] w-full bg-maderart-green flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/img/hero.jpg" alt="Maderart" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-maderart-yellow mb-6 drop-shadow-lg">
            MADERART
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 font-medium tracking-wide">
            RÚSTICO E PLANEJADO
          </p>
          <Link href="https://wa.me/5561996366598" className="inline-block bg-maderart-yellow hover:bg-maderart-yellow-hover text-maderart-green-dark font-heading text-xl px-10 py-4 rounded-md shadow-2xl transition-transform hover:scale-105 uppercase tracking-wide">
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      <section className="bg-maderart-green-dark text-white py-8 border-b border-maderart-yellow/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-maderart-yellow text-2xl mb-2">🌳</span>
            <span className="text-sm font-bold uppercase tracking-wider">Madeiras Nobres</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-maderart-yellow text-2xl mb-2">📏</span>
            <span className="text-sm font-bold uppercase tracking-wider">Sob Medida</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-maderart-yellow text-2xl mb-2">🎹</span>
            <span className="text-sm font-bold uppercase tracking-wider">Luthieria & Pianos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-maderart-yellow text-2xl mb-2">🏆</span>
            <span className="text-sm font-bold uppercase tracking-wider">Tradição</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 bg-maderart-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image src="/img/madeiras.jpg" alt="Madeiras" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-maderart-green-dark mb-6">Tradição que se mede em décadas</h2>
            <div className="w-20 h-2 bg-maderart-yellow mb-8 rounded-full"></div>
            <p className="text-lg text-maderart-text/80 mb-6 leading-relaxed">
              A Maderart nasceu da paixão pela madeira e pelo trabalho artesanal feito com cuidado e precisão. 
              Trabalhamos com as espécies mais nobres do Brasil, respeitando cada fio e veio natural da madeira.
            </p>
            <p className="text-lg text-maderart-text/80 leading-relaxed">
              Além de móveis sob medida e rústicos, expandimos nossa excelência para a <strong>restauração e manutenção de instrumentos musicais</strong>. 
              Seja para construir a sua cozinha dos sonhos ou afinar o seu piano, a precisão é a nossa marca registrada.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 bg-maderart-green text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-maderart-yellow mb-6">Nossos Serviços</h2>
          <div className="w-20 h-2 bg-maderart-yellow mb-16 rounded-full mx-auto"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-10 rounded-xl border border-maderart-yellow/20 hover:border-maderart-yellow/60 transition-colors">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Móveis Rústicos</h3>
              <p className="text-white/70">Mesas de jantar, aparadores e peças exclusivas em madeira maciça (Pau Brasil, Mogno, Ipê).</p>
            </div>
            <div className="bg-white/5 p-10 rounded-xl border border-maderart-yellow/20 hover:border-maderart-yellow/60 transition-colors">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Planejados</h3>
              <p className="text-white/70">Desenvolvemos móveis planejados de excelência para cozinhas, quartos e escritórios.</p>
            </div>
            <Link href="/instrumentos" className="block bg-white/5 p-10 rounded-xl border border-maderart-yellow/20 hover:bg-maderart-yellow/10 hover:border-maderart-yellow transition-all cursor-pointer">
              <h3 className="font-heading text-2xl text-maderart-yellow mb-4">Luthieria & Pianos</h3>
              <p className="text-white/70">Afinação, reforma e manutenção especializada em pianos e instrumentos de madeira. <span className="text-maderart-yellow mt-2 block font-bold">Saiba mais &rarr;</span></p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}