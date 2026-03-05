import { useState, useEffect } from 'react'
import { 
  Scales, 
  Heart, 
  Shield, 
  Car, 
  Briefcase, 
  Scroll, 
  Lightning, 
  Buildings,
  Users,
  Clock,
  DeviceMobile,
  GraduationCap,
  MapPin,
  Phone,
  Envelope,
  Clock as ClockIcon,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  ArrowRight,
  Check,
  Star,
  CaretDown,
  List,
  X
} from '@phosphor-icons/react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeArea, setActiveArea] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const areasDeAtuacao = [
    { 
      icon: Scales,
      title: 'Direito Médico', 
      desc: 'Defesa de profissionais e pacientes em questões de responsabilidade civil e ética médica.',
      color: '#0066cc',
      stats: '150+ casos'
    },
    { 
      icon: Heart,
      title: 'Direito de Família', 
      desc: 'Divórcios, guarda de filhos, pensão alimentícia e planejamento sucessório.',
      color: '#cc3366',
      stats: '300+ famílias'
    },
    { 
      icon: Shield,
      title: 'Direito do Consumidor', 
      desc: 'Proteção contra práticas abusivas, cancelamentos indevidos e cobranças ilegais.',
      color: '#009966',
      stats: '500+ ações'
    },
    { 
      icon: Car,
      title: 'Direito de Trânsito', 
      desc: 'Defesa em multas, suspensão de CNH, processos administrativos e crimes de trânsito.',
      color: '#ff9900',
      stats: '200+ defesas'
    },
    { 
      icon: Briefcase,
      title: 'Direito do Trabalho', 
      desc: 'Reclamações trabalhistas, rescisões, assédio moral e direitos dos trabalhadores.',
      color: '#6633cc',
      stats: '400+ processos'
    },
    { 
      icon: Scroll,
      title: 'Direito Civil', 
      desc: 'Contratos, indenizações, responsabilidade civil e direitos patrimoniais.',
      color: '#cc6600',
      stats: '600+ contratos'
    },
    { 
      icon: Lightning,
      title: 'Direito Penal', 
      desc: 'Defesa criminal, audiências de custódia, crimes contra a pessoa e patrimônio.',
      color: '#cc0000',
      stats: '100+ defesas'
    },
    { 
      icon: Buildings,
      title: 'Direito Imobiliário', 
      desc: 'Locações, despejos, usucapião, condomínios e regularização de imóveis.',
      color: '#006666',
      stats: '250+ imóveis'
    },
  ]

  const diferenciais = [
    { 
      icon: Users,
      title: 'Atendimento Humanizado', 
      desc: 'Tratamos cada caso com a atenção única que ele merece, entendendo suas necessidades.',
      number: '01'
    },
    { 
      icon: Clock,
      title: 'Agilidade', 
      desc: 'Respostas rápidas e soluções eficientes para seus problemas jurídicos.',
      number: '02'
    },
    { 
      icon: DeviceMobile,
      title: 'Tecnologia', 
      desc: 'Acompanhamento online do seu processo com transparência total.',
      number: '03'
    },
    { 
      icon: GraduationCap,
      title: 'Especialização', 
      desc: 'Equipe especializada em diversas áreas do Direito para melhor atendê-lo.',
      number: '04'
    },
  ]

  const testimonials = [
    {
      name: 'Maria S.',
      role: 'Cliente - Direito de Família',
      text: 'Atendimento excepcional! Resolveram meu caso de divórcio com muita profissionalismo.',
      rating: 5
    },
    {
      name: 'João P.',
      role: 'Cliente - Direito do Trabalho',
      text: 'Conseguiram reverter minha demissão injusta. Equipe muito competente!',
      rating: 5
    },
    {
      name: 'Ana C.',
      role: 'Cliente - Direito do Consumidor',
      text: 'Me ajudaram com um problema de cobrança indevida. Recomendo demais!',
      rating: 5
    }
  ]

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}>
            <Scales className="logo-icon" weight="fill" />
            <div className="logo-text">
              <span className="logo-main">ACF</span>
              <span className="logo-sub">Advogados Associados</span>
            </div>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Início</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a>
            <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Áreas</a>
            <a href="#diferenciais" onClick={(e) => { e.preventDefault(); scrollToSection('diferenciais'); }}>Diferenciais</a>
            <a href="#depoimentos" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}>Depoimentos</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
          </div>
          
          <a 
            href="https://wa.me/5513996393134" 
            className="btn-consulta" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Agendar consulta gratuita pelo WhatsApp"
          >
            Consulta Grátis
          </a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      <main id="main-content">
        <section id="inicio" className="hero">
          <div className="hero-bg">
            <div className="gradient-orb orb-1" aria-hidden="true"></div>
            <div className="gradient-orb orb-2" aria-hidden="true"></div>
            <div className="pattern-grid" aria-hidden="true"></div>
          </div>
          
          <div className="hero-content">
            <div className="badge">
              <span className="pulse-dot" aria-hidden="true"></span>
              Escritório Full Service
            </div>
            
            <h1 className="hero-title">
              Soluções Jurídicas <span className="gradient-text">Inovadoras</span>
            </h1>
            
            <p className="hero-subtitle">
              Estratégicas e Individualizadas para você
            </p>
            
            <p className="hero-description">
              Com mais de 3 anos de experiência na Baixada Santista, oferecemos 
              atendimento humanizado e especializado para resolver seus problemas jurídicos 
              com agilidade e excelência.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="https://wa.me/5513996393134" 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={20} weight="fill" />
                Fale com um Advogado
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('atuacao')}
              >
                <Scales size={20} />
                Nossas Áreas
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">127</span>
                <span className="stat-label">Avaliações 5 estrelas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Áreas de Atuação</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1500+</span>
                <span className="stat-label">Casos Atendidos</span>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator" aria-hidden="true">
            <CaretDown size={24} />
            <span>Scroll</span>
          </div>
        </section>

        <section id="sobre" className="about">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">QUEM SOMOS</span>
              <h2>Excelência Jurídica na <span className="gradient-text">Baixada Santista</span></h2>
            </div>
            
            <div className="about-grid">
              <div className="about-content">
                <p className="about-text">
                  O <strong>ACF Advogados Associados</strong> é um escritório de advocacia full service 
                  com atuação majoritária em São Paulo. Com escritório físico em Santos, desenvolvemos 
                  soluções jurídicas inovadoras e estratégicas para nossos clientes.
                </p>
                
                <p className="about-text">
                  Contamos com profissionais e parceiros especializados em suas áreas de atuação, 
                  garantindo personalização no atendimento de forma ágil, moderna e capacitada 
                  para atender problemas jurídicos complexos.
                </p>
                
                <blockquote className="about-quote">
                  Mais do que um escritório de advocacia, buscamos ser um 
                  <span className="gradient-text"> centro de excelência jurídica</span>, 
                  visando um atendimento humanizado.
                </blockquote>
                
                <div className="about-buttons">
                  <button className="btn btn-primary" onClick={() => scrollToSection('contato')}>
                    Entre em Contato
                  </button>
                  <a 
                    href="https://www.google.com/maps/dir//ACF+Advogados+Associados+-+R.+S%C3%A3o+Paulo,+41+-+CJ.+1510+-+Vila+Belmiro,+Santos+-+SP" 
                    className="btn btn-outline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin size={18} />
                    Ver no Mapa
                  </a>
                </div>
              </div>
              
              <div className="about-card">
                <Scales className="card-icon-large" weight="fill" />
                <h3>Por que nos escolher?</h3>
                <ul className="about-list">
                  <li><Check size={18} weight="bold" className="check-icon" /> Atendimento personalizado</li>
                  <li><Check size={18} weight="bold" className="check-icon" /> Equipe especializada</li>
                  <li><Check size={18} weight="bold" className="check-icon" /> Tecnologia e inovação</li>
                  <li><Check size={18} weight="bold" className="check-icon" /> Transparência total</li>
                  <li><Check size={18} weight="bold" className="check-icon" /> Resultados comprovados</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="atuacao">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">ÁREAS DE ATUAÇÃO</span>
              <h2>Especialistas em <span className="gradient-text">Diversas Áreas</span></h2>
              <p>Oferecemos soluções jurídicas completas para atender todas as suas necessidades</p>
            </div>
            
            <div className="areas-grid">
              {areasDeAtuacao.map((area, i) => {
                const IconComponent = area.icon
                return (
                  <div 
                    key={i} 
                    className={`area-card ${activeArea === i ? 'active' : ''}`}
                    onMouseEnter={() => setActiveArea(i)}
                    onMouseLeave={() => setActiveArea(null)}
                    style={{'--area-color': area.color}}
                  >
                    <div className="area-icon-wrapper" style={{ color: area.color }}>
                      <IconComponent size={40} weight="fill" />
                    </div>
                    <div className="area-stats">{area.stats}</div>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                    <div className="card-shine" aria-hidden="true"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="diferenciais">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">DIFERENCIAIS</span>
              <h2>O que nos torna <span className="gradient-text">únicos</span></h2>
            </div>
            
            <div className="diferenciais-grid">
              {diferenciais.map((item, i) => {
                const IconComponent = item.icon
                return (
                  <div key={i} className="diferencial-card">
                    <span className="diferencial-number">{item.number}</span>
                    <div className="diferencial-icon">
                      <IconComponent size={48} weight="fill" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">DEPOIMENTOS</span>
              <h2>O que nossos <span className="gradient-text">clientes dizem</span></h2>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-rating">
                    {Array(testimonial.rating).fill(null).map((_, idx) => (
                      <Star key={idx} size={20} weight="fill" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-bg" aria-hidden="true">
            <div className="gradient-orb orb-3"></div>
          </div>
          
          <div className="container">
            <div className="cta-content">
              <h2>Pronto para resolver seu problema jurídico?</h2>
              <p>Entre em contato agora mesmo e agende sua consulta gratuita. Estamos prontos para ajudar você.</p>
              <div className="cta-buttons">
                <a 
                  href="https://wa.me/5513996393134" 
                  className="btn btn-primary btn-large" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  WhatsApp
                </a>
                <a href="tel:13996393134" className="btn btn-secondary btn-large">
                  <Phone size={24} />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contato">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">CONTATO</span>
              <h2>Vamos <span className="gradient-text">conversar</span>?</h2>
            </div>
            
            <div className="contato-grid">
              <div className="contato-info">
                <div className="info-item">
                  <MapPin size={28} className="info-icon" />
                  <div>
                    <h4>Endereço</h4>
                    <p>Rua São Paulo, n. 41 - cj. 1510<br />Vila Belmiro - Santos/SP<br />CEP: 11075-330</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <DeviceMobile size={28} className="info-icon" />
                  <div>
                    <h4>Telefone / WhatsApp</h4>
                    <p>(13) 99639-3134</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <Envelope size={28} className="info-icon" />
                  <div>
                    <h4>E-mail</h4>
                    <p>contato@acf.adv.br</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <ClockIcon size={28} className="info-icon" />
                  <div>
                    <h4>Horário de Atendimento</h4>
                    <p>Segunda a Sexta: 9h às 19h</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="https://www.facebook.com/advogadosacf/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FacebookLogo size={20} weight="fill" /> Facebook
                  </a>
                  <a href="https://www.instagram.com/acf_adv" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <InstagramLogo size={20} weight="fill" /> Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/acf-adv/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <LinkedinLogo size={20} weight="fill" /> LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="contato-cta">
                <div className="cta-card">
                  <h3>Consulta Gratuita</h3>
                  <p>Avaliamos seu caso sem compromisso. Entre em contato pelo WhatsApp e tire suas dúvidas.</p>
                  <a 
                    href="https://wa.me/5513996393134" 
                    className="btn btn-primary btn-large" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo size={24} weight="fill" />
                    Iniciar Conversa
                  </a>
                  <div className="cta-features">
                    <span><Check size={16} weight="bold" /> Atendimento 24h</span>
                    <span><Check size={16} weight="bold" /> Resposta Rápida</span>
                    <span><Check size={16} weight="bold" /> 100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Scales className="logo-icon" weight="fill" />
                <div>
                  <span className="footer-logo-main">ACF</span>
                  <span className="footer-logo-sub">Advogados Associados</span>
                </div>
              </div>
              <p className="footer-description">
                Escritório de advocacia full service em Santos, SP. 
                Oferecemos soluções jurídicas inovadoras e estratégicas 
                com atendimento humanizado.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Início</a>
              <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a>
              <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Áreas de Atuação</a>
              <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
            </div>
            
            <div className="footer-links">
              <h4>Áreas de Atuação</h4>
              <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Direito Médico</a>
              <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Direito de Família</a>
              <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Direito do Trabalho</a>
              <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollToSection('atuacao'); }}>Direito Civil</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 ACF Advogados Associados. Todos os direitos reservados.</p>
            <p>OAB/SP Santos - Baixada Santista</p>
          </div>
        </div>
      </footer>

      <a 
        href="https://wa.me/5513996393134" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  )
}

export default App
