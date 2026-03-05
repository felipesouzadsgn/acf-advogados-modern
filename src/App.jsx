import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeArea, setActiveArea] = useState(null)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)
  
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  // Loading simulation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const areasDeAtuacao = [
    { 
      icon: '⚖️', 
      title: 'Direito Médico', 
      desc: 'Defesa de profissionais e pacientes em questões de responsabilidade civil e ética médica.',
      color: '#00d4ff',
      stats: '150+ casos'
    },
    { 
      icon: '👨‍👩‍👧‍👦', 
      title: 'Direito de Família', 
      desc: 'Divórcios, guarda de filhos, pensão alimentícia e planejamento sucessório.',
      color: '#ff6b6b',
      stats: '300+ famílias'
    },
    { 
      icon: '🛡️', 
      title: 'Direito do Consumidor', 
      desc: 'Proteção contra práticas abusivas, cancelamentos indevidos e cobranças ilegais.',
      color: '#4ecdc4',
      stats: '500+ ações'
    },
    { 
      icon: '🚗', 
      title: 'Direito de Trânsito', 
      desc: 'Defesa em multas, suspensão de CNH, processos administrativos e crimes de trânsito.',
      color: '#ffe66d',
      stats: '200+ defesas'
    },
    { 
      icon: '💼', 
      title: 'Direito do Trabalho', 
      desc: 'Reclamações trabalhistas, rescisões, assédio moral e direitos dos trabalhadores.',
      color: '#a8e6cf',
      stats: '400+ processos'
    },
    { 
      icon: '📋', 
      title: 'Direito Civil', 
      desc: 'Contratos, indenizações, responsabilidade civil e direitos patrimoniais.',
      color: '#ffd93d',
      stats: '600+ contratos'
    },
    { 
      icon: '⚡', 
      title: 'Direito Penal', 
      desc: 'Defesa criminal, audiências de custódia, crimes contra a pessoa e patrimônio.',
      color: '#ff8b94',
      stats: '100+ defesas'
    },
    { 
      icon: '🏢', 
      title: 'Direito Imobiliário', 
      desc: 'Locações, despejos, usucapião, condomínios e regularização de imóveis.',
      color: '#c7ceea',
      stats: '250+ imóveis'
    },
  ]

  const diferenciais = [
    { 
      icon: '🎯', 
      title: 'Atendimento Humanizado', 
      desc: 'Tratamos cada caso com a atenção única que ele merece, entendendo suas necessidades.',
      number: '01'
    },
    { 
      icon: '⚡', 
      title: 'Agilidade', 
      desc: 'Respostas rápidas e soluções eficientes para seus problemas jurídicos.',
      number: '02'
    },
    { 
      icon: '📱', 
      title: 'Tecnologia', 
      desc: 'Acompanhamento online do seu processo com transparência total.',
      number: '03'
    },
    { 
      icon: '🎓', 
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

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Navbar - Glassmorphism */}
      <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`} role="navigation" aria-label="Navegação principal">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}>
            <span className="logo-icon" aria-hidden="true">⚖️</span>
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
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section 
          id="inicio" 
          className={`hero ${visibleSections.has('inicio') ? 'visible' : ''}`}
          ref={(el) => { sectionsRef.current[0] = el; heroRef.current = el }}
        >
          <div className="hero-bg">
            <div className="gradient-orb orb-1" aria-hidden="true"></div>
            <div className="gradient-orb orb-2" aria-hidden="true"></div>
            <div className="grid-pattern" aria-hidden="true"></div>
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
                <span aria-hidden="true">📱</span> Fale com um Advogado
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('atuacao')}
              >
                <span aria-hidden="true">⚖️</span> Nossas Áreas
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number" data-count="3">3+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="127">127</span>
                <span className="stat-label">Avaliações 5⭐</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="8">8</span>
                <span className="stat-label">Áreas de Atuação</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-count="1500">1500+</span>
                <span className="stat-label">Casos Atendidos</span>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator" aria-hidden="true">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>Scroll</span>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="sobre" 
          className={`about ${visibleSections.has('sobre') ? 'visible' : ''}`}
          ref={(el) => sectionsRef.current[1] = el}
        >
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
                    <span aria-hidden="true">📍</span> Ver no Mapa
                  </a>
                </div>
              </div>
              
              <div className="about-card glass">
                <div className="card-icon-large" aria-hidden="true">⚖️</div>
                <h3>Por que nos escolher?</h3>
                <ul className="about-list">
                  <li><span className="check">✓</span> Atendimento personalizado</li>
                  <li><span className="check">✓</span> Equipe especializada</li>
                  <li><span className="check">✓</span> Tecnologia e inovação</li>
                  <li><span className="check">✓</span> Transparência total</li>
                  <li><span className="check">✓</span> Resultados comprovados</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas de Atuacao Section */}
        <section 
          id="atuacao" 
          className={`atuacao ${visibleSections.has('atuacao') ? 'visible' : ''}`}
          ref={(el) => sectionsRef.current[2] = el}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">ÁREAS DE ATUAÇÃO</span>
              <h2>Especialistas em <span className="gradient-text">Diversas Áreas</span></h2>
              <p>Oferecemos soluções jurídicas completas para atender todas as suas necessidades</p>
            </div>
            
            <div className="areas-grid">
              {areasDeAtuacao.map((area, i) => (
                <div 
                  key={i} 
                  className={`area-card ${activeArea === i ? 'active' : ''}`}
                  onMouseEnter={() => setActiveArea(i)}
                  onMouseLeave={() => setActiveArea(null)}
                  style={{'--area-color': area.color}}
                >
                  <div className="area-icon" aria-hidden="true">{area.icon}</div>
                  <div className="area-stats">{area.stats}</div>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                  <div className="card-shine" aria-hidden="true"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section 
          id="diferenciais" 
          className={`diferenciais ${visibleSections.has('diferenciais') ? 'visible' : ''}`}
          ref={(el) => sectionsRef.current[3] = el}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">DIFERENCIAIS</span>
              <h2>O que nos torna <span className="gradient-text">únicos</span></h2>
            </div>
            
            <div className="diferenciais-grid">
              {diferenciais.map((item, i) => (
                <div key={i} className="diferencial-card">
                  <span className="diferencial-number">{item.number}</span>
                  <div className="diferencial-icon" aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          id="depoimentos" 
          className={`testimonials ${visibleSections.has('depoimentos') ? 'visible' : ''}`}
          ref={(el) => sectionsRef.current[4] = el}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">DEPOIMENTOS</span>
              <h2>O que nossos <span className="gradient-text">clientes dizem</span></h2>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
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

        {/* CTA Section */}
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
                  <span aria-hidden="true">💬</span> WhatsApp
                </a>
                <a href="tel:13996393134" className="btn btn-secondary btn-large">
                  <span aria-hidden="true">📞</span> Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contato" 
          className={`contato ${visibleSections.has('contato') ? 'visible' : ''}`}
          ref={(el) => sectionsRef.current[5] = el}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">CONTATO</span>
              <h2>Vamos <span className="gradient-text">conversar</span>?</h2>
            </div>
            
            <div className="contato-grid">
              <div className="contato-info">
                <div className="info-item">
                  <span className="info-icon" aria-hidden="true">📍</span>
                  <div>
                    <h4>Endereço</h4>
                    <p>Rua São Paulo, n. 41 - cj. 1510<br />Vila Belmiro - Santos/SP<br />CEP: 11075-330</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon" aria-hidden="true">📱</span>
                  <div>
                    <h4>Telefone / WhatsApp</h4>
                    <p>(13) 99639-3134</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon" aria-hidden="true">✉️</span>
                  <div>
                    <h4>E-mail</h4>
                    <p>contato@acf.adv.br</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon" aria-hidden="true">🕐</span>
                  <div>
                    <h4>Horário de Atendimento</h4>
                    <p>Segunda a Sexta: 9h às 19h</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="https://www.facebook.com/advogadosacf/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <span aria-hidden="true">📘</span> Facebook
                  </a>
                  <a href="https://www.instagram.com/acf_adv" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <span aria-hidden="true">📸</span> Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/acf-adv/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <span aria-hidden="true">💼</span> LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="contato-cta">
                <div className="cta-card glass">
                  <h3>Consulta Gratuita</h3>
                  <p>Avaliamos seu caso sem compromisso. Entre em contato pelo WhatsApp e tire suas dúvidas.</p>
                  <a 
                    href="https://wa.me/5513996393134" 
                    className="btn btn-primary btn-large" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">💬</span> Iniciar Conversa
                  </a>
                  <div className="cta-features">
                    <span>✓ Atendimento 24h</span>
                    <span>✓ Resposta Rápida</span>
                    <span>✓ 100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon" aria-hidden="true">⚖️</span>
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

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5513996393134" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <span aria-hidden="true">💬</span>
      </a>
    </div>
  )
}

export default App
