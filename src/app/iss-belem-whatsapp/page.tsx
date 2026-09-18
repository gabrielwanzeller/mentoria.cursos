import type { Metadata } from "next"
import { IssBelemPage } from "../iss-belem/page"

export const metadata: Metadata = {
  title: "Mentoria ISS Belém",
  description: "Prepare-se para o primeiro concurso da história da SEFIN Belém com acompanhamento direto de um Auditor de Tribunal de Contas.",
}

export default function IssBelemWhatsappPage() {
  return <IssBelemPage directWhatsapp />
}
