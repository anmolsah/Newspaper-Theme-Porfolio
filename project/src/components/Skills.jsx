import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "FRONTEND DEVELOPMENT",
      skills: [
        { name: "React.js", level: "Intermediate" },
        { name: "JavaScript ES6+", level: "Intermediate" },
        { name: "TypeScript", level: "Beginner" },
        { name: "HTML5 & CSS3", level: "Intermediate" },
        { name: "Responsive Design", level: "Intermediate" },
        { name: "TailwindCSS", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
      ],
    },
    {
      category: "BACKEND & DATABASE",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Supabase", level: "Beginner" },
        { name: "PostgreSQL", level: "Beginner" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Firebase", level: "Beginner" },
        { name: "MongoDB", level: "Beginner" },
        { name: "SQL", level: "Beginner" },
      ],
    },
    {
      category: "CORE CONCEPTS & LANGUAGES",
      skills: [
        { name: "C++", level: "Intermediate" },
        { name: "OOP", level: "Intermediate" },
      ],
    },
    {
      category: "TOOLS & TECHNOLOGIES",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Vite", level: "Intermediate" },
        { name: "NPM", level: "Intermediate" },
        { name: "VS Code", level: "Expert" },
        { name: "Chrome DevTools", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
      ],
    },
    {
      category: "SOFT SKILLS",
      skills: [
        { name: "Problem Solving", level: "Intermediate" },
        { name: "Team Collaboration", level: "Intermediate" },
        { name: "Quick Learning", level: "Expert" },
        { name: "Communication", level: "Intermediate" },
        { name: "Time Management", level: "Intermediate" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">CLASSIFIED ADVERTISEMENTS</h2>
          <div className="title-decoration">────────</div>
          <p className="section-subtitle">
            Professional Competencies & Technical Expertise
          </p>
        </motion.div>

        <motion.div
          className="classifieds-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="classified-box"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="classified-header">
                <h3 className="classified-category">{category.category}</h3>
                <div className="classified-ornament">✦</div>
              </div>

              <div className="classified-content">
                <ul className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5, backgroundColor: "#ffffff" }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-dots"></span>
                      <motion.span
                        className="skill-level"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.level}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="classified-footer">
                <span className="footer-text">Est. 2020+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-notice"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="notice-box">
            <h4 className="notice-title">NOTICE TO EMPLOYERS</h4>
            <p className="notice-text">
              Constantly expanding skill set through self-directed learning and
              hands-on project experience. Open to mastering new technologies
              and frameworks as required by innovative projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
