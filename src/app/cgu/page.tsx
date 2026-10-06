import Image from "next/image"
import type { Metadata } from "next"
import franciscoImage from "../../../public/tce-pb/francisco-w-bluer-v3.png"
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Crosshair,
  FilePenLine,
  GraduationCap,
  HelpCircle,
  Landmark,
  LibraryBig,
  MessageCircle,
  MonitorPlay,
  Presentation,
  RefreshCw,
  Scale,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mentoria CGU · Reta Final",
  description: "Prepare-se para o concurso de Auditor Federal de Finanças e Controle da CGU com acompanhamento direto de um Auditor aprovado em três concursos de controle elaborados pelo CEBRASPE.",
}

const CTA_LINK = "https://chat.whatsapp.com/KH1wjqT8WCkCpOcGcG4qB2?mode=gi_t"

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Subsídio acima de R$ 20 mil",
    description: "Auditor Federal de Finanças e Controle, carreira de nível superior com subsídio inicial acima de R$ 20 mil mensais.",
  },
  {
    icon: Landmark,
    title: "Carreira federal e estável",
    description: "Cargo efetivo no órgão central de controle interno do Governo Federal, com estabilidade, progressão e um trabalho que faz diferença no uso do dinheiro público.",
  },
  {
    icon: CalendarClock,
    title: "Banca contratada, edital iminente",
    description: "A CEBRASPE foi oficializada em 29 de setembro de 2026. A janela de preparação está aberta agora, e quem estuda antes do edital chega à prova com meses de vantagem.",
  },
  {
    icon: Users,
    title: "60 vagas, cerca de 25 mil inscritos previstos",
    description: "Mais de 400 candidatos por vaga. Estudar muito não basta, é preciso estudar do jeito que a CEBRASPE cobra.",
  },
  {
    icon: FilePenLine,
    title: "A discursiva vai separar os aprovados",
    description: "A prova terá redação de 30 linhas e estudo de caso prático. Quem deixa para treinar discursiva depois do edital chega atrasado.",
  },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado para a CGU",
    description: "Você responde um questionário individual sobre sua base, sua rotina e seu tempo, e recebe um plano feito exclusivamente para você, com metas na ordem dos assuntos mais cobrados pela CEBRASPE.",
    bonus: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direto Comigo, de Segunda a Segunda",
    description: "Sem atendente, sem resposta automática, sem orientador anônimo. Quando você manda mensagem, quem responde sou eu, um Auditor do TCE-PE aprovado três vezes pela CEBRASPE.",
    bonus: false,
  },
  {
    icon: GraduationCap,
    title: "Acesso ao Estratégia Concursos Premium",
    description: "A melhor plataforma de concursos do Brasil já está no pacote. Você não paga separado. Login próprio, acesso completo.",
    bonus: false,
  },
  {
    icon: BookOpenCheck,
    title: "Plataforma com Revisões e Banco de Questões",
    description: "Revisões programadas para você não esquecer o que estudou e questões para treinar no estilo da banca.",
    bonus: false,
  },
  {
    icon: ClipboardCheck,
    title: "Correção de Discursiva e Materiais",
    description: "Duas correções de discursiva, incluindo redação e estudo de caso, feitas por mim, que fui 1º lugar nas discursivas do TCE-PA em prova CEBRASPE.",
    bonus: false,
  },
  {
    icon: MonitorPlay,
    title: "Lives Exclusivas",
    description: "Encontros ao vivo com a turma limitada, com direcionamento de quem passou em três concursos de controle pela mesma banca da CGU.",
    bonus: false,
  },
  {
    icon: Scale,
    title: "Relatório de Desempenho Individual",
    description: "Acompanhamento do seu progresso: o que evoluiu, o que precisa de atenção e correção de rota quando necessário.",
    bonus: false,
  },
  {
    icon: Presentation,
    title: "Live de Análise do Edital assim que for publicado",
    description: "Assim que o edital da CGU sair, a gente se reúne ao vivo para mapear disciplinas, pesos, cronograma e prioridades, e eu ajusto o seu plano.",
    bonus: false,
  },
  {
    icon: RefreshCw,
    title: "🎁 Rota Adaptável",
    description: "Mudou de órgão no caminho? Refaço o seu plano sem custo.",
    bonus: true,
  },
  {
    icon: Crosshair,
    title: "🎁 Raio-X da banca CEBRASPE",
    description: "Análise dos temas, padrões de cobrança e pegadinhas mais recorrentes da CEBRASPE em provas de controle.",
    bonus: true,
  },
  {
    icon: Target,
    title: "🎁 E-book de Apostas Pós-Edital",
    description: "Os temas com maior chance de aparecer, assim que o edital for publicado.",
    bonus: true,
  },
  {
    icon: LibraryBig,
    title: "🎁 E-book de Jurisprudência Comentada",
    description: "A jurisprudência que a CEBRASPE costuma cobrar em provas de controle, explicada de forma direta.",
    bonus: true,
  },
]

const approvals = [
  {
    icon: Trophy,
    title: "TCE-PA · 1º lugar · CEBRASPE",
    description: "Aprovado em 1º lugar nas provas objetivas e discursivas, aos 23 anos.",
  },
  {
    icon: BadgeCheck,
    title: "TCE-PB · Aprovado · CEBRASPE",
    description: "Mais uma aprovação em Tribunal de Contas pela mesma banca da CGU.",
  },
  {
    icon: ShieldCheck,
    title: "TCE-PE · Auditor · CEBRASPE",
    description: "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil.",
  },
]

const testimonials = [
  {
    name: "Lucas",
    role: "Aprovado como Auditor do TCE-PA",
    text: "6 meses de estudo. Do zero à aprovação num dos concursos mais disputados do Norte do Brasil.",
  },
  {
    name: "Maria Sena",
    role: "2º lugar · TJ-AP",
    text: "Segundo lugar num concurso estadual disputadíssimo. Resultado de quem estuda com direcionamento real.",
  },
  {
    name: "Marcos Soares",
    role: "Aprovado como Analista do TJ-PA",
    text: "Mais um aluno que chegou com método e saiu com aprovação.",
  },
  {
    name: "Sarah",
    role: "Aprovada como Analista da ALECE",
    text: "Minha primeira aluna. Prova de que o método funciona desde o início.",
  },
]

const faqs = [
  {
    question: "O edital ainda não saiu. Vale começar agora?",
    answer: "Vale, e muito. A banca já foi contratada e o edital é iminente. Quem começa antes constrói a base com calma e chega com a discursiva treinada. Quem espera o edital começa atrasado contra milhares de candidatos.",
  },
  {
    question: "Vou ter que morar em Brasília?",
    answer: "As vagas contemplam o órgão central, em Brasília, e unidades regionais. A distribuição oficial sai no edital, e na mentoria a gente avalia sua estratégia de lotação junto com o plano.",
  },
  {
    question: "A prova vai ser certo ou errado ou múltipla escolha?",
    answer: "O Termo de Referência prevê as duas possibilidades, e o formato só será definido no edital. Por isso o seu treino vai preparar você para os dois.",
  },
  {
    question: "Consigo estudar sozinho?",
    answer: "Talvez. Mas quanto tempo você vai perder descobrindo o que a CEBRASPE cobra? Eu passei três vezes por ela em concursos de controle, e esse atalho é o que entrego para você.",
  },
  {
    question: "Sou iniciante. É pra mim?",
    answer: "É, desde que você tenha disposição para estudar no mínimo 3 horas por dia, com disciplina e constância. O plano é montado a partir da sua base, seja ela qual for.",
  },
  {
    question: "O suporte é realmente personalizado?",
    answer: "Quando você manda mensagem, quem responde sou eu. Direto no seu WhatsApp, de segunda a segunda, sem atendente.",
  },
  {
    question: "E se eu não for aprovado?",
    answer: "Nenhuma mentoria pode prometer aprovação. O que eu entrego é método, material completo e acompanhamento direto de quem passou três vezes pela banca da CGU. O resto depende da sua dedicação.",
  },
]

function Cta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={CTA_LINK}
      data-gtm="click_whatsapp"
      className={`group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 ${dark ? "bg-[#1e1f5c] hover:bg-[#151642]" : "bg-[#ff4b00] hover:bg-[#e64300]"}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

export default function CguPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#ff4b00] selection:text-white pb-12">
      <section className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c] px-5 pb-20 pt-16 text-center md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-2xl -translate-x-1/2 rounded-full bg-[#ff4b00]/20 blur-[120px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 md:gap-8">
          <span className="inline-flex max-w-[90vw] items-center justify-center rounded-full bg-[#ff4b00] px-4 py-1.5 text-center text-xs font-semibold leading-snug tracking-wide text-white shadow-lg shadow-[#ff4b00]/20 sm:px-5 sm:py-2 sm:text-sm">
            🚨 Banca da CGU definida: CEBRASPE
          </span>
          <h1 className="w-full text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            O concurso da CGU está chegando. <span className="bg-gradient-to-r from-[#ff4b00] to-[#ff7a45] bg-clip-text text-transparent">Você está preparado?</span>
          </h1>
          <p className="max-w-3xl text-base font-light leading-relaxed text-slate-300 sm:text-lg md:text-2xl">
            Auditor Federal de Finanças e Controle, com subsídio inicial acima de <span className="font-bold text-white">R$ 20 mil</span>. A CEBRASPE foi contratada em 29 de setembro de 2026 e o edital é iminente. São 60 vagas + CR, e quem começa agora chega na frente de quem vai esperar o edital.
          </p>
          <div className="mt-2 flex w-full flex-col items-center gap-3 md:mt-4 md:gap-4">
            <Cta>Entrar no grupo exclusivo da turma</Cta>
            <p className="text-sm font-medium text-white/60">Apenas 15 vagas. Mentoria de Reta Final com acompanhamento direto, sem reabertura.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 space-y-3 text-center md:mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Por que vale a pena</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1e1f5c] sm:text-3xl md:text-5xl">Vale a pena estudar para a CGU?</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:gap-5 md:rounded-3xl md:p-8">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#f0f1fa] text-[#2e2f83] transition-colors group-hover:bg-[#ff4b00] group-hover:text-white md:h-14 md:w-14 md:rounded-2xl">
                    <Icon className="h-5 w-5 md:h-7 md:w-7" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#1e1f5c]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 md:text-base">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-10 text-center md:mt-16"><Cta dark>Quero uma das 15 vagas</Cta></div>
        </div>
      </section>

      <section className="mx-3 rounded-[2rem] bg-slate-100 px-5 py-16 md:mx-8 md:rounded-[3rem] md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 space-y-4 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Tudo incluso</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">O que você vai receber</h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">Sem precisar comprar mais nada. O pacote completo para a sua preparação.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {offerings.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className={`flex flex-col gap-6 rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.bonus ? "border-amber-300 bg-amber-50 ring-2 ring-amber-400/40" : "border-slate-200 bg-white"}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bonus ? "bg-amber-100 text-amber-700" : "bg-orange-100 text-[#ff4b00]"}`}><Icon className="h-6 w-6" /></div>
                  <div>
                    {item.bonus && <span className="mb-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-amber-700">Bônus exclusivo</span>}
                    <h3 className={`mb-3 text-xl font-bold leading-tight ${item.bonus ? "text-amber-950" : "text-[#1e1f5c]"}`}>{item.title}</h3>
                    <p className={`text-base leading-relaxed ${item.bonus ? "text-amber-900" : "text-slate-600"}`}>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-20 text-center"><Cta>Quero uma das vagas</Cta></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0f2c] px-5 py-16 shadow-2xl md:px-6 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#2e2f83] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start space-y-6 text-left">
              <span className="inline-flex rounded-full border border-[#ff4b00] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Quem vai te guiar</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Eu sou Francisco.</h2>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">Três aprovações em concursos de controle, todas pela CEBRASPE, a mesma banca da CGU. Hoje sou Auditor do TCE-PE, e cheguei aqui passando pelo tipo de prova que você vai enfrentar.</p>
              <div className="rounded-full bg-[#ff4b00] px-5 py-2 text-sm font-extrabold text-white shadow-lg shadow-[#ff4b00]/20">3 aprovações em controle. 3 vezes CEBRASPE.</div>
              <div className="mt-6 flex w-full flex-col gap-6">
                {approvals.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="group flex items-start gap-5">
                      <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#2e2f83] bg-[#1e1f5c] text-[#ff4b00] shadow-lg transition-colors group-hover:bg-[#ff4b00] group-hover:text-white"><Icon className="h-6 w-6" /></div>
                      <div><h3 className="mb-1 text-xl font-bold text-white">{item.title}</h3><p className="text-base leading-relaxed text-slate-300">{item.description}</p></div>
                    </div>
                  )
                })}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
                <p className="leading-relaxed">Antes disso, fui reprovado no TCE-CE. Estudava muito e errava no que importava. Mudei o método e, seis meses depois, fui 1º lugar no TCE-PA. É esse método que aplico com cada aluno.</p>
              </div>
              <Cta>Quero estudar com quem conhece a CEBRASPE</Cta>
            </div>
            <div className="relative mt-12 flex justify-center lg:ml-10 lg:mt-0 lg:justify-end">
              <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" />
              <Image src={franciscoImage} alt="Francisco José, Auditor do TCE-PE aprovado três vezes pela CEBRASPE" width={1000} height={1000} sizes="(max-width: 1023px) 100vw, 50vw" className="relative z-0 max-h-[1000px] w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Aprovações que falam por si</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">Quem estudou com método aprovou.</h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">Resultados reais de quem acreditou no direcionamento.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {testimonials.map((item) => (
              <div key={item.name} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-2 flex gap-1 text-[#ff4b00]">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div>
                <p className="flex-grow text-base italic leading-relaxed text-slate-700">&quot;{item.text}&quot;</p>
                <div className="mt-6 border-t border-slate-100 pt-6"><p className="text-lg font-bold text-[#1e1f5c]">{item.name}</p><p className="mt-1 text-sm font-semibold leading-snug text-[#ff4b00]">{item.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-16 md:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Perguntas frequentes</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">Ainda tem alguma dúvida?</h2>
          </div>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="group flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f0f1fa] text-[#2e2f83] transition-colors group-hover:bg-[#ff4b00] group-hover:text-white md:h-14 md:w-14"><HelpCircle className="h-6 w-6" /></div>
                <div><h3 className="mb-2 text-lg font-bold text-[#1e1f5c] md:text-xl">{faq.question}</h3><p className="text-base leading-relaxed text-slate-600 md:text-lg">{faq.answer}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center"><Cta>Tirar outra dúvida com o Francisco</Cta></div>
        </div>
      </section>

      <section className="relative mb-8 overflow-hidden bg-white px-5 py-16 md:mb-12 md:px-6 md:py-24">
        <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-orange-50 blur-3xl" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-[#ff4b00]"><Clock className="h-8 w-8" /></div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#ff4b00]">O tempo está passando</p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">O concurso da CGU está chegando.</h2>
          <p className="mb-10 text-xl leading-relaxed text-slate-600">A CEBRASPE já foi contratada e o edital é iminente. Quem entra agora chega com meses de vantagem sobre quem só vai começar depois que o edital for publicado.</p>
          <div className="mb-12 inline-block max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-8 py-8 text-left text-lg text-amber-950 shadow-sm">
            <p className="mb-4 text-xl font-bold">Sabe o que eu aprendi sendo reprovado antes de passar em primeiro lugar?</p>
            <p className="mb-4 leading-relaxed">Ninguém começa preparado. Ninguém tem o momento perfeito.</p>
            <p className="leading-relaxed">O que separa quem passa de quem fica tentando é a decisão de começar, mesmo sem ter tudo resolvido.</p>
          </div>
          <Cta>Não vou perder mais tempo</Cta>
          <p className="mt-4 text-sm text-slate-500">Apenas 15 vagas para acompanhamento. Sem reabertura.</p>
        </div>
      </section>

      <section className="bg-[#1e1f5c] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Vagas</p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-slate-200">Mentoria de Reta Final · CGU</p>
            <p className="text-5xl font-extrabold text-white md:text-6xl">Apenas 15 vagas</p>
            <p className="text-lg text-slate-300">Acompanhamento direto comigo, sem atendente e sem resposta automática.</p>
          </div>
          <p className="text-base font-medium text-slate-300">Turma única, sem reabertura e sem lista de espera.</p>
          <Cta>Garantir minha vaga agora</Cta>
        </div>
      </section>

      <footer className="mt-auto border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-500">
        <p className="mb-1 font-semibold text-slate-700">Apenas 15 vagas para esta turma.</p>
        <p>Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
