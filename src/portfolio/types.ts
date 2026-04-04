export interface Project {
  id?: string;
  title: string;
  tech: string[];
  description: string;
  github: string;
  image: string;
  context?: string;
  needs?: string;
  cdc?: string;
  report?: string;
  video?: string;
}

export interface Interest {
  icon: React.ReactNode;
  label: string;
  reveal: string;
  color: "orange" | "green";
}

export interface SkillCategory {
  icon: React.ReactNode;
  label: string;
  skills: { name: string }[];
}

export interface TechWatch {
  tag: string;
  title: string;
  body: string;
  color: "orange" | "green";
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
