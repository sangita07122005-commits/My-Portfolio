/* React components (JSX) */
const { useState, useEffect } = React;

/* ---------- Components ---------- */
function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem("theme"); if (s) return s === "dark"; } catch (e) {}
    return true;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  }, [dark]);
  return (
    <button onClick={() => setDark(!dark)} aria-pressed={dark}
      className="rounded-full border border-line px-4 py-1.5 text-sm text-muted hover:text-ink hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-leaf">
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}

function Nav() {
  const items = [["Projects","#projects"],["Skills","#skills"],["About","#about"],["Find me","#find"]];
  return (
    <nav aria-label="Sections" className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5 text-[15px] sm:justify-end">
      {items.map(([t, h]) => <a key={h} href={h} className="text-muted hover:text-ink">{t}</a>)}
      <ThemeToggle />
    </nav>
  );
}

function Plant() {
  /* Hero picture: to use your own, put the image in this folder and change "hero.svg" below */
  return (
    <img src="hero.svg" alt="A 3D laptop showing code, with floating React and code badges" className="w-full max-w-[240px] sm:max-w-[360px] sm:justify-self-end order-first sm:order-none" />
  );
}

function Hero() {
  return (
    <header className="grid items-end gap-8 pt-9 pb-16 sm:grid-cols-[1.3fr_1fr]">
      <div>
        <h1 className="font-serif font-semibold text-[clamp(46px,9vw,92px)] leading-[.98] tracking-tight mb-5">{profile.name}</h1>
        <p className="mb-7 max-w-[30em] text-[clamp(18px,2.4vw,22px)] text-muted">{profile.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full border-[1.5px] border-ink bg-ink px-6 py-3 font-medium text-bg hover:bg-accent hover:border-accent">See my projects</a>
          <a href="Sangita_Das_CV.pdf" download className="rounded-full border-[1.5px] border-ink px-6 py-3 font-medium hover:bg-accent hover:border-accent hover:text-bg">My resume</a>
          <a href={"mailto:" + profile.email} className="rounded-full border-[1.5px] border-ink px-6 py-3 font-medium hover:bg-accent hover:border-accent hover:text-bg">Email me</a>
        </div>
      </div>
      <Plant />
    </header>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-line py-14">
      <h2 className="mb-7 font-serif text-[clamp(28px,4vw,40px)] tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className={"rounded-[20px] border border-line bg-surface " + (p.featured ? "p-8 mb-5" : "p-6")}>
      <h3 className={"font-serif font-semibold mb-1.5 " + (p.featured ? "text-3xl" : "text-[22px]")}>{p.title}</h3>
      <ul className="mb-4 flex flex-wrap gap-2">
        {p.tech.map(t => <li key={t} className="rounded-full border border-line px-3 py-0.5 text-sm text-muted">{t}</li>)}
      </ul>
      <p className="max-w-[40em]">{p.desc}</p>
      {p.img && <img src={p.img} alt={p.title + " screenshot"} className={"mt-6 rounded-xl border border-line " + (p.imgPortrait ? "mx-auto max-h-[460px] w-auto max-w-full" : "w-full")} />}
      {p.demo && <a href={p.demo} className="mt-5 inline-block rounded-full bg-ink px-6 py-3 font-medium text-bg hover:bg-accent">Open live demo</a>}
    </article>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.filter(p => p.featured).map(p => <ProjectCard key={p.title} p={p} />)}
      <div className={"grid gap-5 " + (projects.filter(p => !p.featured).length > 1 ? "sm:grid-cols-2" : "")}>
        {projects.filter(p => !p.featured).map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {skills.map(([k, v]) => (
          <div key={k}><dt className="font-bold">{k}</dt><dd className="text-muted">{v}</dd></div>
        ))}
      </dl>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
        <p>I’m a final-year B.Tech student in Computer Science and Engineering at Swami Vivekananda University, Barrackpore, with a YGPA of 8.59 out of 10.</p>
        <p>I like turning an idea into something people can click on. I keep practising problems on LeetCode and GeeksforGeeks, and I’m looking for a frontend developer role where I can keep building and learning.</p>
      </div>
    </Section>
  );
}

function FindMe() {
  return (
    <Section id="find" title="Find me">
      <ul className="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {links.map(([name, handle, href]) => (
          <li key={name}>
            <a href={href} className="block rounded-[14px] border border-line bg-surface px-5 py-4 font-medium hover:border-accent">
              {name}<span className="block text-sm font-normal text-muted break-all">{handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function App() {
  return (
    <div className="mx-auto max-w-[960px] px-6">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <FindMe />
      <footer className="border-t border-line py-10 text-[15px] text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
