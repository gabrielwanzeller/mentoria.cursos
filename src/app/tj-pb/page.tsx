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
  title: "Mentoria TJ-PB · Reta Final",
  description: "Prepare-se para o concurso de Analista Judiciário do TJ-PB com acompanhamento direto de um Auditor aprovado em 4 concursos públicos. Plano de reta final de 3 meses, banca FGV, prova em 24 de janeiro de 2027.",
}

const CTA_LINK = "https://wa.me/5588988058933?text=Ol%C3%A1%2C%20Francisco%21%20Vi%20a%20mentoria%20para%20o%20TJ-PB%20e%20tenho%20interesse.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Remuneração de até R$ 11.526,14",
    description: "Salário de R$ 7.526,14 mais R$ 2.200 de auxílio-alimentação e R$ 1.800 de auxílio-saúde. Cargo efetivo com estabilidade no Tribunal de Justiça da Paraíba.",
  },
  {
    icon: Users,
    title: "50 vagas em 9 especialidades",
    description: "Judiciária, Contabilidade e Tecnologia da Informação em sete especialidades diferentes. Ampla janela de entrada independentemente da sua formação.",
  },
  {
    icon: BadgeCheck,
    title: "Banca definida: FGV",
    description: "Edital publicado, banca definida. Você já sabe o que esperar — prova objetiva com 60 questões e prova discursiva em 24 de janeiro. Quem começa agora estuda com calma e com direcionamento.",
  },
  {
    icon: CalendarClock,
    title: "Prova em 24 de janeiro — 3 meses de reta final",
    description: "Tempo suficiente para construir base sólida, treinar discursiva e chegar confiante. Quem começa agora tem margem. Quem espera chega atropelado.",
  },
  {
    icon: FilePenLine,
    title: "A discursiva vai separar os aprovados",
    description: "A prova do TJ-PB tem discursiva de até 30 linhas valendo 40 pontos. Quem não treina discursiva perde vaga para quem treina — independentemente de como foi na objetiva.",
  },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado para o TJ-PB",
    description: "Você responde um questionário individual sobre sua base, sua rotina e seu tempo, e recebe um plano feito exclusivamente para você, com metas na ordem dos assuntos mais cobrados pela FGV na sua especialidade.",
    bonus: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direto Comigo, de Segunda a Segunda",
    description: "Sem atendente, sem resposta automática, sem orientador anônimo. Quando você manda mensagem, quem responde sou eu — Auditor do TCE-PE, aprovado em 4 concursos públicos.",
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
    title: "Orientação para Discursiva e Materiais",
    description: "Orientação estratégica sobre como estruturar sua resposta discursiva — o que a FGV valoriza, como organizar o raciocínio e o que evitar. Materiais de apoio inclusos.",
    bonus: false,
  },
  {
    icon: MonitorPlay,
    title: "Lives Estratégicas Exclusivas",
    description: "Encontros ao vivo com a turma, com direcionamento de quem passou em 4 concursos públicos. Revisão de conteúdo, resolução de questões e tira-dúvidas direto comigo até 24 de janeiro.",
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
    title: "Live de Análise Completa do Edital TJ-PB",
    description: "O edital já saiu. Na live a gente disseca tudo — disciplinas por especialidade, pesos, estrutura da discursiva e o que priorizar com o tempo que resta até janeiro.",
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
    title: "🎁 Raio-X da Banca FGV — TJ-PB",
    description: "Análise dos temas, padrões de cobrança e pegadinhas mais recorrentes da FGV em provas de Analista Judiciário. Você estuda o que cai, na ordem certa.",
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
    description: "A jurisprudência mais cobrada pela FGV em provas de Analista Judiciário, explicada de forma direta e aplicada.",
    bonus: true,
  },
]

const approvals = [
  {
    icon: Trophy,
    title: "TCE-PA — 1º lugar",
    description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos.",
  },
  {
    icon: BadgeCheck,
    title: "TCE-PB — Aprovado",
    description: "Mais uma aprovação em concurso público de alto nível.",
  },
  {
    icon: Landmark,
    title: "ISS Sobral — Aprovado",
    description: "Aprovação no fiscal municipal — o método funciona em qualquer concurso.",
  },
  {
    icon: ShieldCheck,
    title: "TCE-PE — Auditor",
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
    role: "2º lugar — TJ-AP",
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
    question: "O edital saiu, ainda dá tempo?",
    answer: "Dá — e muito. A prova é em 24 de janeiro. Três meses de reta final bem direcionada são suficientes para chegar preparado. Quem começa agora estuda com método. Quem deixa para a última semana estuda no desespero.",
  },
  {
    question: "As provas são em João Pessoa?",
    answer: "Sim. As provas do TJ-PB serão realizadas exclusivamente em João Pessoa, capital da Paraíba, no dia 24 de janeiro de 2027.",
  },
  {
    question: "Como é a prova do TJ-PB?",
    answer: "Prova objetiva com 60 questões de múltipla escolha e prova discursiva de até 30 linhas valendo 40 pontos. Ambas são eliminatórias e classificatórias. As duas acontecem no mesmo dia, das 13h às 18h.",
  },
  {
    question: "Consigo estudar sozinho?",
    answer: "Talvez. Mas quanto tempo você vai perder descobrindo o que a FGV cobra? Passei em 4 concursos públicos — esse atalho é o que entrego para você.",
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
    answer: "Nenhuma mentoria pode prometer aprovação. O que eu entrego é método, material completo e acompanhamento direto de quem passou em 4 concursos públicos. O resto depende da sua dedicação.",
  },
]

function Cta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={CTA_LINK}
      data-gtm="click_whatsapp"
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:w-auto ${dark ? "bg-[#1e1f5c] hover:bg-[#151642]" : "bg-[#ff4b00] hover:bg-[#e64300]"}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

export default function TjPbPage() {
  return (
    <main className="min-h-screen pb-12 font-sans selection:bg-[#ff4b00] selection:text-white">
      <section className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c] px-5 pb-20 pt-16 text-center md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-2xl -translate-x-1/2 rounded-full bg-[#ff4b00]/20 blur-[120px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 md:gap-8">
          <span className="inline-flex max-w-[90vw] items-center justify-center rounded-full bg-[#ff4b00] px-4 py-1.5 text-center text-xs font-semibold leading-snug tracking-wide text-white shadow-lg shadow-[#ff4b00]/20 sm:px-5 sm:py-2 sm:text-sm">
            🚨 TJ-PB com edital publicado — inscrições até 18 de novembro. Prova em 24 de janeiro de 2027.
          </span>
          <h1 className="w-full text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            O edital do TJ-PB saiu. <span className="bg-gradient-to-r from-[#ff4b00] to-[#ff7a45] bg-clip-text text-transparent">A reta final começa agora.</span>
          </h1>
          <p className="max-w-3xl text-base font-light leading-relaxed text-slate-300 sm:text-lg md:text-2xl">
            50 vagas para Analista Judiciário com remuneração de até <span className="font-bold text-white">R$ 11.526,14</span>. Banca FGV, prova em 24 de janeiro de 2027. Plano de reta final de 3 meses com acompanhamento direto de um Auditor aprovado em 4 concursos públicos.
          </p>
          <div className="mt-2 flex w-full flex-col items-center gap-3 md:mt-4 md:gap-4">
            <Cta>Falar com o Francisco agora</Cta>
            <p className="text-sm font-medium text-white/60">Vagas limitadas. Reta final de 3 meses com acompanhamento direto.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 space-y-3 text-center md:mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Por que vale a pena</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1e1f5c] sm:text-3xl md:text-5xl">Vale a pena estudar para o TJ-PB?</h2>
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
          <div className="mt-10 text-center md:mt-16"><Cta dark>Falar com o Francisco</Cta></div>
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
          <div className="mt-20 text-center"><Cta>Falar com o Francisco</Cta></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0f2c] px-5 py-16 shadow-2xl md:px-6 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#2e2f83] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start space-y-6 text-left">
              <span className="inline-flex rounded-full border border-[#ff4b00] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Quem vai te guiar</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Eu sou Francisco.</h2>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">Quatro aprovações em concursos públicos. Hoje sou Auditor do TCE-PE — e cheguei aqui passando pelos mesmos processos seletivos que você quer passar.</p>
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
              <Cta>Quero estudar com um Auditor</Cta>
            </div>
            <div className="relative mt-12 flex justify-center lg:ml-10 lg:mt-0 lg:justify-end">
              <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" />
              <Image src={franciscoImage} alt="Francisco José, Auditor do TCE-PE aprovado em 4 concursos públicos" width={1000} height={1000} sizes="(max-width: 1023px) 100vw, 50vw" className="relative z-0 max-h-[1000px] w-auto object-contain drop-shadow-2xl" />
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
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">Prova em 24 de janeiro. A reta final começa agora.</h2>
          <p className="mb-10 text-xl leading-relaxed text-slate-600">Edital publicado. Banca definida. Inscrições até 18 de novembro. Três meses bem usados são suficientes para chegar preparado — desde que você comece hoje.</p>
          <div className="mb-12 inline-block max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-8 py-8 text-left text-lg text-amber-950 shadow-sm">
            <p className="mb-4 text-xl font-bold">Sabe o que eu aprendi sendo reprovado antes de passar em primeiro lugar?</p>
            <p className="mb-4 leading-relaxed">Ninguém começa preparado. Ninguém tem o momento perfeito.</p>
            <p className="leading-relaxed">O que separa quem passa de quem fica tentando é a decisão de começar, mesmo sem ter tudo resolvido.</p>
          </div>
          <Cta>Não vou perder mais tempo</Cta>
          <p className="mt-4 text-sm text-slate-500">Vagas limitadas para acompanhamento.</p>
        </div>
      </section>

      <section className="bg-[#1e1f5c] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Investimento</p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-xl font-semibold text-slate-200">Reta Final TJ-PB — 3 meses</p>
            <p className="text-lg font-semibold text-white">Vagas limitadas por turma.</p>
            <p className="text-base text-slate-300">Acompanhamento direto comigo, sem atendente e sem resposta automática.</p>
          </div>
          <div className="w-full rounded-3xl bg-white px-6 py-8 shadow-2xl md:px-10">
            <p className="text-4xl font-extrabold text-[#1e1f5c] md:text-5xl">R$ 797 à vista via PIX</p>
            <p className="mt-3 text-xl font-bold text-[#ff4b00] md:text-2xl">ou 3x de R$ 287 no cartão</p>
            <p className="mt-2 text-base text-slate-600">ou parcelado em até 12x no cartão</p>
            <p className="mt-5 text-sm text-slate-500">Vagas limitadas. Prova em 24 de janeiro de 2027.</p>
          </div>
          <Cta>Garantir minha vaga agora</Cta>
        </div>
      </section>

      <footer className="mt-auto border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-500">
        <p className="mb-1 font-semibold text-slate-700">Vagas limitadas para esta turma.</p>
        <p>Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
