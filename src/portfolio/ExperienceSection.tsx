export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-green-nature tracking-widest uppercase mb-3 block">
            {"// parcours"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Expérience
          </h2>
        </div>
        <div className="fade-in-up relative pl-8 border-l-2 border-border">
          <div className="relative">
            <div
              className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary"
              style={{ boxShadow: "0 0 15px oklch(0.59 0.19 35 / 0.5)" }}
            />
            <div className="space-y-3">
              <span className="font-mono-code text-xs text-primary bg-primary/10 px-2 py-0.5 rounded inline-block">
                Alliance Automotive Group
              </span>
              <h3 className="font-display text-xl font-bold">
                Technicien support niveau 1 / 2
              </h3>
              <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm list-disc list-inside">
                <li>Administration Active Directory</li>
                <li>Support utilisateurs</li>
                <li>Logiciels métier</li>
                <li>Déploiement IT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
