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
  Coins,
  CalendarClock,
  ArrowRight,
  Star,
  HelpCircle,
  BadgeCheck,
  Crosshair,
} from "lucide-react"

const CTA_LINK = "https://chat.whatsapp.com/KM4wBwDZVOy0BaYrAFhVzz?mode=gi_t"

const testimonials = [
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
    name: "Victor Cortez",
    role: "1º lugar — Auditor da SEFA-PA",
    text: "Primeiro lugar. Não é sorte. É método aplicado com consistência.",
  },
  {
    name: "Maria Sena",
    role: "2º lugar — TJ-AP",
    text: "Segundo lugar num concurso estadual disputadíssimo. Resultado de quem estuda com direcionamento real.",
  },
]

const faqs = [
  {
    question: "É muito cedo para começar sem edital?",
    answer: "Cedo é exatamente onde você quer estar. O edital é iminente — banca já definida. Quem começa agora chega na frente com a preparação para o estilo CEBRASPE dominada.",
  },
  {
    question: "Consigo estudar sozinho.",
    answer: "Talvez. Mas quanto tempo vai perder descobrindo o que funciona? Passei três vezes em concursos da CEBRASPE — coloco tudo isso na sua mão desde o primeiro dia.",
  },
  {
    question: "Sou iniciante. É pra mim?",
    answer: "É exatamente pra você. Iniciante não é desvantagem — é tela em branco. A gente constrói do zero, do jeito certo.",
  },
  {
    question: "O suporte é realmente personalizado?",
    answer: "Quando você manda mensagem, respondo eu. Sem robô. Sem IA. Direto no seu WhatsApp, de segunda a segunda.",
  },
  {
    question: "O valor é elevado?",
    answer: "O salário no TCE-MA supera R$ 20 mil por mês. O investimento na mentoria representa uma fração mínima do seu retorno anual. Você não está gastando — está investindo.",
  },
  {
    question: "E se eu não for aprovado?",
    answer: "Nenhuma mentoria garante aprovação. O que garanto é o melhor método, material completo e acompanhamento direto de quem passou três vezes em concursos da CEBRASPE. O resto depende de você.",
  },
]

const benefits = [
  {
    icon: Coins,
    title: "Salários de mais de R$ 20.000",
    description: "Um dos maiores salários iniciais do serviço público do Brasil — com benefícios que tornam a remuneração total ainda mais competitiva.",
  },
  {
    icon: BadgeCheck,
    title: "Banca definida: CEBRASPE",
    description: "Você já sabe quem vai elaborar a prova. Isso é vantagem enorme para quem começa agora com direcionamento certeiro — e eu sou especialista nessa banca.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade total — cargo efetivo",
    description: "Concurso público. Cargo efetivo. Estabilidade garantida por lei. Você troca a incerteza do mercado por uma carreira sólida, com progressão e benefícios reais.",
  },
  {
    icon: Clock,
    title: "O edital ainda não saiu — e isso é uma vantagem",
    description: "Edital iminente. Você ainda tem tempo de chegar preparado antes da concorrência. Quem começa agora estuda com calma, com método e com direcionamento. Quem espera o edital sair, estuda correndo.",
  },
  {
    icon: CalendarClock,
    title: "Anos sem abrir vagas",
    description: "Quem não entrar nessa oportunidade, espera mais uma década. Simples assim.",
  },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado",
    description:
      "Esqueça o plano genérico que serve pra todo mundo e não funciona pra ninguém. Você recebe um planejamento feito exclusivamente pra você — baseado nos temas mais cobrados pela CEBRASPE nos Tribunais de Contas, no seu tempo disponível.",
    bonus: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direto Comigo — De Segunda a Segunda",
    description:
      "Sem robô. Sem IA. Sem assistente. Quando você manda mensagem, respondo eu. Um Auditor do TCE-PE ao seu lado de segunda a segunda.",
    bonus: false,
  },
  {
    icon: GraduationCap,
    title: "5 Meses de Estratégia Concursos Premium",
    description:
      "A melhor plataforma de concursos do Brasil já está no pacote. Você não paga separado. Login próprio, acesso completo, do primeiro ao último dia.",
    bonus: false,
  },
  {
    icon: MonitorPlay,
    title: "5 Lives Mensais Exclusivas",
    description:
      "Todo mês a gente se encontra com a turma limitada ao vivo. Você recebe direcionamento ao vivo de quem passou em três concursos elaborados pela CEBRASPE.",
    bonus: false,
  },
  {
    icon: BookOpenCheck,
    title: "Técnicas de Estudos + Cadernos de Questões",
    description: "Revisões programadas para fixar o conteúdo certo na hora certa.",
    bonus: false,
  },
  {
    icon: BookMarked,
    title: "E-books de Apostas e Jurisprudência",
    description: "Material focado no que realmente cai — sem enrolação.",
    bonus: false,
  },
  {
    icon: Presentation,
    title: "Live de Análise Completa do Edital",
    description:
      "Assim que o edital do TCE-MA for publicado, a gente se reúne ao vivo pra dissecar tudo — disciplinas, pesos, perfil da banca, o que priorizar.",
    bonus: false,
  },
  {
    icon: Crosshair,
    title: "🎁 Raio-X Completo da Banca CEBRASPE",
    description:
      "Análise de mais de 5.000 questões de Controle aplicadas pela CEBRASPE. Você vai saber exatamente o que mais cai, como cai, os padrões de pegadinha e onde concentrar energia. Material exclusivo, construído especificamente para Tribunais de Contas.",
    bonus: true,
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado com Método Real",
    description: "Você estuda. Eu cuido do resto.",
    bonus: false,
  },
]

const approvals = [
  {
    icon: Trophy,
    title: "TCE-PA — 1º lugar (CEBRASPE)",
    description: "Aprovado em 1º lugar nas provas objetivas e discursivas aos 23 anos.",
  },
  {
    icon: Medal,
    title: "TCE-PB — Aprovado (CEBRASPE)",
    description: "Passei no concurso do TCE-PB — elaborado pela mesma banca do TCE-MA.",
  },
  {
    icon: CheckCircle2,
    title: "TCE-PE — Auditor (CEBRASPE)",
    description:
      "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil. Três aprovações na mesma banca — não é coincidência, é método.",
  },
  {
    icon: CheckCircle2,
    title: "ISS Sobral — Aprovado",
    description:
      "Mais uma aprovação que confirma que o método funciona em qualquer concurso.",
  },
]

export default function TceMaPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#ff4b00] selection:text-white pb-12">
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[92dvh] text-center px-5 pt-16 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c]">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#ff4b00]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <Badge className="h-fit text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 font-semibold tracking-wide bg-[#ff4b00] text-white hover:bg-[#e64300] border-none shadow-lg shadow-[#ff4b00]/20 transition-all max-w-[90vw] whitespace-normal text-center leading-snug">
            🚨 TCE-MA com edital iminente e banca definida — saia na frente
          </Badge>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight w-full">
            O concurso do TCE-MA{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b00] to-[#ff7a45]">está chegando.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Previsão de vagas para Auditor, Analista e Técnico. Salários acima de{" "}
            <span className="font-bold text-white">R$ 20 mil</span>, estabilidade e uma das maiores oportunidades dos Tribunais de Contas do Nordeste. Receba o plano + direcionamento completo.
          </p>

          <div className="flex flex-col items-center gap-3 md:gap-4 mt-2 md:mt-4 w-full">
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="join_group">
              <Button data-gtm="join_group" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-8 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 group-hover:shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                Entrar no grupo de lançamento agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-white/60 text-sm font-medium">Vagas limitadas. Com direcionamento real.</p>
          </div>
        </div>

      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Por que vale a pena
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Vale a pena estudar para o TCE-MA?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 md:gap-5 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#f0f1fa] flex items-center justify-center text-[#2e2f83] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-base text-[#1e1f5c] mb-1">{b.title}</p>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 md:mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="join_group">
              <Button data-gtm="join_group" size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero aproveitar essa oportunidade
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI RECEBER ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100 rounded-[2rem] md:rounded-[3rem] mx-3 md:mx-8">
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
                  className={`flex flex-col gap-6 p-8 rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    item.bonus
                      ? "bg-amber-50 border-amber-300 ring-2 ring-amber-400/40"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.bonus ? "bg-amber-100 text-amber-600" : "bg-orange-100 text-[#ff4b00]"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    {item.bonus && (
                      <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                        Bônus exclusivo
                      </span>
                    )}
                    <h3 className={`font-bold text-xl mb-3 leading-tight ${item.bonus ? "text-amber-900" : "text-[#1e1f5c]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${item.bonus ? "text-amber-800" : "text-slate-600"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-20 text-center">
            <a href={CTA_LINK} className="inline-block group" data-gtm="join_group">
              <Button data-gtm="join_group" size="lg" className="text-lg px-10 py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
                Quero uma das vagas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                aqui passando pelos mesmos concursos que você quer passar. O meu método é real. E com a CEBRASPE, especificamente, meu histórico fala por si.
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
              <div className="mt-8 flex justify-center">
                <a href={CTA_LINK} className="inline-block group" data-gtm="join_group">
                  <Button data-gtm="join_group" size="lg" className="text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4b00]/30 flex items-center gap-2 hover:cursor-pointer">
                    Quero estudar com um Auditor
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

      {/* ── PROVA SOCIAL ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Aprovações que falam por si
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Quem estudou com método aprovou.
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Resultados reais de quem acreditou no direcionamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative"
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
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="font-bold text-[#1e1f5c] text-lg">{t.name}</p>
                  <p className="text-[#ff4b00] text-sm font-semibold mt-1 leading-snug">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="join_group">
              <Button data-gtm="join_group" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
                Quero o meu nome nessa lista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e1f5c] tracking-tight">
              Ainda tem alguma dúvida?
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              As respostas para as perguntas mais comuns de quem está decidindo entrar.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f0f1fa] flex items-center justify-center text-[#2e2f83] group-hover:bg-[#ff4b00] group-hover:text-white transition-colors">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-[#1e1f5c] mb-2">{faq.question}</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="join_group">
              <Button data-gtm="join_group" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer shadow-[#ff4b00]/20">
                Tirar outra dúvida com o Francisco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── URGÊNCIA ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 mb-8 md:mb-12 bg-white relative overflow-hidden">
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
            Banca definida. CEBRASPE. O processo está em andamento.
            Quem entrar agora já começa com vantagem real sobre quem vai esperar
            o edital sair.
          </p>
          <div className="inline-block px-8 py-8 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 text-lg shadow-sm mb-12 text-left max-w-2xl">
            <p className="font-bold mb-4 text-xl text-amber-950">Sabe o que eu aprendi passando em 4 concursos?</p>
            <p className="mb-4 leading-relaxed">Ninguém começa preparado. Ninguém tem o momento perfeito. Ninguém tem tudo resolvido antes de dar o primeiro passo.</p>
            <p className="mb-5 leading-relaxed">O que separa quem passa de quem fica tentando não é talento. <span className="font-semibold">É a decisão de começar</span> — mesmo sem ter tudo, mesmo com medo, mesmo sem certeza. Começa hoje com o que você tem. O caminho se constrói andando.</p>
            <p className="font-bold text-amber-950">Seu futuro agradece.</p>
          </div>

          <a href={CTA_LINK} className="inline-block group" data-gtm="join_group">
            <Button data-gtm="join_group" size="lg" className="text-lg px-10 py-7 md:py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
              Não vou perder mais tempo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-slate-500 text-sm mt-4">Vagas limitadas para acompanhamento.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-auto bg-slate-50">
        <p>Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
      </footer>

    </main>
  )
}
