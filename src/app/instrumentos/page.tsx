import InstrumentosClient from "./InstrumentosClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luthieria & Restauração | Maderart",
  description: "Especialistas em manutenção, afinação e reforma de pianos e instrumentos de madeira em Santo Antônio do Descoberto (SAD) e Brasília.",
};

export default function Instrumentos() {
  return <InstrumentosClient />;
}