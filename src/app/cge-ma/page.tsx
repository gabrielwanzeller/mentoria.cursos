import type { Metadata } from "next"
import { PreEditalLandingPage, type PreEditalLandingConfig } from "@/components/pre-edital-landing-page"

export const metadata: Metadata = {
  title: "Mentoria CGE-MA · Pré-Edital",
  description: "Prepare-se antes do edital da CGE-MA com plano personalizado no perfil da FCC e acompanhamento direto de um Auditor aprovado em 4 concursos públicos.",
}

const config: PreEditalLandingConfig = {
  banner: "Edital iminente: a FCC é a banca do concurso da CGE-MA, dentro do Concurso Unificado do Maranhão. Comece antes do edital.",
  heroTitle: "Chegue no edital da CGE-MA preparado no perfil da FCC",
  heroSubtitle: "Mentoria individual com um Auditor do TCE-PE aprovado em 4 concursos. Plano personalizado, ordenado pelos assuntos que a FCC mais cobra, para você começar agora e chegar no edital com vantagem.",
  highlights: ["Auditor do Estado", "20 vagas imediatas + 80 em cadastro reserva", "Remuneração que pode chegar a R$ 20 mil", "Banca FCC"],
  heroCta: "Quero me preparar para a CGE-MA",
  whatsappLink: "https://wa.me/5588988058933?text=Ol%C3%A1%2C%20Francisco%21%20Vi%20a%20mentoria%20para%20a%20CGE-MA%20e%20tenho%20interesse.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  reasons: [
    { title: "Concurso raro", description: "O último concurso para Auditor do Estado foi em 2013." },
    { title: "A banca está definida", description: "A FCC foi confirmada como organizadora do Concurso Unificado do Maranhão, que inclui a CGE-MA." },
    { title: "20 vagas + 80 em cadastro reserva", description: "Oportunidades para Auditor do Estado nas áreas Geral, Tecnologia da Informação e Engenharia." },
    { title: "Remuneração que pode chegar a R$ 20 mil", description: "Inicial de R$ 14.950,78 mais gratificações, podendo chegar a R$ 20 mil." },
    { title: "Carreira de controle", description: "Fiscalização da aplicação dos recursos públicos do estado, com estabilidade." },
    { title: "Vantagem antes do edital", description: "Quem começa só depois do edital tem poucas semanas para estudar tudo. Quem começa agora constrói a base com calma." },
  ],
  offerings: [
    { title: "Plano de estudos 100% personalizado", description: "Planejamento de acordo com sua base, rotina, área e os assuntos mais cobrados." },
    { title: "Acesso ao curso do Estratégia Concursos", description: "Conteúdo completo para avançar nas disciplinas do concurso." },
    { title: "Raio-X da FCC", description: "Análise do perfil da banca e dos assuntos que mais aparecem nas provas." },
    { title: "Orientação para discursiva", description: "Direcionamento estratégico e materiais de apoio para treinar desde já." },
    { title: "Lives estratégicas", description: "Encontros ao vivo para revisão, questões e ajustes de rota." },
    { title: "Suporte direto comigo", description: "Atendimento de segunda a segunda, sem bot e sem fila." },
    { title: "Rota ajustável e e-books", description: "Plano adaptável e materiais de jurisprudência e apostas." },
  ],
  bonuses: [
    { title: "Troca de plano sem custo", description: "Se você mudar de concurso, seu planejamento é ajustado sem custo." },
    { title: "Raio-X da FCC para a CGE-MA", description: "Os assuntos mais cobrados e os padrões da banca para este concurso." },
    { title: "E-book de apostas pós-edital", description: "Os temas com maior chance de aparecer depois da publicação do edital." },
    { title: "E-book de jurisprudência comentada", description: "Jurisprudência explicada de forma direta e aplicada à prova." },
  ],
  faqs: [
    { question: "O edital ainda não saiu. Vale começar agora?", answer: "Sim. Com a banca definida, o perfil da FCC e o conteúdo típico de controle já mostram o que estudar. Quem começa antes chega no edital com a base pronta." },
    { question: "Sou da área de TI ou Engenharia. A mentoria serve para mim?", answer: "Sim. O plano é montado para a sua área e ajustado ao edital quando ele sair." },
    { question: "E se o edital mudar o conteúdo?", answer: "O plano é ajustado assim que o edital sair, sem custo." },
    { question: "Sou iniciante. Posso entrar?", answer: "Sim, desde que tenha pelo menos 3 horas por dia para estudar." },
    { question: "Como funciona o suporte?", answer: "Direto comigo pelo WhatsApp, de segunda a segunda." },
    { question: "E se eu não passar?", answer: "Nenhuma mentoria pode garantir aprovação. O que garanto é método, acompanhamento e um plano feito para a banca." },
  ],
  closingTitle: "O edital da CGE-MA pode sair a qualquer momento",
  closingText: "As vagas da mentoria são limitadas, porque o acompanhamento é individual. Me chama no WhatsApp que eu te explico como funciona e monto o seu plano.",
}

export default function CgeMaPage() {
  return <PreEditalLandingPage config={config} />
}
