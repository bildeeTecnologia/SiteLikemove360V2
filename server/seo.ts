export const SITE_URL = "https://likemove360.com.br";
export const PHONE = "+55 44 99136-6360";
export const WHATSAPP = "https://wa.me/5544991366360";
export const LOGO_URL = `${SITE_URL}/logo-mark.png`;
export const DEFAULT_IMAGE = `${SITE_URL}/media/like-move-hero_aa795088.webp`;

export type RouteSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "home" | "service" | "location" | "notFound";
  service?: {
    name: string;
    description: string;
    serviceType: string;
  };
  location?: string;
};

export const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "Like Move 360 | Atrações para eventos em Maringá e Londrina",
    description:
      "Atrações para casamentos, 15 anos, formaturas e eventos corporativos em Maringá, Londrina e região. Plataforma 360, Max360, Espelho Mágico e Robô Bumblebee.",
    path: "/",
    type: "home",
  },
  "/plataforma-360": {
    title: "Aluguel de Plataforma 360 em Maringá e Londrina | Like Move 360",
    description:
      "Aluguel de Plataforma 360 e Max360 para casamentos, 15 anos, formaturas e eventos corporativos. Atendemos Maringá, Londrina e região. Consulte sua data.",
    path: "/plataforma-360",
    type: "service",
    service: {
      name: "Plataforma 360",
      description:
        "A Plataforma 360 transforma a participação dos convidados em vídeos dinâmicos e divertidos, com versões para até 4 ou até 15 pessoas por sessão.",
      serviceType: "Aluguel de Plataforma 360 para eventos",
    },
  },
  "/espelho-magico": {
    title: "Espelho Mágico com Foto Impressa em Maringá e Londrina | Like Move 360",
    description:
      "Espelho Mágico para casamentos, 15 anos e eventos em Maringá, Londrina e região. Fotos impressas na hora e download digital sem depender da internet.",
    path: "/espelho-magico",
    type: "service",
    service: {
      name: "Espelho Mágico",
      description:
        "Espelho Mágico interativo com fotos impressas na hora, arquivo digital profissional e Wi-Fi próprio no evento.",
      serviceType: "Aluguel de Espelho Mágico para eventos",
    },
  },
  "/robo-bumblebee": {
    title: "Robô Bumblebee para Festas e Eventos em Maringá e Londrina | Like Move 360",
    description:
      "Contrate o Robô Bumblebee para casamentos, 15 anos, formaturas e eventos corporativos em Maringá, Londrina e região.",
    path: "/robo-bumblebee",
    type: "service",
    service: {
      name: "Robô Bumblebee",
      description:
        "Atração visual e interativa para surpreender convidados em casamentos, aniversários, formaturas e eventos corporativos.",
      serviceType: "Atração com Robô Bumblebee para eventos",
    },
  },
  "/maringa": {
    title: "Atrações para eventos em Maringá | Like Move 360",
    description:
      "Plataforma 360, Espelho Mágico e Robô Bumblebee para casamentos, 15 anos, formaturas e eventos corporativos em Maringá.",
    path: "/maringa",
    type: "location",
    location: "Maringá",
  },
  "/londrina": {
    title: "Atrações para eventos em Londrina | Like Move 360",
    description:
      "Plataforma 360, Espelho Mágico e Robô Bumblebee para casamentos, 15 anos, formaturas e eventos corporativos em Londrina.",
    path: "/londrina",
    type: "location",
    location: "Londrina",
  },
};

export const localBusinessId = `${SITE_URL}/#localbusiness`;

export function buildLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: "Like Move 360",
    url: SITE_URL,
    logo: LOGO_URL,
    image: DEFAULT_IMAGE,
    telephone: PHONE,
    priceRange: "$$",
    description:
      "Atrações interativas para casamentos, 15 anos, formaturas e eventos corporativos em Maringá, Londrina e região.",
    areaServed: [
      { "@type": "City", name: "Maringá" },
      { "@type": "City", name: "Londrina" },
      { "@type": "City", name: "Cianorte" },
      { "@type": "City", name: "Paranavaí" },
      { "@type": "AdministrativeArea", name: "Norte e Noroeste do Paraná" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      availableLanguage: "pt-BR",
      url: WHATSAPP,
    },
    sameAs: ["https://www.instagram.com/likemove360/"],
  };
}

export function buildJsonLd(seo: RouteSeo) {
  const graph: Record<string, unknown>[] = [buildLocalBusinessSchema()];

  if (seo.service) {
    graph.push({
      "@type": "Service",
      "@id": `${SITE_URL}${seo.path}#service`,
      name: seo.service.name,
      serviceType: seo.service.serviceType,
      description: seo.service.description,
      url: `${SITE_URL}${seo.path}`,
      image: seo.image || DEFAULT_IMAGE,
      provider: { "@id": localBusinessId },
      areaServed: [
        { "@type": "City", name: "Maringá" },
        { "@type": "City", name: "Londrina" },
        { "@type": "AdministrativeArea", name: "Norte e Noroeste do Paraná" },
      ],
    });
  }

  if (seo.type === "home") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Like Move 360",
      publisher: { "@id": localBusinessId },
      inLanguage: "pt-BR",
    });
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${seo.path}#breadcrumb`,
    itemListElement:
      seo.path === "/"
        ? [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL }]
        : [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: seo.service?.name || seo.location || seo.title, item: `${SITE_URL}${seo.path}` },
          ],
  });

  return { "@context": "https://schema.org", "@graph": graph };
}

export function escapeJsonForHtml(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
