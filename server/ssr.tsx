import React from "react";
import { renderToString } from "react-dom/server";
import { Router, Route, Switch } from "wouter";
import Home from "../client/src/pages/Home";
import ServicePage from "../client/src/pages/ServicePage";
import LocationPage from "../client/src/pages/LocationPage";
import NotFound from "../client/src/pages/NotFound";
import { buildJsonLd, escapeJsonForHtml, routeSeo, SITE_URL, DEFAULT_IMAGE } from "./seo";

function ServerApp() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plataforma-360">
        <ServicePage kind="plataforma" />
      </Route>
      <Route path="/espelho-magico">
        <ServicePage kind="espelho" />
      </Route>
      <Route path="/robo-bumblebee">
        <ServicePage kind="robo" />
      </Route>
      <Route path="/maringa">
        <LocationPage city="maringa" />
      </Route>
      <Route path="/londrina">
        <LocationPage city="londrina" />
      </Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function replaceMetaTags(template: string, pathname: string) {
  const seo = routeSeo[pathname] || {
    title: "Página não encontrada | Like Move 360",
    description: "A página solicitada não foi encontrada.",
    path: pathname,
    type: "notFound" as const,
  };
  const canonical = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`;
  const image = seo.image || DEFAULT_IMAGE;
  const jsonLd = escapeJsonForHtml(buildJsonLd(seo));
  const tags = `
    <link rel="canonical" href="${canonical}" />
    <meta name="description" content="${seo.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:type" content="${seo.type === "service" ? "website" : "website"}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="Like Move 360 — ${seo.service?.name || "atrações para eventos"}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${jsonLd}</script>`;

  return template
    .replace(/\s*<meta name="description"[^>]*>/gi, "")
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<title>[^<]*<\/title>/i, "")
    .replace("</head>", `    <title>${seo.title}</title>${tags}\n  </head>`);
}

export function renderDocument(template: string, pathname: string) {
  const isKnownRoute = Boolean(routeSeo[pathname]);
  const markup = renderToString(
    <Router ssrPath={pathname}>
      <ServerApp />
    </Router>,
  );
  const html = replaceMetaTags(template, pathname).replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  return { html, statusCode: isKnownRoute ? 200 : 404 };
}
