import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link, useRoute } from "wouter";

const WHATSAPP = "https://wa.me/5544991366360";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
const heroImage = "/media/like-move-hero_aa795088.jpg";

const data = {
  plataforma: {
    path: "/plataforma-360", kicker: "Experiência imersiva", title: "Plataforma 360", accent: "para fazer todo mundo participar.",
    seoTitle: "Aluguel de Plataforma 360 em Maringá e Londrina | Like Move 360", description: "A Plataforma 360 transforma a participação dos convidados em vídeos dinâmicos e divertidos. A atração registra cada movimento em 360 graus e cria uma lembrança que pode ser compartilhada depois do evento.",
    details: ["Versão tradicional para até 4 pessoas por sessão", "Max360 para até 15 pessoas por sessão", "Atração participativa para diferentes faixas etárias", "Atendimento em Maringá, Londrina e região"],
    h2: "A festa acontece dentro do vídeo.", paragraphs: ["A Plataforma 360 da Like Move 360 foi criada para tirar os convidados da cadeira e colocar todo mundo no centro da experiência. Em poucos segundos, cada grupo participa de um registro em 360 graus com energia, movimento e muita personalidade.", "Oferecemos duas opções de estrutura: a versão tradicional, que comporta até 4 pessoas por sessão, e a Max360, desenvolvida para grupos maiores de até 15 pessoas por sessão. A escolha depende do espaço, do número de convidados e do ritmo que você quer para a festa."],
    audiences: ["Casamentos", "Festas de 15 anos", "Formaturas", "Eventos corporativos"],
  },
  espelho: {
    path: "/espelho-magico", kicker: "Foto que vira lembrança", title: "Espelho Mágico", accent: "impressão na hora. Download sem internet.",
    seoTitle: "Espelho Mágico com Foto Impressa em Maringá e Londrina | Like Move 360", description: "Espelho Mágico para casamentos, 15 anos e eventos em Maringá, Londrina e região. Fotos impressas na hora e download digital em qualidade profissional sem depender da internet.",
    details: ["Fotos impressas durante o evento", "Arquivo digital em qualidade profissional", "Sistema com Wi-Fi próprio", "Download sem depender da internet do local"],
    h2: "A foto que chega às mãos.", paragraphs: ["O Espelho Mágico Fotográfico é uma atração interativa para quem quer oferecer diversão e uma lembrança física aos convidados. O sistema registra a foto, convida à participação e realiza a impressão na hora.", "Além da foto impressa, os convidados também podem baixar a versão digital em qualidade profissional. O sistema cria uma rede Wi-Fi própria, por isso o download não depende da internet do espaço do evento. A experiência continua fluida, mesmo quando o sinal da festa não dá conta."],
    audiences: ["Casamentos", "Festas de 15 anos", "Aniversários", "Eventos corporativos"],
  },
  robo: {
    path: "/robo-bumblebee", kicker: "Impacto visual", title: "Robô Bumblebee", accent: "a atração que muda o clima da festa.",
    seoTitle: "Robô Bumblebee para Festas e Eventos em Maringá e Londrina | Like Move 360", description: "Contrate o Robô Bumblebee para casamentos, 15 anos, formaturas e eventos corporativos em Maringá, Londrina e região. Uma atração visual para surpreender seus convidados.",
    details: ["Recepção e interação com os convidados", "Fotos e vídeos com a atração", "Entrada ou momento especial da festa", "Atendimento no Norte e Noroeste do Paraná"],
    h2: "Tem atrações que entram na festa.", paragraphs: ["O Robô Bumblebee da Like Move 360 é uma atração de alto impacto visual para surpreender os convidados e criar momentos marcantes. Sua presença ajuda a tornar a entrada, a recepção, a pista ou um momento especial ainda mais memorável.", "O Bumblebee pode participar de fotos, vídeos e interações com os convidados. É uma opção diferente para casamentos, festas de 15 anos, formaturas, aniversários, eventos corporativos e ativações que precisam de presença."],
    audiences: ["Recepção dos convidados", "Fotos com a debutante ou os noivos", "Entrada ou momento especial", "Eventos corporativos"],
  },
} as const;

type ServiceKey = keyof typeof data;

function Header() {
  return <header className="service-header"><div className="container header-inner"><Link href="/" className="brand"><img className="brand-logo" src="/logo-mark.png" alt="Like Move 360" /></Link><a className="nav-cta" href={wa("Olá, quero consultar a disponibilidade da Like Move 360 para meu evento.")} target="_blank" rel="noreferrer">Consultar data <ArrowUpRight size={16} /></a></div></header>;
}

export default function ServicePage({ kind }: { kind: ServiceKey }) {
  const service = data[kind];
  useEffect(() => { document.title = service.seoTitle; window.scrollTo(0, 0); }, [service.seoTitle]);
  return <main className="service-page"><Header /><section className="service-hero" style={{ backgroundImage: `url(${heroImage})` }}><div className="hero-overlay" /><div className="container service-hero-content"><Link href="/" className="back-link"><ArrowLeft size={15} /> Voltar para o início</Link><p className="eyebrow"><span className="eyebrow-dot" /> {service.kicker}</p><h1>{service.title}<br /><em>{service.accent}</em></h1><p className="service-lead">{service.description}</p><a className="button button-primary" href={wa(`Olá, quero um orçamento de ${service.title} para meu evento.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Pedir orçamento</a></div></section><section className="service-detail section-pad"><div className="container service-detail-grid"><div><div className="section-kicker">01 / A experiência</div><h2>{service.h2}</h2>{service.paragraphs.map((p) => <p className="detail-paragraph" key={p}>{p}</p>)}</div><div className="detail-panel"><p className="panel-label">Por que escolher a Like Move 360</p><ul>{service.details.map((detail) => <li key={detail}><Check size={17} />{detail}</li>)}</ul><a className="button button-dark" href={wa(`Olá, quero saber mais sobre ${service.title} para meu evento.`)} target="_blank" rel="noreferrer">Falar com a equipe <ArrowUpRight size={17} /></a></div></div></section><section className="service-audience section-pad"><div className="container"><div className="section-kicker">02 / Onde funciona</div><h2>Feito para o seu<br /><em>tipo de evento.</em></h2><div className="audience-grid">{service.audiences.map((audience, i) => <a href={wa(`Olá, quero uma proposta de ${service.title} para ${audience}.`)} target="_blank" rel="noreferrer" className="audience-card" key={audience}><span>0{i + 1}</span><strong>{audience}</strong><ArrowUpRight size={19} /></a>)}</div></div></section><section className="service-region section-pad"><div className="container service-region-inner"><div><div className="section-kicker">03 / Atendimento</div><h2>Maringá, Londrina<br /><em>e região.</em></h2></div><div><p>Atendemos eventos em Maringá, Londrina, Cianorte, Paranavaí e outras cidades do Norte e Noroeste do Paraná. Também já realizamos eventos em Presidente Prudente e Presidente Epitácio, no estado de São Paulo.</p><a className="button button-light" href={wa("Olá, quero consultar atendimento para a minha cidade.")} target="_blank" rel="noreferrer">Consultar minha cidade <ArrowUpRight size={17} /></a></div></div></section><section className="service-final section-pad"><div className="container"><div className="section-kicker">04 / Próximo passo</div><h2>Vamos colocar essa<br /><em>ideia em movimento?</em></h2><a className="button button-primary" href={wa(`Olá, quero consultar a disponibilidade de ${service.title} para meu evento.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar disponibilidade</a></div></section><footer className="site-footer"><div className="container footer-top"><Link href="/" className="brand footer-brand"><img className="brand-logo" src="/media/logo-sem-fundo-branca.png" alt="Like Move 360" /></Link><p>Atrações interativas para eventos em Maringá, Londrina e região.</p></div></footer><a className="floating-whatsapp" href={wa("Olá, quero falar com a Like Move 360.")} target="_blank" rel="noreferrer" aria-label="Falar com a Like Move 360 pelo WhatsApp"><MessageCircle size={23} /></a></main>;
}

export { data };
