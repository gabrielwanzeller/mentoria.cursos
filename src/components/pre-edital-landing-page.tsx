import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarClock,
  Clock,
  Crosshair,
  FilePenLine,
  GraduationCap,
  HelpCircle,
  Landmark,
  LibraryBig,
  MessageCircle,
  MonitorPlay,
  RefreshCw,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react"
import franciscoImage from "../../public/tce-pb/francisco-w-bluer-v3.png"

type InfoItem = {
  title: string
  description: string
}

export type PreEditalLandingConfig = {
  banner: string
  heroTitle: string
  heroSubtitle: string
  highlights: string[]
  heroCta: string
  whatsappLink: string
  reasons: InfoItem[]
  offerings: InfoItem[]
  bonuses: InfoItem[]
  faqs: Array<{ question: string; answer: string }>
  closingTitle: string
  closingText: string
}

const reasonIcons: LucideIcon[] = [CalendarClock, BriefcaseBusiness, Users, FilePenLine, ShieldCheck, Clock]
const offeringIcons: LucideIcon[] = [Target, GraduationCap, Crosshair, BookOpenCheck, FilePenLine, MonitorPlay, MessageCircle, RefreshCw]
const bonusIcons: LucideIcon[] = [RefreshCw, Crosshair, Target, LibraryBig]

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

function Cta({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      data-gtm="click_whatsapp"
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:w-auto ${dark ? "bg-[#1e1f5c] hover:bg-[#151642]" : "bg-[#ff4b00] hover:bg-[#e64300]"}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

export function PreEditalLandingPage({ config }: { config: PreEditalLandingConfig }) {
  return (
    <main className="min-h-screen pb-12 font-sans selection:bg-[#ff4b00] selection:text-white">
      <section className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1f5c] via-[#2e2f83] to-[#1e1f5c] px-5 pb-20 pt-16 text-center md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-2xl -translate-x-1/2 rounded-full bg-[#ff4b00]/20 blur-[120px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 md:gap-8">
          <span className="inline-flex max-w-[90vw] items-center justify-center rounded-full bg-[#ff4b00] px-4 py-2 text-center text-xs font-semibold leading-snug tracking-wide text-white shadow-lg shadow-[#ff4b00]/20 sm:px-5 sm:text-sm">
            🚨 {config.banner}
          </span>
          <h1 className="w-full text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            {config.heroTitle}
          </h1>
          <p className="max-w-3xl text-base font-light leading-relaxed text-slate-300 sm:text-lg md:text-2xl">{config.heroSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {config.highlights.map((highlight) => <span key={highlight} className="max-w-full whitespace-normal break-words rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-sm font-semibold leading-snug text-white">{highlight}</span>)}
          </div>
          <div className="mt-2 flex w-full flex-col items-center gap-3 md:mt-4"><Cta href={config.whatsappLink}>{config.heroCta}</Cta><p className="text-sm font-medium text-white/60">Vagas limitadas. Acompanhamento individual e direto.</p></div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 space-y-3 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Por que começar agora</p><h2 className="text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">Comece antes do edital</h2></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {config.reasons.map((item, index) => {
              const Icon = reasonIcons[index % reasonIcons.length]
              return <div key={item.title} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:gap-5 md:rounded-3xl md:p-8"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f1fa] text-[#2e2f83] transition-colors group-hover:bg-[#ff4b00] group-hover:text-white"><Icon className="h-6 w-6" /></div><div><h3 className="mb-2 font-bold text-[#1e1f5c]">{item.title}</h3><p className="leading-relaxed text-slate-600">{item.description}</p></div></div>
            })}
          </div>
          <div className="mt-12 text-center"><Cta href={config.whatsappLink} dark>{config.heroCta}</Cta></div>
        </div>
      </section>

      <section className="mx-3 rounded-[2rem] bg-slate-100 px-5 py-16 md:mx-8 md:rounded-[3rem] md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Tudo incluso</p><h2 className="text-3xl font-extrabold tracking-tight text-[#1e1f5c] md:text-5xl">O que você recebe</h2><p className="mx-auto max-w-2xl text-xl text-slate-600">Um pacote completo para começar antes do edital e avançar com método.</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.offerings.map((item, index) => {
              const Icon = offeringIcons[index % offeringIcons.length]
              return <div key={item.title} className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#ff4b00]"><Icon className="h-6 w-6" /></div><div><h3 className="mb-3 text-xl font-bold leading-tight text-[#1e1f5c]">{item.title}</h3><p className="leading-relaxed text-slate-600">{item.description}</p></div></div>
            })}
          </div>
          <div className="my-16 border-t border-slate-300" />
          <div className="mb-10 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Bônus exclusivos</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.bonuses.map((item, index) => {
              const Icon = bonusIcons[index % bonusIcons.length]
              return <div key={item.title} className="rounded-3xl border border-amber-300 bg-amber-50 p-6 ring-2 ring-amber-400/30"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Icon className="h-5 w-5" /></div><h3 className="mb-2 font-bold text-amber-950">{item.title}</h3><p className="text-sm leading-relaxed text-amber-900">{item.description}</p></div>
            })}
          </div>
          <div className="mt-16 text-center"><Cta href={config.whatsappLink}>{config.heroCta}</Cta></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0f2c] px-5 py-16 shadow-2xl md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start space-y-6 text-left"><span className="rounded-full border border-[#ff4b00] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Quem vai te guiar</span><h2 className="text-3xl font-extrabold text-white md:text-5xl">Eu sou Francisco.</h2><p className="text-lg leading-relaxed text-slate-300 md:text-xl">Quatro aprovações em concursos públicos. Hoje sou Auditor do TCE-PE — e cheguei aqui passando pelos mesmos processos seletivos que você quer passar.</p><div className="flex w-full flex-col gap-6">{approvals.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex items-start gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2e2f83] bg-[#1e1f5c] text-[#ff4b00]"><Icon className="h-6 w-6" /></div><div><h3 className="mb-1 text-xl font-bold text-white">{item.title}</h3><p className="leading-relaxed text-slate-300">{item.description}</p></div></div> })}</div><div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">Antes disso, fui reprovado no TCE-CE. Estudava muito e errava no que importava. Mudei o método e, seis meses depois, fui 1º lugar no TCE-PA. É esse método que aplico com cada aluno.</div><Cta href={config.whatsappLink}>Quero estudar com um Auditor</Cta></div>
          <div className="relative flex justify-center lg:justify-end"><div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" /><Image src={franciscoImage} alt="Francisco José, Auditor do TCE-PE aprovado em 4 concursos públicos" width={1000} height={1000} sizes="(max-width: 1023px) 100vw, 50vw" className="relative z-0 w-auto object-contain drop-shadow-2xl" /></div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 md:px-6 md:py-28"><div className="mx-auto max-w-6xl"><div className="mb-16 space-y-4 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Aprovações que falam por si</p><h2 className="text-3xl font-extrabold text-[#1e1f5c] md:text-5xl">Quem estudou com método aprovou.</h2></div><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{testimonials.map((item) => <div key={item.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="mb-4 flex gap-1 text-[#ff4b00]">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div><p className="flex-grow italic leading-relaxed text-slate-700">&quot;{item.text}&quot;</p><div className="mt-6 border-t pt-6"><p className="font-bold text-[#1e1f5c]">{item.name}</p><p className="mt-1 text-sm font-semibold text-[#ff4b00]">{item.role}</p></div></div>)}</div></div></section>

      <section className="bg-slate-100 px-5 py-16 md:px-6 md:py-28"><div className="mx-auto max-w-4xl"><div className="mb-16 space-y-4 text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#ff4b00]">Perguntas frequentes</p><h2 className="text-3xl font-extrabold text-[#1e1f5c] md:text-5xl">Ainda tem alguma dúvida?</h2></div><div className="flex flex-col gap-6">{config.faqs.map((faq) => <div key={faq.question} className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f1fa] text-[#2e2f83]"><HelpCircle className="h-6 w-6" /></div><div><h3 className="mb-2 text-lg font-bold text-[#1e1f5c] md:text-xl">{faq.question}</h3><p className="leading-relaxed text-slate-600 md:text-lg">{faq.answer}</p></div></div>)}</div><div className="mt-16 text-center"><Cta href={config.whatsappLink}>Tirar outra dúvida com o Francisco</Cta></div></div></section>

      <section className="relative bg-white px-5 py-20 md:px-6 md:py-28"><div className="mx-auto flex max-w-3xl flex-col items-center text-center"><div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-[#ff4b00]"><Clock className="h-8 w-8" /></div><h2 className="mb-6 text-3xl font-extrabold text-[#1e1f5c] md:text-5xl">{config.closingTitle}</h2><p className="mb-10 text-xl leading-relaxed text-slate-600">{config.closingText}</p><Cta href={config.whatsappLink}>Quero falar com o Francisco</Cta></div></section>

      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-500"><p className="mb-1 font-semibold text-slate-700">Vagas limitadas para acompanhamento individual.</p><p>Copyright &copy; Francisco José 2026. Todos os direitos reservados.</p></footer>
    </main>
  )
}
