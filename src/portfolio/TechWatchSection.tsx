import { Badge } from "@/components/ui/badge";
import { TECH_WATCH } from "./data";

export function TechWatchSection() {
  return (
    <section id="veille" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// ce que je lis en ce moment"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Veille techno
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TECH_WATCH.map((item) => (
            <div
              key={item.title}
              className="fade-in-up card-hover rounded-2xl border border-border bg-card/60 p-6 space-y-3"
            >
              <Badge
                variant="outline"
                className={`text-xs font-mono-code ${
                  item.color === "orange"
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "bg-secondary/15 text-green-nature border-secondary/30"
                }`}
              >
                {item.tag}
              </Badge>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
