const metrics = [
  ["Faster Load Times", "Up to 62% speed increase after rebuilds"],
  ["Better Conversion Performance", "Funnels tuned for business outcomes, not vanity"],
  ["AI-Driven Automation", "Manual workflows transformed into scalable systems"],
  ["Improved Client Perception", "Premium design systems aligned to positioning"],
];

const featured = [
  ["E-Commerce System", "Luxury Retail Rebuild", "+38% revenue in 90 days"],
  ["High-Performance Site", "B2B Pipeline Platform", "+44% qualified leads"],
  ["AI Operations", "Service Business Automation", "-52% admin overhead"],
  ["Visual Transformation", "Brand Experience Refresh", "+29% engagement"],
];

const services = [
  "High-Performance Websites",
  "E-Commerce Systems",
  "AI Automation",
  "Visual / Content Transformation",
  "Conversion Optimization",
];

const beforeAfter = [
  ["Web Experience", "Slow, generic interface with weak trust", "Fast premium platform with clear conversion flow", "Higher lead quality + lower bounce"],
  ["E-Commerce", "Catalog overload and inconsistent product storytelling", "Guided offer architecture and confident buying journey", "Higher AOV + conversion lift"],
  ["Operations", "Manual lead handoff and fragmented communication", "AI-assisted qualification and workflow routing", "Faster follow-up + team efficiency"],
];

const process = ["Audit", "Rebuild", "Elevate", "Automate", "Scale"];

export function MetricsStrip() {
  return (
    <section className="section-shell py-8">
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([title, detail]) => (
          <div key={title} className="space-y-2">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-white/65">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedTransformations() {
  return (
    <section id="work" className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Featured Transformations</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map(([type, name, result]) => (
          <article key={name} className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200">{type}</p>
            <h3 className="mt-2 text-2xl font-medium">{name}</h3>
            <p className="mt-4 text-white/70">{result}</p>
            <a href="#case-studies" className="mt-6 inline-block text-sm text-pink-200 hover:text-pink-100">
              View Case Study →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section id="services" className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Services Built as Growth Systems</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service} className="glass-panel p-6">
            <h3 className="text-lg font-medium">{service}</h3>
            <p className="mt-2 text-sm text-white/70">Designed to improve perception, performance, and measurable revenue impact.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BeforeAfterProof() {
  return (
    <section className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Before / After Transformation Proof</h2>
      <div className="mt-8 space-y-4">
        {beforeAfter.map(([category, before, after, impact]) => (
          <article key={category} className="glass-panel grid gap-5 p-6 lg:grid-cols-[0.8fr_1fr_1fr]">
            <h3 className="text-lg font-medium text-violet-100">{category}</h3>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Before</p>
              <p className="mt-1 text-sm text-white/75">{before}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-pink-200">After</p>
              <p className="mt-1 text-sm text-white/95">{after}</p>
              <p className="mt-2 text-sm text-violet-200">Impact: {impact}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Case Studies</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {[
          ["SaaS Reposition", "Low trust and inconsistent conversion path", "Rebuilt UX + messaging architecture", "+57% demo requests"],
          ["Ecom Acceleration", "Traffic without transactional intent", "Offer hierarchy + frictionless checkout", "+41% conversion rate"],
        ].map(([title, problem, solution, impact]) => (
          <article key={title} className="glass-panel p-6">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-3 text-sm text-white/70">Problem: {problem}</p>
            <p className="mt-2 text-sm text-white/80">Solution: {solution}</p>
            <p className="mt-4 font-medium text-violet-100">Impact: {impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Our Methodology</h2>
      <p className="mt-3 text-white/70">Fancy in perception, disciplined in execution.</p>
      <ol className="mt-8 grid gap-4 md:grid-cols-5">
        {process.map((step, i) => (
          <li key={step} className="glass-panel p-4">
            <p className="text-xs text-white/50">0{i + 1}</p>
            <p className="mt-1 text-lg font-medium">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="about" className="section-shell py-20">
      <h2 className="text-3xl font-semibold">Client Proof</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {[
          ["Founder, Apex Health", "DELTART changed how our brand is perceived and how fast we convert serious buyers."],
          ["COO, Kivora Commerce", "What looked like a design engagement became a full growth system for our business."],
          ["Director, Northline Capital", "The automation layer saved hours every week while improving follow-up quality."],
        ].map(([name, quote]) => (
          <figure key={name} className="glass-panel p-6">
            <blockquote className="text-white/85">“{quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/55">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-violet-700/30 via-violet-500/20 to-pink-500/20 p-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-100">Ready for your next stage?</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Build the digital system your business should have had years ago.</h2>
          <p className="text-white/75">Get a strategic audit from DELTART and a roadmap to improve speed, perception, and conversion.</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#" className="rounded-full bg-white px-6 py-3 font-medium text-black">Get Free Audit</a>
            <a href="#" className="rounded-full border border-white/25 px-6 py-3 font-medium text-white">Book a Call</a>
            <a href="#" className="rounded-full border border-white/25 px-6 py-3 font-medium text-white">Start Your Transformation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col justify-between gap-4 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} DELTART · Digital Growth Systems</p>
        <div className="flex gap-4">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">hello@deltart.io</a>
        </div>
      </div>
    </footer>
  );
}
