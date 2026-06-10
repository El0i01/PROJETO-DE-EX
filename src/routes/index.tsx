import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Icons (inline SVG, lucide-style) ---------- */
const Icon = ({ d, className = "" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);
const IconBell = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);
const IconCheck = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

/* ---------- Phone Mockup ---------- */
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[290px] h-[600px] rounded-[44px] bg-brand-navy p-[10px] shadow-float ${className}`}>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-navy rounded-b-2xl z-20" />
      <div className="relative w-full h-full rounded-[36px] bg-brand-cream overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function HeroPhone() {
  return (
    <PhoneFrame>
      <div className="h-full w-full flex flex-col">
        {/* status bar */}
        <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-semibold text-brand-navy">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-sm bg-brand-navy/80" />
            <span className="w-3 h-3 rounded-full bg-brand-navy/80" />
          </div>
        </div>
        {/* header */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-xs text-muted-foreground">Pedido</p>
          <h3 className="text-xl font-extrabold tracking-tight text-brand-navy">#A-204</h3>
        </div>
        {/* image card */}
        <div className="mx-5 mt-2 rounded-3xl overflow-hidden h-40 relative" style={{ background: "linear-gradient(135deg,#FFE0B2,#FFCC80)" }}>
          <div className="absolute inset-0 flex items-center justify-center text-7xl">🥞</div>
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: "var(--brand-green-deep)" }}>
            Preparando
          </div>
        </div>
        {/* items */}
        <div className="px-5 mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-brand-navy font-semibold">Panqueca de carne</span>
            <span className="text-muted-foreground">R$ 28,00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-brand-navy font-semibold">Suco de laranja</span>
            <span className="text-muted-foreground">R$ 9,00</span>
          </div>
        </div>
        {/* status bar */}
        <div className="px-5 mt-4">
          <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold mb-1.5">
            <span className="text-brand-green-deep">Preparando</span>
            <span className="text-muted-foreground">Pronto</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full animate-status" style={{ background: "linear-gradient(90deg, var(--brand-green), var(--brand-green-deep))" }} />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">Tempo estimado: 4 min</p>
        </div>
        {/* push notification */}
        <div className="absolute top-12 left-3 right-3 animate-push">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-float p-3 flex items-start gap-3 border border-white">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--brand-green-deep)" }}>
              <IconBell className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-brand-navy">PRONTO!</p>
              <p className="text-[11px] text-brand-navy/80 leading-tight">🔔 Seu pedido está pronto para retirada!</p>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MiniPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[160px] h-[320px] rounded-[28px] bg-brand-navy p-[6px] shadow-soft mx-auto">
      <div className="w-full h-full rounded-[22px] bg-brand-cream overflow-hidden relative">{children}</div>
    </div>
  );
}

/* ---------- Sections ---------- */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-3">
        <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-soft">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl text-white flex items-center justify-center" style={{ background: "var(--brand-green-deep)" }}>
              <IconBell className="w-4 h-4" />
            </span>
            <span className="font-extrabold text-lg tracking-tight text-brand-navy">Pronto!</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-navy/80">
            <li><a className="hover:text-brand-navy" href="#problema">Problema</a></li>
            <li><a className="hover:text-brand-navy" href="#solucao">Solução</a></li>
            <li><a className="hover:text-brand-navy" href="#como-funciona">Como Funciona</a></li>
            <li><a className="hover:text-brand-navy" href="#validacao">Validação</a></li>
            <li><a className="hover:text-brand-navy" href="#equipe">Equipe</a></li>
          </ul>
          <a href="#demo" className="rounded-full bg-brand-navy text-brand-cream text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition">
            Ver Demonstração
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden gradient-green">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 70%, white, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white text-xs font-semibold px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            MVP · Projeto de Extensão ENGETEC 2026.1
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Chega de fila.<br />
            Chega de gritar <span className="italic" style={{ color: "#FFD180" }}>número de senha.</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed">
            O <strong>Pronto!</strong> avisa seu cliente automaticamente quando o pedido fica pronto — sem WhatsApp, sem anotar telefone, sem confusão.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="rounded-full bg-white text-brand-navy font-semibold px-6 py-3.5 hover:scale-[1.02] transition shadow-soft inline-flex items-center gap-2">
              Ver o protótipo <IconArrow className="w-4 h-4" />
            </a>
            <a href="#problema" className="rounded-full border-2 border-white/70 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition">
              Conhecer o projeto
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { t: "−10 min", s: "por atendimento" },
              { t: "0", s: "contatos salvos" },
              { t: "100%", s: "automático" },
            ].map((b) => (
              <div key={b.t} className="glass-dark rounded-2xl px-4 py-2.5 text-white">
                <span className="text-lg font-extrabold">{b.t}</span>
                <span className="block text-[11px] uppercase tracking-wider opacity-80">{b.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-float">
          <div className="absolute -inset-10 rounded-[60px] bg-white/10 blur-3xl" />
          <div className="relative">
            <HeroPhone />
            {/* floating badges */}
            <div className="hidden sm:block absolute -left-10 top-12 glass-card rounded-2xl px-3 py-2 shadow-soft">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--brand-amber)" }}>⏱️</span>
                <div className="text-xs">
                  <p className="font-bold text-brand-navy leading-none">−10 min</p>
                  <p className="text-muted-foreground text-[10px]">por atendimento</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -right-8 bottom-20 glass-card rounded-2xl px-3 py-2 shadow-soft">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-brand-green-deep text-white flex items-center justify-center"><IconCheck className="w-3.5 h-3.5" /></span>
                <div className="text-xs">
                  <p className="font-bold text-brand-navy leading-none">100% automático</p>
                  <p className="text-muted-foreground text-[10px]">push + QR Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const steps = [
    { n: "01", t: "Cliente enfrenta fila", d: "Acúmulo no balcão nos horários de pico.", icon: "👥" },
    { n: "02", t: "Atendente anota o pedido e pede o WhatsApp", d: "Coleta manual de telefone, agenda lotada.", icon: "📝" },
    { n: "03", t: "Pedido fica pronto, atendente para tudo pra ligar", d: "Interrompe outros atendimentos.", icon: "📞" },
    { n: "04", t: "Erros: contato trocado, internet caiu, cliente desistiu", d: "Falhas que custam vendas.", icon: "⚠️" },
  ];
  return (
    <section id="problema" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">O problema</span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-brand-navy">Como funciona hoje<br/>(e por que isso não escala).</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="reveal rounded-3xl bg-card p-6 shadow-soft border border-border hover:-translate-y-1 transition">
              <div className="flex items-start justify-between">
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xs font-extrabold text-muted-foreground tracking-widest">{s.n}</span>
              </div>
              <h3 className="mt-6 text-lg text-brand-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="reveal rounded-3xl p-7 bg-brand-navy text-brand-cream">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green-soft">Observação em campo</p>
            <p className="mt-3 text-3xl font-extrabold leading-tight">Mais de <span style={{ color: "#FFD180" }}>10 minutos</span> por atendimento.</p>
          </div>
          <div className="reveal rounded-3xl p-7 border-2 border-dashed border-brand-navy/15 bg-secondary">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green-deep">Impacto direto</p>
            <p className="mt-3 text-2xl font-extrabold text-brand-navy leading-tight">Clientes migrando para a concorrência nos horários de pico.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    {
      n: "1", t: "Pedido pago, código gerado",
      d: "Código único impresso na nota ou QR Code direto no comprovante.",
      mock: (
        <div className="p-3 text-center">
          <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Comprovante</p>
          <div className="mt-3 mx-auto w-20 h-20 rounded-xl grid grid-cols-5 grid-rows-5 gap-px p-1.5 bg-brand-navy">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={(i * 7) % 3 === 0 ? "bg-white" : "bg-brand-navy"} />
            ))}
          </div>
          <p className="mt-3 text-xl font-extrabold text-brand-navy">A-204</p>
        </div>
      ),
    },
    {
      n: "2", t: "Cliente escaneia ou digita",
      d: "Sem cadastro, sem dar telefone, sem fricção.",
      mock: (
        <div className="p-3">
          <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Digite o código</p>
          <div className="mt-3 flex gap-1.5 justify-center">
            {["A", "2", "0", "4"].map((c, i) => (
              <div key={i} className="w-8 h-10 rounded-lg bg-secondary border-2 border-brand-green-deep/30 flex items-center justify-center font-extrabold text-brand-navy">{c}</div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-xl bg-brand-navy text-brand-cream text-xs font-bold py-2.5">Acompanhar</button>
        </div>
      ),
    },
    {
      n: "3", t: "Acompanha em tempo real",
      d: "Itens, valores, adicionais e status de preparo no app.",
      mock: (
        <div className="p-3">
          <div className="rounded-xl bg-secondary p-3">
            <p className="text-[9px] uppercase tracking-widest text-brand-green-deep font-bold">Preparando</p>
            <div className="mt-2 h-1.5 rounded-full bg-white overflow-hidden">
              <div className="h-full w-3/5" style={{ background: "linear-gradient(90deg, var(--brand-green), var(--brand-green-deep))" }} />
            </div>
          </div>
          <div className="mt-2 space-y-1.5">
            {["Panqueca de carne", "Suco de laranja", "Salada extra"].map((i) => (
              <div key={i} className="flex justify-between text-[10px]">
                <span className="text-brand-navy font-semibold">{i}</span>
                <span className="text-muted-foreground">✓</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      n: "4", t: "Notificação automática",
      d: "Push ou simulação de chamada quando o pedido fica pronto.",
      mock: (
        <div className="p-3 h-full flex items-center justify-center">
          <div className="w-full rounded-2xl bg-white shadow-soft border border-border p-2.5">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--brand-green-deep)" }}>
                <IconBell className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-brand-navy">PRONTO!</p>
                <p className="text-[10px] text-brand-navy/80 leading-tight">🔔 Seu pedido está pronto!</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="solucao" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div id="como-funciona" className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">A solução</span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-brand-navy">Do pagamento à retirada em 4 passos.</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="reveal rounded-3xl bg-card p-6 shadow-soft border border-border flex flex-col">
              <div className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-extrabold" style={{ background: "var(--brand-green-deep)" }}>{s.n}</div>
              <h3 className="mt-5 text-lg text-brand-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
              <div className="mt-5">
                <MiniPhone>{s.mock}</MiniPhone>
              </div>
            </div>
          ))}
        </div>

        {/* Para o estabelecimento */}
        <div className="mt-16 reveal rounded-[2rem] overflow-hidden bg-brand-navy text-brand-cream grid lg:grid-cols-2 gap-0">
          <div className="p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-soft">Para o estabelecimento</span>
            <h3 className="mt-3 text-3xl lg:text-4xl">Um painel. Um toque. Pronto.</h3>
            <p className="mt-4 text-brand-cream/80 leading-relaxed max-w-md">
              O atendente só atualiza o status do pedido. Nada de planilha, nada de WhatsApp, nada de procurar contato na agenda.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Em preparo", "Pronto", "Retirado"].map((t, i) => (
                <span key={t} className={`px-3 py-1.5 rounded-full text-xs font-bold ${i === 1 ? "bg-brand-green-soft text-brand-navy" : "bg-white/10 text-brand-cream"}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 lg:p-10 bg-white/5">
            {/* tablet mock */}
            <div className="rounded-2xl bg-brand-cream text-brand-navy p-5 shadow-float">
              <div className="flex items-center justify-between">
                <p className="font-extrabold">Pedidos · hoje</p>
                <span className="text-xs px-2 py-1 rounded-full bg-brand-green-soft text-brand-navy font-bold">12 ativos</span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { n: "A-204", item: "Panqueca de carne + suco", s: "Pronto", c: "bg-brand-green-soft text-brand-navy" },
                  { n: "A-205", item: "Combo família 2", s: "Em preparo", c: "bg-amber-100 text-amber-900" },
                  { n: "A-206", item: "Wrap vegano", s: "Em preparo", c: "bg-amber-100 text-amber-900" },
                  { n: "A-207", item: "Açaí 500ml + granola", s: "Retirado", c: "bg-secondary text-muted-foreground" },
                ].map((o) => (
                  <div key={o.n} className="flex items-center justify-between rounded-xl bg-white border border-border px-3 py-2.5">
                    <div>
                      <p className="font-extrabold text-sm">{o.n}</p>
                      <p className="text-xs text-muted-foreground">{o.item}</p>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${o.c}`}>{o.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { i: "⚡", t: "Redução de filas", d: "Liberação imediata do balcão." },
    { i: "🚀", t: "Atendimento mais rápido", d: "Menos tempo por cliente." },
    { i: "🔒", t: "Zero coleta de dados pessoais", d: "Sem telefone, sem cadastro." },
    { i: "✅", t: "Menos erros operacionais", d: "Cliente certo, pedido certo." },
    { i: "📏", t: "Padronização do processo", d: "Funciona igual em todo turno." },
    { i: "💸", t: "Acessível para pequenos e médios", d: "Sem hardware caro." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">Benefícios</span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-brand-navy">Tudo que muda no dia a dia.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b, i) => (
            <div key={b.t} className="reveal rounded-3xl bg-card p-7 border border-border shadow-soft hover:-translate-y-1 hover:shadow-float transition">
              <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl text-2xl ${i % 2 ? "bg-amber-100" : "bg-brand-green-soft"}`}>{b.i}</span>
              <h3 className="mt-5 text-xl text-brand-navy">{b.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Validation() {
  const quotes = [
    "As filas costumam ser extensas e, nos horários de muito movimento, percebemos que alguns clientes escolhem consumir em outros estabelecimentos.",
    "Em dias de movimentação, algumas vezes já confundimos o cliente e alertamos o contato errado.",
    "Seria muito melhor se tivesse um sistema que avisasse automaticamente.",
    "Há uma demora para pegar o número dos clientes, e a agenda de contatos fica muito extensa.",
  ];
  return (
    <section id="validacao" className="py-24 lg:py-32 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ background: "radial-gradient(circle at 70% 30%, white, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Validação</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">Validado em campo com um cliente real.</h2>
          <p className="mt-4 text-white/90 text-lg">Entrevista realizada no restaurante Panqueca — segmento de alimentação.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {quotes.map((q) => (
            <figure key={q} className="reveal glass-dark rounded-3xl p-7 text-white">
              <span className="block text-6xl leading-none font-extrabold opacity-70" style={{ color: "#FFD180" }}>“</span>
              <blockquote className="-mt-4 text-lg leading-relaxed">{q}</blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2 reveal rounded-3xl bg-white text-brand-navy p-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">Resultado</span>
            <p className="mt-3 text-2xl font-extrabold leading-tight">
              O cliente confirmou que a solução resolve o problema e aceitou testar o protótipo.
            </p>
          </div>
          <div className="reveal rounded-3xl glass-dark p-7 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Requisitos levantados</span>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2"><IconCheck className="w-4 h-4 mt-0.5 shrink-0" /> Facilidade de uso para qualquer funcionário</li>
              <li className="flex gap-2"><IconCheck className="w-4 h-4 mt-0.5 shrink-0" /> Avaliação do atendimento pelo cliente</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { t: "Análise do problema", done: true },
    { t: "Levantamento de requisitos", done: true },
    { t: "Protótipo (interface + fluxo)", done: true },
    { t: "Lógica (códigos, status, notificações)", done: false },
    { t: "Testes", done: false },
    { t: "Apresentação", done: false },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">Roadmap do MVP</span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-brand-navy">De onde viemos e para onde vamos.</h2>
        </div>
        <div className="mt-12 reveal">
          <div className="relative overflow-x-auto">
            <div className="flex items-stretch gap-3 min-w-max pb-4">
              {steps.map((s, i) => (
                <div key={s.t} className="flex items-center gap-3">
                  <div className={`rounded-2xl border-2 px-5 py-4 min-w-[220px] ${s.done ? "border-brand-green-deep bg-brand-green-soft" : "border-border bg-card"}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${s.done ? "" : "bg-muted text-muted-foreground"}`} style={s.done ? { background: "var(--brand-green-deep)" } : {}}>
                        {s.done ? <IconCheck className="w-3.5 h-3.5" /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Etapa {i + 1}</span>
                    </div>
                    <p className="mt-2 font-extrabold text-brand-navy">{s.t}</p>
                  </div>
                  {i < steps.length - 1 && <IconArrow className="w-5 h-5 text-muted-foreground shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    "Victor Mieko de Oliveira",
    "Elton Portugal Rodrigues",
    "Rogério Avelino Cunha",
    "Eduardo Barros da Silva",
    "Eduardo Silva Belfort",
    "Vitor Lourenço Rodrigues",
    "Rodrigo Eloi dos Santos Souza",
    "Ricardo Prestes Martins",
    "Álec Lemos Dantas",
    "Matheus Gabriel Januario",
    "Luan Ariel Werneck de Araújo Aquino",
    "Érick Vinicius Sudo Brasil de Souza",
  ];
  const colors = [
    "#7CB342", "#33691E", "#FFA726", "#0D1321",
    "#8BC34A", "#558B2F", "#FB8C00", "#1B5E20",
    "#AED581", "#33691E", "#FFB74D", "#0D1321",
  ];
  const initials = (n: string) => n.split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase();

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-deep">Equipe</span>
          <h2 className="mt-3 text-4xl lg:text-5xl text-brand-navy">Quem está construindo.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((m, i) => (
            <div key={m} className="reveal rounded-2xl bg-card border border-border p-4 flex items-center gap-3 hover:-translate-y-1 transition shadow-soft">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold shrink-0" style={{ background: colors[i % colors.length] }}>
                {initials(m)}
              </div>
              <p className="text-sm font-semibold text-brand-navy leading-tight">{m}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground reveal">
          Projeto de Extensão — <strong className="text-brand-navy">ENGETEC 2026.1</strong> · Disciplina: Projeto de Extensão · Prof. Leonardo Micheletti.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="demo" className="py-24 lg:py-32 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ background: "radial-gradient(circle at 30% 50%, white, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 items-center gap-12 text-white">
        <div className="reveal">
          <h2 className="text-4xl lg:text-6xl leading-[1] tracking-tight">Pronto para acabar com as filas?</h2>
          <p className="mt-5 text-white/90 text-lg max-w-md">Veja o protótipo funcionando e como ele se encaixa no fluxo do seu estabelecimento.</p>
          <a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-navy font-semibold px-6 py-3.5 hover:scale-[1.02] transition shadow-soft">
            Ver demonstração do protótipo <IconArrow className="w-4 h-4" />
          </a>
        </div>
        <div className="flex justify-center lg:justify-end animate-float">
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream/80 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg text-white flex items-center justify-center" style={{ background: "var(--brand-green-deep)" }}>
            <IconBell className="w-4 h-4" />
          </span>
          <span className="font-extrabold text-brand-cream">Pronto!</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs opacity-70 text-center sm:text-right">
          Projeto acadêmico de extensão universitária — protótipo sem fins comerciais.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Validation />
      <Roadmap />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
