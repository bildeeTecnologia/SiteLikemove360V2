# Implementação SSR e Schema SEO — Like Move 360

## O que foi implementado

O projeto usava Vite + React no cliente e Express apenas como fallback SPA:

```ts
app.get("*", (_req, res) => {
  res.sendFile("index.html");
});
```

Isso fazia todas as rotas entregarem o mesmo HTML inicial. A implementação atual:

1. Renderiza as rotas públicas com `react-dom/server` no Express.
2. Entrega o conteúdo da página no HTML inicial.
3. Injeta `<title>`, meta description, canonical e Open Graph por rota.
4. Injeta JSON-LD com `LocalBusiness`, `Service`, `WebSite` e `BreadcrumbList`.
5. Usa `hydrateRoot` no cliente para preservar interatividade depois do carregamento.
6. Retorna HTTP 404 para rotas desconhecidas.

## Arquivos principais

- `server/ssr.tsx`: renderer SSR e montagem do documento HTML.
- `server/seo.ts`: títulos, descriptions, URLs canônicas e schemas JSON-LD.
- `server/index.ts`: servidor Express com fallback SSR.
- `client/src/main.tsx`: hidratação do HTML entregue pelo servidor.

## Como executar

```bash
npm ci
npm run check
npm run build
PORT=3000 npm start
```

O processo de build faz duas coisas:

- `vite build`: gera os assets do cliente em `dist/public`;
- `esbuild server/index.ts`: gera o servidor SSR em `dist/index.js`.

Em produção, o host precisa executar:

```bash
npm start
```

ou o equivalente configurado para executar `node server.js` depois do build.

## Como validar antes de publicar

Com o servidor rodando:

```bash
curl -s http://localhost:3000/plataforma-360 | grep -E '<title>|<h1>|canonical|application/ld\+json'
```

A resposta deve conter:

- title específico da página;
- um H1 específico;
- canonical absoluto;
- script `application/ld+json`;
- texto da página no HTML, mesmo sem executar JavaScript.

Também testar:

```bash
curl -I http://localhost:3000/nao-existe
```

A rota inexistente deve responder `404`.

## Schema LocalBusiness

O schema em `server/seo.ts` usa somente informações confirmadas:

- nome: Like Move 360;
- telefone: +55 44 99136-6360;
- site oficial;
- Instagram oficial;
- áreas atendidas;
- logo e imagem do site.

Não foi incluído endereço físico porque o site informa uma base/área de atendimento, mas não fornece um endereço público confirmado. Se houver endereço comercial público, ele pode ser adicionado com `PostalAddress`.

Também não foi incluído `AggregateRating`, pois avaliações agregadas só devem ser marcadas quando os dados forem verificáveis e estiverem em conformidade com as regras do Google.

## Schema Service

Cada página de serviço gera um nó `Service` vinculado ao mesmo negócio local por:

```json
{
  "provider": {
    "@id": "https://likemove360.com.br/#localbusiness"
  }
}
```

Isso permite relacionar semanticamente cada atração ao negócio principal:

- Plataforma 360;
- Espelho Mágico;
- Robô Bumblebee.

## Após o deploy

1. Abrir cada URL em modo anônimo.
2. Conferir o código-fonte, não apenas o DOM após JavaScript.
3. Testar no [Rich Results Test](https://search.google.com/test/rich-results).
4. Testar no [Schema Markup Validator](https://validator.schema.org/).
5. Usar o URL Inspection no Google Search Console.
6. Atualizar o sitemap para conter somente rotas 200 e canônicas.
7. Reenviar o sitemap no Search Console.

## Observação sobre hidratação

O cliente foi alterado de `createRoot` para `hydrateRoot`. Isso é necessário porque o servidor agora entrega marcação React antes do JavaScript. Os componentes SSR precisam permanecer determinísticos na primeira renderização; estados e animações podem continuar funcionando depois da hidratação.
