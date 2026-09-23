import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  MoveRight,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5544991366360";
const heroImage = "/manus-storage/like-move-hero_aa795088.jpg";
const mirrorImage = "/public/media/Espelho.jpeg";

const whatsappMessage = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    number: "01",
    path: "/plataforma-360",
    label: "Experiência imersiva",
    title: "Spinner360",
    description: "Vídeos em 360 graus para transformar cada convidado em parte do espetáculo.",
    detail: "Até 4 pessoas por sessão",
    icon: Camera,
    tone: "cobalt",
  },
  {
    number: "02",
    path: "/plataforma-360",
    label: "Para todo mundo entrar",
    title: "Max360",
    description: "A versão maior para reunir a turma, registrar a energia da festa e criar lembranças coletivas.",
    detail: "Até 15 pessoas por sessão",
    icon: Users,
    tone: "amber",
  },
  {
    number: "03",
    path: "/espelho-magico",
    label: "Foto que vira lembrança",
    title: "Espelho Mágico",
    description: "Fotos impressas na hora e download digital profissional por Wi-Fi próprio, sem depender da internet.",
    detail: "Impressão + arquivo digital",
    icon: Sparkles,
    tone: "violet",
  },
  {
    number: "04",
    path: "/robo-bumblebee",
    label: "Impacto visual",
    title: "Robô Bumblebee",
    description: "Uma atração que chega, interage e muda o clima da recepção, da pista ou do momento especial.",
    detail: "Fotos, vídeos e interação",
    icon: Zap,
    tone: "lime",
  },
];

const events = ["Casamentos", "15 anos", "Formaturas", "Aniversários", "Corporativos"];
const cities = ["Maringá", "Londrina", "Cianorte", "Paranavaí", "Norte e Noroeste do Paraná"];
const galleryItems = [
  { type: "image", src: "/media/evento-01.jpg", alt: "Convidados em evento atendido pela Like Move 360", label: "Evento real" },
  { type: "image", src: "/media/evento-02.jpg", alt: "Convidados se divertindo na Max360", label: "Diversão em grupo" },
  { type: "image", src: "/media/evento-03.jpg", alt: "Convidados registrando um momento na Max360", label: "Momentos que ficam" },
  { type: "image", src: "/media/evento-04.jpg", alt: "Convidados participando da Max360 em evento", label: "Energia da festa" },
  { type: "image", src: "/media/evento-05.jpg", alt: "Grupo de convidados se divertindo em evento", label: "Turma reunida" },
  { type: "image", src: "/media/evento-06.jpg", alt: "Convidados vivendo a experiência Max360", label: "Diversão compartilhada" },
  { type: "image", src: "/media/evento-07.jpg", alt: "Registro de convidados em evento real", label: "Evento real" },
  { type: "image", src: "/media/evento-08.jpg", alt: "Convidados participando de atração em evento", label: "Em movimento" },
  { type: "image", src: "/media/evento-09.jpg", alt: "Grupo de convidados registrando a experiência", label: "Galera na festa" },
  { type: "image", src: "/media/evento-10.jpg", alt: "Convidados se divertindo em evento atendido pela Like Move 360", label: "Festa em movimento" },
  { type: "image", src: "/media/evento-11.jpg", alt: "Últimos registros de um evento real", label: "Lembrança guardada" },
  { type: "video", src: "/media/max360-noivos.mp4", alt: "Vídeo dos noivos participando da Max360", label: "Noivos na Max360" },
  { type: "video", src: "/media/max360-setas-led.mp4", alt: "Vídeo da Max360 com efeito de setas de LED", label: "Max360 + LED" },
  { type: "video", src: "/media/max360-galera-01.mp4", alt: "Vídeo de convidados participando da Max360", label: "Galera na Max360" },
  { type: "video", src: "/media/max360-galera-02.mp4", alt: "Vídeo de grupo de convidados na Max360", label: "Turma completa" },
  { type: "video", src: "/media/max360-galera-03.mp4", alt: "Vídeo de convidados se divertindo na Max360", label: "Vídeo do evento" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Like Move 360 — início">
            <img className="brand-logo" src="/logo-mark.png" alt="Like Move 360" />
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#experiencias" onClick={closeMenu}>Experiências</a>
            <a href="#para-seu-evento" onClick={closeMenu}>Seu evento</a>
            <a href="#regiao" onClick={closeMenu}>Onde atendemos</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href={whatsappMessage("Olá, quero consultar a disponibilidade da Like Move 360 para meu evento.")} onClick={closeMenu} target="_blank" rel="noreferrer">
              Consultar data <ArrowUpRight size={16} />
            </a>
          </nav>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-dot" /> Atrações para eventos</p>
            <h1>O seu evento,<br /><em>em movimento.</em></h1>
            <p className="hero-text">Experiências que fazem seus convidados participarem, se divertirem e levarem uma lembrança para casa.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappMessage("Olá, quero um orçamento para meu evento com a Like Move 360.")} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
              <a className="button button-ghost" href="#experiencias">Conhecer atrações <MoveRight size={18} /></a>
            </div>
            <div className="hero-proof">
              <span className="proof-avatars"><i>360</i><i>LM</i><i>+</i></span>
              <span>Eventos que viram<br /><strong>histórias para contar</strong></span>
            </div>
          </div>
          <div className="hero-note reveal-up delay-2">
            <span className="note-line" />
            <span>Atendemos Maringá,<br />Londrina e região</span>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll para descobrir</span><i /></div>
      </section>

      <section className="marquee" aria-label="Tipos de evento atendidos">
        <div className="marquee-track">
          {[...events, ...events].map((event, index) => <span key={`${event}-${index}`}>{event}<b>✦</b></span>)}
        </div>
      </section>

      <section className="intro section-pad" id="experiencias">
        <div className="container intro-grid">
          <div className="section-kicker">01 / O que fazemos</div>
          <div className="intro-main">
            <h2>Não é só uma atração.<br /><span>É o momento que todo mundo comenta.</span></h2>
            <p className="intro-lead">A Like Move 360 leva tecnologia, interação e muita personalidade para casamentos, festas de 15 anos, formaturas e eventos corporativos.</p>
            <div className="intro-bottom">
              <p>Você escolhe a experiência. A gente cuida do impacto, da operação e da lembrança que fica depois da festa.</p>
              <a className="text-link" href={whatsappMessage("Olá, quero descobrir qual atração combina com o meu evento.")} target="_blank" rel="noreferrer">Descobrir a melhor opção <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading split-heading">
            <div><div className="section-kicker">02 / Experiências</div><h2>Escolha o seu<br /><em>efeito uau.</em></h2></div>
            <p>Do vídeo que viraliza à foto que vai para a geladeira: cada atração foi pensada para fazer seu evento ser vivido, não apenas assistido.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className={`service-card tone-${service.tone}`}>
                  <div className="service-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.6} /></div>
                  <div className="service-content"><p className="service-label">{service.label}</p><h3><a href={service.path}>{service.title}</a></h3><p>{service.description}</p></div>
                  <div className="service-footer"><span>{service.detail}</span><a href={whatsappMessage(`Olá, quero saber mais sobre ${service.title} para meu evento.`)} target="_blank" rel="noreferrer" aria-label={`Pedir orçamento de ${service.title}`}><ArrowUpRight size={19} /></a></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="feature section-pad" id="para-seu-evento">
        <div className="container feature-grid">
          <div className="feature-image-wrap"><img src={mirrorImage} alt="Convidados usando o Espelho Mágico Fotográfico em um evento" className="feature-image" /><span className="image-caption">A lembrança acontece na hora.</span></div>
          <div className="feature-copy"><div className="section-kicker">03 / O detalhe que fica</div><h2>Foto impressa.<br /><em>Download sem internet.</em></h2><p>Com o Espelho Mágico, seus convidados saem com a foto nas mãos e também podem baixar a versão digital em qualidade profissional.</p><p className="muted-copy">Nosso sistema cria uma rede Wi-Fi própria no local. Assim, a experiência continua fluida mesmo quando a internet da festa não dá conta.</p><ul className="check-list"><li><Check size={17} /> Impressão na hora</li><li><Check size={17} /> Arquivo digital profissional</li><li><Check size={17} /> Wi-Fi próprio no evento</li></ul><a className="button button-dark" href={whatsappMessage("Olá, quero um orçamento do Espelho Mágico para meu evento.")} target="_blank" rel="noreferrer">Quero essa experiência <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section className="gallery-section section-pad" id="galeria">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="section-kicker">04 / Acontece de verdade</div><h2>Olha quem já<br /><em>entrou na brincadeira.</em></h2></div><p>Registros reais de pessoas reais. Porque a melhor propaganda para uma experiência é ver a reação de quem viveu.</p></div>
          <div className="gallery-grid">{galleryItems.map((item, index) => <figure className={`gallery-item gallery-${index + 1}`} key={item.src}>{item.type === "video" ? <video src={item.src} controls preload="metadata" playsInline aria-label={item.alt} /> : <img src={item.src} alt={item.alt} loading="lazy" />}<figcaption><span>{item.label}</span>{item.type === "video" && <b>PLAY</b>}</figcaption></figure>)}</div>
          <div className="gallery-footer"><span>Fotos e vídeos de eventos atendidos pela Like Move 360.</span><a className="text-link" href="https://www.instagram.com/likemove360/" target="_blank" rel="noreferrer">Ver mais no Instagram <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="event-types section-pad">
        <div className="container event-grid">
          <div className="event-intro"><div className="section-kicker">04 / Para cada ocasião</div><h2>Qual é a sua<br /><em>próxima celebração?</em></h2><p>Conte o seu plano para a gente. Montamos uma combinação que conversa com o seu estilo, o seu espaço e os seus convidados.</p><a className="text-link" href={whatsappMessage("Olá, quero montar uma proposta para o meu evento.")} target="_blank" rel="noreferrer">Montar minha proposta <ArrowUpRight size={16} /></a></div>
          <div className="event-list">{[
            ["01", "Casamentos", "Para celebrar o sim com muita personalidade."],
            ["02", "15 anos", "Uma festa à altura da protagonista."],
            ["03", "Formaturas", "A conquista merece ser compartilhada."],
            ["04", "Empresas", "Experiências que aproximam pessoas e marcas."],
          ].map(([num, title, text]) => <a href={whatsappMessage(`Olá, quero uma proposta para ${title}.`)} target="_blank" rel="noreferrer" className="event-row" key={title}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={20} /></a>)}</div>
        </div>
      </section>

      <section className="region section-pad" id="regiao">
        <div className="container region-inner"><div className="region-copy"><div className="section-kicker">05 / Onde estamos</div><h2>Do interior do Paraná<br /><em>para a sua festa.</em></h2><p>Base em Maringá e atendimento em Londrina, Cianorte, Paranavaí e outras cidades do Norte e Noroeste do Paraná. Também já levamos experiências para Presidente Prudente e Presidente Epitácio.</p><a className="button button-light" href={whatsappMessage("Olá, quero consultar atendimento para minha cidade.")} target="_blank" rel="noreferrer">Consultar minha cidade <ArrowUpRight size={17} /></a></div><div className="city-stack">{cities.map((city, index) => <div className="city-line" key={city}><span>0{index + 1}</span>{city === "Maringá" ? <a href="/maringa"><strong>{city}</strong></a> : city === "Londrina" ? <a href="/londrina"><strong>{city}</strong></a> : <strong>{city}</strong>}<i>↗</i></div>)}</div></div>
      </section>

      <section className="faq section-pad" id="duvidas">
        <div className="container faq-grid"><div><div className="section-kicker">06 / Dúvidas frequentes</div><h2>Antes de<br /><em>decidir.</em></h2><p className="faq-side-text">Tudo o que você precisa saber para escolher a atração certa para a sua data.</p><a className="text-link" href={whatsappMessage("Olá, ainda tenho uma dúvida sobre as atrações da Like Move 360.")} target="_blank" rel="noreferrer">Falar com a equipe <ArrowUpRight size={16} /></a></div><div className="faq-list">{[
          ["Quantas pessoas participam da Plataforma 360?", "A versão tradicional comporta até 4 pessoas por sessão. A Max360 comporta até 15 pessoas por sessão."],
          ["O Espelho Mágico imprime as fotos na hora?", "Sim. Todas as fotos são impressas na hora. O convidado também pode baixar a versão digital em qualidade profissional por meio da rede Wi-Fi criada pelo nosso sistema."],
          ["A Like Move 360 atende fora de Maringá e Londrina?", "Sim. Atendemos Cianorte, Paranavaí e outras cidades do Norte e Noroeste do Paraná. Outras localidades podem ser avaliadas sob consulta."],
          ["O Robô Bumblebee atende quais tipos de evento?", "Casamentos, festas de 15 anos, formaturas, aniversários, eventos corporativos e outras celebrações, conforme disponibilidade."],
        ].map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={20} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div>
      </section>

      <section className="testimonials section-pad" id="depoimentos">
        <div className="container"><div className="section-heading split-heading"><div><div className="section-kicker">07 / Quem viveu recomenda</div><h2>Confiança que<br /><em>vem de verdade.</em></h2></div><p>Depoimentos públicos de clientes que já viveram a experiência Like Move 360.</p></div><div className="testimonial-grid"><article className="testimonial-card featured"><span className="quote-mark">“</span><p>Experiência maravilhosa! Tivemos um atendimento diferenciado em Campo Mourão - Paraná. Equipe muito organizada, prestativa e pontual. Sucesso garantido para o seu evento!</p><footer><strong>Marcos Moraes de Carvalho</strong><span>Avaliação pública no Google · 5 estrelas</span></footer></article><article className="testimonial-card"><span className="quote-mark">“</span><p>Equipe muito atenciosa e fotos de ótima qualidade. Serviço excelente, foi o destaque da festa. Adorei!</p><footer><strong>Milene Perdigão</strong><span>Avaliação pública no Google · 5 estrelas</span></footer></article><article className="testimonial-card"><span className="quote-mark">“</span><p>Foi tudo maravilhoso. Vocês são ótimos profissionais, recomendo muito!</p><footer><strong>Elissandra Wansson Garcia</strong><span>Avaliação pública no Google · 5 estrelas</span></footer></article></div><div className="testimonials-source"><span>Depoimentos consultados no Perfil da Empresa no Google.</span><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Like+Move+360+Maringa" target="_blank" rel="noreferrer">Ver avaliações no Google <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="final-cta section-pad"><div className="container final-cta-inner"><div className="section-kicker">07 / Vamos conversar</div><h2>Seu evento já tem data.<br /><em>Agora falta o momento.</em></h2><p>Consulte a disponibilidade da sua data e descubra a combinação de atrações que faz sentido para você.</p><a className="button button-primary large-button" href={whatsappMessage("Olá, quero consultar a disponibilidade da Like Move 360 para meu evento.")} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar disponibilidade</a><span className="final-contact">(44) 99136-6360</span></div></section>

      <footer className="site-footer"><div className="container footer-top"><a href="#top" className="brand footer-brand"><img className="brand-logo" src="/logo-mark.png" alt="Like Move 360" /></a><p>Atrações interativas para eventos em Maringá, Londrina e região.</p><a className="instagram-link" href="https://www.instagram.com/likemove360/" target="_blank" rel="noreferrer"><Instagram size={17} /> @likemove360</a></div><div className="container footer-bottom"><span>© 2026 Like Move 360. Todos os direitos reservados.</span><span>Feito para criar lembranças.</span></div></footer>
      <a className="floating-whatsapp" href={whatsappMessage("Olá, quero falar com a Like Move 360.")} target="_blank" rel="noreferrer" aria-label="Falar com a Like Move 360 pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
