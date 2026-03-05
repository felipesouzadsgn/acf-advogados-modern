import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeArea, setActiveArea] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const areasDeAtuacao = [
    { 
      icon: '⚖️', 
      title: 'Direito Médico', 
      desc: 'Defesa de profissionais e pacientes em questões de responsabilidade civil e ética médica.',
      color: '#00d4ff'
    },
    { 
      icon: '👨‍👩‍👧‍👦', 
      title: 'Direito de Família', 
      desc: 'Divórcios, guarda de filhos, pensão alimentícia e planejamento sucessório.',
      color: '#ff6b6b'
    },
    { 
      icon: '🛡️', 
      title: 'Direito do Consumidor', 
      desc: 'Proteção contra práticas abusivas, cancelamentos indevidos e cobranças ilegais.',
      color: '#4ecdc4'
    },
    { 
      icon: '🚗', 
      title: 'Direito de Trânsito', 
      desc: 'Defesa em multas, suspensão de CNH, processos administrativos e crimes de trânsito.',
      color: '#ffe66d'
    },
    { 
      icon: '💼', 
      title: 'Direito do Trabalho', 
      desc: 'Reclamações trabalhistas, rescisões, assédio moral e direitos dos trabalhadores.',
      color: '#a8e6cf'
    },
    { 
      icon: '📋', 
      title: 'Direito Civil', 
      desc: 'Contratos, indenizações, responsabilidade civil e direitos patrimoniais.',
      color: '#ffd93d'
    },
    { 
      icon: '⚡', 
      title: 'Direito Penal', 
      desc: 'Defesa criminal, audiências de custódia, crimes contra a pessoa e patrimônio.',
      color: '#ff8b94'
    },
    { 
      icon: '🏢', 
      title: 'Direito Imobiliário', 
      desc: 'Locações, despejos, usucapião, condomínios e regularização de imóveis.',
      color: '#c7ceea'
    },
  ]

  const diferenciais = [
    { 
      icon: '🎯', 
      title: 'Atendimento Humanizado', 
      desc: 'Tratamos cada caso com a atenção única que ele merece, entendendo suas necessidades.'
    },
    { 
      icon: '⚡', 
      title: 'Agilidade', 
      desc: 'Respostas rápidas e soluções eficientes para seus problemas jurídicos.'
    },
    { 
      icon: '📱', 
      title: 'Tecnologia', 
      desc: 'Acompanhamento online do seu processo com transparência total.'
    },
    { 
      icon: '🎓', 
      title: 'Especialização', 
      desc: 'Equipe especializada em diversas áreas do Direito para melhor atendê-lo.'
    },
  ]

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">⚖️</span>
            <div className="logo-text">
              <span className="logo-main">ACF</span>
              <span className="logo-sub">Advogados Associados</span>
            </div>
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#atuacao" onClick={() => setMobileMenuOpen(false)}>Áreas de Atuação</a>
            <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </div>
          <a href="https://wa.me/5513996393134" className="btn-consulta" target="_blank" rel="noopener noreferrer">
            Consulta Grátis
          </a>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="badge">
            <span className="pulse-dot"></span>
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
            <a href="https://wa.me/5513996393134" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <span>📱</span> Fale com um Advogado
            </a>
            <a href="#atuacao" className="btn btn-secondary">
              <span>⚖️</span> Nossas Áreas
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">127</span>
              <span className="stat-label">Avaliações 5⭐</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Áreas de Atuação</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* About Section */}
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
              <p className="about-text highlight">
                Mais do que um escritório de advocacia, buscamos ser um 
                <span className="gradient-text"> centro de excelência jurídica</span>, 
                visando um atendimento humanizado.
              </p>
              <div className="about-buttons">
                <a href="#contato" className="btn btn-primary">
                  Entre em Contato
                </a>
                <a href="https://www.google.com/maps/dir//ACF+Advogados+Associados+-+R.+S%C3%A3o+Paulo,+41+-+CJ.+1510+-+Vila+Belmiro,+Santos+-+SP" 
                   className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <span>📍</span> Ver no Mapa
                </a>
              </div>
            </div>
            <div className="about-card">
              <div className="card-icon-large">⚖️</div>
              <h3>Por que nos escolher?</h3>
              <ul className="about-list">
                <li>✓ Atendimento personalizado</li>
                <li>✓ Equipe especializada</li>
                <li>✓ Tecnologia e inovação</li>
                <li>✓ Transparência total</li>
                <li>✓ Resultados comprovados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas de Atuacao Section */}
      <section id="atuacao" className="atuacao">
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
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="diferenciais">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">DIFERENCIAIS</span>
            <h2>O que nos torna <span className="gradient-text">únicos</span></h2>
          </div>
          <div className="diferenciais-grid">
            {diferenciais.map((item, i) => (
              <div key={i} className="diferencial-card">
                <div className="diferencial-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para resolver seu problema jurídico?</h2>
            <p>Entre em contato agora mesmo e agende sua consulta gratuita. Estamos prontos para ajudar você.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/5513996393134" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                <span>💬</span> WhatsApp
              </a>
              <a href="tel:13996393134" className="btn btn-secondary btn-large">
                <span>📞</span> Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contato">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">CONTATO</span>
            <h2>Vamos <span className="gradient-text">conversar</span>?</h2>
          </div>
          <div className="contato-grid">
            <div className="contato-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua São Paulo, n. 41 - cj. 1510<br />Vila Belmiro - Santos/SP<br />CEP: 11075-330</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>Telefone / WhatsApp</h4>
                  <p>(13) 99639-3134</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>E-mail</h4>
                  <p>contato@acf.adv.br</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 19h</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/advogadosacf/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <span>📘</span> Facebook
                </a>
                <a href="https://www.instagram.com/acf_adv" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <span>📸</span> Instagram
                </a>
                <a href="https://www.linkedin.com/company/acf-adv/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <span>💼</span> LinkedIn
                </a>
              </div>
            </div>
            <div className="contato-cta">
              <div className="cta-card">
                <h3>Consulta Gratuita</h3>
                <p>Avaliamos seu caso sem compromisso. Entre em contato pelo WhatsApp e tire suas dúvidas.</p>
                <a href="https://wa.me/5513996393134" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                  <span>💬</span> Iniciar Conversa
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">⚖️</span>
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
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#atuacao">Áreas de Atuação</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-links">
              <h4>Áreas de Atuação</h4>
              <a href="#atuacao">Direito Médico</a>
              <a href="#atuacao">Direito de Família</a>
              <a href="#atuacao">Direito do Trabalho</a>
              <a href="#atuacao">Direito Civil</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ACF Advogados Associados. Todos os direitos reservados.</p>
            <p>OAB/SP Santos - Baixada Santista</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/5513996393134" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
      </a>
    </div>
  )
}

export default App
