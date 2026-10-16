export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  image?: ImageAsset;
  id: string;
  title: string;
  author: "Luis" | "Gustavo";
  description: string;
  technologies: string[];
  category: string;
  siteUrl: string;
  codeUrl: string;
  placeholder: string;
};

export type TeamMember = {
  image?: ImageAsset;
  name: string;
  role: string;
  bio: string;
  instagram: string;
  email: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: "web" | "page" | "catalog" | "pin" | "tools";
};

export type FaqItem = { question: string; answer: string };

export type SiteConfig = {
  brand: string;
  email: string;
  whatsappNumber: string;
  whatsappLink: string;
  whatsappMessage: string;
  instagramHandle: string;
  instagramUrl: string;
  domain: string;
  title: string;
  description: string;
  year: number;
};
