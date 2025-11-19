import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const fullText =
    "Fullstack Developer Enters Job Market, Ready to Transform Ideas Into Reality";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); 

      return () => clearTimeout(timeout);
    } else {
     
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 4000); 

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fullText]);
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="breaking-news"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.span
            className="breaking-label"
            animate={{
              boxShadow: [
                "0 2px 4px rgba(0, 0, 0, 0.2)",
                "0 4px 8px rgba(196, 30, 58, 0.3)",
                "0 2px 4px rgba(0, 0, 0, 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            BREAKING NEWS
          </motion.span>
        </motion.div>

        <motion.h2
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            |
          </motion.span>
        </motion.h2>

        <motion.div
          className="hero-subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fresh Graduate Brings Modern Skills and Enthusiasm to Tech Industry
        </motion.div>

        <motion.div
          className="hero-byline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          By Staff Reporter |{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </motion.div>

        <div className="column-divider"></div>

        <motion.div
          className="hero-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="lead-paragraph">
            <span className="drop-cap">I</span>n an exciting development for the
            tech industry, a passionate and skilled developer has emerged,
            bringing a fresh perspective and modern technical expertise to the
            digital landscape. With a strong foundation in cutting-edge
            technologies and a dedication to creating exceptional user
            experiences, this rising talent is poised to make significant
            contributions to innovative projects.
          </p>

          <p className="lead-paragraph">
            Armed with proficiency in contemporary web technologies and a
            problem-solving mindset, this developer demonstrates the perfect
            blend of technical capability and creative thinking. Currently
            seeking opportunities to apply these skills in a dynamic environment
            where innovation and growth are valued.
          </p>

          <div className="hero-cta">
            <motion.button
              className="cta-button primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Portfolio
            </motion.button>
            <motion.button
              className="cta-button secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-decoration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          * * *
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
