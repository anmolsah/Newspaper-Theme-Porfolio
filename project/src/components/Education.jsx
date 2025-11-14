import { motion } from "framer-motion";
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Siliguri Institute of Technology",
      location: "Siliguri, West Bengal",
      period: "2021 - 2025",
      grade: "CGPA: 8.2/10",
      achievements: [
        "Backend Executive @GDSC SIT, guiding over 50+ students.",
        "Hackathon Champion at Tech Frenzy 2023, leading Team CODE-100 to victory.",
        "Achieved a 4.7/5 rating as a Teaching Assistant Intern at Coding Ninja, resolving over 1000+ student queries.",
        "Mentored more than 70+ students in full-stack development.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Back End | Full Stack Web Development in Node.js",
      issuer: "Coding Ninjas",
      date: "2023",
      link: "https://ninjasfiles.s3.amazonaws.com/certificate31862856cf527dd7745c17a561d639b87e0a5f1.pdf",
    },
    {
      title: "Front End | Full Stack Web Development",
      issuer: "Coding Ninjas",
      date: "2023",
      link: "https://ninjasfiles.s3.amazonaws.com/certificate3186284ebf7a88b69b37fd24e9eb6ab674ddd30.pdf",
    },
    {
      title: "ReactJS",
      issuer: "NamasteDev",
      date: "2024",
      link: "https://res.cloudinary.com/dl3czd3ib/image/upload/v1763142916/react_vs55ay.png",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">OFFICIAL ANNOUNCEMENTS</h2>
          <div className="title-decoration">────────</div>
          <p className="section-subtitle">
            Academic Credentials & Professional Certifications
          </p>
        </motion.div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="announcement-box main-announcement"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="announcement-border-top"></div>

            <div className="announcement-header">
              <motion.div
                className="seal"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="seal-inner">
                  <div className="seal-text">OFFICIAL</div>
                  <div className="seal-year">2025</div>
                </div>
              </motion.div>
              <h3 className="announcement-title">ACADEMIC CREDENTIALS</h3>
            </div>

            <div className="announcement-content">
              <div className="degree-info">
                <h4 className="degree-name">{edu.degree}</h4>
                <p className="degree-field">{edu.field}</p>
              </div>

              <div className="institution-info">
                <p className="institution-name">{edu.institution}</p>
                <p className="institution-location">{edu.location}</p>
              </div>

              <div className="period-grade">
                <span className="period">{edu.period}</span>
                <span className="separator">|</span>
                <span className="grade">{edu.grade}</span>
              </div>

              <div className="achievements-section">
                <h5 className="achievements-title">Notable Achievements:</h5>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <span className="achievement-marker">▪</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="announcement-footer">
              <p className="footer-text">Certified and Attested</p>
            </div>

            <div className="announcement-border-bottom"></div>
          </motion.div>
        ))}

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="certifications-title">PROFESSIONAL CERTIFICATIONS</h3>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "6px 6px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="cert-header">
                  <span className="cert-badge">CERTIFIED</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="education-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="footer-statement">
            <p>
              All credentials and certifications are verifiable upon request.
              Committed to continuous learning and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
