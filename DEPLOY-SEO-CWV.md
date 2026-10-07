# Deploy com PM2, Sitemap/Robots e Core Web Vitals

## 1. Build de produção

No servidor de hospedagem, usando Node 20:

```bash
nvm use 20
npm ci
npm run check
npm run build
```

O comando `npm run build` gera:

- `dist/public`: assets estáticos do cliente;
- `dist/index.js`: bundle do servidor Express SSR.

O `server.js` na raiz carrega `dist/index.js`.

## 2. Executar com PM2

Instalar o PM2 uma vez:

```bash
npm install --global pm2
```

Criar a pasta de logs e iniciar:

```bash
mkdir -p logs
pm2 start ecosystem.config.cjs
pm2 status
pm2 logs likemove360-web
```

Salvar o processo para reinício automático:

```bash
pm2 save
pm2 startup
```

O comando `pm2 startup` imprime um comando específico para o usuário do servidor. Executá-lo exatamente como mostrado e depois repetir `pm2 save`.

Para atualizações:

```bash
git pull
npm ci
npm run check
npm run build
pm2 reload likemove360-web --update-env
```

A configuração está em `ecosystem.config.cjs` e usa `PORT=3000`. Se a hospedagem fornecer outra porta, ajustar a variável `PORT` nesse arquivo ou no painel da hospedagem.

## 3. Reverse proxy

Se houver Nginx ou proxy da hospedagem, encaminhar o domínio para `127.0.0.1:3000`. O proxy deve preservar o host e usar HTTPS público.

Exemplo resumido de Nginx:

```nginx
server {
    listen 80;
    server_name likemove360.com.br www.likemove360.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

O TLS/HTTPS deve ser configurado no proxy ou no painel da hospedagem.

## 4. Sitemap e robots

O Express agora gera dinamicamente:

- `GET /sitemap.xml` a partir de `routeSeo`;
- `GET /robots.txt` com permissão de rastreamento e referência ao sitemap.

Rotas incluídas no sitemap:

- `/`;
- `/plataforma-360`;
- `/espelho-magico`;
- `/robo-bumblebee`;
- `/maringa`;
- `/londrina`.

Para adicionar uma nova URL, cadastrar a rota em `server/seo.ts` e no renderer/roteador correspondente. Não adicionar URLs 404 ao sitemap.

Validar depois do deploy:

```bash
curl -i https://likemove360.com.br/robots.txt
curl -i https://likemove360.com.br/sitemap.xml
```

Depois, reenviar o sitemap no Google Search Console.

## 5. Core Web Vitals — ordem recomendada

Metas de referência:

- **LCP:** até 2,5 s;
- **INP:** até 200 ms;
- **CLS:** até 0,1.

### LCP

Já foi aplicado um primeiro ganho: a imagem hero foi convertida de aproximadamente 4,1 MB em JPEG para aproximadamente 137 KB em WebP, e o HTML agora faz preload da imagem.

Próximas ações:

1. Medir LCP em mobile no PageSpeed Insights e CrUX.
2. Considerar AVIF para a hero, mantendo WebP como fallback.
3. Evitar que a hero dependa apenas de `background-image`; uma imagem `<img>` ou `<picture>` facilita prioridade, dimensões e `fetchpriority`.
4. Manter apenas uma imagem prioritária acima da dobra.
5. Remover ou adiar scripts de analytics que não sejam necessários para a primeira interação.
6. Usar cache de longa duração para assets versionados de `/assets` e imagens imutáveis.

### CLS

1. Definir `width` e `height` ou `aspect-ratio` para todas as imagens e vídeos.
2. Reservar espaço para a galeria antes do carregamento.
3. Evitar inserir banners, widgets ou botões flutuantes deslocando o layout.
4. Manter `font-display: swap` e testar a troca entre fonte de fallback e fonte final.
5. Não carregar fontes externas adicionais acima da dobra sem necessidade.

### INP

1. Testar o menu mobile, FAQ e links de CTA em dispositivos móveis reais.
2. Reduzir trabalho síncrono no JavaScript inicial.
3. Carregar galeria de vídeos somente quando próxima da viewport.
4. Usar `preload="metadata"` em vídeos e evitar mais de um vídeo iniciando automaticamente.
5. Dividir componentes interativos pesados se o bundle crescer.
6. Aplicar `content-visibility: auto` com cuidado em seções longas, validando acessibilidade e indexação.

### Imagens e vídeos

Os vídeos da galeria têm aproximadamente 31–36 MB cada. Eles não devem ser carregados ou baixados na primeira tela.

Recomendações:

- gerar poster WebP/JPEG para cada vídeo;
- usar `loading="lazy"` e `preload="none"` quando o vídeo não estiver perto da viewport;
- comprimir vídeos para uma versão web menor;
- oferecer `muted`, `playsInline` e controles somente quando necessário;
- hospedar vídeos grandes em CDN/streaming se o volume de acesso aumentar.

## 6. Medição pós-deploy

Executar uma medição antes e depois das alterações:

- PageSpeed Insights para homepage e páginas de serviço;
- Chrome DevTools Performance em mobile;
- Search Console → Core Web Vitals;
- RUM com `web-vitals` se houver tráfego suficiente.

Registrar pelo menos LCP, INP, CLS, TTFB, peso transferido e conversões de WhatsApp. A meta é melhorar a experiência sem sacrificar o CTA principal.
