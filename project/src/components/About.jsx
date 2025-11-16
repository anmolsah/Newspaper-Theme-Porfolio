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
            Anmol Sah: The Full-Stack Builder Integrating AI into Everyday Apps
          </h3>

          <p className="article-subhead">
            From MERN Stack Mastery to Continuous Learning 
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
              <span className="drop-cap-small drop-cap">I</span> am Anmol Sah, a recent
              college graduate and a dedicated Full-Stack Developer with a
              passion for the MERN stack. My expertise lies in building
              applications completely, from the first line of code to the final
              finished product. I focus on creating innovative solutions that
              can genuinely benefit people, like my AI-powered travel planner,
              Rahi, or the smart movie recommendation system, Movieco.
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
                The satisfaction of bringing an idea to life, integrating new
                tech like AI, and seeing an application work is what truly
                drives me.
              </p>

              <div className="pullquote-marks closing">"</div>
            </motion.div>

            <p className="article-paragraph">
              My core strength is in the MERN stack, but I constantly look to
              expand my toolkit. Services like Supabase and Firebase have been
              excellent for speeding up my workflow, allowing me to build
              proof-of-concept projects and MVPs quickly. I’ve also built SaaS
              applications like NexoraAI, which acts as an all-in-one content
              generation platform—from blog writing to image editing.
            </p>

            <p className="article-paragraph">
              My strong foundation in problem-solving and logical thinking comes
              from mastering Data Structures and Algorithms (DSA) using C++.
              Currently, I am focused on learning and building projects with
              TypeScript because I love the type safety it offers, which helps
              catch errors early and results in more secure, reliable
              applications. I also recently explored and applied Docker to a few
              projects to manage deployments better.
            </p>

            <motion.div
              className="info-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="info-box-title">KEY STRENGTHS</h4>

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
              Building great software also requires great teamwork. My
              internship as a Teaching Assistant at Coding Ninjas, where I
              handled over a thousand student queries, taught me the importance
              of clear communication and patience. This experience not only
              boosted my confidence but also helped me continuously reinforce my
              own technical concepts by explaining them to others.
            </p>

            <p className="article-paragraph last-paragraph">
              Whenever I hit a complex bug or a new challenge, I use AI tools to
              quickly identify the cause, which I then verify by diving deep
              into the official documentation. I&apos;m eager to bring my
              enthusiasm, proven building skills, and commitment to learning to
              a team that is driven by innovation. My professional journey is
              just taking off, and I am excited about the challenging work
              ahead.
            </p>

            <div className="article-end">■</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
