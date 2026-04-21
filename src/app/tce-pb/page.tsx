import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
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
  Clock,
  ShieldCheck,
  Users,
  Coins,
  ArrowRight
} from "lucide-react"

const CTA_LINK = "https://chat.whatsapp.com/KiRQaXSiztuEeKEkRE05mZ?mode=gi_t"

const benefits = [
  { icon: Coins, text: "Salário de até R$ 18.866 — um dos maiores da região" },
  { icon: Users, text: "+200 vagas previstas — oportunidade real para quem se preparar agora" },
  { icon: ShieldCheck, text: "Estabilidade total — cargo efetivo, concurso público" },
  { icon: Clock, text: "Tempo de preparação ainda disponível — edital não saiu, você ainda está no momento certo" },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado",
    description:
      "Esqueça o plano genérico que serve pra todo mundo e não funciona pra ninguém. Você recebe um planejamento feito exclusivamente pra você — baseado nos temas mais cobrados, no seu tempo.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direto Comigo — De Segunda a Segunda",
    description:
      "Sem robô. Sem IA. Sem assistente. Quando você manda mensagem, respondo eu. Um Auditor do TCE-PE ao seu lado de segunda a segunda.",
  },
  {
    icon: GraduationCap,
    title: "6 Meses de Estratégia Concursos Premium",
    description:
      "A melhor plataforma de concursos do Brasil já está no pacote. Você não paga separado. Login próprio, acesso completo, do primeiro ao último dia.",
  },
  {
    icon: MonitorPlay,
    title: "6 Lives Mensais Exclusivas",
    description:
      "Todo mês a gente se encontra com a turma limitada ao vivo. Você recebe dicas ao vivo com quem passou no último concurso do TCE-PB.",
  },
  {
    icon: BookOpenCheck,
    title: "Técnicas de Estudos + Cadernos de Questões",
    description: "Revisões programadas para fixar o conteúdo certo na hora certa.",
  },
  {
    icon: BookMarked,
    title: "E-books de Apostas e Jurisprudência",
    description: "Material focado no que realmente cai — sem enrolação.",
  },
  {
    icon: Presentation,
    title: "Live de Análise Completa do Edital",
    description:
      "Assim que o edital do TCE-PB for publicado, a gente se reúne ao vivo pra dissecar tudo — disciplinas, pesos, perfil da banca, o que priorizar.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado com Método Real",
    description: "Você estuda. Eu cuido do resto.",
  },
]

const approvals = [
  {
    icon: Trophy,
    title: "TCE-PA — 1º lugar",
    description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos.",
  },
  {
    icon: Medal,
    title: "TCE-PB — Aprovado",
    description: "Passei no último concurso do TCE-PB — o mesmo que você vai enfrentar.",
  },
  {
    icon: CheckCircle2,
    title: "TCE-PE — Auditor",
    description:
      "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil. Carreira construída com método — não com sorte.",
  },
  {
    icon: CheckCircle2,
    title: "ISS Sobral — Aprovado",
    description:
      "Mais um Primeiro Lugar na prova objetiva que confirma que o método funciona em qualquer banca, qualquer concurso.",
  },
]

export default function TcePbPage() {
  return (
    <main className="min-h-screen font-sans bg-slate-50 selection:bg-[#ff4b00] selection:text-white pb-12">
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 py-28 overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c]">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#ff4b00]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <Badge className="text-sm px-5 py-2 font-semibold tracking-wide bg-[#ff4b00] text-white hover:bg-[#e64300] border-none shadow-lg shadow-[#ff4b00]/20 transition-all">
            🚨 TCE-PB pode abrir com +200 vagas — saia na frente
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            O concurso da TCE-PB <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b00] to-[#ff7a45]">está chegando.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Salário de até <span className="font-bold text-white">R$ 18 mil</span>, estabilidade e um dos
            melhores editais do Nordeste. Receba o plano gratuito + direcionamento.
          </p>

          <div className="flex flex-col items-center gap-4 mt-4">
            <a href={CTA_LINK} className="group" data-gtm="join-group">
              <Button size="lg" className="text-lg px-10 py-7 md:py-8 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 group-hover:shadow-[#ff4b00]/30 flex items-center gap-2 hover:cursor-pointer">
                Entrar no grupo agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-white/60 text-sm font-medium">Gratuito. Sem compromisso. Com direcionamento real.</p>
          </div>
        </div>

        {/* Diagonal cut bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Por que vale a pena
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              A TCE-PB vale a sua preparação?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className="flex items-start gap-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f0f1fa] flex items-center justify-center text-[#2e2f83] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-lg font-medium text-slate-700 leading-relaxed mt-1">{b.text}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group" data-gtm="join-group">
              <Button size="lg" className="text-base px-8 py-6 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 hover:cursor-pointer">
                Quero aproveitar essa oportunidade
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI RECEBER ── */}
      <section className="py-28 px-6 bg-slate-100 rounded-[3rem] mx-4 md:mx-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Tudo incluso
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              O que você vai receber
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Sem precisar comprar mais nada. O pacote completo para a sua aprovação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex flex-col gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff4b00]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#1e1f5c] mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-20 text-center">
            <a href={CTA_LINK} className="inline-block group" data-gtm="join-group">
              <Button size="lg" className="text-lg px-10 py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
                Ter acesso a tudo isso agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── AUTORIDADE ── */}
      <section className="py-28 px-6 bg-[#0a0f2c] overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e2f83] blur-[150px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="flex flex-col items-start text-left space-y-6">
              <Badge variant="outline" className="text-sm px-4 py-1.5 font-bold tracking-widest uppercase border-[#ff4b00] text-[#ff4b00]">
                Quem vai te guiar
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Eu sou Francisco.
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                Não sou professor que aprendeu sobre concurso em livro. Sou Auditor do TCE-PE — e cheguei
                aqui passando pelos mesmos concursos que você quer passar. O meu método é real.
              </p>

              <div className="flex flex-col gap-6 w-full mt-6">
                {approvals.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="flex gap-5 items-start group"
                    >
                      <div className="mt-1 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e1f5c] border border-[#2e2f83] text-[#ff4b00] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors duration-300 shadow-lg flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-white mb-1">{item.title}</h3>
                        <p className="text-slate-300 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <a href={CTA_LINK} className="inline-block group" data-gtm="join-group">
                  <Button size="lg" className="text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4b00]/30 flex items-center gap-2 hover:cursor-pointer">
                    Quero ser orientado por um Auditor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Foto */}
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

      {/* ── URGÊNCIA ── */}
      <section className="py-24 px-6 mb-12 rounded-[3xl] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 text-[#ff4b00] rounded-full flex items-center justify-center mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00] mb-4">
            O tempo está passando
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] mb-6 tracking-tight">
            O edital pode sair a qualquer momento.
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10">
            Comissão formada. Banca a definir. O processo está em andamento.
            Quem entrar no grupo agora já começa com vantagem real sobre quem vai esperar
            o edital sair.
          </p>
          <div className="inline-block px-8 py-6 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 text-lg font-bold shadow-sm mb-12">
            Quem começou depois, correu atrás de quem começou antes.
          </div>

          <a href={CTA_LINK} className="inline-block group" data-gtm="join-group">
            <Button size="lg" className="text-lg px-10 py-7 md:py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
              Não vou perder mais tempo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-slate-500 text-sm mt-4">Vagas limitadas para acompanhamento.</p>
        </div>
      </section>

    </main>
  )
}
