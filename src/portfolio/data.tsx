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
    id: "teasy",
    title: "Teasy",
    tech: ["Java", "JavaFX", "MySQL", "MVC", "Git"],
    description:
        "Application Java / JavaFX de billetterie fictive : catalogue d'événements, achat de billets et panel d'administration. Architecture MVC, gestion des rôles utilisateurs, versioning Git.",
    github: "https://github.com/MNKY-dm/Teasy",
    image:
        "http://www.saintcyrsurmer.fr/fileadmin/Contenu/3_onglet_la_ville/1_decouvrez_saint_cyr_sur_mer/evenements_animations/ticket-01.jpg",

    context: `Teasy est un projet scolaire réalisé dans le cadre de l'épreuve E6 du BTS SIO option SLAM (2ème année). Développé en solo, il s'agit d'une application de bureau Java / JavaFX simulant une plateforme de billetterie pour des événements culturels et de divertissement. L'objectif pédagogique était de concevoir et implémenter une application complète respectant une architecture MVC, un CRUD complet, une gestion des rôles utilisateurs, et un versioning Git rigoureux.`,

    needs: `L'application répond aux besoins de trois types d'utilisateurs distincts :\n\nBesoins fonctionnels\n• Consultation d'un catalogue d'événements (concerts, spectacles, expositions...)\n• Achat de billets pour un événement disponible\n• Consultation et modification du profil utilisateur\n• Création et modification d'événements par les artistes\n• Panel d'administration permettant la gestion complète des données (utilisateurs, événements, billets)\n\nRôles utilisateurs\n• Client : consulte le catalogue, achète des billets, gère son profil\n• Artiste : crée et gère ses propres événements\n• Administrateur : accès complet à toutes les données via un panel dédié\n\nBesoins non fonctionnels\n• Interface graphique desktop développée avec JavaFX\n• Architecture MVC stricte assurant la séparation des responsabilités\n• Persistance des données via une base de données relationnelle\n• Gestion sécurisée des accès selon le rôle connecté\n• Versioning du code source avec Git / GitHub`,

    cdc: "",     // à remplir
    report: "",  // à remplir
    video: "",   // à remplir
  },
  {
    id: "biblioteco",
    title: "Biblioteco",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX", "MVC", "Git"],
    description:
        "Application web de gestion de bibliothèque fictive : catalogue de livres dynamique, système de réservation par panier, et panel d'administration. Stack Laravel / PHP avec recherche AJAX et architecture MVC.",
    github: "https://github.com/MNKY-dm/Biblioteco",
    image: "https://i.pinimg.com/originals/5a/fb/74/5afb74d9bffae30e5fe6d61392599d59.jpg",

    context: `Biblioteco est un projet scolaire réalisé dans le cadre de l'épreuve E6 du BTS SIO option SLAM (2ème année). Développé en solo, il constitue le projet "client léger" (application web) parmi les deux projets du BTS. L'objectif pédagogique était de concevoir et implémenter une application web complète avec Laravel, en respectant une architecture MVC, un CRUD complet, une gestion des rôles utilisateurs, et un versioning Git rigoureux.`,

    needs: `L'application répond aux besoins de trois types d'utilisateurs distincts :\n\nBesoins fonctionnels\n• Consultation d'un catalogue de livres avec recherche dynamique (AJAX)\n• Ajout de livres au panier et validation pour réserver des exemplaires\n• Consultation et modification du profil utilisateur\n• Ajout et modification de livres dans le catalogue par les bibliothécaires\n• Panel d'administration pour la gestion complète des données (utilisateurs, livres, réservations)\n\nRôles utilisateurs\n• Adhérent : consulte le catalogue, gère son panier, réserve des livres, gère son profil\n• Bibliothécaire : ajoute et gère les livres du catalogue\n• Administrateur : accès complet à toutes les données via un panel dédié\n\nBesoins non fonctionnels\n• Application web développée avec Laravel (PHP) et rendu Blade\n• Architecture MVC stricte (séparation Modèle / Vue / Contrôleur)\n• Persistance des données via base de données relationnelle MySQL\n• Recherche dynamique sans rechargement de page (AJAX / JavaScript)\n• Interface responsive avec Bootstrap\n• Gestion des accès sécurisée selon le rôle connecté\n• Versioning avec Git / GitHub`,

    cdc: "",     // à remplir
    report: "",  // à remplir
    video: "",   // à remplir
  },
  {
    id: "snow_glide",
    title: "SNow Glide",
    tech: ["JavaScript", "HTML", "CSS", "JSON", "Bootstrap", "Git"],
    description:
        "SNow Glide est une extension Chrome ajoutant quelques fonctionnalités aux formulaires de création de tickets incident sur Service Now : remplissage automatique du title, remplissage automatique du ticket pour les sujets redondants.",
    github: "https://github.com/MNKY-dm/snow_script",
    image: "https://developer.chrome.com/static/blog/extension-news-july-2024/image/Thumbnail_Extensions_ShortText.png",

    context: `SNow Glide est un projet personnel réalisé pour améliorer la réalisations des tâches répétitives des techniciens Service Desk (voir expérience professionnelle). Développée en solo, l'objectif était de concevoir et déployer une extension chrome non répertoriée.`,

    needs: `L'extension répond aux besoins de trois types d'utilisateurs distincts :\n\nBesoins fonctionnels\n• Faire apparaître la catégorisation du ticket dans son title en respectant un format précis pour plus de clarté\n• Remplissage rapide de tickets sur les sujets récurrents habituels (compte windows bloqué, mot de passe expiré, problèmes de connexion...)\n\nBesoins non fonctionnels\n• Liste déroulante des templates intégrée directement à l'interface traditionnelle de Service Now\n• Interface responsive avec Bootstrap\n• Versioning avec Git / GitHub`,

    cdc: "",     // à remplir
    report: "",  // à remplir
    video: "",   // à remplir
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
    title: "Puissance 4",
    tech: ["Python", "IA"],
    description:
      "Jeu de puissance 4 conçu de A à Z, en mode joueur contre joueur ou joueur contre IA (algorithme). Projet scolaire de Terminale réalisé en binôme.",
    github: "https://github.com/MNKY-dm/Puissance-4",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.rYWvc2bEOQOADXa4LXz3FQHaFu?pid=Api",
  },
  {
    title: "Franciscord",
    tech: ["PHP", "CRUD", "POO", "Git"],
    description:
      "Site web clone de Discord réalisé en groupe. Échange de messages dans des salons, avec gestion CRUD, programmation orientée objet et versioning Git.",
    github: "https://github.com/MNKY-dm/Discord",
    image: "https://images4.alphacoders.com/121/1216476.jpg",
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
  { id: "interets", label: "Intérêts", icon: <Heart className="w-4 h-4" /> },
  { id: "projets", label: "Projets", icon: <FolderOpen className="w-4 h-4" /> },
  {
    id: "experience",
    label: "Expérience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    id: "competences",
    label: "Compétences",
    icon: <Code2 className="w-4 h-4" />,
  },
  { id: "veille", label: "Veille", icon: <Rss className="w-4 h-4" /> },
  {
    id: "contact",
    label: "Contact",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];
