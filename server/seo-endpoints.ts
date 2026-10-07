import { routeSeo, SITE_URL } from "./seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml() {
  const urls = Object.values(routeSeo)
    .filter((route) => route.type !== "notFound")
    .map((route) => {
      const loc = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildRobotsTxt() {
  return [
    "# Robots policy for Like Move 360",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /404",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}
