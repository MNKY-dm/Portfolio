import { PROJECTS } from "./data";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import type { Project } from "./types";

interface Props {
    projectId: string;  // ← "teasy" ou "biblioteco"
    onBack: () => void;
}

export function ProjectDetailPage({ projectId, onBack }: Props) {
    const project = PROJECTS.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-muted-foreground">Projet introuvable.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <button type="button" onClick={onBack}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
                    <ArrowLeft className="w-4 h-4" /> Retour au portfolio
                </button>

                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="font-mono-code text-xs">{t}</Badge>
                    ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-orange-light transition-colors mb-12">
                    <Github className="w-4 h-4" /> Voir le code <ExternalLink className="w-3 h-3" />
                </a>

                {/* Contexte */}
                <section className="mb-10">
                    <h2 className="font-display text-2xl font-bold mb-3">Contexte</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.context}</p>
                </section>

                {/* Expression des besoins */}
                <section className="mb-10">
                    <h2 className="font-display text-2xl font-bold mb-3">Expression des besoins</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.needs}</p>
                </section>

                {/* CDC / Compte rendu */}
                <div className="flex gap-4 flex-wrap">
                    {project.cdc && (
                        <a href={project.cdc} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-sm">
                            <ExternalLink className="w-4 h-4" /> Cahier des charges
                        </a>
                    )}
                    {project.accountReport && (
                        <a href={project.accountReport} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-sm">
                            <ExternalLink className="w-4 h-4" /> Compte rendu détaillé
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}