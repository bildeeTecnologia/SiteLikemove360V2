import React, { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const WHATSAPP = "https://wa.me/5544991366360";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
const heroImage = "/media/like-move-hero_aa795088.webp";

type LocalPageKey =
  | "plataformaMaringa"
  | "plataformaLondrina"
  | "espelhoMaringa"
  | "espelhoLondrina"
  | "casamentoMaringa"
  | "quinzeLondrina";

type LocalPage = {
  path: string;
  title: string;
  accent: string;
  seoTitle: string;
  description: string;
  city: string;
  serviceName: string;
  kicker: string;
  lead: string;
  h2: string;
  paragraphs: string[];
  details: string[];
  audiences: string[];
  internalLinks: { href: string; label: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const pages: Record<LocalPageKey, LocalPage> = {
  plataformaMaringa: {
    path: "/plataforma-360-maringa",
    title: "Aluguel de Plataforma 360 em Maringá",
    accent: "para colocar todos no centro da festa.",
    seoTitle: "Aluguel de Plataforma 360 em Maringá | Like Move 360",
    description: "Aluguel de Plataforma 360 e Max360 para casamentos, 15 anos, formaturas e eventos corporativos em Maringá. Consulte a disponibilidade da sua data.",
    city: "Maringá",
    serviceName: "Plataforma 360 em Maringá",
    kicker: "Plataforma 360 em Maringá",
    lead: "Uma atração participativa para transformar os convidados em protagonistas e criar vídeos em 360 graus com a energia do seu evento.",
    h2: "Maringá entra no vídeo.",
    paragraphs: [
      "A Plataforma 360 da Like Move 360 é uma experiência para casamentos, festas de 15 anos, formaturas e eventos corporativos em Maringá. Os convidados sobem na plataforma, interagem com a câmera e recebem um vídeo dinâmico para compartilhar.",
      "Para grupos maiores, a Max360 comporta até 15 pessoas por sessão. A equipe orienta o espaço, a sequência da atração e o ritmo das gravações para que a experiência funcione bem no buffet, salão ou espaço de eventos escolhido.",
    ],
    details: ["Plataforma tradicional para até 4 pessoas", "Max360 para grupos de até 15 pessoas", "Atendimento em Maringá e cidades próximas", "Operação acompanhada pela equipe durante o evento"],
    audiences: ["Casamentos em Maringá", "Festas de 15 anos", "Formaturas", "Eventos corporativos"],
    internalLinks: [
      { href: "/espelho-magico-maringa", label: "Espelho Mágico em Maringá", text: "Fotos impressas na hora para complementar a experiência." },
      { href: "/atracoes-casamento-maringa", label: "Atrações para casamento em Maringá", text: "Combine experiências para a recepção e a pista." },
    ],
    faqs: [
      { question: "Quantas pessoas podem usar a Plataforma 360?", answer: "A versão tradicional atende até 4 pessoas por sessão. A Max360 foi criada para grupos maiores, de até 15 pessoas, conforme o espaço disponível." },
      { question: "A Like Move 360 atende eventos em toda Maringá?", answer: "Sim. Atendemos eventos em Maringá e avaliamos deslocamento para cidades próximas conforme a data e a disponibilidade da equipe." },
      { question: "A Plataforma 360 funciona para casamento?", answer: "Sim. Ela pode ser usada na recepção, durante a festa ou em um momento planejado para reunir convidados e criar vídeos compartilháveis." },
    ],
  },
  plataformaLondrina: {
    path: "/plataforma-360-londrina",
    title: "Aluguel de Plataforma 360 em Londrina",
    accent: "uma experiência para a festa ganhar movimento.",
    seoTitle: "Aluguel de Plataforma 360 em Londrina | Like Move 360",
    description: "Plataforma 360 e Max360 para eventos em Londrina: casamentos, 15 anos, formaturas e eventos corporativos. Peça uma proposta para sua data.",
    city: "Londrina",
    serviceName: "Plataforma 360 em Londrina",
    kicker: "Plataforma 360 em Londrina",
    lead: "Vídeos dinâmicos, convidados participando e uma atração que se adapta ao ritmo da celebração em Londrina.",
    h2: "O evento vira movimento.",
    paragraphs: [
      "Em Londrina, a Plataforma 360 da Like Move 360 leva uma experiência visual e participativa para casamentos, aniversários, festas de 15 anos, formaturas e eventos corporativos. Cada sessão registra o grupo em movimento e cria um vídeo pronto para guardar ou compartilhar.",
      "A equipe ajuda a escolher entre a plataforma tradicional e a Max360, considerando o número de convidados, o tamanho do espaço e o momento ideal da atração na programação do evento.",
    ],
    details: ["Opção tradicional para até 4 pessoas por sessão", "Max360 para até 15 pessoas por sessão", "Atendimento em Londrina e região", "Equipe para orientar a participação dos convidados"],
    audiences: ["Casamentos em Londrina", "Festas de 15 anos", "Formaturas", "Eventos corporativos"],
    internalLinks: [
      { href: "/espelho-magico-londrina", label: "Espelho Mágico em Londrina", text: "Uma lembrança física para os convidados levarem." },
      { href: "/atracoes-15-anos-londrina", label: "Atrações para festa de 15 anos", text: "Ideias de atrações para criar momentos marcantes." },
    ],
    faqs: [
      { question: "A Plataforma 360 atende festas de 15 anos em Londrina?", answer: "Sim. A atração funciona na recepção, na pista ou em um espaço reservado para que a debutante e os convidados gravem vídeos juntos." },
      { question: "Qual a diferença entre Plataforma 360 e Max360?", answer: "A Plataforma 360 tradicional atende grupos menores. A Max360 tem uma estrutura maior e pode reunir até 15 pessoas por sessão, conforme o espaço do evento." },
      { question: "Como consultar a disponibilidade em Londrina?", answer: "Envie a data, o local e o tipo de evento pelo WhatsApp. A equipe verifica a disponibilidade e indica a estrutura mais adequada." },
    ],
  },
  espelhoMaringa: {
    path: "/espelho-magico-maringa",
    title: "Espelho Mágico em Maringá",
    accent: "foto impressa na hora para guardar o momento.",
    seoTitle: "Espelho Mágico em Maringá com Foto Impressa | Like Move 360",
    description: "Aluguel de Espelho Mágico em Maringá para casamentos, 15 anos e eventos. Fotos impressas na hora e arquivo digital em qualidade profissional.",
    city: "Maringá",
    serviceName: "Espelho Mágico em Maringá",
    kicker: "Espelho Mágico em Maringá",
    lead: "Uma atração interativa que transforma a foto dos convidados em uma lembrança impressa antes mesmo da festa terminar.",
    h2: "A lembrança sai da tela.",
    paragraphs: [
      "O Espelho Mágico da Like Move 360 é indicado para eventos em Maringá que querem oferecer diversão e uma recordação física aos convidados. A interação acontece diante do espelho, a foto é feita durante a experiência e a impressão acontece na hora.",
      "Além da foto impressa, os convidados recebem o arquivo digital em qualidade profissional. O sistema utiliza Wi-Fi próprio, evitando que a entrega dependa da internet do salão ou do buffet.",
    ],
    details: ["Fotos impressas na hora", "Arquivo digital em qualidade profissional", "Wi-Fi próprio para download", "Equipe para conduzir a experiência"],
    audiences: ["Casamentos", "Festas de 15 anos", "Aniversários", "Eventos corporativos"],
    internalLinks: [
      { href: "/plataforma-360-maringa", label: "Plataforma 360 em Maringá", text: "Combine foto impressa com vídeos em movimento." },
      { href: "/maringa", label: "Todas as atrações em Maringá", text: "Veja as opções de atendimento local." },
    ],
    faqs: [
      { question: "A foto do Espelho Mágico é impressa na hora?", answer: "Sim. A proposta é que o convidado participe da interação e receba a foto impressa durante o próprio evento." },
      { question: "É necessário ter internet no local?", answer: "Não para o download das fotos. O Espelho Mágico utiliza uma rede Wi-Fi própria para a entrega dos arquivos digitais." },
      { question: "O Espelho Mágico funciona em casamento?", answer: "Sim. Ele pode ficar na recepção, no lounge ou em uma área de circulação para receber convidados ao longo da celebração." },
    ],
  },
  espelhoLondrina: {
    path: "/espelho-magico-londrina",
    title: "Espelho Mágico em Londrina",
    accent: "uma foto para levar da festa.",
    seoTitle: "Espelho Mágico em Londrina com Foto Impressa | Like Move 360",
    description: "Espelho Mágico para eventos em Londrina, com fotos impressas na hora e download digital. Ideal para casamentos, 15 anos, aniversários e eventos corporativos.",
    city: "Londrina",
    serviceName: "Espelho Mágico em Londrina",
    kicker: "Espelho Mágico em Londrina",
    lead: "Uma experiência visual, divertida e física para os convidados participarem e saírem do evento com uma foto nas mãos.",
    h2: "Londrina leva a foto para casa.",
    paragraphs: [
      "Para eventos em Londrina, o Espelho Mágico cria um ponto de encontro entre os convidados. A atração orienta poses, registra a imagem e entrega a impressão durante a festa, sem transformar a lembrança em uma promessa para depois.",
      "O arquivo digital também fica disponível em qualidade profissional por meio de Wi-Fi próprio. Assim, a experiência continua funcionando mesmo em espaços onde a internet do evento é instável.",
    ],
    details: ["Impressão durante o evento", "Arquivo digital profissional", "Sistema Wi-Fi próprio", "Atração adaptável a diferentes tipos de festa"],
    audiences: ["Casamentos em Londrina", "Festas de 15 anos", "Aniversários", "Eventos corporativos"],
    internalLinks: [
      { href: "/plataforma-360-londrina", label: "Plataforma 360 em Londrina", text: "Outra opção para envolver grupos maiores." },
      { href: "/atracoes-15-anos-londrina", label: "Atrações para 15 anos em Londrina", text: "Veja uma combinação pensada para debutantes." },
    ],
    faqs: [
      { question: "O Espelho Mágico entrega arquivo digital?", answer: "Sim. Além da impressão, o convidado pode baixar o arquivo digital em qualidade profissional por uma rede Wi-Fi própria." },
      { question: "Quais eventos podem contratar o Espelho Mágico?", answer: "Casamentos, festas de 15 anos, aniversários, formaturas e eventos corporativos em Londrina e região." },
      { question: "Como pedir um orçamento?", answer: "Informe a data, o local e o tipo de evento pelo WhatsApp para receber uma orientação sobre disponibilidade e estrutura." },
    ],
  },
  casamentoMaringa: {
    path: "/atracoes-casamento-maringa",
    title: "Atrações para casamento em Maringá",
    accent: "momentos que continuam depois da festa.",
    seoTitle: "Atrações para Casamento em Maringá | Plataforma 360 e Espelho Mágico",
    description: "Encontre atrações para casamento em Maringá: Plataforma 360, Espelho Mágico e Robô Bumblebee para recepção, pista e momentos especiais.",
    city: "Maringá",
    serviceName: "Atrações para casamento em Maringá",
    kicker: "Casamentos em Maringá",
    lead: "Experiências para receber convidados, criar interação e transformar a celebração em uma coleção de lembranças compartilháveis.",
    h2: "Cada momento pode ter uma atração.",
    paragraphs: [
      "A escolha da atração depende do ritmo do casamento. A Plataforma 360 reúne grupos na pista e cria vídeos em movimento; o Espelho Mágico oferece uma foto impressa para levar; o Robô Bumblebee cria impacto na recepção ou em um momento especial.",
      "A Like Move 360 atende casamentos em Maringá e ajuda a combinar a atração com o espaço, o número de convidados e o roteiro da celebração. O objetivo é integrar a experiência à festa, não criar uma fila desconectada do evento.",
    ],
    details: ["Plataforma 360 para vídeos com os convidados", "Espelho Mágico com foto impressa", "Robô Bumblebee para recepção e fotos", "Orientação conforme espaço e programação"],
    audiences: ["Recepção dos convidados", "Pista de dança", "Fotos com noivos", "Momentos especiais do casamento"],
    internalLinks: [
      { href: "/plataforma-360-maringa", label: "Plataforma 360 para casamento", text: "Vídeos em 360 graus com os convidados." },
      { href: "/espelho-magico-maringa", label: "Espelho Mágico para casamento", text: "Fotos impressas para os convidados levarem." },
    ],
    faqs: [
      { question: "Qual atração combina mais com casamento?", answer: "Depende do momento desejado. A Plataforma 360 favorece a interação em grupos, o Espelho Mágico entrega uma lembrança física e o Robô Bumblebee cria impacto visual na recepção ou nas fotos." },
      { question: "A atração ocupa muito espaço?", answer: "A equipe avalia o local, o fluxo dos convidados e o momento da festa para indicar a estrutura mais adequada e a melhor posição." },
      { question: "Vocês atendem casamentos fora do centro de Maringá?", answer: "Sim. A Like Move 360 atende espaços de eventos em Maringá e avalia deslocamentos para cidades próximas conforme a data." },
    ],
  },
  quinzeLondrina: {
    path: "/atracoes-15-anos-londrina",
    title: "Atrações para festa de 15 anos em Londrina",
    accent: "uma experiência com a cara da debutante.",
    seoTitle: "Atrações para Festa de 15 Anos em Londrina | Like Move 360",
    description: "Atrações para festa de 15 anos em Londrina: Plataforma 360, Espelho Mágico e Robô Bumblebee para criar fotos, vídeos e momentos especiais.",
    city: "Londrina",
    serviceName: "Atrações para festa de 15 anos em Londrina",
    kicker: "15 anos em Londrina",
    lead: "Ideias de atrações para receber os convidados, criar conteúdo e destacar os momentos mais importantes da festa de 15 anos.",
    h2: "A festa da debutante ganha cena.",
    paragraphs: [
      "Uma festa de 15 anos em Londrina pode ter diferentes momentos de interação: a recepção, as fotos com a debutante, a pista e a entrada especial. A Like Move 360 oferece atrações que podem ser escolhidas de acordo com o estilo da festa e o espaço do evento.",
      "A Plataforma 360 cria vídeos com as amigas e a família, o Espelho Mágico entrega fotos impressas e o Robô Bumblebee surpreende na entrada ou em um momento planejado. A equipe ajuda a organizar a experiência para que ela combine com o roteiro da noite.",
    ],
    details: ["Vídeos em 360 graus com amigas e família", "Fotos impressas durante a festa", "Robô Bumblebee para entrada e fotos", "Orientação para integrar a atração ao roteiro"],
    audiences: ["Recepção dos convidados", "Fotos com a debutante", "Pista com as amigas", "Entrada e momentos especiais"],
    internalLinks: [
      { href: "/plataforma-360-londrina", label: "Plataforma 360 em Londrina", text: "Para criar vídeos com grupos de convidados." },
      { href: "/espelho-magico-londrina", label: "Espelho Mágico em Londrina", text: "Uma lembrança impressa para cada participação." },
    ],
    faqs: [
      { question: "Qual atração é mais indicada para 15 anos?", answer: "A Plataforma 360 é muito participativa para grupos de amigas, enquanto o Espelho Mágico cria uma lembrança impressa e o Robô Bumblebee pode marcar a entrada ou as fotos da debutante." },
      { question: "A debutante pode participar das gravações?", answer: "Sim. A atração pode ser organizada para incluir a debutante, as amigas, a família e outros convidados em diferentes momentos da festa." },
      { question: "Vocês atendem salões e buffets em Londrina?", answer: "Sim. A equipe avalia o espaço do evento em Londrina e região para indicar a estrutura e o posicionamento mais adequados." },
    ],
  },
};

function Header() {
  return <header className="service-header"><div className="container header-inner"><Link href="/" className="brand"><img className="brand-logo" src="/logo-mark.png" alt="Like Move 360" width={185} height={72} /></Link><a className="nav-cta" href={wa("Olá, quero consultar a disponibilidade da Like Move 360 para meu evento.")} target="_blank" rel="noreferrer">Consultar data <ArrowUpRight size={16} /></a></div></header>;
}

export default function LocalServicePage({ kind }: { kind: LocalPageKey }) {
  const page = pages[kind];
  useEffect(() => { document.title = page.seoTitle; window.scrollTo(0, 0); }, [page.seoTitle]);

  return <main className="service-page local-service-page">
    <Header />
    <section className="service-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay" />
      <div className="container service-hero-content">
        <Link href={`/${page.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="back-link"><ArrowLeft size={15} /> Ver atrações em {page.city}</Link>
        <p className="eyebrow"><span className="eyebrow-dot" /> {page.kicker}</p>
        <h1>{page.title}<br /><em>{page.accent}</em></h1>
        <p className="service-lead">{page.lead}</p>
        <a className="button button-primary" href={wa(`Olá, quero um orçamento de ${page.serviceName} para meu evento em ${page.city}.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Pedir orçamento</a>
      </div>
    </section>
    <section className="service-detail section-pad">
      <div className="container service-detail-grid">
        <div><div className="section-kicker">01 / Experiência local</div><h2>{page.h2}</h2>{page.paragraphs.map((paragraph) => <p className="detail-paragraph" key={paragraph}>{paragraph}</p>)}</div>
        <div className="detail-panel"><p className="panel-label">O que a Like Move 360 oferece</p><ul>{page.details.map((detail) => <li key={detail}><Check size={17} />{detail}</li>)}</ul><a className="button button-dark" href={wa(`Olá, quero saber mais sobre ${page.serviceName} para meu evento em ${page.city}.`)} target="_blank" rel="noreferrer">Falar com a equipe <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
    <section className="service-audience section-pad"><div className="container"><div className="section-kicker">02 / Momentos do evento</div><h2>Uma experiência para<br /><em>{page.city} participar.</em></h2><div className="audience-grid">{page.audiences.map((audience, index) => <a href={wa(`Olá, quero uma proposta de ${page.serviceName} para ${audience}.`)} target="_blank" rel="noreferrer" className="audience-card" key={audience}><span>0{index + 1}</span><strong>{audience}</strong><ArrowUpRight size={19} /></a>)}</div></div></section>
    <section className="service-detail section-pad local-related"><div className="container"><div className="section-kicker">03 / Continue explorando</div><h2>Veja outras opções<br /><em>para o seu evento.</em></h2><div className="audience-grid">{page.internalLinks.map((link) => <Link href={link.href} className="audience-card" key={link.href}><span>↗</span><strong>{link.label}</strong><p>{link.text}</p><ArrowUpRight size={19} /></Link>)}</div></div></section>
    <section className="faq section-pad"><div className="container faq-grid"><div><div className="section-kicker">04 / Dúvidas frequentes</div><h2>Antes de<br /><em>decidir.</em></h2><p className="faq-side-text">Respostas rápidas para planejar a atração e consultar a disponibilidade.</p></div><div className="faq-list">{page.faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <section className="service-region section-pad"><div className="container service-region-inner"><div><div className="section-kicker">05 / Atendimento</div><h2>{page.city}<br /><em>e região.</em></h2></div><div><p>A equipe avalia a data, o local e o perfil do evento para indicar a melhor estrutura. Também analisamos deslocamento para cidades próximas conforme disponibilidade.</p><a className="button button-light" href={wa(`Olá, quero consultar atendimento para meu evento em ${page.city}.`)} target="_blank" rel="noreferrer">Consultar minha data <ArrowUpRight size={17} /></a></div></div></section>
    <section className="service-final section-pad"><div className="container"><div className="section-kicker">06 / Próximo passo</div><h2>Vamos criar o momento<br /><em>mais comentado da festa?</em></h2><a className="button button-primary" href={wa(`Olá, quero consultar a disponibilidade de ${page.serviceName} para meu evento em ${page.city}.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar disponibilidade</a></div></section>
    <footer className="site-footer"><div className="container footer-top"><Link href="/" className="brand footer-brand"><img className="brand-logo" src="/media/logo-sem-fundo-branca.png" alt="Like Move 360" width={1528} height={553} /></Link><p>Atrações interativas para eventos em Maringá, Londrina e região.</p></div></footer>
    <a className="floating-whatsapp" href={wa(`Olá, quero falar sobre ${page.serviceName}.`)} target="_blank" rel="noreferrer" aria-label={`Falar com a Like Move 360 sobre ${page.serviceName}`}><MessageCircle size={23} /></a>
  </main>;
}

export { pages };
