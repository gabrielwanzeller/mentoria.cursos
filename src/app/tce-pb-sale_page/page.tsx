"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Lock,
  ArrowRight,
  AlertTriangle,
  CircleDollarSign,
  Clock,
  Palmtree,
  Home,
  TrendingUp,
  Users,
  ShieldCheck,
  Hourglass,
  Calendar,
  Target,
  MonitorPlay,
  Smartphone,
  Video,
  BookOpen,
  Search,
  HeartHandshake,
  RotateCcw,
  Book,
  Scale,
  CheckCircle2,
  XCircle,
  Trophy,
  Medal,
  Star,
  ChevronDown,
  PlayCircle,
} from "lucide-react"

const CTA_LINK = "#"

const testimonials = [
  {
    name: "Lucas Pinheiro",
    role: "Aprovado como Auditor de Controle Externo do TCE-PA",
    text: "A mentoria foi essencial para tornar mais curta e objetiva a jornada rumo à aprovação. Foi importante para organizar minha rotina e ajudar na eleição da metodologia e materiais utilizados. Por isso, sou muito grato ao Francisco.",
  },
  {
    name: "Victor Cortez",
    role: "1º lugar · Auditor da SEFA-PA",
    text: "A preparação com o Francisco me ajudou a priorizar assuntos, saber a importância que cada um deve ter, estudar com estratégia e foco. Nem sempre é preciso fechar o edital.",
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
]

const faqs = [
  {
    question: "É muito cedo para começar sem edital?",
    answer: "Cedo é exatamente onde você quer estar. Victor Cortez tirou 1º lugar sem fechar o edital. Eu mesmo passei em 4 concursos sem fechar o edital. Quem começa agora chega na frente. Quem espera o edital sair, estuda correndo.",
  },
  {
    question: "Consigo estudar sozinho.",
    answer: "Talvez. Mas quanto tempo vai perder descobrindo o que funciona? Passei em 4 concursos — coloco tudo isso na sua mão desde o primeiro dia. A diferença não é o conteúdo. É saber o que priorizar, quando mudar e como não desperdiçar tempo com o que não cai.",
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
    answer: "Montar tudo separado sai R$ 3.569. Aqui você paga R$ 1.497 — e ainda tem um Auditor do TCE-PE do seu lado todos os dias. Se parcelar, são 6x de R$ 275. O salário do Auditor TCE-PB supera R$ 240 mil por ano. O investimento na Turma 2 representa menos de 0,7% disso.",
  },
  {
    question: "Como funciona depois que eu entro?",
    answer: "Assim que o pagamento é confirmado, você recebe acesso ao grupo exclusivo da Turma 2 e ao login na plataforma Estratégia Concursos. Entramos em contato direto pelo WhatsApp para montar o seu plano personalizado. Tudo em até 24 horas.",
  },
  {
    question: "E se o edital demorar?",
    answer: "Melhor ainda. Cada dia a mais de preparação é vantagem sobre quem vai esperar para começar. A Rota Adaptável garante que, se qualquer coisa mudar, seu plano muda junto — sem custo extra.",
  },
  {
    question: "E se eu não for aprovado?",
    answer: "Nenhuma mentoria garante aprovação. O que garanto é o melhor método, material completo e acompanhamento direto de quem passou nesse concurso. O resto depende de você.",
  },
]

const benefitsJoaoPessoa = [
  {
    icon: CircleDollarSign,
    title: "R$ 21.500 iniciais",
    description: "Liberdade financeira que começa no primeiro mês.",
  },
  {
    icon: Clock,
    title: "Jornada de 6h — das 7h às 13h",
    description: "A tarde inteira é sua.",
  },
  {
    icon: Palmtree,
    title: "50 dias de folga por ano",
    description: "30 de férias + 20 de recesso remunerado.",
  },
  {
    icon: Home,
    title: "Possibilidade real de teletrabalho",
    description: "Liberdade geográfica de verdade.",
  },
  {
    icon: TrendingUp,
    title: "40 cargos vagos",
    description: "E a intenção declarada do órgão é convocar todos os aprovados.",
  },
]

const reasonsToStudy = [
  {
    icon: CircleDollarSign,
    title: "Salário de mais de R$ 21.500",
    description: "Um dos maiores salários iniciais do serviço público do Nordeste — sem contar auxílio saúde de R$ 1.500 e auxílio alimentação de R$ 1.100.",
  },
  {
    icon: Users,
    title: "40 cargos vagos — e a intenção de convocar todos",
    description: "A intenção declarada do órgão é convocar todos os aprovados para suprir o déficit no quadro. É a maior oportunidade de entrada no Tribunal em quase uma década.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade total — cargo efetivo",
    description: "Concurso público. Cargo efetivo. Estabilidade garantida por lei. Você troca a incerteza do mercado por uma carreira sólida, com progressão e benefícios reais.",
  },
  {
    icon: Hourglass,
    title: "Edital previsto até junho de 2026",
    description: "Você ainda tem tempo de chegar preparado antes da concorrência — se começar agora.",
  },
  {
    icon: Calendar,
    title: "Último concurso: 2017",
    description: "Quase 10 anos sem abrir vagas. Quem não entrar nessa oportunidade, espera mais uma década.",
  },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado",
    description:
      "Começa com um questionário individualizado — parto do seu nível, não de um modelo pronto. Planejamento com metas ordenadas pelos assuntos mais cobrados pela banca e técnicas de estudo aplicadas especificamente a Tribunais de Contas.",
  },
  {
    icon: MonitorPlay,
    title: "Assinatura Estratégia Concursos Premium — 6 meses",
    description:
      "Guarde seu dinheiro para a taxa de inscrição — o material de base eu vou te dar. PDFs, videoaulas e sistema de questões. O melhor material do mercado, com o seu login e a sua senha. Sem custo extra.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Direto Comigo — De Segunda a Segunda",
    description:
      "Sem robô. Sem IA. Sem assistente. Quando você manda mensagem, respondo eu. Um Auditor do TCE-PE que passou no TCE-PB ao seu lado, todos os dias.",
  },
  {
    icon: Video,
    title: "6 Lives Mensais Exclusivas",
    description:
      "Todo mês a gente se encontra com a turma limitada ao vivo. Motivação, técnicas de estudo e tira-dúvidas — com quem passou no último concurso do TCE-PB.",
  },
  {
    icon: BookOpen,
    title: "Cadernos de Questões + Revisões Programadas",
    description: "Plataforma com revisões programadas para fixar o conteúdo certo na hora certa. Cadernos direcionados para o perfil da banca.",
  },
  {
    icon: Search,
    title: "Live de Análise Completa do Edital",
    description:
      "Assim que o edital do TCE-PB for publicado, a gente se reúne ao vivo para dissecar tudo — disciplinas, pesos, perfil da banca, o que priorizar. Você não perde um dia.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado com Método Real",
    description: "Você estuda. Eu cuido do resto. Quando algo não está funcionando, eu corrijo o rumo. Isso não existe em curso nenhum.",
  },
]

const bonuses = [
  {
    icon: RotateCcw,
    title: "Bônus 1 — Rota Adaptável",
    description: "Pivotou de órgão? Mudou o foco? Eu refaço o seu plano do zero, sem custo adicional. Sua preparação nunca fica travada por uma mudança de rota."
  },
  {
    icon: Video,
    title: "Bônus 2 — Live Estratégica Extra",
    description: "Uma sessão adicional exclusiva para a Turma 2 — além das 6 lives mensais já inclusas."
  },
  {
    icon: Book,
    title: "Bônus 3 — E-book Apostas Pós-Edital",
    description: "Análise completa dos temas com maior chance de cair, atualizada assim que o edital for publicado. Direto ao ponto."
  },
  {
    icon: Scale,
    title: "Bônus 4 — E-book de Jurisprudência",
    description: "Informativos e decisões selecionados especificamente para Tribunais de Contas. Exatamente o que a banca cobra."
  }
]

const approvals = [
  {
    icon: Medal,
    title: "TCE-PA — 1º lugar",
    description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos.",
  },
  {
    icon: Trophy,
    title: "TCE-PB — Aprovado",
    description: "Passei no último concurso do TCE-PB — o mesmo que você vai enfrentar.",
  },
  {
    icon: CheckCircle2,
    title: "TCE-PE — Auditor",
    description: "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil.",
  },
  {
    icon: CheckCircle2,
    title: "ISS Sobral — 1º lugar",
    description: "Método que funciona em qualquer banca, qualquer concurso.",
  },
]

export default function TcePbSalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen font-sans selection:bg-[#ff4b00] selection:text-white">
      {/* ── STICKY BAR ── */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#1e1f5c] text-white py-3 px-4 shadow-md flex items-center justify-center gap-3 flex-wrap">
        <Lock className="w-4 h-4 text-[#ff4b00]" />
        <span className="text-sm md:text-base font-semibold text-center">Somente 15 vagas · R$ 1.497 ou 6x de R$ 275 sem juros</span>
        <a href={CTA_LINK} className="text-[#ff4b00] hover:text-[#ff7a45] text-sm md:text-base font-bold flex items-center gap-1 transition-colors">
          Garantir minha vaga <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[92dvh] text-center px-5 pt-20 pb-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#ff4b00]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <Badge className="h-fit text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 font-semibold tracking-wide bg-[#151642] border border-[#ff4b00]/30 text-slate-200 shadow-lg flex items-center gap-2 max-w-[90vw] whitespace-normal text-center leading-snug rounded-full">
            <Lock className="w-3 h-3 text-[#ff4b00]" /> Somente 15 vagas · Acompanhamento individual · 2026
          </Badge>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight w-full">
            Se você esperar{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b00] to-[#ff7a45]">o edital sair,</span>
            <br />
            já vai estar atrasado.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            O TCE-PB vem aí. Quem começa agora chega competitivo.{" "}
            <span className="font-semibold text-white">Quem espera, corre atrás.</span>
          </p>

          {/* VSL Placeholder */}
          <div className="w-full max-w-3xl aspect-video bg-black/50 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative flex items-center justify-center group cursor-pointer mt-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-[#ff4b00] group-hover:scale-110 transition-all duration-300 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-center z-10">
              <p className="text-white/70 text-sm md:text-base font-medium drop-shadow-md">Clique para assistir com som</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-4 mt-2 md:mt-4 w-full">
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="checkout">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-8 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 group-hover:shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero começar agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-white/80 text-sm md:text-base font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#ff4b00]" /> Somente 15 vagas · Sem bot, sem IA
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: O QUE ESPERA POR VOCÊ ── */}
      {/* Layout: grade de cards com ícone centralizado — claro, convidativo */}
      <section className="py-16 md:py-24 px-5 md:px-6 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Seu Futuro Cargo
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Não é só um crachá. É isso aqui:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center">
            {benefitsJoaoPessoa.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group ${i === 4 ? 'lg:col-span-3 md:col-span-2' : ''}`}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f0f1fa] flex items-center justify-center text-[#2e2f83] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1e1f5c] mb-2">{b.title}</p>
                    <p className="text-base text-slate-500 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 p-8 bg-[#1e1f5c] text-white rounded-3xl text-center shadow-xl">
            <p className="text-xl md:text-2xl font-bold mb-4">Último concurso: 2017. Quase uma década sem abrir vagas.</p>
            <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto">Essa é a maior oportunidade de entrada no TCE-PB em quase 10 anos. A pergunta não é se você quer esse cargo — é se você vai chegar preparado quando o edital sair.</p>
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero minha vaga no TCE-PB
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: POR QUE VALE A PENA ── */}
      {/* Layout: lista numerada — visualmente oposto à grade de cards da seção anterior */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Por que vale a pena
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Vale a pena estudar para o TCE-PB?
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {reasonsToStudy.map((b, i) => (
              <div key={i} className="flex items-start gap-6 py-8 first:pt-0 last:pb-0">
                <span className="text-5xl md:text-6xl font-black text-[#ff4b00]/25 leading-none shrink-0 w-14 text-right select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 pt-1">
                  <p className="font-bold text-lg md:text-xl text-[#1e1f5c] mb-1.5">{b.title}</p>
                  <p className="text-slate-500 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINI PREÇO (após seção 3) ── */}
      <section className="py-12 md:py-16 px-5 md:px-6 bg-[#0a0f2c]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Investimento</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            A mentoria completa custa <span className="text-[#ff4b00]">R$ 1.497</span>
          </h2>
          <p className="text-slate-300 text-lg">ou <strong className="text-white">6x de R$ 275</strong> sem juros · acesso em até 24h</p>
          <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="checkout">
            <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:cursor-pointer">
              Quero parar de estudar errado
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-slate-400 text-sm">Garantia de 7 dias — se não for pra você, devolvemos tudo.</p>
        </div>
      </section>

      {/* ── SEÇÃO 4: BLOCO DE RUPTURA ── */}
      <section className="py-20 md:py-28 px-5 md:px-6 bg-[#ff4b00] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-8 px-4 py-1.5 font-bold tracking-widest uppercase">
            Se você já investiu em curso antes
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Curso entrega conteúdo.<br className="hidden md:block" />
            Mentoria entrega resultado.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-white/90">
            Na mentoria eu sei onde você está, o que você precisa estudar agora, e corrijo o rumo quando necessário. Não é curso gravado. Não é plano genérico. É acompanhamento real — de alguém que passou pelos mesmos concursos que você quer passar.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5: COMPARAÇÃO ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Por que não basta só estudar
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              A diferença entre quem passa e quem fica tentando
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Não é inteligência. Não é sorte. É o que acontece enquanto você estuda.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-slate-200 shadow-lg">
            <table className="w-full text-left min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="p-5 md:p-6 text-[#1e1f5c] font-bold text-lg border-b border-slate-200 bg-slate-50 w-1/4"></th>
                  <th className="p-5 md:p-6 text-slate-500 font-bold text-lg border-b border-slate-200 border-l bg-slate-50 w-1/3">Estudando Sozinho</th>
                  {/* Coluna Mentoria: borda superior laranja + header escuro */}
                  <th className="p-5 md:p-6 bg-[#1e1f5c] text-white font-bold text-lg border-b border-[#ff4b00] border-l-4 border-l-[#ff4b00] w-[40%] rounded-tr-xl md:rounded-tr-3xl">
                    ✦ Turma 2 — Mentoria TCE-PB
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  {
                    label: "Plano de estudos",
                    solo: "Genérico, copiado da internet, serve pra todo mundo e não funciona pra ninguém",
                    mentoria: "100% personalizado pro seu nível, seu tempo e os temas mais cobrados no TCE-PB",
                  },
                  {
                    label: "Material",
                    solo: "Você paga separado — Estratégia, PDFs, videoaulas",
                    mentoria: "Estratégia Premium 6 meses já incluso. Login próprio. Zero custo extra",
                  },
                  {
                    label: "Dúvidas",
                    solo: "Fórum, grupo aleatório, IA — quando alguém responde",
                    mentoria: "WhatsApp direto com Francisco, Auditor do TCE-PE, de segunda a segunda",
                  },
                  {
                    label: "Quando trava",
                    solo: "Fica perdido, perde dias, muda de plano sem critério",
                    mentoria: "Eu corrijo o rumo — se mudar de órgão, refaço o plano sem custo",
                  },
                  {
                    label: "Edital",
                    solo: "Você tenta entender sozinho o que priorizar",
                    mentoria: "Live de análise completa do edital assim que sair — você não perde um dia",
                  },
                  {
                    label: "Resultado",
                    solo: "Incerteza. Sem saber se está no caminho certo",
                    mentoria: "Método comprovado em 4 aprovações — 2 delas em 1º lugar",
                  },
                  {
                    label: "Risco",
                    solo: "Alto — tempo perdido não volta",
                    mentoria: "Garantia de 7 dias. Se não for pra você, devolvemos tudo",
                    isLast: true,
                  },
                ].map((row, i, arr) => (
                  <tr key={i}>
                    <td className={`p-5 font-bold text-[#1e1f5c] ${!row.isLast ? 'border-b border-slate-200' : 'rounded-bl-xl md:rounded-bl-3xl'}`}>
                      {row.label}
                    </td>
                    <td className={`p-5 border-l border-slate-200 text-slate-500 ${!row.isLast ? 'border-b border-slate-200' : ''}`}>
                      {row.solo}
                    </td>
                    {/* Coluna Mentoria: borda laranja forte + fundo tintado */}
                    <td className={`p-5 border-l-4 border-l-[#ff4b00] border-slate-200 bg-[#f5f7ff] text-[#1e1f5c] font-semibold ${!row.isLast ? 'border-b' : 'rounded-br-xl md:rounded-br-3xl'}`}>
                      <span className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#ff4b00] shrink-0 mt-0.5" />
                        {row.mentoria}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center bg-[#f0f1fa] p-8 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e1f5c] mb-4">Curso te dá conteúdo.<br />Mentoria te dá resultado.</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              No curso, você estuda e torce. Na mentoria, eu sei onde você está, o que você precisa agora, e corrijo quando necessário.
            </p>
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero estudar com direção — não sozinho
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6: O QUE ESTÁ INCLUSO ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100 rounded-[2rem] md:rounded-[3rem] mx-3 md:mx-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Tudo incluso na mentoria
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              O que está incluso na sua vaga
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              O pacote completo. Sem surpresa. Sem custo extra.
            </p>
          </div>

          {/* Resumo rápido */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto shadow-sm">
            <p className="font-bold text-[#1e1f5c] text-lg mb-4">Você vai receber:</p>
            <ul className="space-y-2">
              {[
                "Plano de estudos 100% personalizado",
                "Assinatura Estratégia Concursos Premium — 6 meses inclusa",
                "Suporte direto comigo pelo WhatsApp, de segunda a segunda",
                "6 lives mensais exclusivas com a turma",
                "Cadernos de questões + revisões programadas",
                "Live de análise completa do edital assim que sair",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4b00] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${i === 6 ? 'lg:col-span-3 md:col-span-2 text-center items-center' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff4b00]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl text-[#1e1f5c] mb-3 leading-tight ${i === 6 ? 'text-2xl' : ''}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base text-slate-600 leading-relaxed ${i === 6 ? 'max-w-2xl' : ''}`}>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group" data-gtm="checkout">
              <Button size="lg" className="text-lg px-10 py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
                Quero uma das 15 vagas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7: BÔNUS ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Bônus exclusivos da Turma 2
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Além de tudo isso, você ainda recebe:
            </h2>
            <p className="text-slate-500">Tudo disponível assim que você entrar na Turma 2.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {bonuses.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 md:gap-5 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#f0f1fa] border border-[#d8dcf0] shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-[#ff4b00] group-hover:bg-[#1e1f5c] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1e1f5c] mb-2">{b.title}</p>
                    <p className="text-base text-slate-600 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8: OFERTA + PREÇO ── */}
      <section className="py-20 md:py-32 px-5 md:px-6 bg-[#0a0f2c] overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4b00] blur-[200px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 z-0 opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Badge className="bg-[#ff4b00]/20 text-[#ff4b00] border-none mb-6 px-4 py-1.5 font-bold tracking-widest uppercase">
            Investimento · Turma 2 · 2026
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tudo isso por quanto?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Só o Estratégia já custa R$ 1.319. Aqui você recebe isso + acompanhamento de um Auditor do TCE-PE por praticamente o mesmo valor.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Tabela de Preços Isolados */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6 text-left">Montando separado:</h3>
              <ul className="space-y-4 text-left">
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300">Assinatura Estratégia Premium 6 meses</span>
                  <span className="text-white font-bold">R$ 1.319</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300">6 Lives Exclusivas</span>
                  <span className="text-white font-bold">R$ 600</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300">E-books de Apostas e Jurisprudência</span>
                  <span className="text-white font-bold">R$ 150</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300">Mentoria individual (Auditor TCE-PB)</span>
                  <span className="text-white font-bold">R$ 1.500</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-slate-300 text-lg">Total separado</span>
                  <span className="text-red-400 font-bold text-xl line-through">R$ 3.569</span>
                </li>
              </ul>
              <p className="mt-8 text-[#ff4b00] font-bold text-xl">Agora esquece esse valor.</p>
            </div>

            {/* Preço Oficial */}
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 w-full h-2 bg-[#ff4b00]" />
              <p className="text-[#1e1f5c] font-bold tracking-widest text-sm mb-4">PLANO · MATERIAL · SUPORTE · BÔNUS</p>

              <div className="text-center mb-4">
                <p className="text-slate-500 font-medium mb-1">ou 6x de</p>
                <p className="text-5xl md:text-6xl font-black text-[#1e1f5c] tracking-tighter">R$ 275<span className="text-2xl font-bold">,00</span></p>
                <p className="text-slate-500 font-medium mt-1">sem juros</p>
              </div>

              <div className="mb-4 text-center">
                <p className="text-slate-400 text-sm mb-1">à vista por</p>
                <p className="text-3xl font-bold text-[#1e1f5c]">R$ 1.497</p>
              </div>

              {/* R$9/dia — callout destacado */}
              <div className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-center mb-6">
                <p className="text-orange-900 font-semibold text-sm">
                  Menos de{" "}
                  <span className="text-2xl font-black text-[#ff4b00]">R$ 9</span>
                  {" "}por dia — menos que um café
                </p>
              </div>

              <a href={CTA_LINK} className="w-full group" data-gtm="checkout">
                <Button size="lg" className="w-full text-lg px-8 py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center justify-center gap-2">
                  Garantir minha vaga na Turma 2
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="mt-6 flex flex-col items-center gap-2 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-green-500" /> Pagamento 100% seguro · Acesso em até 24h
                </div>
                <div className="flex items-center gap-1 text-[#ff4b00]">
                  <AlertTriangle className="w-3 h-3" /> Somente 15 vagas disponíveis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 9: GARANTIA ── */}
      {/* bg-white — separa do escuro da seção anterior */}
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
              Se em 7 dias você entrar na Turma 2, acessar os materiais e sentir que não é pra você — devolvemos 100% do valor. Sem burocracia. Sem questionamento. Você não arrisca nada entrando. Só perde se não tentar.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-500">
              <Lock className="w-4 h-4 text-green-600" /> Compra protegida · Reembolso garantido em até 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10: PARA QUEM É ── */}
      {/* bg-slate-50 — alterna com o branco da garantia */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="bg-slate-100 text-slate-500 border-none mb-6 px-4 py-1.5 font-bold tracking-widest uppercase">
              Esse lugar é seu — se você for esse perfil
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight mt-4">
              Para quem quer levar concurso a sério.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* É pra você */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-4 flex items-center gap-2 text-base">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> É pra você se:
              </p>
              <ul className="space-y-3">
                {[
                  "Quer levar concurso a sério e seguir um plano até a prova",
                  "Entende que aprovação em Tribunal de Contas exige disciplina real",
                  "Quer estabilidade, salário acima de R$ 20 mil e uma carreira sólida",
                  "Aceita ser guiado por quem já passou nesse concurso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é pra você */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-800 mb-4 flex items-center gap-2 text-base">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" /> Não é pra você se:
              </p>
              <ul className="space-y-3">
                {[
                  "Quer algo sem compromisso, para estudar só quando der",
                  "Espera aprovação garantida sem esforço consistente",
                  "Prefere tentar sozinho indefinidamente",
                  "Não está pronto para seguir um método e ser cobrado",
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

      {/* ── SEÇÃO 11: AUTORIDADE ── */}
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

              {/* Stats com hierarquia: "2 primeiros lugares" em destaque */}
              <div className="grid grid-cols-3 gap-3 w-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-[#ff4b00]">4</p>
                  <p className="text-slate-400 text-xs mt-1">aprovações</p>
                </div>
                {/* Destaque no número mais impactante */}
                <div className="bg-[#ff4b00]/10 border-2 border-[#ff4b00]/50 rounded-2xl p-4 text-center ring-1 ring-[#ff4b00]/20 relative">
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
                  "Você não terá um professor passando conteúdo. Terá um Auditor do TCE-PE que passou no TCE-PB — do seu lado, todos os dias. Isso não existe em curso nenhum."
                </blockquote>
              </div>

              <div className="flex flex-col gap-4 w-full mt-2">
                {approvals.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e1f5c] border border-[#2e2f83] text-[#ff4b00] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors duration-300 shadow-lg flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 w-full sm:w-auto">
                <a href={CTA_LINK} className="inline-block group w-full" data-gtm="checkout">
                  <Button size="lg" className="w-full text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                    Quero estudar com quem já passou no TCE-PB
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:ml-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent z-10 bottom-0 h-full w-full pointer-events-none" />
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

      {/* ── SEÇÃO 12: DEPOIMENTOS ── */}
      {/* bg-white — vem após o escuro da autoridade, respira */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Aprovações que falam por si
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Quem estudou com método aprovou.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="flex text-[#ff4b00] gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-slate-700 italic leading-relaxed flex-grow">
                  &quot;{t.text}&quot;
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                  {/* Avatar com inicial */}
                  <div className="w-10 h-10 rounded-full bg-[#1e1f5c] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1e1f5c] text-base leading-tight">{t.name}</p>
                    <p className="text-[#ff4b00] text-xs font-semibold mt-0.5 leading-snug">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="checkout">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero o meu nome nessa lista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 13: FAQ (accordion) ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Ainda tem alguma dúvida?
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-bold text-base md:text-lg text-[#1e1f5c] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[#ff4b00] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-slate-100">
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer" className="inline-block group w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full border-2 border-[#ff4b00] text-[#ff4b00] hover:bg-[#ff4b00] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer bg-transparent">
                Tirar outra dúvida com o Francisco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 14: CTA FINAL ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 mb-8 md:mb-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 text-[#ff4b00] rounded-full flex items-center justify-center mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] mb-6 tracking-tight">
            O edital pode sair a qualquer momento.
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-2xl">
            Você pode começar agora — com plano, material e um Auditor do seu lado — ou correr atrás depois que o edital sair. A escolha é simples.
          </p>

          <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="checkout">
            <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 md:py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center justify-center gap-2 hover:cursor-pointer">
              Garantir minha vaga antes que feche
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-slate-500 text-sm mt-4 font-semibold text-center max-w-sm">Somente 15 vagas. Garantia de 7 dias.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-auto bg-slate-50">
        <p className="mb-2">Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
        <p className="text-xs">Mentoria Concursos · CNPJ: XX.XXX.XXX/XXXX-XX</p>
        <div className="flex items-center justify-center gap-4 mt-4 text-xs">
          <a href="#" className="hover:text-slate-800 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Termos de Uso</a>
        </div>
      </footer>

    </main>
  )
}
