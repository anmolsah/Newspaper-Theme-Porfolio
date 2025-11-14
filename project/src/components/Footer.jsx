import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="newspaper-footer">
      <div className="footer-border-top"></div>

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-section">
          <h4 className="footer-heading">PUBLICATION INFORMATION</h4>
          <p className="footer-text">
            Published daily by Anmol Sah
            <br />
            Established {currentYear}
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">CONNECT</h4>
          <div className="social-links">
            <motion.a
              href="https://www.linkedin.com/in/anmol-sah-551083238/"
              className="social-link"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LinkedIn
            </motion.a>
            <span className="link-separator">•</span>
            <motion.a
              href="https://github.com/anmolsah"
              className="social-link"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              GitHub
            </motion.a>
            <span className="link-separator">•</span>
            <motion.a
              href="https://x.com/anni_i29"
              className="social-link"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Twitter
            </motion.a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">SUBSCRIPTIONS</h4>
          <p className="footer-text">
            For inquiries and collaborations
            <br />
            Contact via form above
          </p>
        </div>
      </motion.div>

      <div className="footer-copyright">
        <p>© {currentYear} Anmol Sah. All rights reserved.</p>
        <p className="footer-motto">Truth in Code • Excellence in Design</p>
      </div>

      <div className="footer-border-bottom"></div>
    </footer>
  );
}

export default Footer;
