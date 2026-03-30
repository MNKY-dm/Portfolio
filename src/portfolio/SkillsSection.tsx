import { SKILL_CATEGORIES } from "./data";

export function SkillsSection() {
  return (
    <section id="competences" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// ma boîte à outils"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Compétences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              className="fade-in-up rounded-2xl border border-border bg-card/60 p-6 space-y-4"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-sm px-3 py-1 rounded-full border border-border bg-muted/40 text-foreground font-medium"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="fade-in-up mt-10 text-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1EbqV1cm8faMRZKXsa4H6QQFcCbZN9KXBs4y6COVJlVY/edit?gid=1362865023#gid=1362865023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/40 bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-label="Lien externe"
              role="img"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a4 4 0 014-4h6m0 0l-3-3m3 3l-3 3"
              />
            </svg>
            Tableau de synthèse (E5)
          </a>
        </div>
      </div>
    </section>
  );
}
