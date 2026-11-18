import type { Metadata } from "next"
import { PreEditalLandingPage, type PreEditalLandingConfig } from "@/components/pre-edital-landing-page"

export const metadata: Metadata = {
  title: "Mentoria Concurso Unificado MA · Reta Final",
  description: "Reta final para o Concurso Unificado do Maranhão (STC e SEPLAN), banca FCC, prova prevista para 04/04/2027. Plano personalizado e acompanhamento direto de um Auditor aprovado em 4 concursos públicos.",
}

const config: PreEditalLandingConfig = {
  banner: "Edital publicado: Concurso Unificado do Maranhão, banca FCC. Inscrições de 14/12 a 29/01 e prova prevista para 04/04/2027.",
  heroTitle: "Reta final para o Concurso Unificado do Maranhão",
  heroSubtitle: "Mentoria individual com um Auditor do TCE-PE aprovado em 4 concursos. Plano personalizado para o seu cargo na STC ou na SEPLAN, ordenado pelo que a FCC mais cobra, até a prova de 04/04/2027.",
  highlights: ["STC e SEPLAN", "Banca FCC", "Prova prevista em 04/04/2027", "Turma de reta final com 20 vagas"],
  heroCta: "Quero uma das 20 vagas",
  heroNote: "Turma de reta final com 20 vagas. Acompanhamento individual e direto.",
  whatsappLink: "https://wa.me/5588988058933?text=Ol%C3%A1%2C%20Francisco%21%20Vi%20a%20mentoria%20para%20o%20Concurso%20Unificado%20do%20MA%20e%20tenho%20interesse.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  reasonsEyebrow: "STC e SEPLAN",
  reasonsTitle: "Os cargos que acompanho nesta reta final",
  reasons: [
    { title: "STC, Auditor Área Geral", description: "R$ 14.950,78 · 14 vagas (total + CR) · 30h. Graduação em Ciências Contábeis, Economia, Direito, TI ou Engenharia Civil, com registro profissional. Taxa de R$ 250." },
    { title: "STC, Auditor TI", description: "R$ 14.950,78 · 3 vagas (total + CR) · 30h. Diploma de nível superior em Tecnologia da Informação. Taxa de R$ 250." },
    { title: "STC, Auditor Engenharia", description: "R$ 14.950,78 · 3 vagas (total + CR) · 30h. Graduação em Engenharia Civil com registro profissional. Taxa de R$ 250." },
    { title: "SEPLAN, Analista de Planejamento e Finanças Públicas (Finanças e Controle)", description: "R$ 11.662,98 · 6 vagas (total + CR) · 40h. Graduação em Administração, Contabilidade, Direito ou Economia, com pós-graduação em Orçamento Público e Finanças Públicas ou equivalente. Taxa de R$ 180." },
    { title: "SEPLAN, Analista de Planejamento e Finanças Públicas (Planejamento e Orçamento)", description: "R$ 11.662,98 · 5 vagas (total + CR) · 40h. Mesmos requisitos do cargo de Finanças e Controle. Taxa de R$ 180." },
    { title: "SEPLAN, Especialista em Gestão Pública", description: "R$ 11.662,98 · 8 vagas (total + CR) · 40h. Graduação em qualquer área, com pós-graduação em Gestão Pública ou equivalente. Taxa de R$ 180." },
  ],
  reasonsFootnote: "Confira a formação exigida e a lotação no edital. O candidato só pode se inscrever em um cargo por período de prova, e não há troca de cargo nem devolução da taxa após a inscrição.",
  examSection: {
    title: "Como é a prova",
    intro: "Calendário previsto: inscrições de 14/12/2026 a 29/01/2027 · pagamento até 01/02/2027 · prova objetiva e discursiva em 04/04/2027. Datas prováveis, sujeitas a alteração.",
    items: [
      { title: "STC", description: "Objetiva com 30 questões de Conhecimentos Gerais e 50 de Específicos, mais Estudo de Caso com 2 questões de até 30 linhas." },
      { title: "SEPLAN", description: "Objetiva com 20 questões de Gerais e 30 de Específicos, mais Redação de 20 a 30 linhas." },
      { title: "Conhecimentos Gerais", description: "Língua Portuguesa, Matemática e Raciocínio Lógico, Geografia e História do Maranhão e Noções de Informática. O Auditor TI não faz Informática." },
    ],
  },
  offerings: [
    { title: "Plano de estudos 100% personalizado", description: "Plano feito para o seu cargo, a sua base e a sua rotina, com metas na ordem dos assuntos que a FCC mais cobra, até 04/04." },
    { title: "Acesso ao curso do Estratégia Concursos", description: "Conteúdo completo para avançar nas disciplinas do seu cargo." },
    { title: "Raio-X da FCC", description: "Análise do perfil da FCC e dos assuntos que mais aparecem nas provas de controle e gestão pública." },
    { title: "Orientação para discursiva", description: "Orientação estratégica para o Estudo de Caso da STC e para a Redação da SEPLAN, com materiais de apoio para treinar. Não inclui correção individual." },
    { title: "Lives estratégicas", description: "Encontros ao vivo com a turma para revisão, resolução de questões e ajustes de rota até a prova." },
    { title: "Suporte direto comigo", description: "Atendimento de segunda a segunda, sem bot e sem fila." },
    { title: "Live de análise do edital", description: "Mapeamos juntos as disciplinas, os pesos e as prioridades do seu cargo." },
    { title: "Relatório de desempenho", description: "Acompanhamento do seu progresso a cada 45 dias, com ajuste de rota quando necessário." },
  ],
  bonuses: [
    { title: "Rota adaptável", description: "Se o edital for retificado, o plano é ajustado sem custo." },
    { title: "Raio-X da FCC para o Concurso Unificado do Maranhão", description: "Os assuntos mais cobrados e os padrões da banca para STC e SEPLAN." },
    { title: "E-book de apostas para a reta final", description: "Os temas com maior chance de aparecer até a prova." },
    { title: "E-book de jurisprudência comentada", description: "Jurisprudência explicada de forma direta e aplicada à prova." },
  ],
  faqs: [
    { question: "O edital saiu, ainda dá tempo?", answer: "Dá. A prova está prevista para 04/04/2027, e são mais de quatro meses de preparação. Quem organiza o estudo agora chega com base, revisão e discursiva treinada." },
    { question: "Qual cargo posso escolher?", answer: "Cada cargo tem uma exigência de formação, descrita no edital. Se tiver dúvida sobre o enquadramento da sua graduação, confirme com o SAC da FCC antes de pagar a inscrição." },
    { question: "Posso me inscrever na STC e na SEPLAN?", answer: "O edital permite um único cargo por período de aplicação, e as duas objetivas são pela manhã. Você precisa escolher um." },
    { question: "Sou da área de TI. Qual a diferença na preparação?", answer: "O Auditor TI tem conteúdo próprio (governança, auditoria de TI, segurança, banco de dados, redes) e não faz Noções de Informática. O plano é montado para a sua área." },
    { question: "Sou iniciante. Posso entrar?", answer: "Sim, desde que tenha pelo menos 3 horas por dia para estudar." },
    { question: "Como funciona o suporte?", answer: "Direto comigo pelo WhatsApp, de segunda a segunda." },
    { question: "E se eu não passar?", answer: "Nenhuma mentoria pode garantir aprovação. O que garanto é método, acompanhamento e um plano feito para a banca." },
  ],
  closingTitle: "A prova é em 04/04. O tempo está correndo.",
  closingText: "Turma de reta final com 20 vagas, porque o acompanhamento é individual. Me chama no WhatsApp que eu te explico como funciona e monto o seu plano.",
  footerNote: "Turma de reta final com 20 vagas.",
}

export default function UnificadoMaPage() {
  return <PreEditalLandingPage config={config} />
}
