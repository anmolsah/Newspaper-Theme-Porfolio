import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="newspaper-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-ornament top">✦ ✦ ✦</div>

      <div className="header-date">
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>

      <motion.h1
        className="masthead"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ANMOL SAH
      </motion.h1>

      <div className="header-tagline">
        All the Skills That's Fit to Print
      </div>

      <nav className="newspaper-nav">
        <button onClick={() => scrollToSection('hero')} className="nav-section">HOME</button>
        <span className="nav-separator">|</span>
        <button onClick={() => scrollToSection('about')} className="nav-section">ABOUT</button>
        <span className="nav-separator">|</span>
        <button onClick={() => scrollToSection('skills')} className="nav-section">SKILLS</button>
        <span className="nav-separator">|</span>
        <button onClick={() => scrollToSection('projects')} className="nav-section">PROJECTS</button>
        <span className="nav-separator">|</span>
        <button onClick={() => scrollToSection('education')} className="nav-section">EDUCATION</button>
        <span className="nav-separator">|</span>
        <button onClick={() => scrollToSection('contact')} className="nav-section">CONTACT</button>
      </nav>

      <div className="header-ornament bottom">✦ ✦ ✦</div>
    </motion.header>
  );
}

export default Header;
