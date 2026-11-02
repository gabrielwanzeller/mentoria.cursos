import type { Metadata } from "next"
import { PreEditalLandingPage, type PreEditalLandingConfig } from "@/components/pre-edital-landing-page"

export const metadata: Metadata = {
  title: "Mentoria TJ-AL · Pré-Edital",
  description: "Prepare-se antes do edital do TJ-AL com plano personalizado no perfil da FCC e acompanhamento direto de um Auditor aprovado em 4 concursos públicos.",
}

const config: PreEditalLandingConfig = {
  banner: "Edital iminente: a FCC foi escolhida como banca do concurso do TJ-AL. Comece antes do edital.",
  heroTitle: "Chegue no edital do TJ-AL preparado no perfil da FCC",
  heroSubtitle: "Mentoria individual com um Auditor do TCE-PE aprovado em 4 concursos. Plano personalizado, ordenado pelos assuntos que a FCC mais cobra, para você começar agora e chegar no edital com vantagem.",
  highlights: ["Analista Judiciário", "Oficial de Justiça Avaliador e Contador", "Nível superior", "Banca FCC"],
  heroCta: "Quero me preparar para o TJ-AL",
  whatsappLink: "https://wa.me/5588988058933?text=Ol%C3%A1%2C%20Francisco%21%20Vi%20a%20mentoria%20para%20o%20TJ-AL%20e%20tenho%20interesse.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  reasons: [
    { title: "A banca está definida", description: "A contratação da FCC foi autorizada em outubro de 2026. Depois disso, o edital costuma sair rápido." },
    { title: "Cargos de nível superior", description: "Analista Judiciário nas áreas de Oficial de Justiça Avaliador e Contador." },
    { title: "Remuneração", description: "Carreira com remuneração que pode chegar a R$ 10 mil." },
    { title: "Prova com discursiva", description: "A FCC deve aplicar prova discursiva, e quem treina desde já sai na frente." },
    { title: "Vantagem antes do edital", description: "Quem começa só depois do edital tem poucas semanas para estudar tudo. Quem começa agora constrói a base com calma." },
  ],
  offerings: [
    { title: "Plano de estudos 100% personalizado", description: "Planejamento individual de acordo com sua base, rotina e tempo disponível." },
    { title: "Acesso ao curso do Estratégia Concursos", description: "Conteúdo completo para avançar nas disciplinas do concurso." },
    { title: "Raio-X da FCC", description: "Análise do perfil da banca e dos assuntos que mais aparecem nas provas." },
    { title: "Metas na ordem certa", description: "Ordenação das metas pelos assuntos mais cobrados pela FCC." },
    { title: "Orientação para discursiva", description: "Direcionamento estratégico e materiais de apoio para treinar desde já." },
    { title: "Lives estratégicas", description: "Encontros ao vivo para revisão, questões e ajustes de rota." },
    { title: "Suporte direto comigo", description: "Atendimento de segunda a segunda, sem bot e sem fila." },
    { title: "Rota ajustável e e-books", description: "Plano adaptável e materiais de jurisprudência e apostas." },
  ],
  bonuses: [
    { title: "Troca de plano sem custo", description: "Se você mudar de concurso, seu planejamento é ajustado sem custo." },
    { title: "Raio-X da FCC para o TJ-AL", description: "Os assuntos mais cobrados e os padrões da banca para este concurso." },
    { title: "E-book de apostas pós-edital", description: "Os temas com maior chance de aparecer depois da publicação do edital." },
    { title: "E-book de jurisprudência comentada", description: "Jurisprudência explicada de forma direta e aplicada à prova." },
  ],
  faqs: [
    { question: "O edital ainda não saiu. Vale começar agora?", answer: "Sim. Com a banca definida, o conteúdo do último edital e o perfil da FCC já mostram o que estudar. Quem começa antes chega no edital com a base pronta." },
    { question: "E se o edital mudar o conteúdo?", answer: "O plano é ajustado assim que o edital sair, sem custo." },
    { question: "Sou iniciante. Posso entrar?", answer: "Sim, desde que tenha pelo menos 3 horas por dia para estudar." },
    { question: "Como funciona o suporte?", answer: "Direto comigo pelo WhatsApp, de segunda a segunda." },
    { question: "E se eu não passar?", answer: "Nenhuma mentoria pode garantir aprovação. O que garanto é método, acompanhamento e um plano feito para a banca." },
  ],
  closingTitle: "O edital do TJ-AL pode sair a qualquer momento",
  closingText: "As vagas da mentoria são limitadas, porque o acompanhamento é individual. Me chama no WhatsApp que eu te explico como funciona e monto o seu plano.",
}

export default function TjAlPage() {
  return <PreEditalLandingPage config={config} />
}
