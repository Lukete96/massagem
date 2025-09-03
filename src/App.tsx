import { useEffect } from 'react'
import { Heart, Flower, Smile, BookOpen, Award } from 'lucide-react'
import styles from './LandingPage.module.css'

function App() {
  const faq = [
    {
      q: "O curso é para iniciantes?",
      a: "Sim. Começamos com fundamentos básicos, anatomia e técnicas passo a passo. Há também trilhas para quem já atende e deseja se aperfeiçoar.",
    },
    {
      q: "Recebo certificado?",
      a: "Sim. Após concluir todas as aulas e a avaliação final, você poderá emitir seu certificado digital de conclusão.",
    },
    {
      q: "O curso é 100% online?",
      a: "Sim. Todo o curso é online e gravado, com atualizações periódicas. Também há mentorias em grupo e imersões presenciais opcionais.",
    },
    {
      q: "Por quanto tempo terei acesso?",
      a: "Você terá acesso por 12 meses a partir da compra, com possibilidade de renovação com tarifa especial.",
    },
    {
      q: "Quais formas de pagamento?",
      a: "Cartão, Pix e Boleto via Hotmart. Parcelamento disponível conforme regras da plataforma.",
    },
  ];

  // Scroll suave para links de navegação
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const target = document.getElementById(targetId || '');
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className={styles.landingPage}>
      {/* Vetores de fundo */}
      <div className={styles.backgroundVectors}>
        <div className={styles.vector1}></div>
        <div className={styles.vector2}></div>
      </div>

      {/* Barra de anúncio/topo */}
      <div className={styles.announcementBar}>
        Turma aberta por tempo limitado — vagas com preço de lançamento.
      </div>

      {/* Header + Hero */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#inicio" className={styles.logo}>
            <span className={styles.logoIcon}>M</span>
            <span className={styles.logoText}>Curso de Massagem</span>
          </a>
          <nav className={styles.nav}>
            <a href="#sobre">Sobre</a>
            <a href="#conteudo">Conteúdo</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#preco">Inscrição</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#preco" className={styles.ctaButton}>
            Inscreva-se
          </a>
        </div>
      </header>

      <main id="inicio" className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Curso de <span className={styles.heroTitleHighlight}>Massagem Profissional</span>
            </h1>
            <p className={styles.heroDescription}>
              Aprenda as principais técnicas de massagem com a especialista <strong>Jéssica Monique</strong>. Curso completo com teoria, prática e orientação profissional.
            </p>
            <div className={styles.heroButtons}>
              <a
                href="https://pay.hotmart.com/SEU_CHECKOUT"
                className={styles.primaryButton}
              >
                Garantir minha vaga
              </a>
              <a
                href="https://wa.me/5599999999999"
                className={styles.secondaryButton}
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureDot}></span>
              Acesso por 12 meses • Certificado incluso • Suporte em grupo
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImagePlaceholder}>
              <div className={styles.heroImageContent}>
                <div className={styles.heroImageEmoji}>👩‍⚕️</div>
                <p className={styles.heroImageTitle}>Instrutora Jéssica Monique</p>
                <p className={styles.heroImageSubtitle}>Imagem da instrutora</p>
              </div>
            </div>
            <div className={styles.instructorCard}>
              <p className={styles.instructorLabel}>Instrutora:</p>
              <p className={styles.instructorName}>Jéssica Monique</p>
              <p className={styles.instructorStats}>13 anos de experiência • +8.000 horas de atendimento • +12.000 atendimentos</p>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Smile className={styles.sectionIcon} size={24}/> Sobre a Instrutora
          </h2>
          <p className={styles.sectionDescription}>
            Jéssica Monique é terapeuta corporal com mais de 13 anos de experiência. Formada em terapia ayurvédica, já realizou mais de 12 mil atendimentos e acumula mais de 8 mil horas de prática. Seu propósito é compartilhar seu conhecimento para transformar a vida de novos profissionais e clientes através do toque consciente.
          </p>
        </section>

        {/* CONTEÚDO */}
        <section id="conteudo" className={`${styles.section} ${styles.contentSection}`}>
          <h2 className={styles.sectionTitle}>
            <BookOpen className={styles.sectionIcon} size={24}/> O que você vai encontrar
          </h2>
          <p className={styles.sectionDescription}>
            O curso está estruturado em módulos que abrangem desde fundamentos da massagem, anatomia e fisiologia até técnicas práticas, uso de óleos, ergonomia do terapeuta e como iniciar seus atendimentos profissionais.
          </p>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Heart className={styles.sectionIcon} size={24}/> Benefícios para a sua vida
          </h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <Flower className={styles.benefitIcon} size={32}/>
              <h3 className={styles.benefitTitle}>Bem-estar</h3>
              <p className={styles.benefitDescription}>Redução do estresse, mais equilíbrio físico e emocional.</p>
            </div>
            <div className={styles.benefitCard}>
              <Smile className={styles.benefitIcon} size={32}/>
              <h3 className={styles.benefitTitle}>Carreira</h3>
              <p className={styles.benefitDescription}>Transforme sua paixão em profissão e amplie sua renda.</p>
            </div>
            <div className={styles.benefitCard}>
              <Award className={styles.benefitIcon} size={32}/>
              <h3 className={styles.benefitTitle}>Reconhecimento</h3>
              <p className={styles.benefitDescription}>Destaque-se com certificação e experiência prática.</p>
            </div>
          </div>
        </section>

        {/* INSCRIÇÃO */}
        <section id="preco" className={styles.section}>
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Garanta sua vaga agora</h3>
            <p className={styles.ctaDescription}>
              As inscrições estão abertas por tempo limitado. Clique abaixo e transforme sua vida através da massagem.
            </p>
            <a
              href="https://pay.hotmart.com/SEU_CHECKOUT"
              className={styles.ctaButtonWhite}
            >
              Quero começar agora
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
          <div className={styles.faqList}>
            {faq.map((f, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {f.q}
                  <span className={styles.faqToggle}>+</span>
                </summary>
                <p className={styles.faqAnswer}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.section}>
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Pronto para iniciar sua jornada?</h3>
            <p className={styles.ctaDescription}>
              Inscreva-se agora e tenha acesso imediato às aulas e materiais de apoio.
            </p>
            <a
              href="https://pay.hotmart.com/SEU_CHECKOUT"
              className={styles.ctaButtonWhite}
            >
              Quero começar hoje
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Curso de Massagem</h3>
            <p>Formação online em Massagem Profissional.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>E-mail: contato@seudominio.com</p>
            <p>WhatsApp: (99) 99999-9999</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links úteis</h3>
            <ul>
              <li><a href="#preco">Inscrição</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#sobre">Sobre</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} Curso de Massagem. Todos os direitos reservados. • <a href="#">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}

export default App
