import {
  Briefcase,
  Code2,
  Cpu,
  Film,
  FolderOpen,
  Gamepad2,
  Globe,
  Heart,
  Home,
  MessageSquare,
  PawPrint,
  Rss,
  Wrench,
} from "lucide-react";
import type {
  Interest,
  NavItem,
  Project,
  SkillCategory,
  TechWatch,
} from "./types";

export const PROJECTS: Project[] = [
  {
    title: "Puissance 4",
    tech: ["Python", "IA"],
    description:
      "Jeu de puissance 4 conçu de A à Z, en mode joueur contre joueur ou joueur contre IA (algorithme). Projet scolaire de Terminale réalisé en binôme.",
    github: "https://github.com/MNKY-dm/Puissance-4",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.rYWvc2bEOQOADXa4LXz3FQHaFu?pid=Api",
  },
  {
    title: "Discord Clone",
    tech: ["PHP", "CRUD", "POO", "Git"],
    description:
      "Site web clone de Discord réalisé en groupe. Échange de messages dans des salons, avec gestion CRUD, programmation orientée objet et versioning Git.",
    github: "https://github.com/MNKY-dm/Discord",
    image: "https://images4.alphacoders.com/121/1216476.jpg",
  },
  {
    title: "Teasy",
    tech: ["Java", "JavaFX", "CRUD", "MVC", "Git"],
    description:
      "Application Java / JavaFX de billetterie : catalogue d'événements et achat de billets. Architecture MVC, CRUD complet, versioning Git.",
    github: "https://github.com/MNKY-dm/Teasy",
    image:
      "http://www.saintcyrsurmer.fr/fileadmin/Contenu/3_onglet_la_ville/1_decouvrez_saint_cyr_sur_mer/evenements_animations/ticket-01.jpg",
  },
  {
    title: "JavaFleet",
    tech: ["Java", "JavaFX", "MVC", "Git"],
    description:
      "Jeu de bataille navale en Java / JavaFX. Deux joueurs, sans IA. Architecture MVC, versioning Git.",
    github: "https://github.com/MNKY-dm/JavaFleet",
    image:
      "https://www.goodfreephotos.com/albums/historical-battles/american-revolution/naval-battle-between-french-and-british-at-chesapeake-bay-american-revolution.jpg",
  },
  {
    title: "Biblioteco",
    tech: ["Laravel", "PHP", "CRUD", "MVC", "Git"],
    description:
      "Site web de gestion de bibliothèque : emprunts et retours de livres, catalogue dynamique, rôles utilisateurs. CRUD, Eloquent ORM, architecture MVC, Git.",
    github: "https://github.com/MNKY-dm/Biblioteco",
    image:
      "https://i.pinimg.com/originals/5a/fb/74/5afb74d9bffae30e5fe6d61392599d59.jpg",
  },
];

export const INTERESTS: Interest[] = [
  {
    icon: <Gamepad2 className="w-7 h-7" />,
    label: "Jeux vidéo",
    reveal:
      "Outer Wilds m'a appris à explorer sans carte. RDR2 m'a montré qu'une histoire peut être plus vraie que la vraie vie.",
    color: "orange",
  },
  {
    icon: <Film className="w-7 h-7" />,
    label: "Cinéma",
    reveal:
      "Inception pour les couches, Spiderverse pour la forme. Le cinéma qui ose quelque chose, c'est le seul qui m'intéresse.",
    color: "green",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    label: "Tech",
    reveal:
      "macOS, iOS, l'écosystème Apple — et tout ce qui gravite autour. La tech comme outil, pas comme fin en soi.",
    color: "orange",
  },
  {
    icon: <PawPrint className="w-7 h-7" />,
    label: "Animaux",
    reveal:
      "Comme dans Pokémon : chaque espèce mérite d'être observée, pas juste capturée.",
    color: "green",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    label: "Géographie",
    reveal:
      "Les cartes me fascinent autant que les territoires. Comprendre où les choses se passent, c'est déjà comprendre pourquoi.",
    color: "orange",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "Langages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "HTML / CSS" },
      { name: "SQL" },
    ],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Frameworks",
    skills: [{ name: "Laravel" }, { name: "JavaFX" }],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: "Outils",
    skills: [
      { name: "Git / GitHub" },
      { name: "VS Code" },
      { name: "IntelliJ" },
      { name: "PHPStorm" },
    ],
  },
  {
    icon: <Heart className="w-5 h-5" />,
    label: "Soft Skills",
    skills: [
      { name: "Curiosité" },
      { name: "Travail en équipe" },
      { name: "Résolution de problèmes" },
      { name: "Assimilation rapide des informations" },
    ],
  },
];

export const TECH_WATCH: TechWatch[] = [
  {
    tag: "YouTube",
    title: "Chaînes tech françaises",
    body: "Micode, Underscore_, Leotechmaker, Grafikart, Jojol — ma sélection de créateurs tech francophones, de la vulgarisation au tuto concret.",
    color: "orange",
  },
  {
    tag: "Community",
    title: "Reddit — subreddits dev",
    body: "r/programming, r/webdev, r/learnprogramming... Les discussions techniques en temps réel, souvent bien plus utiles qu'un article.",
    color: "green",
  },
  {
    tag: "IA & Recherche",
    title: "Perplexity Thinking",
    body: "Pour la recherche technique approfondie et la veille ciblée, Perplexity remplace désormais une bonne partie des moteurs traditionnels.",
    color: "orange",
  },
  {
    tag: "Presse tech",
    title: "macOS & iOS — actualité Apple",
    body: "Ma veille est centrée sur l'écosystème Apple : sorties, mises à jour, nouveautés logicielles et tendances autour de macOS et iOS.",
    color: "green",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Accueil", icon: <Home className="w-4 h-4" /> },
  { id: "projets", label: "Projets", icon: <FolderOpen className="w-4 h-4" /> },
  { id: "interets", label: "Intérêts", icon: <Heart className="w-4 h-4" /> },
  {
    id: "competences",
    label: "Compétences",
    icon: <Code2 className="w-4 h-4" />,
  },
  {
    id: "experience",
    label: "Expérience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { id: "veille", label: "Veille", icon: <Rss className="w-4 h-4" /> },
  {
    id: "contact",
    label: "Contact",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];
