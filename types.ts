
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  avatar: string;
}
