import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Link, Route, Switch, useLocation } from 'wouter';
import {
  ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Box, Check, ChevronDown, CircleHelp,
  Clock3, Hammer, Heart, ImagePlus, Layers3, Lightbulb, Menu, PackageCheck,
  PencilRuler, Plus, Ruler, Search, ShoppingBasket, SlidersHorizontal, Sparkles, Upload,
  Wrench, X,
} from 'lucide-react';

const queryClient = new QueryClient();

type Accent = 'coral' | 'yellow' | 'sage' | 'blue';

const navItems = [
  { href: '/', label: 'Home', icon: Sparkles },
  { href: '/fix', label: 'Fix something', icon: Wrench },
  { href: '/build', label: 'Build a project', icon: Hammer },
  { href: '/studio', label: 'Student studio', icon: PencilRuler },
  { href: '/shop', label: 'Shop smarter', icon: ShoppingBasket },
  { href: '/projects', label: 'My projects', icon: BookOpen },
];

const accentClass: Record<Accent, string> = {
  coral: 'bg-[#e8846d]',
  yellow: 'bg-[#f4d35e]',
  sage: 'bg-[#aab99a]',
  blue: 'bg-[#a9cddd]',
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
      <span className="relative grid h-10 w-10 rotate-[-7deg] place-items-center rounded-[13px] border-2 border-[#493a2b] bg-[#f4d35e] shadow-[3px_3px_0_#493a2b] transition-transform group-hover:rotate-0">
        <Wrench size={20} strokeWidth={2.5} />
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e8846d]" />
      </span>
      <span className="font-display text-[1.26rem] font-bold tracking-[-.06em] text-[#493a2b]">FIX &amp; BUILD</span>
    </Link>
  );
}

function Shell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="noise min-h-[100dvh] overflow-x-hidden text-[#493a2b]">
      <header className="sticky top-0 z-30 border-b border-[#d5c6ac] bg-[#f7f1df]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.href === '/' ? location === '/' : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors ${active ? 'bg-[#493a2b] text-[#fff9ed]' : 'text-[#796b59] hover:bg-[#efe4ce] hover:text-[#493a2b]'}`}
                >
                  <Icon size={15} strokeWidth={2.2} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#d5c6ac] bg-[#fff9ed] lg:hidden"
            data-testid="button-mobile-menu"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-4 mb-3 grid gap-1 rounded-2xl border border-[#d5c6ac] bg-[#fff9ed] p-2 shadow-[3px_4px_0_rgba(76,57,35,.1)] lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              return <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} data-testid={`mobile-link-${item.label.toLowerCase().replaceAll(' ', '-')}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold hover:bg-[#f4d35e]/50"><Icon size={17} />{item.label}</Link>;
            })}
          </nav>
        )}
      </header>
      {children}
      <footer className="mx-auto mt-20 flex max-w-[1440px] flex-col gap-3 border-t border-[#d5c6ac] px-4 py-8 text-sm text-[#796b59] md:flex-row md:items-center md:justify-between md:px-8">
        <span className="font-display font-bold text-[#493a2b]">Make the thing. Learn the thing.</span>
        <span>Built for curious hands · 2024</span>
      </footer>
    </div>
  );
}

function PageIntro({ eyebrow, title, detail, accent = 'yellow' }: { eyebrow: string; title: string; detail: string; accent?: Accent }) {
  return (
    <div className="float-in mb-9 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className={`h-3 w-3 rotate-45 rounded-[2px] ${accentClass[accent]}`} />
        <span className="scribble text-[11px] font-bold uppercase tracking-[.16em] text-[#8a7b67]">{eyebrow}</span>
      </div>
      <h1 className="font-display max-w-2xl text-4xl font-bold leading-[.98] tracking-[-.07em] md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-[#796b59]">{detail}</p>
    </div>
  );
}

function PaperTag({ children, color = 'yellow' }: { children: React.ReactNode; color?: Accent }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[.1em] text-[#493a2b] ${accentClass[color]}`}>{children}</span>;
}

function Button({ children, onClick, variant = 'dark', icon, testId, type = 'button' }: { children: React.ReactNode; onClick?: () => void; variant?: 'dark' | 'coral' | 'outline' | 'yellow'; icon?: React.ReactNode; testId: string; type?: 'button' | 'submit' }) {
  const colors = {
    dark: 'bg-[#493a2b] text-[#fff9ed] hover:bg-[#67513c]',
    coral: 'bg-[#e8846d] text-[#493a2b] hover:bg-[#ed967f]',
    outline: 'border border-[#c9b99e] bg-[#fff9ed] text-[#493a2b] hover:bg-[#efe4ce]',
    yellow: 'bg-[#f4d35e] text-[#493a2b] hover:bg-[#f7dd7d]',
  };
  return <button type={type} onClick={onClick} data-testid={testId} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 active:translate-y-[1px] ${colors[variant]}`}>{children}{icon}</button>;
}

function UploadField({ onUploaded, compact = false }: { onUploaded: (name: string) => void; compact?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} className="hidden" type="file" accept="image/*" onChange={(event) => onUploaded(event.target.files?.[0]?.name ?? 'reference-photo.jpg')} data-testid="input-image-upload" />
      <button type="button" onClick={() => inputRef.current?.click()} data-testid="button-image-upload" className={`flex w-full items-center gap-3 rounded-2xl border border-dashed border-[#c9b99e] bg-[#fff9ed] text-left transition hover:border-[#e8846d] hover:bg-[#fff7df] ${compact ? 'p-3' : 'p-4'}`}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#a9cddd]/60"><ImagePlus size={19} /></span>
        <span><strong className="block text-sm">Add a photo</strong><small className="text-xs text-[#8a7b67]">Show us what you’re working with</small></span>
        <Upload size={16} className="ml-auto text-[#8a7b67]" />
      </button>
    </div>
  );
}

function Home() {
  const [, setLocation] = useLocation();
  const [prompt, setPrompt] = useState('');
  const [imageName, setImageName] = useState('');
  const [activePath, setActivePath] = useState<'fix' | 'build' | 'studio' | null>(null);
  const submit = (path: 'fix' | 'build' | 'studio') => {
    setActivePath(path);
    setTimeout(() => setLocation(`/${path}`), 160);
  };
  return (
    <main>
      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="float-in">
          <PaperTag color="coral">A little workshop in your browser</PaperTag>
          <h1 className="mt-6 max-w-2xl font-display text-[clamp(3.6rem,8vw,7.7rem)] font-bold leading-[.84] tracking-[-.1em]">
            Fix it.<br /><span className="relative inline-block text-[#e8846d]">Build it.<span className="absolute -bottom-3 left-1 w-[88%] border-b-4 border-[#f4d35e] rotate-[-2deg]" /></span><br />Make it yours.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-7 text-[#796b59]">The friendly starting point for broken hinges, half-formed ideas, and the project that’s been living in your head.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => submit('fix')} variant="dark" icon={<ArrowRight size={17} />} testId="button-home-fix">I need to fix something</Button>
            <Button onClick={() => submit('build')} variant="outline" icon={<ArrowRight size={17} />} testId="button-home-build">I want to build</Button>
          </div>
        </div>
        <div className="relative float-in [animation-delay:120ms]">
          <div className="absolute -right-2 top-0 z-10 hidden -rotate-6 rounded border border-[#d1b35a] bg-[#f4d35e] px-3 py-2 font-mono text-[11px] font-bold shadow-sm md:block">START WITH A SCRIBBLE →</div>
          <div className="relative mx-auto max-w-[580px] rotate-[1deg] rounded-[2rem] border-2 border-[#493a2b] bg-[#fff9ed] p-5 paper-shadow md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div><p className="scribble text-[10px] uppercase tracking-[.17em] text-[#8a7b67]">What’s on your workbench?</p><h2 className="mt-1 font-display text-2xl font-bold tracking-[-.05em]">Tell us the messy bit.</h2></div>
              <Ruler size={31} className="rotate-12 text-[#e8846d]" />
            </div>
            <form onSubmit={(event) => { event.preventDefault(); submit(activePath ?? 'fix'); }}>
              <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="“My cabinet door is sagging…” or “I need a model of a tiny pavilion…”" className="min-h-[128px] w-full resize-none rounded-2xl border border-[#d5c6ac] bg-[#fbf5e7] p-4 text-base leading-6 outline-none transition focus:border-[#e8846d] focus:ring-2 focus:ring-[#e8846d]/20" data-testid="input-home-prompt" />
              <div className="mt-3">{imageName ? <div className="flex items-center justify-between rounded-xl bg-[#aab99a]/40 px-3 py-2 text-sm"><span className="flex items-center gap-2"><Check size={15} />{imageName}</span><button type="button" onClick={() => setImageName('')} className="text-[#796b59]" data-testid="button-remove-upload"><X size={15} /></button></div> : <UploadField onUploaded={setImageName} compact />}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                <button type="button" onClick={() => submit('fix')} data-testid="button-path-fix" className={`rounded-full border px-3 py-2 text-xs font-bold transition ${activePath === 'fix' ? 'border-[#e8846d] bg-[#e8846d]' : 'border-[#d5c6ac] bg-[#fff9ed] hover:bg-[#f4d35e]'}`}>Repair a thing</button>
                <button type="button" onClick={() => submit('build')} data-testid="button-path-build" className={`rounded-full border px-3 py-2 text-xs font-bold transition ${activePath === 'build' ? 'border-[#aab99a] bg-[#aab99a]' : 'border-[#d5c6ac] bg-[#fff9ed] hover:bg-[#f4d35e]'}`}>Build from scratch</button>
                <button type="button" onClick={() => submit('studio')} data-testid="button-path-studio" className={`rounded-full border px-3 py-2 text-xs font-bold transition ${activePath === 'studio' ? 'border-[#a9cddd] bg-[#a9cddd]' : 'border-[#d5c6ac] bg-[#fff9ed] hover:bg-[#f4d35e]'}`}>Plan a student model</button>
              </div>
              <button type="submit" data-testid="button-home-submit" className="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#493a2b] px-5 py-4 text-left text-[#fff9ed] transition hover:bg-[#67513c]"><span className="font-bold">{activePath ? 'Opening your workspace…' : 'Point me in the right direction'}</span><ArrowRight size={19} /></button>
            </form>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded bg-[#aab99a] px-4 py-2 font-mono text-xs font-bold rotate-[-5deg] md:block">measure twice / make once</div>
        </div>
      </section>
      <section className="border-y border-[#d5c6ac] bg-[#efe4ce]/60">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
          {[{ n: '01', title: 'Describe the snag', text: 'A sentence, a scribble, or a quick photo is plenty.', c: 'coral' as Accent }, { n: '02', title: 'Get a workable plan', text: 'Clear steps, honest materials, and no mysterious jargon.', c: 'yellow' as Accent }, { n: '03', title: 'Make progress', text: 'Save it to your project shelf and get your hands dirty.', c: 'blue' as Accent }].map((item) => (
            <div key={item.n} className="flex gap-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-xs font-bold ${accentClass[item.c]}`}>{item.n}</span><div><h3 className="font-display text-xl font-bold tracking-[-.04em]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#796b59]">{item.text}</p></div></div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="scribble text-[11px] font-bold uppercase tracking-[.15em] text-[#8a7b67]">A few good places to start</p><h2 className="mt-2 font-display text-3xl font-bold tracking-[-.06em] md:text-5xl">Small wins, real momentum.</h2></div><Link href="/projects" className="font-bold underline decoration-[#e8846d] decoration-2 underline-offset-4" data-testid="link-home-projects">Browse project shelf <ArrowRight className="ml-1 inline" size={16} /></Link></div></section>
    </main>
  );
}

function IntakeCard({ kind, onSubmit }: { kind: 'fix' | 'build'; onSubmit: () => void }) {
  const isFix = kind === 'fix';
  const [name, setName] = useState('');
  const [imageName, setImageName] = useState('');
  return (
    <div className="rounded-[1.5rem] border border-[#d5c6ac] bg-[#fff9ed] p-5 paper-shadow-sm md:p-7">
      <div className="flex items-start justify-between"><div><PaperTag color={isFix ? 'coral' : 'sage'}>{isFix ? 'Repair intake' : 'Build intake'}</PaperTag><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.06em]">{isFix ? 'What gave up?' : 'What are we making?'}</h2></div><span className={`grid h-12 w-12 place-items-center rounded-2xl ${isFix ? 'bg-[#e8846d]/30' : 'bg-[#aab99a]/45'}`}>{isFix ? <Wrench size={23} /> : <Hammer size={23} />}</span></div>
      <label className="mt-7 block text-sm font-bold">{isFix ? 'Name the thing' : 'Project name'}<input value={name} onChange={(event) => setName(event.target.value)} placeholder={isFix ? 'e.g. kitchen cabinet hinge' : 'e.g. a small step stool'} className="mt-2 w-full rounded-xl border border-[#d5c6ac] bg-[#fbf5e7] px-4 py-3 outline-none focus:border-[#e8846d]" data-testid={`input-${kind}-name`} /></label>
      <label className="mt-4 block text-sm font-bold">{isFix ? 'What’s it doing?' : 'What do you already know?'}<textarea className="mt-2 min-h-24 w-full resize-none rounded-xl border border-[#d5c6ac] bg-[#fbf5e7] px-4 py-3 outline-none focus:border-[#e8846d]" placeholder={isFix ? 'It hangs crooked and scrapes the frame…' : 'I have some pine offcuts and basic hand tools…'} data-testid={`input-${kind}-details`} /></label>
      <div className="mt-4"><UploadField onUploaded={setImageName} compact />{imageName && <p className="mt-2 text-xs text-[#64806a]">Attached: {imageName}</p>}</div>
      <Button onClick={onSubmit} variant="dark" icon={<ArrowRight size={17} />} testId={`button-${kind}-diagnose`}>{isFix ? 'Diagnose this repair' : 'Sketch my build'}</Button>
    </div>
  );
}

function CabinetDiagram() {
  return <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-[#d5c6ac] bg-[#dfe7d7] p-7"><div className="relative h-36 w-56 rounded-md border-[5px] border-[#8b6646] bg-[#c99968] shadow-[8px_8px_0_#b27c51]"><div className="absolute inset-4 border-2 border-[#a9784d] bg-[#e3bd8d]" /><div className="absolute -right-5 top-12 h-16 w-8 rounded-r-md border-2 border-[#75624e] bg-[#c8bca7]" /><div className="absolute -right-7 top-[68px] h-3 w-10 rounded bg-[#75624e]" /></div><div className="absolute left-4 top-5 scribble text-xs font-bold text-[#e8846d]">sagging edge ↗</div><div className="absolute bottom-5 right-4 scribble text-xs font-bold text-[#493a2b]">tighten here</div><svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" fill="none"><path d="M86 46 Q120 30 165 52" stroke="#e8846d" strokeWidth="2" strokeDasharray="4 5" /><path d="M314 173 Q290 160 268 139" stroke="#493a2b" strokeWidth="2" strokeDasharray="4 5" /></svg></div>;
}

function Fix() {
  const [diagnosed, setDiagnosed] = useState(true);
  const [foundPart, setFoundPart] = useState(false);
  return <main className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16"><PageIntro eyebrow="Fix desk · diagnosis" title="Let’s get that thing behaving again." detail="Start with the symptoms. We’ll turn the mystery into a calm little repair plan, with the right part at the end of it." accent="coral" /><div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]"><IntakeCard kind="fix" onSubmit={() => setDiagnosed(true)} /><section className={`slide-up rounded-[1.5rem] border-2 border-[#493a2b] bg-[#fff9ed] p-5 paper-shadow md:p-8 ${diagnosed ? '' : 'opacity-60'}`}><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d5c6ac] pb-5"><div><PaperTag color="yellow">Likely fix</PaperTag><h2 className="mt-3 font-display text-3xl font-bold tracking-[-.06em]">Loose cabinet hinge</h2></div><span className="flex items-center gap-2 rounded-full bg-[#aab99a]/50 px-3 py-2 text-xs font-bold text-[#46624d]"><BadgeCheck size={15} /> Very fixable</span></div><div className="mt-6 grid gap-6 xl:grid-cols-[.9fr_1.1fr]"><div><CabinetDiagram /><div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-xl bg-[#efe4ce] p-3"><Clock3 size={16} className="mb-2 text-[#e8846d]" /><p className="text-xs text-[#796b59]">Time</p><strong className="text-sm">15–25 min</strong></div><div className="rounded-xl bg-[#efe4ce] p-3"><PackageCheck size={16} className="mb-2 text-[#64806a]" /><p className="text-xs text-[#796b59]">Needs</p><strong className="text-sm">1 small part</strong></div></div></div><div><p className="text-sm leading-6 text-[#796b59]">The hinge screws have likely pulled slightly out of the cabinet frame. No need to replace the whole hinge yet.</p><ol className="mt-5 space-y-4">{['Take the door weight off the hinge with a book or a helper.', 'Back out the two loose screws. Fill the holes with toothpicks and wood glue.', 'Re-seat the hinge, pre-drill a tiny pilot hole, then tighten gently.'].map((step, index) => <li key={step} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f4d35e] font-mono text-xs font-bold">{index + 1}</span><span className="text-sm leading-6">{step}</span></li>)}</ol><button type="button" onClick={() => setFoundPart(true)} data-testid="button-find-part" className="screw-spin mt-6 flex w-full items-center justify-between rounded-xl bg-[#e8846d] px-4 py-3 text-sm font-bold transition hover:bg-[#ee9a84]"><span>{foundPart ? 'Part shortlist ready' : 'Find the right part'}</span><Search size={17} /></button>{foundPart && <p className="mt-3 rounded-xl bg-[#aab99a]/40 p-3 text-xs font-semibold text-[#46624d]">Found: 35 mm soft-close overlay hinge · from $4.80</p>}</div></div></section></div></main>;
}

function BuildDiagram() {
  return <div className="relative overflow-hidden rounded-2xl border border-[#d5c6ac] bg-[#e7eef0] p-5"><div className="absolute right-3 top-3 rotate-3 rounded bg-[#f4d35e] px-2 py-1 font-mono text-[10px] font-bold">not to scale</div><svg viewBox="0 0 500 230" className="draw-in h-auto w-full" fill="none"><path d="M128 55h210v35H128zM128 90l-42 108h45l31-108M338 90l42 108h-45l-31-108M128 55L86 163M338 55l42 108" fill="#c89260" stroke="#493a2b" strokeWidth="4" strokeLinejoin="round"/><path d="M128 48V27M338 48V27M128 33h210M78 163H58M91 199H57M57 163v36M51 163h13M51 199h13" stroke="#e8846d" strokeWidth="2"/><path d="M233 26v-13M226 13h14" stroke="#e8846d" strokeWidth="2"/><text x="216" y="20" fill="#e8846d" fontSize="13" fontFamily="monospace">48 cm</text><text x="35" y="186" fill="#e8846d" fontSize="13" fontFamily="monospace" transform="rotate(-90 35 186)">22 cm</text><text x="196" y="218" fill="#493a2b" fontSize="13" fontFamily="monospace">30 cm wide</text></svg><p className="scribble mt-1 text-center text-xs font-bold text-[#796b59]">simple stool · sturdy enough for the top shelf</p></div>;
}

function Materials({ items, owned = false }: { items: string[]; owned?: boolean }) {
  return <div className="space-y-2">{items.map((item, index) => <div key={item} className="material-chip flex items-center justify-between rounded-xl border border-[#d5c6ac] bg-[#fbf5e7] px-3 py-3"><span className="flex items-center gap-2 text-sm"><span className={`grid h-6 w-6 place-items-center rounded-full ${owned ? 'bg-[#aab99a]' : 'bg-[#f4d35e]'}`}><Check size={13} /></span>{item}</span><span className="text-xs text-[#8a7b67]">{owned ? 'in your stash' : `${index + 1} to buy`}</span></div>)}</div>;
}

function Build() {
  const [built, setBuilt] = useState(true);
  const [openStep, setOpenStep] = useState(0);
  const [saved, setSaved] = useState(false);
  return <main className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16"><PageIntro eyebrow="Build desk · project plan" title="A plan that leaves room for the good bits." detail="Tell us what you want to make and what’s already in the shed. We’ll map the materials, not just throw a shopping list at you." accent="sage" /><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><IntakeCard kind="build" onSubmit={() => setBuilt(true)} /><section className={`slide-up rounded-[1.5rem] border-2 border-[#493a2b] bg-[#fff9ed] p-5 paper-shadow md:p-8 ${built ? '' : 'opacity-60'}`}><div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#d5c6ac] pb-5"><div><PaperTag color="sage">Build card · 01</PaperTag><h2 className="mt-3 font-display text-3xl font-bold tracking-[-.06em]">Small Wooden Step</h2><p className="mt-2 text-sm text-[#796b59]">A forgiving first build with honest joinery.</p></div><button type="button" onClick={() => setSaved((value) => !value)} data-testid="button-save-build" className={`grid h-10 w-10 place-items-center rounded-full border ${saved ? 'border-[#e8846d] bg-[#e8846d]' : 'border-[#d5c6ac] bg-[#fff9ed]'}`} aria-label="Save project"><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button></div><div className="mt-6 grid gap-7 xl:grid-cols-[.98fr_1.02fr]"><div><BuildDiagram /><div className="mt-5"><h3 className="mb-3 flex items-center gap-2 font-display text-xl font-bold"><Layers3 size={19} /> Materials</h3><Materials owned items={['2 pine boards · 90 × 30 cm', 'Wood glue', 'Sandpaper · 120 grit']} /><div className="my-3 flex items-center gap-3"><span className="h-px flex-1 bg-[#d5c6ac]" /><span className="scribble text-[10px] text-[#8a7b67]">to buy</span><span className="h-px flex-1 bg-[#d5c6ac]" /></div><Materials items={['8 wood screws · 40 mm', 'Clear finish · small tin']} /></div></div><div><div className="grid grid-cols-2 gap-2"><div className="rounded-xl bg-[#efe4ce] p-3"><p className="text-xs text-[#796b59]">Estimated cost</p><strong className="font-display text-2xl">$18–24</strong></div><div className="rounded-xl bg-[#efe4ce] p-3"><p className="text-xs text-[#796b59]">Build time</p><strong className="font-display text-2xl">2–3 hrs</strong></div></div><h3 className="mb-3 mt-6 flex items-center gap-2 font-display text-xl font-bold"><Hammer size={19} /> Build plan</h3><div className="space-y-2">{['Cut the two side legs', 'Make the top frame', 'Sand, glue, and screw', 'Give it a finish'].map((step, index) => <div key={step} className="overflow-hidden rounded-xl border border-[#d5c6ac]"><button type="button" onClick={() => setOpenStep(openStep === index ? -1 : index)} data-testid={`button-build-step-${index + 1}`} className="flex w-full items-center justify-between bg-[#fbf5e7] px-4 py-3 text-left text-sm font-bold"><span className="flex items-center gap-3"><span className="font-mono text-xs text-[#e8846d]">0{index + 1}</span>{step}</span><ChevronDown size={16} className={`transition-transform ${openStep === index ? 'rotate-180' : ''}`} /></button>{openStep === index && <p className="border-t border-[#d5c6ac] bg-[#fff9ed] px-4 py-3 text-sm leading-6 text-[#796b59]">{['Mark twice before the saw comes out. A handsaw or circular saw both work here.', 'Keep the corners square with a scrap block while the glue grabs.', 'Countersink the screw heads, then give every edge a friendly sand.', 'Oil, paint, or leave the grain bare. This is where it becomes yours.'][index]}</p>}</div>)}</div><Button onClick={() => setSaved(true)} variant="coral" icon={<ArrowRight size={17} />} testId="button-save-project">Save this build</Button></div></div></section></div></main>;
}

function Studio() {
  const [step, setStep] = useState(1);
  const [scale, setScale] = useState('1:50');
  const [modelType, setModelType] = useState('Physical Model');
  const kit = [{ name: 'Greyboard · 2 mm', use: 'structure + floor plates', color: '#aab99a' }, { name: 'Basswood strip', use: 'frames + edges', color: '#f4d35e' }, { name: 'Tracing paper', use: 'light studies', color: '#a9cddd' }, { name: 'Chipboard offcut', use: 'base + plinth', color: '#e8846d' }];
  return <main className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16"><PageIntro eyebrow="Student studio · from brief to bench" title="Turn the abstract into something you can hold." detail="A gentle planning table for architecture and design students. Pick a project type, choose a scale, and leave with a material logic that makes sense." accent="blue" /><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]"><aside className="rounded-[1.5rem] border border-[#d5c6ac] bg-[#efe4ce]/70 p-5 md:p-7"><div className="flex items-center justify-between"><p className="scribble text-[10px] font-bold uppercase tracking-[.15em] text-[#8a7b67]">Studio path</p><span className="font-mono text-xs text-[#8a7b67]">0{step} / 03</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#d5c6ac]"><div className="h-full rounded-full bg-[#a9cddd] transition-all" style={{ width: `${(step / 3) * 100}%` }} /></div><div className="mt-8 space-y-3">{['Choose a project', 'Set the scale', 'Pack your model kit'].map((item, index) => <button type="button" key={item} onClick={() => setStep(index + 1)} data-testid={`button-studio-step-${index + 1}`} className={`flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm font-bold ${step === index + 1 ? 'bg-[#fff9ed]' : 'text-[#8a7b67]'}`}><span className={`grid h-7 w-7 place-items-center rounded-full font-mono text-xs ${step > index ? 'bg-[#aab99a]' : 'bg-[#d5c6ac]'}`}>{step > index ? <Check size={13} /> : index + 1}</span>{item}</button>)}</div><div className="mt-10 rounded-2xl bg-[#fff9ed] p-4"><Lightbulb size={19} className="mb-2 text-[#e8846d]" /><p className="text-sm font-bold">Studio note</p><p className="mt-1 text-xs leading-5 text-[#796b59]">The best model material is the one that tells the story of your design.</p></div></aside><section className="rounded-[1.5rem] border-2 border-[#493a2b] bg-[#fff9ed] p-5 paper-shadow md:p-8">{step === 1 && <div className="float-in"><PaperTag color="blue">Step one</PaperTag><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.06em]">What are you making?</h2><p className="mt-2 text-sm text-[#796b59]">We’ll tune the material palette to the kind of thinking your project needs.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{[{ title: 'Physical Model', text: 'A tactile spatial model', icon: Box, color: 'blue' as Accent }, { title: 'Material Study', text: 'Test texture and light', icon: Layers3, color: 'yellow' as Accent }, { title: 'Site Section', text: 'Show ground and context', icon: Ruler, color: 'sage' as Accent }, { title: 'Presentation Board', text: 'Bring the argument together', icon: PencilRuler, color: 'coral' as Accent }].map((item) => { const Icon = item.icon; return <button type="button" key={item.title} onClick={() => { setModelType(item.title); setStep(2); }} data-testid={`button-studio-project-${item.title.toLowerCase().replaceAll(' ', '-')}`} className="flex items-center gap-4 rounded-2xl border border-[#d5c6ac] bg-[#fbf5e7] p-4 text-left transition hover:-translate-y-1 hover:border-[#493a2b]"><span className={`grid h-12 w-12 place-items-center rounded-2xl ${accentClass[item.color]}`}><Icon size={22} /></span><span><strong className="block">{item.title}</strong><small className="text-[#796b59]">{item.text}</small></span><ArrowRight className="ml-auto" size={17} /></button>; })}</div></div>}{step === 2 && <div className="float-in"><button type="button" onClick={() => setStep(1)} data-testid="button-studio-back" className="mb-5 flex items-center gap-1 text-xs font-bold text-[#796b59]"><ArrowLeft size={14} /> back to project type</button><PaperTag color="blue">Step two · {modelType}</PaperTag><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.06em]">Give it a scale.</h2><p className="mt-2 text-sm text-[#796b59]">A useful constraint, not a cage.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{['1:20', '1:50', '1:100'].map((value) => <button type="button" key={value} onClick={() => setScale(value)} data-testid={`button-scale-${value.replace(':', '-')}`} className={`rounded-2xl border p-5 text-left ${scale === value ? 'border-[#493a2b] bg-[#a9cddd]/45' : 'border-[#d5c6ac] bg-[#fbf5e7]'}`}><span className="font-display text-3xl font-bold">{value}</span><span className="mt-2 block text-xs text-[#796b59]">{value === '1:20' ? 'detail + joinery' : value === '1:50' ? 'room + sequence' : 'site + massing'}</span></button>)}</div><Button onClick={() => setStep(3)} variant="dark" icon={<ArrowRight size={17} />} testId="button-studio-continue">Build my kit</Button></div>}{step === 3 && <div className="float-in"><button type="button" onClick={() => setStep(2)} data-testid="button-studio-back-scale" className="mb-5 flex items-center gap-1 text-xs font-bold text-[#796b59]"><ArrowLeft size={14} /> back to scale</button><div className="flex flex-wrap items-end justify-between gap-3"><div><PaperTag color="sage">Your model kit</PaperTag><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.06em]">{modelType} at {scale}</h2></div><div className="rounded-xl bg-[#f4d35e] px-3 py-2 text-right"><p className="text-[10px] uppercase">estimated spend</p><strong className="font-display text-xl">$27.40</strong></div></div><div className="mt-7 space-y-3">{kit.map((item) => <div key={item.name} className="flex items-center gap-4 rounded-2xl border border-[#d5c6ac] bg-[#fbf5e7] p-4"><span className="h-12 w-12 shrink-0 rounded-xl" style={{ backgroundColor: item.color }} /><span><strong className="block">{item.name}</strong><small className="text-[#796b59]">{item.use}</small></span><Check className="ml-auto text-[#64806a]" size={19} /></div>)}</div><div className="mt-6 flex flex-wrap gap-3"><Button onClick={() => setStep(2)} variant="outline" icon={<SlidersHorizontal size={16} />} testId="button-edit-kit">Tune the mapping</Button><Link href="/shop" data-testid="link-compare-studio" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8846d] px-5 py-3 text-sm font-bold">Compare prices <ArrowRight size={16} /></Link></div></div>}</section></div></main>;
}

type ShopItem = { name: string; store: string; price: number; color: Accent; note: string };
const shopItems: ShopItem[] = [
  { name: '35 mm soft-close hinge', store: 'Fixings & Co.', price: 4.8, color: 'coral', note: 'closest match' },
  { name: '8 × wood screws · 40 mm', store: 'The Timber Shed', price: 5.2, color: 'yellow', note: 'box of 50' },
  { name: 'Clear matt finish · 250 ml', store: 'Paint Pantry', price: 8.4, color: 'sage', note: 'water based' },
  { name: 'Basswood strip bundle', store: 'Model Works', price: 9.0, color: 'blue', note: '10 pieces' },
  { name: 'Greyboard · A3 pack', store: 'Model Works', price: 6.7, color: 'blue', note: '3 sheets' },
];

function Shop() {
  const [sort, setSort] = useState<'price' | 'store'>('price');
  const [cart, setCart] = useState<string[]>([]);
  const items = [...shopItems].sort((a, b) => sort === 'price' ? a.price - b.price : a.store.localeCompare(b.store));
  return <main className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16"><PageIntro eyebrow="Shop desk · compare before you buy" title="Less hunting. More making." detail="A visual price check for the exact little things your project needs. No checkout tricks, just a clearer basket." accent="yellow" /><div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#d5c6ac] bg-[#efe4ce]/70 p-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f4d35e]"><ShoppingBasket size={18} /></span><span className="text-sm"><strong className="block">{cart.length} items marked</strong><span className="text-[#796b59]">Your practical little basket</span></span></div><label className="flex items-center gap-2 text-sm font-bold"><SlidersHorizontal size={16} /> Sort by <select value={sort} onChange={(event) => setSort(event.target.value as 'price' | 'store')} data-testid="select-shop-sort" className="rounded-lg border border-[#c9b99e] bg-[#fff9ed] px-3 py-2 text-sm"><option value="price">lowest price</option><option value="store">store</option></select></label></div><div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]"><div className="space-y-3">{items.map((item) => <div key={item.name} className="group flex flex-wrap items-center gap-4 rounded-2xl border border-[#d5c6ac] bg-[#fff9ed] p-4 transition hover:-translate-y-0.5 hover:shadow-[3px_4px_0_rgba(76,57,35,.08)]"><span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${accentClass[item.color]}`}><PackageCheck size={22} /></span><div className="min-w-[170px] flex-1"><h3 className="font-bold">{item.name}</h3><p className="mt-1 text-xs text-[#796b59]">{item.store} · {item.note}</p></div><strong className="font-display text-2xl">${item.price.toFixed(2)}</strong><button type="button" onClick={() => setCart((current) => current.includes(item.name) ? current.filter((name) => name !== item.name) : [...current, item.name])} data-testid={`button-mark-item-${item.name.replaceAll(' ', '-').toLowerCase()}`} className={`rounded-full px-4 py-2 text-xs font-bold ${cart.includes(item.name) ? 'bg-[#aab99a] text-[#38503d]' : 'border border-[#d5c6ac] hover:bg-[#f4d35e]'}`}>{cart.includes(item.name) ? 'Marked' : 'Add to basket'}</button></div>)}</div><aside className="h-fit rounded-[1.5rem] border-2 border-[#493a2b] bg-[#f4d35e] p-6 paper-shadow"><p className="scribble text-[10px] font-bold uppercase tracking-[.15em]">The useful bit</p><h2 className="mt-3 font-display text-3xl font-bold leading-none tracking-[-.06em]">Buy the combination, not the promise.</h2><div className="my-6 space-y-3 border-y border-[#493a2b]/20 py-5 text-sm"><div className="flex justify-between"><span>One-store basket</span><strong>$38.60</strong></div><div className="flex justify-between text-[#38503d]"><span>Cheapest combination</span><strong>$34.10</strong></div><div className="flex justify-between border-t border-[#493a2b]/20 pt-3 font-bold"><span>You keep</span><strong>$4.50</strong></div></div><p className="text-sm leading-6">That’s a coffee-sized win for the next material experiment.</p><Button onClick={() => setCart(shopItems.map((item) => item.name))} variant="dark" icon={<Check size={16} />} testId="button-add-cheapest">Mark cheapest basket</Button></aside></div></main>;
}

const savedProjects = [
  { id: 'hinge', type: 'Repair', title: 'Kitchen cabinet hinge', progress: 78, materials: 2, cost: '$4.80', color: 'coral' as Accent },
  { id: 'step', type: 'Build', title: 'Small wooden step', progress: 42, materials: 5, cost: '$18–24', color: 'sage' as Accent },
  { id: 'pavilion', type: 'Studio', title: 'Threshold pavilion study', progress: 64, materials: 7, cost: '$27.40', color: 'blue' as Accent },
  { id: 'shelf', type: 'Build', title: 'Floating spice shelf', progress: 18, materials: 4, cost: '$12–16', color: 'yellow' as Accent },
];

function Projects() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState('');
  const visible = savedProjects.filter((project) => `${project.title} ${project.type}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16"><PageIntro eyebrow="Project shelf · your work in progress" title="Keep the good ideas where you can see them." detail="A soft landing for half-finished things. Pick one up, see what’s next, and get back to the bench." accent="blue" /><div className="mb-8 flex flex-wrap items-center justify-between gap-3"><label className="relative block w-full max-w-sm"><Search size={16} className="absolute left-3 top-3.5 text-[#8a7b67]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your shelf" className="w-full rounded-full border border-[#d5c6ac] bg-[#fff9ed] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#e8846d]" data-testid="input-project-search" /></label><Button onClick={() => setLocation('/')} variant="dark" icon={<Plus size={17} />} testId="button-new-project">Start something new</Button></div>{visible.length === 0 ? <div className="rounded-[1.5rem] border border-dashed border-[#c9b99e] bg-[#efe4ce]/60 p-12 text-center"><CircleHelp className="mx-auto mb-3 text-[#e8846d]" /><h2 className="font-display text-2xl font-bold">Nothing on that shelf yet.</h2><p className="mt-2 text-sm text-[#796b59]">Try a different search, or start a fresh little project.</p></div> : <div className="grid gap-5 md:grid-cols-2">{visible.map((project) => <article key={project.id} className="group rounded-[1.5rem] border border-[#d5c6ac] bg-[#fff9ed] p-5 transition hover:-translate-y-1 hover:shadow-[4px_6px_0_rgba(76,57,35,.1)]"><div className="flex items-start justify-between gap-3"><div><PaperTag color={project.color}>{project.type}</PaperTag><h2 className="mt-4 font-display text-2xl font-bold tracking-[-.05em]">{project.title}</h2></div><button type="button" className="text-[#8a7b67] transition hover:text-[#e8846d]" data-testid={`button-favorite-project-${project.id}`} aria-label={`Favorite ${project.title}`}><Heart size={18} /></button></div><div className="mt-6"><div className="mb-2 flex justify-between text-xs font-bold"><span>Progress</span><span>{project.progress}%</span></div><div className="h-2 overflow-hidden rounded-full bg-[#efe4ce]"><div className={`h-full rounded-full ${accentClass[project.color]}`} style={{ width: `${project.progress}%` }} /></div></div><div className="mt-5 flex flex-wrap gap-2 text-xs text-[#796b59]"><span className="rounded-full bg-[#efe4ce] px-3 py-1">{project.materials} materials</span><span className="rounded-full bg-[#efe4ce] px-3 py-1">est. {project.cost}</span></div><button type="button" onClick={() => setLocation(project.type === 'Repair' ? '/fix' : project.type === 'Studio' ? '/studio' : '/build')} data-testid={`button-view-project-${project.id}`} className="mt-5 flex w-full items-center justify-between rounded-xl border border-[#d5c6ac] px-4 py-3 text-sm font-bold transition group-hover:border-[#493a2b]"><span>Open project</span><ArrowRight size={16} /></button></article>)}</div>}</main>;
}

function NotFound() {
  return <main className="mx-auto max-w-3xl px-4 py-24 text-center"><PaperTag color="coral">404 · wrong workshop</PaperTag><h1 className="mt-5 font-display text-6xl font-bold tracking-[-.08em]">That page wandered off.</h1><p className="mx-auto mt-4 max-w-md text-[#796b59]">Let’s get you back to a bench with better lighting.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#493a2b] px-5 py-3 text-sm font-bold text-[#fff9ed]" data-testid="link-not-found-home">Back to home <ArrowRight size={16} /></Link></main>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/fix" component={Fix} /><Route path="/build" component={Build} /><Route path="/studio" component={Studio} /><Route path="/shop" component={Shop} /><Route path="/projects" component={Projects} /><Route component={NotFound} /></Switch>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Shell><RoutedErrorBoundary><Router /></RoutedErrorBoundary></Shell></TooltipProvider><Toaster /></QueryClientProvider>;
}

export default App;