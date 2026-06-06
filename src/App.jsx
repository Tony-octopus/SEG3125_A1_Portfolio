import { useState } from 'react';
//https://react.dev/reference/react/useState
import './App.css';

// Projects
const PROJECTS = [
  {
    id: 'bikerepair',
    title: 'Bike Repair',
    summary: 'A bike repair portal featuring scheduling, custom maintenance + pricing, and highly-refined responsive layouts.',
    image: '/images/bike_repair_website.png',
    tech: 'React • LocalStorage • TBD',
    url: 'https://seg3125bikerepair.netlify.app/'
  },
  {
    id: 'memorygame',
    title: 'Memory Game',
    summary: 'An interactive card-matching game built with state-management and active score tracking.',
    image: '/images/memory_game_website.png',
    tech: 'React State • TBD • TBD'
  }, 
  {
    id: 'ecommerce',
    title: 'Evil E-Commerce',
    summary: 'A high-speed retail platform with smooth page transitions, checkout micro-animations, and other stuff',
    image: '/images/e_commerce_website.png',
    tech: 'Vite • TBD • TBD'
  },
  {
    id: 'analytics',
    title: 'Larp Analytics',
    summary: 'Chud larp detection through larp visualization dashboard with high-performance charts, predictions, etc.',
    image: '/images/analytics_website.png',
    tech: 'React • TBD • TBD'
  }
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [copiedText, setCopiedText] = useState(null);

  // Smooth scroll helper 
  /*
  resources used: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
  */
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (activeProject !== null) {
      setActiveProject(null);
      // Wait for rendr then smooth scroll to section
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  /*
  resources:https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write
  
  */
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Under constructionview for projects
  if (activeProject) {
    const project = PROJECTS.find(p => p.id === activeProject);
    return (
      <div className="uc-page">
        <div className="uc-bg-glow"></div>
        <div className="uc-card">
          <div className="uc-badge">Project Status</div>
          <div className="uc-icon-container">
            <div className="uc-outer-ring"></div>
            <div className="uc-inner-gear">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>
          <h1 className="uc-title">Under Construction</h1>
          <p className="uc-desc">
            Thank you for your interest! The interactive live site for <span className="uc-project-name">"{project.title}"</span> is coming in the future.
          </p>
          <button className="uc-button" onClick={() => setActiveProject(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '0.25rem'}}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // 2. Main portfolio view
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <a href="#" className="logo-link" onClick={(e) => handleNavClick(e, 'about')}>
            <img src="/images/profile_photo.png" className="header-avatar" alt="Tony Yu Logo" />
            <span>Tony Yu</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>about me</a>
              </li>
              <li className="nav-item">
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>projects</a>
              </li>
              <li className="nav-item">
                <a href="#how-i-work" onClick={(e) => handleNavClick(e, 'how-i-work')}>how i work</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container">
        
        {/* About Me Section */}
        <section id="about" className="section" style={{ minHeight: 'calc(100vh - 80px)', justifyContent: 'center' }}>
          <div className="about-grid">
            <div className="about-text-container">
              <span className="about-greeting">Welcome to my space</span>
              <h1 className="about-intro-title">Hi, I'm Tony Yu.</h1>
              <p className="about-desc">
                I am a software engineering student leaning about UI design, focusing on
                designing and developing interactive, smooth, and robust web architectures. 
                My goal is to deliver seamless end-user experiences.
              </p>
            </div>
            
            <div className="about-photo-wrapper">
              <div className="about-photo-ring"></div>
              <div className="about-photo-card">
                <img src="/images/profile_photo.png" alt="Tony Yu Portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Hover over each project to reveal technical details. Click the overlay to explore their status.
          </p>
          
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => {
                  if (project.url) {
                    window.open(project.url, '_blank', 'noopener,noreferrer');
                  } else {
                    setActiveProject(project.id);
                  }
                }}
              >
                <img src={project.image} className="project-image" alt={project.title} />
                <div className="project-overlay">
                  <span className="project-badge">{project.tech}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-cta">
                    <span>Explore Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work Section */}
        <section id="how-i-work" className="section">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            I am currently enrolled in a UI design course, and this is my approach.
          </p>
          
          <div className="work-grid">
            <div className="work-card">
              <span className="work-step">Step 01</span>
              <div className="work-icon-wrapper">
                {/* Discover / Magnifying glass & Compass */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3 className="work-card-title">Discover</h3>
              <p className="work-card-desc">
                Analyzing goals and constraints, sketching page structure on paper.
              </p>
            </div>

            <div className="work-card">
              <span className="work-step">Step 02</span>
              <div className="work-icon-wrapper">
                {/* Design / Paintbrush & Nodes */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32135 19.4816 5.37254 20.2241 4.96803 20.7635C4.56353 21.3028 3.82103 21.3854 3.32422 20.9463C1.29471 19.149 0 16.5133 0 13.5C0 7.14922 4.47715 2.5 10 2.5"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <circle cx="7.5" cy="10.5" r="1.5"></circle>
                  <circle cx="11.5" cy="7.5" r="1.5"></circle>
                  <circle cx="16.5" cy="9.5" r="1.5"></circle>
                  <circle cx="15.5" cy="14.5" r="1.5"></circle>
                </svg>
              </div>
              <h3 className="work-card-title">Design</h3>
              <p className="work-card-desc">
                Designing for productivity and aesthetics by 
                using transitions, colour, and easily found information.
              </p>
            </div>

            <div className="work-card">
              <span className="work-step">Step 03</span>
              <div className="work-icon-wrapper">
                {/* Develop / Code brackets & cursor */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>
              </div>
              <h3 className="work-card-title">Develop</h3>
              <p className="work-card-desc">
                Writing React components, flexible structures, and testing locally.
              </p>
            </div>

            <div className="work-card">
              <span className="work-step">Step 04</span>
              <div className="work-icon-wrapper">
                {/* Deliver / Rocket & Launch */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="work-card-title">Deliver</h3>
              <p className="work-card-desc">
                Checking different screen size and cross-platform behaviour, and deployment
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact Me */}
      <footer className="footer">
        <div className="container footer-container">
          <h2 className="footer-title">Contact Me</h2>
          
          <div className="footer-contacts">
            {/* Phone Number */}
            <div 
              className="contact-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => copyToClipboard('+16135550192', 'phone')}
            >
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 (123) 456-7890</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                {copiedText === 'phone' ? 'Copied!' : 'Copy'}
              </span>
            </div>

            {/* Email Address */}
            <div 
              className="contact-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => copyToClipboard('hello123@yahoo.com', 'email')}
            >
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">hello123@yahoo.com</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                {copiedText === 'email' ? 'Copied!' : 'Copy'}
              </span>
            </div>
          </div>


          

        </div>
      </footer>
    </>
  );
}

export default App;
