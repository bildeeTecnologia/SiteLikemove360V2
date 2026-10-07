import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { renderDocument } from "./ssr";
import { buildRobotsTxt, buildSitemapXml } from "./seo-endpoints";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").send(buildSitemapXml());
  });

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(buildRobotsTxt());
  });

  app.use(express.static(staticPath, { index: false }));

  // SSR: entrega conteúdo, metadados e JSON-LD no HTML inicial de cada rota.
  app.get("*", async (req, res) => {
    if (req.path.startsWith("/api/") || req.path.includes(".")) {
      res.status(404).end();
      return;
    }

    try {
      const template = await fs.readFile(path.join(staticPath, "index.html"), "utf8");
      const rendered = renderDocument(template, req.path);
      res.status(rendered.statusCode).type("html").send(rendered.html);
    } catch (error) {
      console.error("SSR render failed:", error);
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });

  const port = Number(process.env.PORT || 3000);

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
