import Link from "next/link";
import { Logo } from "./logo";

const navItems = ["Work", "Services", "Process", "About", "Contact"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#top" aria-label="DELTART home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium transition hover:border-violet-300 hover:bg-violet-500/20"
        >
          Get Free Audit
        </Link>
      </div>
    </header>
  );
}
