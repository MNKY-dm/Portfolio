import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { ContactSection } from "./portfolio/ContactSection";
import { ExperienceSection } from "./portfolio/ExperienceSection";
import { HeroSection } from "./portfolio/HeroSection";
import { InterestsSection } from "./portfolio/InterestsSection";
import { FloatingNav } from "./portfolio/NavSection";
import { ProjectsSection } from "./portfolio/ProjectsSection";
import { SkillsSection } from "./portfolio/SkillsSection";
import { TechWatchSection } from "./portfolio/TechWatchSection";
import { NAV_ITEMS } from "./portfolio/data";
import { ProjectDetailPage } from "./portfolio/ProjectDetailPage";

function getProjectFromHash(): string | null {
    const hash = window.location.hash; // ex: "#/projects/teasy"
    const match = hash.match(/^#\/projects\/(.+)$/);
    return match ? match[1] : null;
}

function useFadeInOnScroll(dep: unknown) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const elements = document.querySelectorAll(".fade-in-up");
            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) entry.target.classList.add("visible");
                    }
                },
                { threshold: 0.12 },
            );
            for (const el of elements) observer.observe(el);
            return () => observer.disconnect();
        }, 50);

        return () => clearTimeout(timeout);
    }, [dep]);
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;
  return (
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {year}. Built with{" "}
          <Heart className="inline w-3.5 h-3.5 text-primary" /> using{" "}
          <a href={utm} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            caffeine.ai
          </a>
        </p>
      </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  useFadeInOnScroll(selectedProject);

    useEffect(() => {
        const onHashChange = () => setSelectedProject(getProjectFromHash());
        window.addEventListener("hashchange", onHashChange);
        setSelectedProject(getProjectFromHash()); // ← lecture au montage
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

  // ← useEffect AVANT tout return conditionnel
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          }
        },
        { threshold: 0.35 },
    );
    for (const s of sections) observer.observe(s);
    return () => observer.disconnect();
  }, []);

    const handleSelectProject = (id: string) => {
        window.location.hash = `/projects/${id}`; // ← "/projects/" ajouté
        // ← plus de setSelectedProject ici, le hashchange s'en charge
    };

    const handleBack = () => {
        window.location.hash = "";
        // ← plus de setSelectedProject ici non plus
    };

  // ← return conditionnel APRÈS tous les hooks
    if (selectedProject) {
        return (
            <ProjectDetailPage
                projectId={selectedProject}
                onBack={handleBack}
            />
        );
    }

  return (
      <div className="min-h-screen bg-background text-foreground">
        <FloatingNav active={activeSection} />
        <main className="lg:pl-20">
          <HeroSection />
          <InterestsSection />
          <ProjectsSection onSelectProject={handleSelectProject} />
          <ExperienceSection />
          <SkillsSection />
          <TechWatchSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
  );
}