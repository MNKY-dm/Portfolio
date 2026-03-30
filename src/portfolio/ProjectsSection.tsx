import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "./data";
import type { Project } from "./types";

function ProjectCard({
  project,
  featured,
}: { project: Project; featured: boolean }) {
  return (
    <div
      className={`card-hover rounded-2xl overflow-hidden border bg-card flex flex-col h-full ${
        featured ? "border-primary/30" : "border-border"
      }`}
    >
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="font-mono-code text-xs"
            >
              {t}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-orange-light transition-colors"
        >
          <Github className="w-4 h-4" />
          Voir le code
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const total = PROJECTS.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// mes projets"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ce que j’ai construit
          </h2>
        </div>
        <div className="relative flex items-stretch justify-center gap-3 md:gap-5">
          <button
            type="button"
            data-ocid="projects.pagination_prev"
            onClick={prev}
            aria-label="Projet précédent"
            className="flex-shrink-0 self-center w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card/80 hover:bg-primary/20 hover:border-primary transition-all text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3 overflow-hidden w-full max-w-4xl">
            {[-1, 0, 1].map((offset) => {
              const idx = (current + offset + total) % total;
              const project = PROJECTS[idx];
              const isCenter = offset === 0;
              return (
                <div
                  key={`${idx}-${offset}`}
                  className={`transition-all duration-500 flex-1 ${
                    isCenter
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-40 hidden md:block"
                  }`}
                >
                  <ProjectCard project={project} featured={isCenter} />
                </div>
              );
            })}
          </div>
          <button
            type="button"
            data-ocid="projects.pagination_next"
            onClick={next}
            aria-label="Projet suivant"
            className="flex-shrink-0 self-center w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card/80 hover:bg-primary/20 hover:border-primary transition-all text-muted-foreground hover:text-primary"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {PROJECTS.map((project, i) => (
            <button
              type="button"
              key={project.title}
              onClick={() => setCurrent(i)}
              aria-label={`Aller au projet ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
