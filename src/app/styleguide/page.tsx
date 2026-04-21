import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const colorTokens = [
  { label: "primary", var: "--primary", foreground: "--primary-foreground", name: "Azul Marca" },
  { label: "accent", var: "--accent", foreground: "--accent-foreground", name: "Vermelho-Laranja" },
  { label: "secondary", var: "--secondary", foreground: "--secondary-foreground", name: "Secondary" },
  { label: "muted", var: "--muted", foreground: "--muted-foreground", name: "Muted" },
  { label: "card", var: "--card", foreground: "--card-foreground", name: "Card" },
  { label: "destructive", var: "--destructive", foreground: null, name: "Destructive" },
  { label: "success", var: "--success", foreground: "--success-foreground", name: "Success" },
  { label: "warning", var: "--warning", foreground: "--warning-foreground", name: "Warning" },
  { label: "info", var: "--info", foreground: "--info-foreground", name: "Info" },
]

const chartColors = [
  { label: "chart-1", var: "--chart-1" },
  { label: "chart-2", var: "--chart-2" },
  { label: "chart-3", var: "--chart-3" },
  { label: "chart-4", var: "--chart-4" },
  { label: "chart-5", var: "--chart-5" },
]

const radiusTokens = [
  { label: "sm", class: "rounded-sm", value: "0.3rem" },
  { label: "md", class: "rounded-md", value: "0.4rem" },
  { label: "lg", class: "rounded-lg", value: "0.5rem" },
  { label: "xl", class: "rounded-xl", value: "0.7rem" },
  { label: "2xl", class: "rounded-2xl", value: "0.9rem" },
  { label: "3xl", class: "rounded-3xl", value: "1.1rem" },
  { label: "full", class: "rounded-full", value: "9999px" },
]

const shadowTokens = [
  { label: "shadow-sm", class: "shadow-sm" },
  { label: "shadow", class: "shadow" },
  { label: "shadow-md", class: "shadow-md" },
  { label: "shadow-lg", class: "shadow-lg" },
  { label: "shadow-xl", class: "shadow-xl" },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function StyleguidePage() {
  return (
    <div className="p-10 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-2">Design Tokens</h1>
        <p className="text-muted-foreground text-lg">
          Sistema de design da <strong>mentoria.concursos</strong> — cores, tipografia, raios e sombras.
        </p>
      </div>

      {/* Brand Colors */}
      <Section title="Cores da Marca">
        <div className="mb-4 flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-24 h-24 rounded-xl border border-border"
              style={{ background: "var(--primary)" }}
            />
            <span className="text-xs font-mono text-muted-foreground">#2e2f83</span>
            <span className="text-xs font-medium">Azul Principal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-24 h-24 rounded-xl border border-border"
              style={{ background: "var(--accent)" }}
            />
            <span className="text-xs font-mono text-muted-foreground">#ff4b00</span>
            <span className="text-xs font-medium">Vermelho-Laranja</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {colorTokens.map((token) => (
            <div key={token.label} className="flex flex-col gap-1.5">
              <div
                className="h-16 rounded-lg border border-border/50 flex items-center justify-center relative overflow-hidden"
                style={{ background: `var(${token.var})` }}
              >
                {token.foreground && (
                  <span
                    className="text-xs font-medium px-1"
                    style={{ color: `var(${token.foreground})` }}
                  >
                    Aa
                  </span>
                )}
              </div>
              <div>
                <p className="text-xs font-mono font-medium">{token.label}</p>
                <p className="text-xs text-muted-foreground">{token.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Surface & Layout Colors */}
      <Section title="Superfícies e Layout">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "background", var: "--background", name: "Background" },
            { label: "card", var: "--card", name: "Card" },
            { label: "popover", var: "--popover", name: "Popover" },
            { label: "border", var: "--border", name: "Border" },
            { label: "input", var: "--input", name: "Input" },
            { label: "ring", var: "--ring", name: "Ring" },
            { label: "sidebar", var: "--sidebar", name: "Sidebar" },
            { label: "sidebar-accent", var: "--sidebar-accent", name: "Sidebar Accent" },
          ].map((token) => (
            <div key={token.label} className="flex flex-col gap-1.5">
              <div
                className="h-12 rounded-lg border border-border/50"
                style={{ background: `var(${token.var})` }}
              />
              <div>
                <p className="text-xs font-mono font-medium">{token.label}</p>
                <p className="text-xs text-muted-foreground">{token.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Chart Colors */}
      <Section title="Cores de Gráfico">
        <div className="flex gap-3 flex-wrap">
          {chartColors.map((c) => (
            <div key={c.label} className="flex flex-col gap-1.5 items-center">
              <div
                className="w-12 h-12 rounded-lg border border-border/50"
                style={{ background: `var(${c.var})` }}
              />
              <p className="text-xs font-mono">{c.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section title="Tipografia">
        <div className="space-y-6">
          <div className="p-6 bg-card rounded-xl border border-border">
            <p className="text-xs text-muted-foreground mb-4 font-mono">Poppins — Fonte Principal</p>
            <div className="space-y-3">
              <p className="text-5xl font-bold leading-tight">Aa — 48px Bold</p>
              <p className="text-4xl font-bold">Estude com um aprovado!</p>
              <p className="text-3xl font-semibold">O método correto para você estudar.</p>
              <p className="text-2xl font-medium">Próximos concursos de controle</p>
              <p className="text-xl">Mentoria Concursos — mentoria.concursos</p>
              <p className="text-base">Texto de parágrafo regular. Prepare-se para os concursos públicos com quem já foi aprovado e conhece o caminho.</p>
              <p className="text-sm text-muted-foreground">Texto pequeno e labels. ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
              <p className="text-xs text-muted-foreground font-mono">Fonte mono — código e referências técnicas</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { size: "text-xs", label: "xs / 12px" },
              { size: "text-sm", label: "sm / 14px" },
              { size: "text-base", label: "base / 16px" },
              { size: "text-lg", label: "lg / 18px" },
              { size: "text-xl", label: "xl / 20px" },
              { size: "text-2xl", label: "2xl / 24px" },
              { size: "text-3xl", label: "3xl / 30px" },
              { size: "text-4xl", label: "4xl / 36px" },
            ].map((item) => (
              <div key={item.size} className="flex items-baseline gap-2">
                <span className={`${item.size} font-medium`}>Aa</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Border Radius */}
      <Section title="Raios de Borda">
        <div className="flex gap-6 flex-wrap items-end">
          {radiusTokens.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 bg-primary/20 border-2 border-primary ${r.class}`}
              />
              <span className="text-xs font-mono font-medium">{r.label}</span>
              <span className="text-xs text-muted-foreground">{r.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Shadows */}
      <Section title="Sombras">
        <div className="flex gap-6 flex-wrap items-end">
          {shadowTokens.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 bg-card rounded-lg ${s.class}`}
              />
              <span className="text-xs font-mono">{s.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Components */}
      <Section title="Componentes">
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Button</h3>
          <div className="flex flex-wrap gap-3 p-6 bg-card rounded-xl border border-border">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3 p-6 bg-card rounded-xl border border-border mt-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Badge</h3>
          <div className="flex flex-wrap gap-3 p-6 bg-card rounded-xl border border-border">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Card</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Concursos</CardTitle>
                <CardDescription>
                  Concursos de controle com inscrições abertas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Prepare-se com quem já foi aprovado e conhece o caminho certo para o sucesso.
                </p>
                <Button className="mt-4" size="sm">Saiba mais</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Francisco José</CardTitle>
                <CardDescription>Mentor e Auditor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Estude com um aprovado! Método correto adaptado ao seu perfil de estudante.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge>Auditor</Badge>
                  <Badge variant="outline">Aprovado</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Alert</h3>
          <div className="flex flex-col gap-3">
            <Alert>
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>
                Sua inscrição foi recebida com sucesso. Aguarde a confirmação por e-mail.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>
                O prazo de inscrição termina em 24 horas. Não perca essa oportunidade.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>

      {/* Sidebar Preview */}
      <Section title="Sidebar">
        <div
          className="w-64 rounded-xl p-6 flex flex-col gap-4"
          style={{ background: "var(--sidebar)" }}
        >
          <span className="text-lg font-bold" style={{ color: "var(--sidebar-foreground)" }}>
            mentoria<span style={{ color: "var(--sidebar-primary)" }}>.</span>concursos
          </span>
          {[
            { label: "Design Tokens", active: true },
            { label: "Components", active: false },
            { label: "Pages", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className="px-3 py-2 rounded-md text-sm"
              style={{
                background: item.active ? "var(--sidebar-primary)" : "transparent",
                color: item.active ? "var(--sidebar-primary-foreground)" : "var(--sidebar-foreground)",
                opacity: item.active ? 1 : 0.7,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
