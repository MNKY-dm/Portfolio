import { useState } from "react";
import { INTERESTS } from "./data";

export function InterestsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="interets" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-green-nature tracking-widest uppercase mb-3 block">
            {"// en dehors du code"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ce qui me fait vibrer
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {INTERESTS.map((interest, i) => (
            <div
              key={interest.label}
              className="fade-in-up relative rounded-2xl border border-border bg-card/60 p-6 cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  interest.color === "orange"
                    ? "bg-primary/5"
                    : "bg-secondary/5"
                } ${hovered === i ? "opacity-100" : "opacity-0"}`}
              />
              <div className="relative z-10">
                <div
                  className={`mb-3 ${interest.color === "orange" ? "text-primary" : "text-green-nature"}`}
                >
                  {interest.icon}
                </div>
                <p className="font-display text-lg font-semibold mb-2">
                  {interest.label}
                </p>
                <div
                  className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 overflow-hidden ${
                    hovered === i ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {interest.reveal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
