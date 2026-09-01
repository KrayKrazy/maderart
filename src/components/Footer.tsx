export default function Footer() {
  return (
    <footer className="bg-maderart-green-dark border-t border-maderart-yellow/20 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        <div>
          <h3 className="font-heading text-3xl text-maderart-yellow mb-4">Maderart</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            Marcenaria rústica e planejada, afinação e restauração de instrumentos. Tradição e precisão em cada detalhe.
          </p>
        </div>
        <div>
          <h4 className="text-white/90 text-xs uppercase tracking-[3px] mb-4 font-bold">Serviços</h4>
          <ul className="space-y-3">
            <li><a href="/#servicos" className="text-white/40 hover:text-maderart-yellow text-sm">Móveis Sob Medida</a></li>
            <li><a href="/instrumentos" className="text-white/40 hover:text-maderart-yellow text-sm">Pianos & Instrumentos</a></li>
            <li><a href="/#servicos" className="text-white/40 hover:text-maderart-yellow text-sm">Portas & Painéis</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white/90 text-xs uppercase tracking-[3px] mb-4 font-bold">Contato</h4>
          <ul className="space-y-3">
            <li><a href="https://wa.me/5561996366598" className="text-white/40 hover:text-maderart-yellow text-sm">(61) 99636-6598</a></li>
            <li><span className="text-white/40 text-sm">Santo Antônio do Descoberto, GO</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between text-white/20 text-xs">
        <p>&copy; {new Date().getFullYear()} Maderart — Rústico e Planejado. SAD, Brasília e Entorno.</p>
        <p>(61) 99636-6598</p>
      </div>
    </footer>
  );
}