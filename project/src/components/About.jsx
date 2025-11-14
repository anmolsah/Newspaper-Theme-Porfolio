import { motion } from "framer-motion";
import "./About.css";
import { assets } from "../assets/assets";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">FEATURE ARTICLE</h2>
          <div className="title-decoration">────────</div>
        </motion.div>

        <motion.div
          className="article-headline-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="article-headline">
            Meet the Developer: A Profile in Innovation and Dedication
          </h3>
          <p className="article-subhead">
            From Student to Professional - The Journey of a Rising Tech Talent
          </p>
        </motion.div>

        <div className="article-meta">
          <span className="meta-item">CAREER PROFILE</span>
          <span className="meta-separator">•</span>
          <span className="meta-item">SPECIAL FEATURE</span>
          <span className="meta-separator">•</span>
          <span className="meta-item">PAGE 1</span>
        </div>

        <div className="article-content">
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="profile-image-frame"
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="profile-image-placeholder"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={assets.myPhoto}
                  alt="Anmol Sah"
                  className="profile-photo"
                />
              </motion.div>
              <motion.p
                className="image-caption"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Anmol Sah - Developer & Problem Solver
                <br />
                <span className="caption-credit">
                  Photo courtesy of Portfolio Times
                </span>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="article-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="article-paragraph first-paragraph">
              <span className="drop-cap-small">I</span>n the ever-evolving
              landscape of technology, where innovation meets dedication,
              emerges a promising talent ready to make their mark. As a recent
              graduate with a passion for creating elegant solutions to complex
              problems, I bring fresh perspectives combined with solid technical
              foundations.
            </p>

            <motion.div
              className="pullquote"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="pullquote-marks">"</div>
              <p className="pullquote-text">
                Code is poetry, and every project is an opportunity to craft
                something meaningful that impacts real people's lives.
              </p>
              <div className="pullquote-marks closing">"</div>
            </motion.div>

            <p className="article-paragraph">
              My journey into technology began with curiosity and evolved into a
              dedicated pursuit of excellence. Throughout my academic career,
              I've consistently sought to push beyond the curriculum, exploring
              modern frameworks, design patterns, and best practices that define
              contemporary software development.
            </p>

            <p className="article-paragraph">
              What sets me apart is not just technical proficiency, but a
              genuine enthusiasm for learning and adapting. In an industry where
              change is the only constant, I thrive on staying current with
              emerging technologies while maintaining a strong grasp of
              fundamental principles.
            </p>

            <motion.div
              className="info-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="info-box-title">CORE COMPETENCIES</h4>
              <ul className="competencies-list">
                {[
                  "Full-stack web development with modern frameworks",
                  "Responsive design and user experience optimization",
                  "Problem-solving with clean, maintainable code",
                  "Collaborative teamwork and version control",
                  "Continuous learning and adaptation",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <p className="article-paragraph">
              Beyond the technical realm, I understand that great software is
              built by great teams. I value clear communication, constructive
              feedback, and the collaborative spirit that turns good ideas into
              exceptional products. My goal is to contribute meaningfully to
              projects while continuing to grow as a developer and team member.
            </p>

            <p className="article-paragraph last-paragraph">
              As I embark on my professional journey, I'm eager to bring my
              skills, enthusiasm, and commitment to a team that values
              innovation and growth. The story is just beginning, and the next
              chapter promises to be the most exciting yet.
            </p>

            <div className="article-end">■</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
