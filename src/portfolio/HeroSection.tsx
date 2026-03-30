import { ChevronDown } from "lucide-react";
import profilePic from "../img/pdp.jpeg"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />
          <div
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/60"
            style={{ boxShadow: "0 0 30px oklch(0.59 0.19 35 / 0.4)" }}
          >
            <img
              src={profilePic}
              alt="Dylan — développeur passionné"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-display text-7xl md:text-9xl font-extrabold tracking-tight text-gradient-orange">
            Dylan
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Développeur passionné —{" "}
            <span className="text-foreground font-medium">
              je construis des trucs qui marchent
            </span>{" "}
            (et parfois qui explosent)
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["Python", "Java", "PHP", "Laravel", "React", "JavaFX"].map((t) => (
            <span
              key={t}
              className="font-mono-code text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-muted/40"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("projets")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Défiler vers les projets"
          className="mt-4 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Voir mes projets
          </span>
          <ChevronDown
            className="w-5 h-5"
            style={{ animation: "bounce-y 1.5s ease-in-out infinite" }}
          />
        </button>
      </div>
    </section>
  );
}
