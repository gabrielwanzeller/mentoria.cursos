import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  MessageCircle,
  GraduationCap,
  MonitorPlay,
  BookOpenCheck,
  BookMarked,
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mentoria TCE-GO",
  description: "O método correto para você estudar. Estude com um Auditor de Tribunal de Contas!",
}

const CTA_LINK = "https://wa.me/5588988058933?text=Ol%C3%A1%2C%20Francisco%21%20Vi%20a%20mentoria%20para%20o%20TCE-GO%20e%20tenho%20interesse.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"

const testimonials = [
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
    name: "Marcos Soares",
    role: "Aprovado como Analista do TJ-PA",
    text: "Mais um aluno que chegou com método e saiu com aprovação.",
  },
  {
    name: "Maria Sena",
    role: "2º lugar — TJ-AP",
    text: "Segundo lugar num concurso estadual disputadíssimo. Resultado de quem estuda com direcionamento real.",
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
    answer: "Dá — e você ainda tem tempo de sobra para fazer diferente. A prova é em 17 de janeiro de 2027. Quem começa agora estuda com calma e constrói uma base sólida, sem correria. Quem deixa para depois vai precisar recuperar o tempo perdido na marra. Comece hoje.",
  },
  {
    question: "Consigo estudar sozinho?",
    answer: "Talvez. Mas quanto tempo vai perder descobrindo o que funciona? Passei em 3 concursos de Tribunal de Contas, incluindo o 1º lugar no TCE-PA. Coloco tudo isso na sua mão desde o primeiro dia.",
  },
  {
    question: "Sou iniciante. É pra mim?",
    answer: "É exatamente pra você. Iniciante não é desvantagem — é tela em branco. A gente constrói do zero, do jeito certo.",
  },
  {
    question: "O suporte é realmente personalizado?",
    answer: "Quando você manda mensagem, respondo eu. Sem robô. Sem IA. Direto no seu WhatsApp, todos os dias da semana.",
  },
  {
    question: "Você não é de Goiás, isso é um problema?",
    answer: "Não. O que decide sua aprovação não é geografia, é entender como a banca cobra e como um Tribunal de Contas funciona por dentro. Isso eu conheço: 3 aprovações em TCE, incluindo o 1º lugar no TCE-PA, e hoje sou Auditor efetivo do TCE-PE.",
  },
  {
    question: "O valor é elevado?",
    answer: "O Técnico de Controle Externo do TCE-GO tem remuneração inicial de R$ 11.862,19. O investimento na mentoria é de R$ 1.277 — uma fração do seu retorno já no primeiro mês de trabalho. Você não está gastando, está investindo.",
  },
  {
    question: "E se eu não for aprovado?",
    answer: "Nenhuma mentoria garante aprovação. O que garanto é o melhor método, material completo e acompanhamento direto de quem passou em 3 concursos de Tribunal de Contas, incluindo o 1º lugar no TCE-PA. O resto depende de você.",
  },
]

const benefits = [
  {
    icon: Coins,
    title: "Técnico de Controle Externo: R$ 11.862,19",
    description: "Remuneração inicial de R$ 11.862,19, conforme o edital publicado pelo TCE-GO. Cargo efetivo, de nível médio, com duas especialidades: Técnico Administrativo (6 vagas) e Tecnologia da Informação (10 vagas).",
  },
  {
    icon: BadgeCheck,
    title: "Banca definida: FCC",
    description: "A banca está definida — e você já sabe o que esperar. Prova objetiva com 70 questões e prova discursiva. Quem começa agora estuda com direcionamento certeiro para cada disciplina.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade total — cargo efetivo",
    description: "Concurso público. Cargo efetivo. Estabilidade garantida por lei. Você troca a incerteza do mercado por uma carreira sólida, com progressão e benefícios reais.",
  },
  {
    icon: CalendarClock,
    title: "Não preciso ser de Goiás para ajudar você a passar",
    description: "O que decide sua aprovação não é de onde eu sou, mas entender como um Tribunal de Contas cobra por dentro. Isso eu tenho: 3 aprovações em TCE, incluindo o 1º lugar no TCE-PA.",
  },
]

const offerings = [
  {
    icon: Target,
    title: "Plano de Estudos 100% Personalizado",
    description:
      "Esqueça o plano genérico que serve para todo mundo e não funciona para ninguém. Você recebe um planejamento feito exclusivamente para você — baseado no conteúdo oficial da FCC para a sua especialidade no TCE-GO. O edital inclui Língua Portuguesa, Matemática e Raciocínio Lógico, Legislação Institucional e conhecimentos específicos de Técnico Administrativo ou Tecnologia da Informação, considerando o seu tempo disponível.",
    bonus: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direto Comigo — Todos os Dias da Semana",
    description:
      "Sem robô. Sem IA. Sem assistente. Quando você manda mensagem, respondo eu. Um Auditor do TCE-PE ao seu lado todos os dias da semana.",
    bonus: false,
  },
  {
    icon: GraduationCap,
    title: "Acesso Estratégia Concursos Premium",
    description:
      "A melhor plataforma de concursos do Brasil já está no pacote. Você não paga separado. Login próprio, acesso completo.",
    bonus: false,
  },
  {
    icon: MonitorPlay,
    title: "Lives Exclusivas",
    description:
      "A gente se encontra com a turma limitada, ao vivo. Você recebe direcionamento de quem passou em 3 concursos de Tribunal de Contas — incluindo o 1º lugar no TCE-PA, o mesmo tipo de concurso que você está prestando agora.",
    bonus: false,
  },
  {
    icon: BookOpenCheck,
    title: "Técnicas de Estudo + Cadernos de Questões",
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
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado com Método Real",
    description: "Você estuda. Eu cuido do resto.",
    bonus: false,
  },
]

const approvals = [
  {
    icon: Trophy,
    title: "TCE-PA — 1º lugar",
    description: "Aprovado em 1º lugar nas provas objetiva e discursiva aos 23 anos.",
  },
  {
    icon: CheckCircle2,
    title: "TCE-PE — Auditor",
    description: "Hoje ocupo o cargo de Auditor no melhor Tribunal de Contas do Brasil.",
  },
  {
    icon: Medal,
    title: "TCE-PB — Aprovado",
    description: "Mais uma aprovação em concurso público de alto nível.",
  },
  {
    icon: CheckCircle2,
    title: "ISS Sobral — Aprovado",
    description: "Passei também em concurso fiscal municipal, prova de que o método funciona em diferentes bancas e formatos.",
  },
]

export default function TceGoPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#ff4b00] selection:text-white pb-12">
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[92dvh] text-center px-5 pt-16 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c]">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#ff4b00]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <Badge className="h-fit text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 font-semibold tracking-wide bg-[#ff4b00] text-white hover:bg-[#e64300] border-none shadow-lg shadow-[#ff4b00]/20 transition-all max-w-[90vw] whitespace-normal text-center leading-snug">
            🚨 TCE-GO com edital publicado — inscrições de 05/10 a 06/11. Prova em 17/01/2027.
          </Badge>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight w-full">
            O edital do TCE-GO{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b00] to-[#ff7a45]">saiu.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            16 vagas para Técnico de Controle Externo (Técnico Administrativo e TI). Remuneração inicial de{" "}
            <span className="font-bold text-white">R$ 11.862,19</span>. Prova em 17/01/2027. Banca FCC. Estude com um Auditor do TCE-PE e chegue preparado.
          </p>

          <div className="flex flex-col items-center gap-3 md:gap-4 mt-2 md:mt-4 w-full">
            <a href={CTA_LINK} className="group w-full sm:w-auto" data-gtm="click_whatsapp">
              <Button data-gtm="click_whatsapp" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-8 font-bold rounded-full shadow-xl bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 group-hover:shadow-[#ff4b00]/30 flex items-center justify-center gap-2 hover:cursor-pointer">
                Falar com o Francisco agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-white/60 text-sm font-medium">Vagas limitadas. Direcionamento real desde o início da preparação.</p>
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
              Vale a pena estudar para o TCE-GO?
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
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="click_whatsapp">
              <Button data-gtm="click_whatsapp" size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 hover:cursor-pointer">
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
            <a href={CTA_LINK} className="inline-block group" data-gtm="click_whatsapp">
              <Button data-gtm="click_whatsapp" size="lg" className="text-lg px-10 py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
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
                Não sou apenas um professor que aprendeu sobre concursos nos livros. Sou Auditor do TCE-PE — e cheguei
                aqui passando pelos mesmos concursos que você quer passar.
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
                <a href={CTA_LINK} className="inline-block group" data-gtm="click_whatsapp">
                  <Button data-gtm="click_whatsapp" size="lg" className="text-base px-8 py-6 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4b00]/30 flex items-center gap-2 hover:cursor-pointer">
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
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="click_whatsapp">
              <Button data-gtm="click_whatsapp" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#1e1f5c] hover:bg-[#151642] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
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
            <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="click_whatsapp">
              <Button data-gtm="click_whatsapp" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer shadow-[#ff4b00]/20">
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
            Prova em 17 de janeiro de 2027. O tempo está passando.
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10">
            Banca definida. Edital publicado. Inscrições de 05/10 a 06/11. Quem entra agora estuda com método e chega confiante. Quem espera vai construir a base correndo, nas últimas semanas.
          </p>
          <div className="inline-block px-8 py-8 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 text-lg shadow-sm mb-12 text-left max-w-2xl">
            <p className="font-bold mb-4 text-xl text-amber-950">Sabe o que eu aprendi passando em 3 concursos de Tribunal de Contas?</p>
            <p className="mb-4 leading-relaxed">Ninguém começa preparado. Ninguém tem o momento perfeito. Ninguém tem tudo resolvido antes de dar o primeiro passo.</p>
            <p className="mb-5 leading-relaxed">O que separa quem passa de quem fica tentando não é talento. <span className="font-semibold">É a decisão de começar</span> — mesmo sem ter tudo, mesmo com medo, mesmo sem certeza. Começa hoje com o que você tem. O caminho se constrói andando.</p>
            <p className="font-bold text-amber-950">Seu futuro agradece.</p>
          </div>

          <a href={CTA_LINK} className="inline-block group" data-gtm="click_whatsapp">
            <Button data-gtm="click_whatsapp" size="lg" className="text-lg px-10 py-7 md:py-8 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ff4b00]/20 flex items-center gap-2 hover:cursor-pointer">
              Não vou perder mais tempo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-slate-500 text-sm mt-4">Vagas limitadas para acompanhamento.</p>
        </div>
      </section>

      {/* ── INVESTIMENTO ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-[#1e1f5c]">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Investimento</p>
          <p className="text-slate-200 text-2xl font-semibold">Reta Final TCE-GO</p>
          <div className="w-full rounded-3xl border border-white/15 bg-white/5 p-6 text-left text-slate-200 space-y-3">
            <p className="font-bold text-white text-lg">O que você recebe:</p>
            <div className="flex justify-between gap-4"><span>Estratégia Concursos Premium</span><span className="font-semibold whitespace-nowrap">R$ 1.858,80</span></div>
            <div className="flex justify-between gap-4"><span>5 meses de Mentoria Concursos</span><span className="font-semibold whitespace-nowrap">R$ 1.500,00</span></div>
            <div className="flex justify-between gap-4"><span>Raio-X Completo TCE-GO</span><span className="font-semibold whitespace-nowrap">R$ 80,00</span></div>
            <div className="flex justify-between gap-4 pt-3 border-t border-white/15"><span>Valor se comprado separado:</span><span className="font-bold text-white whitespace-nowrap">R$ 3.438,80</span></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-300 text-base">Hoje, tudo isso por</p>
            <p className="text-5xl md:text-6xl font-extrabold text-white">R$ 1.277</p>
            <p className="text-slate-300 text-lg">à vista ou 5x de <span className="font-semibold text-white">R$ 277</span></p>
            <p className="text-slate-300 text-base">Também parcela em até 12x de <span className="font-semibold text-white">R$ 127</span></p>
          </div>
          <p className="text-slate-300 text-base font-medium">Somente 10 vagas. Prova em 17/01/2027.</p>
          <a href={CTA_LINK} className="inline-block group w-full sm:w-auto" data-gtm="click_whatsapp">
            <Button data-gtm="click_whatsapp" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-full bg-[#ff4b00] hover:bg-[#e64300] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer">
              Garantir minha vaga agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-auto bg-slate-50">
        <p className="font-semibold text-slate-700 mb-1">Somente 10 vagas para a Reta Final TCE-GO.</p>
        <p>Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p>
      </footer>

    </main>
  )
}
