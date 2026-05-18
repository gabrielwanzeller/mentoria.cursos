"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Lock,
  ArrowRight,
  AlertTriangle,
  CircleDollarSign,
  Clock,
  ShieldCheck,
  Target,
  MessageCircle,
  GraduationCap,
  MonitorPlay,
  BookOpenCheck,
  BookMarked,
  Presentation,
  HeartHandshake,
  Trophy,
  Medal,
  CheckCircle2,
  XCircle,
  Star,
  ChevronDown,
  Users,
  Scale,
  Layers,
} from "lucide-react"

const CTA_LINK = "https://wa.me/5588988058933?text=Quero%20uma%20das%2010%20vagas%20da%20mentoria"
const EXAM_DATE = new Date("2026-08-09T08:00:00")

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 mt-1">{label}</span>
    </div>
  )
}

const testimonials = [
  {
    name: "Lucas Pinheiro",
    role: "Aprovado como Auditor de Controle Externo do TCE-PA",
    text: "A mentoria foi essencial para tornar mais curta e objetiva a jornada rumo à aprovação. Foi importante para organizar minha rotina e ajudar na eleição da metodologia e materiais utilizados.",
  },
  {
    name: "Victor Cortez",
    role: "1º lugar · Auditor da SEFA-PA",
    text: "A preparação com o Francisco me ajudou a priorizar assuntos, saber a importância que cada um deve ter, estudar com estratégia e foco. Nem sempre é preciso fechar o edital.",
  },
  {
    name: "Maria Sena",
    role: "2º lugar · TJ-AP",
    text: "Segundo lugar num concurso disputadíssimo. Resultado de quem estuda com direcionamento real.",
  },
  {
    name: "Marcos Soares",
    role: "Aprovado como Analista do TJ-PA",
    text: "Mais um aluno que chegou com método e saiu com aprovação.",
  },
]

const faqs = [
  {
    question: "Consigo me preparar em menos de 3 meses?",
    answer: "Sim — se o método for certo. Provas da FCC têm perfil previsível. Com plano personalizado, material certo e acompanhamento direto, 3 meses é tempo mais do que suficiente para quem leva a sério.",
  },
  {
    question: "É muito cedo para começar sem edital lançado?",
    answer: "O edital já saiu. A prova será em 9 de agosto. Cada dia que passa é um dia a menos de preparo. Quem começa hoje ainda tem tempo. Quem espera mais, corre atrás.",
  },
  {
    question: "Sou iniciante. É pra mim?",
    answer: "É exatamente pra você. Iniciante não é desvantagem — é tela em branco. A gente constrói do zero, do jeito certo, sem vícios de quem estudou errado por anos.",
  },
  {
    question: "O suporte é realmente personalizado?",
    answer: "Quando você manda mensagem, respondo eu. Sem robô. Sem IA. Direto no seu WhatsApp, de segunda a segunda. Não existe fila. Não existe assistente.",
  },
  {
    question: "O valor é elevado?",
    answer: "O salário inicial do TJ-CE é R$ 8.800 por mês — R$ 105.600 por ano. O investimento na mentoria representa menos de 1% do salário anual do cargo. Parcelar em 12x sai menos de R$ 75 por mês. Uma carreira de décadas por menos de 1% do que ela vai te pagar no primeiro ano.",
  },
  {
    question: "Como funciona depois que eu entro?",
    answer: "Assim que o pagamento é confirmado, você recebe acesso ao grupo exclusivo e ao login na plataforma Estratégia Concursos. Entramos em contato direto pelo WhatsApp para montar o seu plano personalizado. Tudo em até 24 horas.",
  },
  {
    question: "E se eu não for aprovado?",
    answer: "Nenhuma mentoria garante aprovação. O que garanto é o melhor método, material completo e acompanhamento direto de quem passou nesse tipo de concurso. O resto depende de você.",
  },
]

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Salário alvo de R$ 8,8k",
    description: "Remuneração competitiva com vantagens como auxílio saúde e alimentação — entrada na carreira jurídica estadual.",
  },
  {
    icon: Scale,
    title: "Aprovação difícil e técnica",
    description: "A FCC cobra raciocínio jurídico aprofundado. Estudar com método certo faz toda a diferença para passar nesse nível.",
  },
  {
    icon: Target,
    title: "Banca FCC — perfil previsível",
    description: "A FCC tem padrão. Quem treina com foco no estilo da banca leva vantagem real sobre quem estuda de forma genérica.",
  }
]

const comparisonRows = [
  {
    topic: "Rotina",
    solo: "Sem rotina definida — estuda quando dá, sem critério e sem consistência.",
    mentoria: "Rotina personalizada para sua realidade — com metas semanais e revisões programadas.",
  },
  {
    topic: "Conteúdo",
    solo: "Conteúdo genérico da internet — sem saber o que a FCC realmente cobra.",
    mentoria: "Conteúdo direcionado para o perfil da FCC — o que cai, na ordem certa.",
  },
  {
    topic: "Foco",
    solo: "Foco perdido — estuda tudo sem prioridade e perde tempo com o que não cai.",
    mentoria: "Foco no que realmente cai — sem enrolação, direto no que importa para o TJ-CE.",
  },
  {
    topic: "Pico",
    solo: "Pico na véspera — estuda correndo, entra estressado e sai sem saber se foi bem.",
    mentoria: "Pico no dia da prova — periodização planejada para você chegar no seu melhor.",
  },
]

const offerings = [
  {
    title: "Metodologia de Aprovação Comprovada",
    items: [
      "Plano de estudo 100% personalizado para o TJ-CE",
      "Planejamento com metas ordenadas pelos assuntos mais cobrados pela FCC",
      "Técnicas de estudo aplicadas especificamente a concursos jurídicos",
      "Revisão periódica do plano ao longo dos 3 meses",
    ],
  },
  {
    title: "Assinatura Estratégia Concursos + 3 Meses Premium!",
    items: [
      "Acesso completo às videoaulas e PDFs — login próprio, sem custo extra",
      "Sistema de questões por disciplina e por banca (FCC inclusa)",
      "Cadernos de revisão com filtros personalizados para o seu plano",
    ],
  },
  {
    title: "Suporte e Interação Direta",
    items: [
      "WhatsApp direto comigo — sem robô, sem IA, de segunda a segunda",
      "Lives mensais exclusivas com a turma limitada",
      "Live de análise completa do edital — dissecamos tudo ao vivo",
      "O único que está disponível DIARIAMENTE para te guiar.",
    ],
  },
  {
    title: "Bônus Exclusivos",
    items: [
      "Raio-X do Edital — 8 matérias mapeadas com mais de 4.305 questões analisadas, subtemas ranqueados por frequência e apostas ordenadas por probabilidade de cobrança",
      "E-book de apostas pós-edital — temas com maior probabilidade de cair",
      "E-book de jurisprudência selecionada para concursos jurídicos estaduais",
    ],
  },
]

const approvals = [
  { icon: Trophy, title: "TCE-PA — 1º lugar", description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos." },
  { icon: Medal, title: "TCE-PB — Aprovado", description: "Passei no último concurso do TCE-PB — método que vai direto ao ponto." },
  { icon: CheckCircle2, title: "TCE-PE — Auditor", description: "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil." },
  { icon: CheckCircle2, title: "ISS Sobral — 1º lugar", description: "Método que funciona em qualquer banca, incluindo FCC." },
]

const priceItems = [
  { label: "Assinatura Estratégia Premium 3 meses", value: "R$ 659,70" },
  { label: "E-books de Apostas e Jurisprudência", value: "R$ 150" },
  { label: "Mentoria individual com Auditor aprovado", value: "R$ 1.200" },
  { label: "Bônus Raio-X do Edital", value: "R$ 100" },
]

export default function TjCePage() {
  const countdown = useCountdown(EXAM_DATE)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen font-sans selection:bg-[#ff4b00] selection:text-white">

      {/* ── STICKY BAR ── */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#1e1f5c] text-white py-2.5 px-4 shadow-md flex items-center justify-center gap-4 flex-wrap">
        <Lock className="w-4 h-4 text-[#ff4b00] shrink-0" />
        <span className="text-sm font-semibold">A prova será em 9 de agosto —</span>
        <div className="flex items-center gap-3">
          {[
            { v: countdown.days, l: "dias" },
            { v: countdown.hours, l: "horas" },
            { v: countdown.minutes, l: "min" },
            { v: countdown.seconds, l: "seg" },
          ].map(({ v, l }, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-[#ff4b00] font-black text-lg tabular-nums">{String(v).padStart(2, "0")}</span>
              <span className="text-white/60 text-xs">{l}</span>
              {i < 3 && <span className="text-white/40 ml-1">·</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[95dvh] text-center px-5 pt-20 pb-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#ff4b00]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <Badge className="h-fit text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 font-semibold tracking-wide bg-[#151642] border border-[#ff4b00]/30 text-slate-200 shadow-lg flex items-center gap-2 max-w-[90vw] whitespace-normal text-center leading-snug rounded-full">
            <Lock className="w-3 h-3 text-[#ff4b00]" /> Somente 10 vagas · Acompanhamento individual · TJ-CE 2026
          </Badge>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight w-full">
            O TJ-CE abriu.{" "}
            <br className="hidden sm:block" />
            A prova será em {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b00] to-[#ff7a45]">
              9 de agosto.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Quem entra agora tem{" "}
            <span className="font-semibold text-white">menos de 3 meses para chegar preparado.</span>{" "}
            Método certo não é luxo. É necessidade.
          </p>

          {/* Countdown */}
          <div className="flex items-center gap-4 md:gap-8 bg-white/5 border border-white/10 rounded-2xl px-6 md:px-10 py-5 md:py-6 shadow-xl">
            <CountdownUnit value={countdown.days} label="dias" />
            <span className="text-2xl font-black text-white/30 pb-3">:</span>
            <CountdownUnit value={countdown.hours} label="horas" />
            <span className="text-2xl font-black text-white/30 pb-3">:</span>
            <CountdownUnit value={countdown.minutes} label="min" />
            <span className="text-2xl font-black text-white/30 pb-3">:</span>
            <CountdownUnit value={countdown.seconds} label="seg" />
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-8 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 group-hover:shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                Garantir minha vaga
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-white/70 text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#ff4b00]" /> Vagas limitadas · Sem bot, sem IA
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 w-full max-w-2xl mt-2">
            {[
              { value: "34", label: "vagas abertas" },
              { value: "R$ 8,8k", label: "salário inicial" },
              { value: "FCC", label: "banca" },
              { value: "3", label: "fases" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-xl py-3 px-2">
                <span className="text-xl md:text-2xl font-black text-[#ff4b00] leading-none">{s.value}</span>
                <span className="text-[10px] md:text-xs text-white/50 font-medium text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── VALE A PENA? ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Por que vale a pena</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Vale a pena estudar para o TJ-CE?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="flex items-start gap-4 md:gap-5 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f0f1fa] flex items-center justify-center text-[#2e2f83] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1e1f5c] mb-1.5">{b.title}</p>
                    <p className="text-slate-500 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
                Garantir minha vaga no TJ-CE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARAÇÃO ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">O método faz a diferença</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Com menos de 3 meses, método certo{" "}
              <br className="hidden md:block" />
              não é luxo. É necessidade.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* Header row */}
            <div className="grid grid-cols-2 gap-3 px-1 mb-1">
              <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest py-2">
                Sem mentoria
              </div>
              <div className="text-center text-xs font-bold text-white uppercase tracking-widest py-2 bg-[#1e1f5c] rounded-xl">
                + MENTORIA
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                  <span className="font-bold text-[#1e1f5c] text-sm">{row.topic}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="p-4 text-slate-500 text-sm leading-relaxed border-b border-slate-200 sm:border-b-0 sm:border-r sm:border-slate-200">
                    {row.solo}
                  </div>
                  <div className="p-4 bg-[#f5f7ff] border-l-4 border-l-[#ff4b00] text-[#1e1f5c] font-semibold text-sm leading-relaxed">
                    <span className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4b00] shrink-0 mt-0.5" />
                      {row.mentoria}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero o método certo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── AUTORIDADE ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-[#0a0f2c] overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e2f83] blur-[150px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3 z-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start text-left space-y-6">
              <Badge variant="outline" className="text-sm px-4 py-1.5 font-bold tracking-widest uppercase border-[#ff4b00] text-[#ff4b00]">
                Quem vai te guiar
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Eu sou Francisco.
              </h2>

              <div className="grid grid-cols-3 gap-3 w-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-[#ff4b00]">4</p>
                  <p className="text-slate-400 text-xs mt-1">aprovações</p>
                </div>
                <div className="bg-[#ff4b00]/10 border-2 border-[#ff4b00]/50 rounded-2xl p-4 text-center ring-1 ring-[#ff4b00]/20">
                  <p className="text-5xl font-black text-[#ff4b00] leading-none">2</p>
                  <p className="text-slate-200 text-xs mt-2 font-bold">1ºs lugares</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-xl font-black text-[#ff4b00] leading-none mt-1">TCE-PE</p>
                  <p className="text-slate-400 text-xs mt-2">Auditor hoje</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Não sou professor que aprendeu sobre concurso em livro. Sou Auditor do TCE-PE — e cheguei
                  aqui passando pelos mesmos concursos que você quer passar.
                </p>
                <blockquote className="border-l-4 border-[#ff4b00] pl-4 italic bg-white/5 p-4 rounded-r-xl text-white/90">
                  "Você não terá um professor passando conteúdo. Terá um Auditor aprovado em 4 concursos — do seu lado, todos os dias. Isso não existe em curso nenhum."
                </blockquote>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {approvals.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e1f5c] border border-[#2e2f83] text-[#ff4b00] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors duration-300 shadow-lg flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a href={CTA_LINK} className="inline-block group w-full" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
                <Button size="lg" className="w-full text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                  Quero estudar com o Francisco
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:ml-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/tce-pb/francisco-w-bluer-v3.png"
                alt="Francisco José - Auditor do TCE-PE"
                width={1000}
                height={1000}
                className="max-h-[1000px] w-auto object-contain drop-shadow-2xl relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Aprovações que falam por si</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Quem estudou com método aprovou.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col gap-4 p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex text-[#ff4b00] gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base text-slate-700 italic leading-relaxed flex-grow">
                  &quot;{t.text}&quot;
                </p>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1e1f5c] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1e1f5c] text-sm leading-tight">{t.name}</p>
                    <p className="text-[#ff4b00] text-xs font-semibold mt-0.5 leading-snug">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero o meu nome nessa lista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      

      {/* ── O QUE ESTÁ INCLUSO ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100 rounded-[2rem] md:rounded-[3rem] mx-3 md:mx-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Tudo incluso na mentoria</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              O que está incluso na sua vaga
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {offerings.map((block, i) => (
              <div key={i} className={`p-7 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${i === offerings.length - 1 && offerings.length % 2 !== 0 ? "md:col-span-2" : ""}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#ff4b00] flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1e1f5c] leading-tight">{block.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4b00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href={CTA_LINK} className="inline-block group" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="text-lg px-10 py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
                Quero uma das vagas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── BÔNUS RAIO-X ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-[#1e1f5c]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <Badge className="bg-[#ff4b00]/20 text-[#ff4b00] border-none px-4 py-1.5 font-bold tracking-widest uppercase">
              Bônus Exclusivo — Raio-X do Edital
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              8 matérias mapeadas.{" "}
              <br className="hidden sm:block" />
              Mais de 4.305 questões analisadas.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Cada matéria com análise própria, subtemas ranqueados por frequência e apostas ordenadas por probabilidade de cobrança.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { emoji: "⚖️",  name: "Direito Constitucional",      count: "712 questões" },
              { emoji: "🏛️", name: "Direito Administrativo",       count: "1.131 questões" },
              { emoji: "📜",  name: "Direito Civil",                count: "409 questões" },
              { emoji: "⚡",  name: "Direito Processual Civil",     count: "416 questões" },
              { emoji: "🔴",  name: "Direito Penal",                count: "262 questões" },
              { emoji: "🔒",  name: "Direito Processual Penal",     count: "232 questões" },
              { emoji: "📖",  name: "Língua Portuguesa",            count: "753 questões" },
              { emoji: "🧮",  name: "Raciocínio Lógico e Matemática", count: "390 questões" },
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/12 transition-colors">
                <span className="text-3xl">{m.emoji}</span>
                <p className="font-bold text-white text-sm md:text-base leading-snug">{m.name}</p>
                <p className="text-[#ff4b00] font-bold text-sm">{m.count}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero o bônus Raio-X
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 md:py-32 px-5 md:px-6 bg-[#0a0f2c] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4b00] blur-[200px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 z-0 opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Badge className="bg-[#ff4b00]/20 text-[#ff4b00] border-none mb-6 px-4 py-1.5 font-bold tracking-widest uppercase">
            Investimento · TJ-CE · 2026
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tudo isso por quanto?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Só o Estratégia já custa R$ 1.319. Aqui você recebe isso + acompanhamento de um Auditor aprovado em 4 concursos, por praticamente o mesmo valor.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6 text-left">Montando separado:</h3>
              <ul className="space-y-4 text-left">
                {priceItems.map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-white font-bold shrink-0 ml-4">{item.value}</span>
                  </li>
                ))}
                <li className="flex justify-between items-center pt-2">
                  <span className="text-slate-300 text-lg">Total separado</span>
                  <span className="text-red-400 font-bold text-xl line-through">R$ 2.109,70</span>
                </li>
              </ul>
              <p className="mt-8 text-[#ff4b00] font-bold text-xl">Agora esquece esse valor.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 w-full h-2 bg-[#ff4b00]" />
              <p className="text-[#1e1f5c] font-bold tracking-widest text-sm mb-4">PLANO · MATERIAL · SUPORTE · BÔNUS</p>

              <div className="text-center mb-4">
                <p className="text-slate-500 font-medium mb-1">ou 12x de</p>
                <p className="text-5xl md:text-6xl font-black text-[#1e1f5c] tracking-tighter">
                  R$ 79<span className="text-2xl font-bold">,00</span>
                </p>
                <p className="text-slate-500 font-medium mt-1">sem juros</p>
              </div>

              <div className="mb-4 text-center">
                <p className="text-slate-400 text-sm mb-1">à vista por</p>
                <p className="text-3xl font-bold text-[#1e1f5c]">R$ 797</p>
              </div>

              <div className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-center mb-6">
                <p className="text-orange-900 font-semibold text-sm">
                  Menos de{" "}
                  <span className="text-2xl font-black text-[#ff4b00]">R$ 9</span>
                  {" "}por dia — menos que um café
                </p>
              </div>

              <a href={CTA_LINK} className="w-full group" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
                <Button size="lg" className="w-full text-lg px-8 py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center justify-center gap-2">
                  Garantir minha vaga
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="mt-6 flex flex-col items-center gap-2 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-green-500" /> Pagamento 100% seguro · Acesso em até 24h
                </div>
                <div className="flex items-center gap-1 text-[#ff4b00]">
                  <AlertTriangle className="w-3 h-3" /> Somente 10 vagas disponíveis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ── GARANTIA ── */}
      <section className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-green-100 flex items-center justify-center border-8 border-white shadow-xl relative z-10">
              <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-green-600" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-200 rounded-full blur-2xl z-0" />
          </div>
          <div className="text-center md:text-left">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none mb-4 font-bold tracking-widest uppercase">
              Risco Zero
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f5c] tracking-tight mb-4">
              Garantia de 7 dias — sem perguntas.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Se em 7 dias você entrar, acessar os materiais e sentir que não é pra você — devolvemos 100% do valor. Sem burocracia. Sem questionamento. Você não arrisca nada entrando. Só perde se não tentar.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-500">
              <Lock className="w-4 h-4 text-green-600" /> Compra protegida · Reembolso garantido em até 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00] mb-4">Esse lugar é seu — se você for esse perfil</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Para quem esse método foi feito.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-4 flex items-center gap-2 text-base">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> É pra você se:
              </p>
              <ul className="space-y-3">
                {[
                  "Quer levar o TJ-CE a sério e seguir um plano até a prova",
                  "Entende que passar na FCC em 3 meses exige método — não improviso",
                  "Quer estabilidade, R$ 8,8k e uma carreira jurídica sólida",
                  "Aceita ser guiado por quem já passou em concursos desse nível",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-800 mb-4 flex items-center gap-2 text-base">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" /> Não é pra você se:
              </p>
              <ul className="space-y-3">
                {[
                  "Quer algo sem compromisso, estudar só quando der",
                  "Espera aprovação garantida sem esforço consistente",
                  "Prefere tentar sozinho sem seguir nenhum método",
                  "Não está pronto para ser cobrado e ajustar a rota",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-900 text-sm">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Perguntas Frequentes</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Ainda tem alguma dúvida?
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-base md:text-lg text-[#1e1f5c] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#ff4b00] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-slate-100">
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full border-2 border-[#ff4b00] text-[#ff4b00] hover:bg-[#ff4b00] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer bg-transparent">
                Tirar outra dúvida com o Francisco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── MINI PREÇO ── */}
      <section className="py-12 md:py-16 px-5 md:px-6 bg-[#1e1f5c]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">É recomendado me antecipar!</p>
          <div className="flex flex-col items-center gap-1">
            <p className="text-white/60 text-base">ou 12x de R$ 79,00</p>
            <p className="text-5xl md:text-6xl font-black text-white tracking-tight">R$ 797</p>
          </div>
          <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
            <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:cursor-pointer">
              Garantir minha vaga agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-orange-100 text-[#ff4b00] rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
            A prova será em 9 de agosto.{" "}
            <br className="hidden md:block" />
            O relógio já está correndo.
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
            Você pode entrar agora — com plano, material e um Auditor do seu lado — ou continuar sem saber se está no caminho certo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:cursor-pointer">
                Garantir minha vaga agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="TJ-CE Button" data-gtm-event="click_whatsapp">
              <Button size="lg" className="w-full text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full bg-[#25d366] hover:bg-[#1da354] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
                Falar com o Francisco
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <p className="text-slate-500 text-sm font-semibold">Vagas limitadas. Garantia de 7 dias.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-slate-50">
        <p className="mb-2">Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
        <p className="text-xs">Mentoria Concursos</p>
      </footer>
    </main>
  )
}
