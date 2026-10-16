import type { FaqItem, Project, Service, SiteConfig, TeamMember } from "@/types";

export const site: SiteConfig = {
  brand: "THT Turtles",
  email: "goesxz@gmail.com",
  whatsappNumber: "5511988559276",
  whatsappLink: "https://wa.me/5511988559276",
  whatsappMessage: "Olá! Vim pelo site da THT Turtles e gostaria de um orçamento.",
  instagramHandle: "@goesxz.dev",
  instagramUrl: "https://instagram.com/goesxz.dev",
  domain: "[PREENCHER: domínio do site]",
  title: "Criação de sites para negócios locais | THT Turtles",
  description: "Sites, landing pages e presença digital para negócios locais que querem ser encontrados e escolhidos.",
  year: 2026,
};

export const services: Service[] = [
  { number: "01", title: "Site institucional", description: "Um endereço digital claro para explicar o que você faz, mostrar seu trabalho e facilitar o contato.", icon: "web" },
  { number: "02", title: "Landing page", description: "Uma página objetiva, construída em torno de uma oferta e de uma próxima ação.", icon: "page" },
  { number: "03", title: "Catálogo e loja simples", description: "Seus produtos organizados para o cliente encontrar o que procura e chamar você.", icon: "catalog" },
  { number: "04", title: "Presença local", description: "Ajustes de presença no Google e mapas para ajudar clientes próximos a encontrar seu negócio.", icon: "pin" },
  { number: "05", title: "Manutenção e suporte", description: "Atualizações, pequenos ajustes e acompanhamento combinados de forma transparente.", icon: "tools" },
];

export const projects: Project[] = [
  { id: "01", title: "[PREENCHER: nome do projeto]", author: "Luis", description: "Projeto de exemplo — apresentação digital para negócio local.", technologies: ["Next.js", "TypeScript", "CSS"], category: "Institucional", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
  { id: "02", title: "[PREENCHER: nome do projeto]", author: "Luis", description: "Projeto de exemplo — página focada em apresentar uma oferta.", technologies: ["React", "TypeScript"], category: "Landing page", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
  { id: "03", title: "[PREENCHER: nome do projeto]", author: "Luis", description: "Projeto de exemplo — catálogo organizado para consulta rápida.", technologies: ["React", "CSS"], category: "Catálogo", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
  { id: "04", title: "[PREENCHER: nome do projeto]", author: "Gustavo", description: "Projeto de exemplo — site responsivo com navegação simples.", technologies: ["Next.js", "CSS Modules"], category: "Institucional", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
  { id: "05", title: "[PREENCHER: nome do projeto]", author: "Gustavo", description: "Projeto de exemplo — landing page para campanha específica.", technologies: ["React", "TypeScript"], category: "Landing page", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
  { id: "06", title: "[PREENCHER: nome do projeto]", author: "Gustavo", description: "Projeto de exemplo — experiência digital para serviço local.", technologies: ["Next.js", "TypeScript"], category: "Serviços", siteUrl: "#contato", codeUrl: "#contato", placeholder: "Mockup demonstrativo", image: undefined },
];

export const team: TeamMember[] = [
  { name: "Luis", role: "[PREENCHER: função]", bio: "[PREENCHER: mini-bio com sua experiência, foco e jeito de trabalhar.]", instagram: "https://instagram.com/goesxz.dev", email: "goesxz@gmail.com", image: undefined },
  { name: "Gustavo", role: "[PREENCHER: função]", bio: "[PREENCHER: mini-bio com sua experiência, foco e jeito de trabalhar.]", instagram: "[PREENCHER: Instagram do Gustavo]", email: "[PREENCHER: e-mail do Gustavo]", image: undefined },
];

export const faqs: FaqItem[] = [
  { question: "Quanto tempo leva para ficar pronto?", answer: "O prazo depende do escopo, do conteúdo e das funcionalidades. Definimos o cronograma junto com a proposta, antes de começar." },
  { question: "O que vocês precisam para começar?", answer: "Começamos conversando sobre o negócio, o público e o objetivo do site. Depois alinhamos textos, fotos, referências e acessos que forem necessários." },
  { question: "Preciso contratar domínio e hospedagem?", answer: "Um domínio próprio costuma ser recomendado. As opções de hospedagem dependem do projeto; explicamos custos e alternativas na proposta antes de qualquer decisão." },
  { question: "Vocês fazem manutenção depois da entrega?", answer: "Sim, podemos combinar manutenção e suporte conforme a necessidade. O que está incluído e os valores ficam descritos antes do início." },
  { question: "Como funciona o orçamento?", answer: "Entre em contato e conte um pouco do que precisa. Avaliamos o escopo e combinamos valores, etapas e prazo antes de iniciar o trabalho." },
];
