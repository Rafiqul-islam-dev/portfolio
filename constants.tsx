
import React from 'react';
import { 
  Code2, 
  Layers, 
  Smartphone, 
  Database, 
  Globe, 
  Server,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, ServiceItem, TestimonialItem } from './types';

import demo1 from "./asset/demo1.png";
import demo2 from "./asset/demo2.png";
import demo3 from "./asset/demo3.png";
import demo4 from "./asset/demo4.png";
import demo5 from "./asset/demo5.png";
import demo6 from "./asset/demo6.png";

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Sizram Solution",
    role: "Software Developer",
    period: "Dec 1, 2022 – Present",
    location: "Niketan, Gulshan, Dhaka",
    description: "Leading development of scalable web applications and high-performance APIs."
  },
  {
    company: "Techno Apogee",
    role: "Back-End Web Developer",
    period: "Jan 2021 – Nov 2022",
    location: "Dhaka",
    description: "Focused on robust backend architecture and database optimization using PHP/Laravel."
  },
  {
    company: "ADDIE Soft Ltd.",
    role: "Web Site Designer",
    period: "Mar 3, 2019 – Jan 20, 2021",
    location: "Dhanmondi, Dhaka",
    description: "Designed responsive user interfaces and interactive web experiences."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Laravel Admin Panel",
    description: "A comprehensive enterprise-grade administration dashboard with role-based access control.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    image: demo1,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "REST API Gateway",
    description: "High-performance API server supporting mobile and web clients with JWT authentication.",
    tech: ["PHP", "Laravel", "Redis"],
    image: demo2,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "React Analytics Dashboard",
    description: "Real-time data visualization platform with interactive charts and reporting tools.",
    tech: ["React", "Tailwind", "Recharts"],
    image: demo3,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Vue E-Commerce App",
    description: "Dynamic storefront with state management, product filtering, and checkout flow.",
    tech: ["Vue 3", "Pinia", "Firebase"],
    image: demo4,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Flutter Delivery App",
    description: "Cross-platform mobile application for real-time tracking and delivery management.",
    tech: ["Flutter", "Dart", "Google Maps API"],
    image: demo5,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "MySQL Inventory System",
    description: "A robust database-driven inventory tracking system for small to medium enterprises.",
    tech: ["MySQL", "SQL", "Laravel"],
    image: demo6,
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 75 }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Vue", level: 80 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    name: "Mobile & Database",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "MySQL", level: 90 },
      { name: "SQL Server", level: 85 }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Web App Development",
    description: "Custom, scalable web applications built with modern frameworks for optimal performance.",
    icon: "Globe"
  },
  {
    title: "Laravel API & Backend",
    description: "Robust, secure RESTful APIs and server-side architecture for enterprise needs.",
    icon: "Server"
  },
  {
    title: "Frontend UI Dev",
    description: "Pixel-perfect, responsive interfaces using React and Vue that users love.",
    icon: "Layers"
  },
  {
    title: "Flutter App Dev",
    description: "High-quality cross-platform mobile apps for iOS and Android from a single codebase.",
    icon: "Smartphone"
  },
  {
    title: "Database Design",
    description: "Optimized relational database schemas and queries for data-intensive applications.",
    icon: "Database"
  },
  {
    title: "Cloud Solutions",
    description: "Deployment and management of applications on AWS, DigitalOcean, or Heroku.",
    icon: "Code2"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "John Doe",
    role: "Project Manager, Sizram",
    text: "Rafiqul is an exceptional developer who consistently delivers high-quality code. His problem-solving skills are top-notch.",
    avatar: "https://i.pravatar.cc/150?u=john"
  },
  {
    name: "Sarah Smith",
    role: "CEO, Tech Startups",
    text: "Working with Sohel was a breeze. He understood our complex requirements and built a robust Laravel backend in record time.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

export const SOCIAL_LINKS = [
  { icon: <Github size={20} />, href: "#", label: "GitHub" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rafiqul-islam-dev/", label: "LinkedIn" },
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/rafiqulislamsohelme/", label: "Facebook" }
];
