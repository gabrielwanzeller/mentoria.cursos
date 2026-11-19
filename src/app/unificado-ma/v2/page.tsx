import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  Crosshair,
  FilePenLine,
  Gift,
  GraduationCap,
  Landmark,
  LineChart,
  MessageCircle,
  MonitorPlay,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  X,
} from "lucide-react"
import franciscoImage from "../../../../public/tce-pb/francisco-w-bluer-v3.png"
import { DaysUntil } from "./countdown"

export const metadata: Metadata = {
  title: "Mentoria Concurso Unificado MA · Reta Final STC e SEPLAN",
  alternates: { canonical: "/unificado-ma" },
  description:
    "Reta final para o Concurso Unificado do Maranhão (STC e SEPLAN), banca FCC, prova prevista para 04/04/2027. Plano personalizado e acompanhamento diário com um Auditor do TCE-PE aprovado em 4 concursos. Turma com 20 vagas.",
  openGraph: {
    title: "Reta final do Concurso Unificado MA com quem já foi 1º lugar",
    description: "Mentoria individual para STC e SEPLAN (FCC). Turma com 20 vagas.",
    locale: "pt_BR",
    type: "website",
  },
}

/* ------------------------------------------------------------------ */
/* Dados                                                               */
/* ------------------------------------------------------------------ */

const PROVA = "2027-04-04T08:00:00-03:00"
const TOTAL_VAGAS_MENTORIA = 20

const WHATSAPP_NUMBER = "5588988058933"
const wa = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
const WHATSAPP = wa("Olá, Francisco! Vi a mentoria para o Concurso Unificado do MA e tenho interesse. Pode me dar mais informações?")
const WHATSAPP_CARGO = (cargo: string) =>
  wa(`Olá, Francisco! Vi a mentoria para o Concurso Unificado do MA e quero me preparar para ${cargo}. Pode me explicar como funciona?`)

const cargos = {
  STC: {
    orgao: "STC",
    nome: "Secretaria de Transparência e Controle",
    salario: "R$ 14.950,78",
    jornada: "30h semanais",
    taxa: "R$ 250",
    prova: "30 Gerais + 50 Específicos + Estudo de Caso (2 discursivas)",
    lista: [
      { cargo: "Auditor · Área Geral", vagas: 14, req: "Contábeis, Economia, Direito, TI ou Eng. Civil (com registro)" },
      { cargo: "Auditor · TI", vagas: 3, req: "Nível superior em Tecnologia da Informação" },
      { cargo: "Auditor · Engenharia", vagas: 3, req: "Engenharia Civil com registro profissional" },
    ],
  },
  SEPLAN: {
    orgao: "SEPLAN",
    nome: "Secretaria de Planejamento e Orçamento",
    salario: "R$ 11.662,98",
    jornada: "40h semanais",
    taxa: "R$ 180",
    prova: "20 Gerais + 30 Específicos + Redação",
    lista: [
      { cargo: "Analista de Planej. e Finanças · Finanças e Controle", vagas: 6, req: "Adm., Contabilidade, Direito ou Economia + pós em Orçamento/Finanças Públicas" },
      { cargo: "Analista de Planej. e Finanças · Planej. e Orçamento", vagas: 5, req: "Mesmos requisitos de Finanças e Controle" },
      { cargo: "Especialista em Gestão Pública", vagas: 8, req: "Qualquer graduação + pós em Gestão Pública ou equivalente" },
    ],
  },
} as const

const totalVagas = [...cargos.STC.lista, ...cargos.SEPLAN.lista].reduce((sum, c) => sum + c.vagas, 0)

const calendario = [
  { data: "Agora", titulo: "Comece a preparação", texto: "Plano montado e metas definidas antes das inscrições abrirem.", destaque: true },
  { data: "14/12/2026", titulo: "Abertura das inscrições", texto: "Escolha um único cargo por período de prova." },
  { data: "29/01/2027", titulo: "Fim das inscrições", texto: "Pagamento da taxa até 01/02/2027." },
  { data: "04/04/2027", titulo: "Prova objetiva e discursiva", texto: "Data prevista, sujeita a alteração." },
]

const passos: Array<{ icon: LucideIcon; titulo: string; texto: string }> = [
  { icon: MessageCircle, titulo: "Conversa no WhatsApp", texto: "Você me conta seu cargo, sua base e quantas horas tem por dia. Sem bot e sem fila." },
  { icon: ClipboardList, titulo: "Diagnóstico + edital", texto: "Mapeamos juntos as disciplinas, os pesos e o que a FCC mais cobra para o seu cargo." },
  { icon: Target, titulo: "Plano personalizado", texto: "Metas semanais até 04/04, na ordem certa dos assuntos, encaixadas na sua rotina." },
  { icon: LineChart, titulo: "Acompanhamento até a prova", texto: "Suporte diário, lives com a turma e relatório de desempenho a cada 45 dias." },
]

const sozinho = [
  "Estuda o edital inteiro com o mesmo peso",
  "Descobre o estilo da FCC só no dia da prova",
  "Deixa a discursiva para a última semana",
  "Não sabe se está no ritmo certo",
  "Perde semanas decidindo o que estudar",
]
const comMentoria = [
  "Prioriza o que a FCC mais cobra no seu cargo",
  "Treina com o Raio-X dos padrões da banca",
  "Prepara o Estudo de Caso ou a Redação desde já",
  "Recebe relatório de desempenho a cada 45 dias",
  "Abre o plano do dia e sabe exatamente o que fazer",
]

const inclusos: Array<{ icon: LucideIcon; titulo: string; texto: string }> = [
  { icon: Target, titulo: "Plano de estudos 100% personalizado", texto: "Para o seu cargo, a sua base e a sua rotina, com metas até 04/04." },
  { icon: MessageCircle, titulo: "Suporte direto comigo, todos os dias", texto: "Pelo WhatsApp, de segunda a segunda. Sem bot e sem fila." },
  { icon: GraduationCap, titulo: "Acesso ao curso do Estratégia Concursos", texto: "Conteúdo completo das disciplinas do seu cargo." },
  { icon: Crosshair, titulo: "Raio-X da FCC", texto: "Assuntos e padrões que mais aparecem em provas de controle e gestão pública." },
  { icon: FilePenLine, titulo: "Orientação para a discursiva", texto: "Estratégia para o Estudo de Caso (STC) e a Redação (SEPLAN), com material de treino. Não inclui correção individual." },
  { icon: MonitorPlay, titulo: "Lives estratégicas + live do edital", texto: "Revisão, questões e ajustes de rota ao vivo com a turma." },
  { icon: LineChart, titulo: "Relatório de desempenho a cada 45 dias", texto: "Seu progresso medido, com ajuste de rota quando necessário." },
]

const bonus: Array<{ icon: LucideIcon; titulo: string; texto: string }> = [
  { icon: RefreshCw, titulo: "Rota adaptável", texto: "Se o edital for retificado, o plano é ajustado sem custo." },
  { icon: Crosshair, titulo: "Raio-X FCC do Unificado MA", texto: "Assuntos mais cobrados e padrões da banca para STC e SEPLAN." },
  { icon: Sparkles, titulo: "E-book de apostas da reta final", texto: "Os temas com maior chance de aparecer na prova." },
  { icon: BookOpenCheck, titulo: "E-book de jurisprudência comentada", texto: "Direta e aplicada ao que cai." },
]

const approvals = [
  { icon: Trophy, title: "TCE-PA — 1º lugar", description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos." },
  { icon: BadgeCheck, title: "TCE-PB — Aprovado", description: "Mais uma aprovação em concurso público de alto nível." },
  { icon: Landmark, title: "ISS Sobral — Aprovado", description: "Aprovação no fiscal municipal — o método funciona em qualquer concurso." },
  { icon: ShieldCheck, title: "TCE-PE — Auditor", description: "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil." },
]

const testimonials = [
  { name: "Lucas", role: "Aprovado como Auditor do TCE-PA", text: "6 meses de estudo. Do zero à aprovação num dos concursos mais disputados do Norte do Brasil." },
  { name: "Maria Sena", role: "2º lugar — TJ-AP", text: "Segundo lugar num concurso estadual disputadíssimo. Resultado de quem estuda com direcionamento real." },
  { name: "Marcos Soares", role: "Aprovado como Analista do TJ-PA", text: "Mais um aluno que chegou com método e saiu com aprovação." },
  { name: "Sarah", role: "Aprovada como Analista da ALECE", text: "Minha primeira aluna. Prova de que o método funciona desde o início." },
]

const faqs = [
  { q: "O edital saiu. Ainda dá tempo?", a: "Dá. A prova está prevista para 04/04/2027, e são mais de quatro meses de preparação. Quem organiza o estudo agora chega com base, revisão e discursiva treinada." },
  { q: "Sou iniciante. Posso entrar?", a: "Sim, desde que tenha pelo menos 3 horas por dia para estudar. O plano parte da sua base, não de um cronograma genérico." },
  { q: "Qual cargo posso escolher?", a: "Cada cargo tem uma exigência de formação descrita no edital. Se tiver dúvida sobre o enquadramento da sua graduação, confirme com o SAC da FCC antes de pagar a inscrição. Posso te ajudar a avaliar a escolha na nossa conversa." },
  { q: "Posso me inscrever na STC e na SEPLAN?", a: "Não. O edital permite um único cargo por período de aplicação, e as duas objetivas são pela manhã. Você precisa escolher um." },
  { q: "Sou da área de TI. Muda alguma coisa?", a: "Sim. O Auditor TI tem conteúdo próprio (governança, auditoria de TI, segurança, banco de dados, redes) e não faz Noções de Informática. O plano é montado para a sua área." },
  { q: "Como funciona o suporte?", a: "Direto comigo pelo WhatsApp, de segunda a segunda. Você manda a dúvida e quem responde sou eu." },
  { q: "A discursiva tem correção?", a: "A mentoria inclui orientação estratégica e material de treino para o Estudo de Caso e a Redação, mas não inclui correção individual de textos." },
  { q: "E se eu não passar?", a: "Nenhuma mentoria pode garantir aprovação. O que garanto é método, acompanhamento próximo e um plano feito para a FCC e para o seu cargo." },
]

/* ------------------------------------------------------------------ */
/* Peças de UI                                                         */
/* ------------------------------------------------------------------ */

function Cta({
  href = WHATSAPP,
  children,
  position,
  variant = "primary",
  className = "",
}: {
  href?: string
  children: React.ReactNode
  position: string
  variant?: "primary" | "dark" | "light"
  className?: string
}) {
  const styles = {
    primary: "bg-[#ff4b00] text-white shadow-[0_12px_30px_-8px_rgba(255,75,0,0.6)] hover:bg-[#ff5f1f]",
    dark: "bg-[#14154a] text-white shadow-[0_12px_30px_-10px_rgba(20,21,74,0.6)] hover:bg-[#1e1f5c]",
    light: "bg-white text-[#14154a] shadow-lg hover:bg-orange-50",
  }[variant]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm="click_whatsapp"
      data-cta-position={position}
      className={`group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-center text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:px-9 ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.5l5.92-1.55a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.1 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  )
}

function SectionHeader({ eyebrow, title, text, dark = false }: { eyebrow: string; title: React.ReactNode; text?: string; dark?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] md:text-sm ${dark ? "text-[#ff8a57]" : "text-[#ff4b00]"}`}>{eyebrow}</p>
      <h2 className={`text-[1.9rem] font-extrabold leading-[1.1] tracking-tight md:text-5xl ${dark ? "text-white" : "text-[#14154a]"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function UnificadoMaV2Page() {
  return (
    <main className="min-h-screen bg-white pb-24 font-sans text-slate-900 selection:bg-[#ff4b00] selection:text-white md:pb-0">
      {/* Barra de urgência */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c2a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 text-white sm:px-6">
          <p className="flex items-center gap-2 text-xs font-medium sm:text-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4b00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff4b00]" />
            </span>
            <span>
              Prova em <strong className="text-[#ff8a57]"><DaysUntil date={PROVA} /> dias</strong>
              <span className="hidden sm:inline"> · Edital publicado · Banca FCC</span>
            </span>
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="click_whatsapp"
            data-cta-position="topbar"
            className="hidden rounded-full bg-[#ff4b00] px-4 py-1.5 text-xs font-bold transition-colors hover:bg-[#ff5f1f] sm:inline-flex sm:text-sm"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b0c2a] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#2e2f83] opacity-60 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#ff4b00] opacity-25 blur-[140px]" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-28 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-36 lg:pt-20">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff4b00]/40 bg-[#ff4b00]/10 px-4 py-1.5 text-xs font-semibold text-[#ffb48f] sm:text-sm">
              <Sparkles className="h-4 w-4" /> Edital publicado · STC e SEPLAN · FCC
            </span>
            <h1 className="text-[2.15rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Reta final do <span className="text-[#ff6a2b]">Concurso Unificado do Maranhão</span> com quem já foi 1º lugar.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Mentoria individual com um Auditor do TCE-PE aprovado em 4 concursos. Seu plano para a STC ou a SEPLAN, na ordem do que a FCC mais cobra, até a prova de 04/04/2027.
            </p>

            <ul className="grid w-full max-w-xl grid-cols-1 gap-2.5 text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
              {["Plano feito para o seu cargo", "Suporte diário pelo WhatsApp", "Raio-X da banca FCC", "Curso do Estratégia incluso"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff4b00]/20 text-[#ff8a57]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Cta position="hero">Quero uma das {TOTAL_VAGAS_MENTORIA} vagas</Cta>
              <a href="#cargos" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10">
                Ver cargos e salários
              </a>
            </div>
            <p className="text-sm text-slate-400">Turma de reta final limitada a {TOTAL_VAGAS_MENTORIA} alunos, porque o acompanhamento é individual.</p>
          </div>

          {/* Foto + selos */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4b00] opacity-30 blur-[90px]" />
            <Image
              src={franciscoImage}
              alt="Francisco José, Auditor do TCE-PE aprovado em 4 concursos públicos"
              priority
              sizes="(max-width: 1023px) 90vw, 40vw"
              className="relative z-10 mx-auto h-auto w-full max-w-[460px] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            />
            <div className="absolute -left-2 top-1/3 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#14154a] shadow-2xl sm:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><Trophy className="h-5 w-5" /></span>
              <span className="leading-tight"><strong className="block text-sm">1º lugar</strong><span className="text-xs text-slate-500">TCE-PA</span></span>
            </div>
            <div className="absolute -right-2 bottom-10 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#14154a] shadow-2xl sm:-right-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef0ff] text-[#2e2f83]"><ShieldCheck className="h-5 w-5" /></span>
              <span className="leading-tight"><strong className="block text-sm">Auditor TCE-PE</strong><span className="text-xs text-slate-500">4 aprovações</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="relative z-10 -mt-16 px-5 sm:px-6 lg:-mt-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(20,21,74,0.35)] md:grid-cols-4">
          {[
            { valor: "R$ 14.950", rotulo: "salário de Auditor da STC" },
            { valor: String(totalVagas), rotulo: "vagas entre efetivas e CR" },
            { valor: "04/04", rotulo: "prova prevista (2027)" },
            { valor: String(TOTAL_VAGAS_MENTORIA), rotulo: "vagas nesta turma" },
          ].map((s, i) => (
            <div key={s.rotulo} className={`p-5 text-center md:p-7 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r md:last:border-r-0 border-slate-200`}>
              <p className="text-2xl font-extrabold tracking-tight text-[#14154a] md:text-4xl">{s.valor}</p>
              <p className="mt-1 text-xs leading-snug text-slate-500 md:text-sm">{s.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cargos */}
      <section id="cargos" className="scroll-mt-16 px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Cargos acompanhados"
            title={<>Seis cargos. Um plano feito para o <span className="text-[#ff4b00]">seu</span>.</>}
            text="A mentoria acompanha todos os cargos da STC e da SEPLAN. O plano muda conforme o cargo, porque a prova e o conteúdo específico mudam."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {Object.values(cargos).map((org) => (
              <article key={org.orgao} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <header className={`p-6 text-white md:p-8 ${org.orgao === "STC" ? "bg-gradient-to-br from-[#14154a] to-[#2e2f83]" : "bg-gradient-to-br from-[#c23800] to-[#ff4b00]"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-extrabold tracking-tight">{org.orgao}</p>
                      <p className="mt-1 text-sm text-white/75">{org.nome}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-white/70">Remuneração</p>
                      <p className="whitespace-nowrap text-xl font-extrabold md:text-2xl">{org.salario}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-white/15 px-3 py-1">{org.jornada}</span>
                    <span className="rounded-full bg-white/15 px-3 py-1">Taxa {org.taxa}</span>
                    <span className="rounded-full bg-white/15 px-3 py-1">{org.prova}</span>
                  </div>
                </header>
                <ul className="flex-1 divide-y divide-slate-100">
                  {org.lista.map((c) => (
                    <li key={c.cargo} className="flex items-start justify-between gap-4 p-5 md:px-8">
                      <div>
                        <p className="font-bold text-[#14154a]">{c.cargo}</p>
                        <p className="mt-1 text-sm leading-snug text-slate-500">{c.req}</p>
                      </div>
                      <span className="shrink-0 rounded-xl bg-slate-100 px-3 py-1.5 text-center text-sm font-bold text-[#14154a]">
                        {c.vagas}<span className="block text-[10px] font-medium uppercase tracking-wide text-slate-500">vagas</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 p-5 md:px-8">
                  <a
                    href={WHATSAPP_CARGO(org.orgao === "STC" ? "a STC (Auditor)" : "a SEPLAN")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gtm="click_whatsapp"
                    data-cta-position={`cargo_${org.orgao.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 font-bold text-[#ff4b00] hover:text-[#c23800]"
                  >
                    Quero me preparar para a {org.orgao}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            Vagas somam efetivas e cadastro reserva. Confira formação exigida e lotação no edital. Só é permitido um cargo por período de prova, sem troca de cargo nem devolução da taxa.
          </p>
        </div>
      </section>

      {/* Problema x método */}
      <section className="bg-[#f6f6fb] px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="O que muda com a mentoria"
            title="Estudar muito não é o mesmo que estudar o que a FCC cobra."
            text="Eu aprendi isso reprovando no TCE-CE. Seis meses depois, com outro método, fui 1º lugar no TCE-PA."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
              <p className="mb-6 text-lg font-bold text-slate-500">Estudando sozinho</p>
              <ul className="space-y-4">
                {sozinho.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400"><X className="h-3.5 w-3.5" strokeWidth={3} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl bg-[#14154a] p-7 text-white shadow-[0_30px_60px_-25px_rgba(20,21,74,0.6)] md:p-9">
              <span className="absolute -top-3 right-6 rounded-full bg-[#ff4b00] px-3 py-1 text-xs font-bold uppercase tracking-wider">Com a mentoria</span>
              <p className="mb-6 text-lg font-bold">Com um plano feito para a banca</p>
              <ul className="space-y-4">
                {comMentoria.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff4b00] text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Como funciona" title="Do primeiro contato até o dia da prova" />
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => {
              const Icon = p.icon
              return (
                <li key={p.titulo} className="relative rounded-3xl border border-slate-200 bg-white p-7">
                  <span className="absolute right-6 top-5 text-5xl font-extrabold text-slate-100">{String(i + 1).padStart(2, "0")}</span>
                  <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff4b00]"><Icon className="h-6 w-6" /></span>
                  <h3 className="relative mb-2 text-lg font-bold text-[#14154a]">{p.titulo}</h3>
                  <p className="relative text-sm leading-relaxed text-slate-600">{p.texto}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Prova + calendário */}
      <section className="relative overflow-hidden bg-[#0b0c2a] px-5 py-20 text-white sm:px-6 md:py-28">
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#2e2f83] opacity-50 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader dark eyebrow="Estrutura e calendário" title="Como é a prova" text="Objetiva e discursiva no mesmo dia. Datas previstas, sujeitas a alteração." />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 content-start">
              {[
                { org: "STC", gerais: 30, especificos: 50, disc: "Estudo de Caso · 2 questões de até 30 linhas" },
                { org: "SEPLAN", gerais: 20, especificos: 30, disc: "Redação · 20 a 30 linhas" },
              ].map((p) => (
                <div key={p.org} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
                  <p className="text-2xl font-extrabold">{p.org}</p>
                  <p className="mb-6 text-sm text-slate-400">{p.gerais + p.especificos} questões objetivas</p>
                  {[
                    { label: "Conhecimentos Gerais", n: p.gerais, color: "bg-[#7477c1]" },
                    { label: "Específicos", n: p.especificos, color: "bg-[#ff4b00]" },
                  ].map((b) => (
                    <div key={b.label} className="mb-4">
                      <div className="mb-1.5 flex justify-between text-sm"><span className="text-slate-300">{b.label}</span><strong>{b.n}</strong></div>
                      <div className="h-2.5 rounded-full bg-white/10"><div className={`h-2.5 rounded-full ${b.color}`} style={{ width: `${(b.n / 50) * 100}%` }} /></div>
                    </div>
                  ))}
                  <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-white/[0.06] p-4 text-sm text-slate-200">
                    <FilePenLine className="mt-0.5 h-4 w-4 shrink-0 text-[#ff8a57]" /> {p.disc}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-sm leading-relaxed text-slate-300 sm:col-span-2">
                <strong className="text-white">Conhecimentos Gerais:</strong> Português, Matemática e Raciocínio Lógico, Geografia e História do Maranhão e Noções de Informática. O Auditor TI não faz Informática.
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 text-[#14154a] md:p-8">
              <p className="mb-6 flex items-center gap-2 text-lg font-bold"><CalendarDays className="h-5 w-5 text-[#ff4b00]" /> Calendário</p>
              <ol className="relative space-y-7 border-l-2 border-dashed border-slate-200 pl-7">
                {calendario.map((c) => (
                  <li key={c.titulo} className="relative">
                    <span className={`absolute -left-[37px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white ${c.destaque ? "bg-[#ff4b00]" : "bg-[#14154a]"}`}>
                      {c.destaque && <span className="absolute h-5 w-5 animate-ping rounded-full bg-[#ff4b00] opacity-50" />}
                    </span>
                    <p className={`text-xs font-bold uppercase tracking-wider ${c.destaque ? "text-[#ff4b00]" : "text-slate-400"}`}>{c.data}</p>
                    <p className="mt-0.5 font-bold">{c.titulo}</p>
                    <p className="text-sm text-slate-500">{c.texto}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl bg-orange-50 p-5 text-center">
                <p className="text-sm text-slate-600">Faltam</p>
                <p className="text-4xl font-extrabold text-[#ff4b00]"><DaysUntil date={PROVA} /> dias</p>
                <p className="text-sm text-slate-600">para a prova</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="scroll-mt-16 px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Tudo incluso" title="O que você recebe" text="Um pacote completo para chegar em 04/04 com o conteúdo visto, revisado e com a discursiva treinada." />

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_40px_80px_-40px_rgba(20,21,74,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
              <div className="p-7 md:p-10">
                <ul className="space-y-6">
                  {inclusos.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.titulo} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef0ff] text-[#2e2f83]"><Icon className="h-5 w-5" /></span>
                        <div>
                          <p className="font-bold text-[#14154a]">{item.titulo}</p>
                          <p className="text-sm leading-relaxed text-slate-600">{item.texto}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="flex flex-col bg-gradient-to-b from-amber-50 to-orange-50 p-7 md:p-10">
                <p className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-950">
                  <Gift className="h-4 w-4" /> Bônus exclusivos
                </p>
                <ul className="space-y-5">
                  {bonus.map((b) => {
                    const Icon = b.icon
                    return (
                      <li key={b.titulo} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-amber-600 shadow-sm"><Icon className="h-4 w-4" /></span>
                        <div>
                          <p className="font-bold text-amber-950">{b.titulo}</p>
                          <p className="text-sm text-amber-900/80">{b.texto}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-auto pt-10">
                  <div className="mb-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[#14154a]">
                      <span>Turma de reta final</span>
                      <span>{TOTAL_VAGAS_MENTORIA} vagas</span>
                    </div>
                    <p className="text-xs text-slate-500">O número é limitado para que eu consiga acompanhar cada aluno de perto.</p>
                  </div>
                  <Cta position="oferta" className="w-full">Quero minha vaga</Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor (seção original, só o botão mudou) */}
      <section className="relative overflow-hidden bg-[#0a0f2c] px-5 py-16 shadow-2xl md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start space-y-6 text-left"><span className="rounded-full border border-[#ff4b00] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Quem vai te guiar</span><h2 className="text-3xl font-extrabold text-white md:text-5xl">Eu sou Francisco.</h2><p className="text-lg leading-relaxed text-slate-300 md:text-xl">Quatro aprovações em concursos públicos. Hoje sou Auditor do TCE-PE — e cheguei aqui passando pelos mesmos processos seletivos que você quer passar.</p><div className="flex w-full flex-col gap-6">{approvals.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex items-start gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2e2f83] bg-[#1e1f5c] text-[#ff4b00]"><Icon className="h-6 w-6" /></div><div><h3 className="mb-1 text-xl font-bold text-white">{item.title}</h3><p className="leading-relaxed text-slate-300">{item.description}</p></div></div> })}</div><div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">Antes disso, fui reprovado no TCE-CE. Estudava muito e errava no que importava. Mudei o método e, seis meses depois, fui 1º lugar no TCE-PA. É esse método que aplico com cada aluno.</div><Cta position="mentor">Quero estudar com um Auditor</Cta></div>
          <div className="relative flex justify-center lg:justify-end"><div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" /><Image src={franciscoImage} alt="Francisco José, Auditor do TCE-PE aprovado em 4 concursos públicos" width={1000} height={1000} sizes="(max-width: 1023px) 100vw, 50vw" className="relative z-0 w-auto object-contain drop-shadow-2xl" /></div>
        </div>
      </section>

      {/* Depoimentos (seção original) */}
      <section className="bg-slate-50 px-5 py-16 md:px-6 md:py-28"><div className="mx-auto max-w-6xl"><div className="mb-16 space-y-4 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Aprovações que falam por si</p><h2 className="text-3xl font-extrabold text-[#1e1f5c] md:text-5xl">Quem estudou com método aprovou.</h2></div><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{testimonials.map((item) => <div key={item.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="mb-4 flex gap-1 text-[#ff4b00]">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div><p className="flex-grow italic leading-relaxed text-slate-700">&quot;{item.text}&quot;</p><div className="mt-6 border-t pt-6"><p className="font-bold text-[#1e1f5c]">{item.name}</p><p className="mt-1 text-sm font-semibold text-[#ff4b00]">{item.role}</p></div></div>)}</div></div></section>

      {/* FAQ */}
      <section className="bg-[#f6f6fb] px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Perguntas frequentes" title="Ainda tem alguma dúvida?" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group rounded-2xl border border-slate-200 bg-white px-6 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-[#14154a] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#ff4b00] transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-6 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Cta position="faq" variant="dark" href={wa("Olá, Francisco! Tenho uma dúvida sobre a mentoria do Concurso Unificado do MA.")}>
              Tirar uma dúvida com o Francisco
            </Cta>
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="px-5 py-20 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff4b00] via-[#ff5f1f] to-[#c23800] px-6 py-14 text-center text-white md:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
          <div className="relative">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Faltam <DaysUntil date={PROVA} /> dias
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] md:text-5xl">A prova é em 04/04. Cada semana conta.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
              Turma de reta final com {TOTAL_VAGAS_MENTORIA} vagas. Me chama no WhatsApp que eu te explico como funciona e começamos o seu plano.
            </p>
            <div className="mt-9"><Cta position="fechamento" variant="light">Quero falar com o Francisco</Cta></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>Copyright &copy; Francisco José {new Date().getFullYear()}. Todos os direitos reservados.</p>
      </footer>

      {/* CTA fixo no celular */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="click_whatsapp"
          data-cta-position="sticky_mobile"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff4b00] px-5 text-base font-bold text-white shadow-lg"
        >
          <WhatsAppIcon className="h-5 w-5" /> Quero uma das {TOTAL_VAGAS_MENTORIA} vagas
        </a>
      </div>
    </main>
  )
}
