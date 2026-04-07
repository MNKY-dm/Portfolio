import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "./data";
import type { Project } from "./types";
import { useState, useRef } from "react";

interface Props {
  onSelectProject: (title: string) => void;
}

function ProjectCard({
                       project,
                       featured,
                       onSelectProject,
                     }: {
  project: Project;
  featured: boolean;
  onSelectProject: (title: string) => void;
}) {
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
                <Badge key={t} variant="secondary" className="font-mono-code text-xs">
                  {t}
                </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
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
            {project.id && (
                <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project.id!);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Détails →
                </button>
            )}
          </div>
        </div>
      </div>
  );
}

export function ProjectsSection({ onSelectProject }: Props) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [featuredSlot, setFeaturedSlot] = useState(2);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = PROJECTS.length;

  const navigate = (dir: "left" | "right") => {
    if (isAnimating || !trackRef.current) return;
    setIsAnimating(true);

    // Change le style actif immédiatement
    setFeaturedSlot(dir === "right" ? 3 : 1);

    const cardWidth = trackRef.current.offsetWidth / 3;
    const translateX = dir === "right" ? -cardWidth : cardWidth;

    trackRef.current.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
    trackRef.current.style.transform = `translateX(calc(-33.333% + ${translateX}px))`;

    setTimeout(() => {
      trackRef.current!.style.transition = "none";
      trackRef.current!.style.transform = "translateX(-33.333%)";
      setCurrent((c) =>
          dir === "right" ? (c + 1) % total : (c - 1 + total) % total
      );
      setFeaturedSlot(2); // recentre le slot actif
      setTimeout(() => setIsAnimating(false), 20);
    }, 450);
  };

  // 5 cards : [-2, -1, 0, +1, +2] — la fenêtre montre [-1, 0, +1]
  const slots = [-2, -1, 0, 1, 2].map((offset) =>
      PROJECTS[(current + offset + total * 10) % total]
  );

  return (
      <section id="projets" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// mes projets"}
          </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ce que j'ai construit
            </h2>
          </div>

          <div className="relative flex items-center justify-center gap-3 md:gap-5">
            <button type="button" onClick={() => navigate("left")} aria-label="Projet précédent"
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card/80 hover:bg-primary/20 hover:border-primary transition-all text-muted-foreground hover:text-primary z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Fenêtre : exactement 3 cards larges */}
            <div className="overflow-x-hidden w-full max-w-4xl py-4">
              {/* Bande de 5 cards, translatee pour centrer le slot 0 */}
              <div
                  ref={trackRef}
                  className="flex"
                  style={{ transform: "translateX(-33.333%)" }}
              >
                {slots.map((project, i) => (
                    <div
                        key={`slot-${i}-${project.title}`}
                        className="flex-shrink-0 px-2"
                        style={{ width: "33.333%" }}
                        onClick={() => {
                          if (i < 2) navigate("left");
                          else if (i > 2) navigate("right");
                        }}
                    >
                      <div className={`h-full transition-opacity duration-300 cursor-pointer ${
                          i === featuredSlot ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}>
                        <ProjectCard
                            project={project}
                            featured={i === 2}
                            onSelectProject={onSelectProject}
                        />
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <button type="button" onClick={() => navigate("right")} aria-label="Projet suivant"
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card/80 hover:bg-primary/20 hover:border-primary transition-all text-muted-foreground hover:text-primary z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {PROJECTS.map((project, i) => (
                <button type="button" key={project.title} onClick={() => setCurrent(i)}
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