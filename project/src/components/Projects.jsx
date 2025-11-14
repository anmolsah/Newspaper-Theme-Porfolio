import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
        {
      title: 'NexoraAI',
      subtitle: 'Full-Stack - AI-Powered Content Creation Platform',
      category: 'Full-Stack Development',
      date: 'July 2025',
      description: 'NexoraAI is a comprehensive AI-powered content creation platform that provides users with a suite of intelligent tools to generate articles, create images, edit photos, and review resumes. Built with modern web technologies, it offers both free and premium tiers to cater to different user needs.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Clerk React', "Cloudinary" , "Clerk Express", "OpneRouter", "Neon Database", "Tailwind CSS", "Vercel"],
      liveUrl: 'https://nexora-ai-frontend-nine.vercel.app/',
      githubUrl:'https://github.com/anmolsah/NexoraAI',
      featured: false
    },
    {
      title: 'Movieco',
      subtitle: 'Movieco is a cutting-edge movie and TV show discovery platform',
      category: 'Frontend Development',
      date: 'August 2025',
      description: 'Movieco is a cutting-edge movie and TV show discovery platform that leverages artificial intelligence to provide personalized recommendations. Built with modern web technologies, it offers an intuitive and engaging experience for movie enthusiasts to discover, track, and manage their entertainment preferences.',
      technologies: ['React', 'Supabase', 'TMDB API', 'Tailwind CSS', 'GEMINI API'],
      liveUrl: 'https://movieco-ubb9.vercel.app/',
      githubUrl: 'https://github.com/anmolsah/movieco/tree/main',
      featured: true
    },
    {
      title: 'RAHI',
      subtitle: 'RAHi - AI Travel Planner',
      category: 'Frontend Development',
      date: 'September 2024',
      description: 'RAHi is an intelligent travel planning application that uses AI to create personalized itineraries based on your preferences. Plan your perfect trip with comprehensive features including hotel recommendations, weather information, budget tracking, and much more!',
      technologies: ['React', 'OpenWeatherMap API', 'Firebase', 'Tailwind CSS', 'Google Places API', 'GEMINI API', 'Google OAuth'],
      liveUrl: 'https://traveler-chi.vercel.app/',
      githubUrl: 'https://github.com/anmolsah/Traveler',
      featured: false
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Innovative Design Showcases Creative Development Skills',
      category: 'Personal Project',
      date: 'October 2025',
      description: 'Designed and developed this unique newspaper-themed portfolio website featuring smooth animations, responsive layout, and creative presentation of professional information.',
      technologies: ['React', 'Framer Motion', 'CSS Grid', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'VilaCodeReviewer',
      subtitle: 'VilaCodeReviewer - Professional Code Review Application',
      category: 'Full-Stack Development',
      date: 'February 2025',
      description: "A professional code review application powered by Google's Gemini AI that analyzes code snippets and provides optimization suggestions, best practices, and identifies potential issues.",
      technologies: ['React', 'Expressjs', 'MongoDB', 'Nodejs','Tailwind CSS', 'Vercel','Gemini API'],
      liveUrl: 'https://vila-code-reviewer-um9c.vercel.app/',
      githubUrl: 'https://github.com/anmolsah/VilaCodeReviewer-',
      featured: false
    },
    {
      title: 'Commit Genius',
      subtitle: 'VCommit Genius - AI Git Commit Message Generator',
      category: 'VScode Extension',
      date: 'July 2025',
      description: "Commit Genius is solution to generate standard commit messages with AI. Generate professional, conventional commit messages using cutting-edge AI models including OpenAI GPT, Claude, Gemini, DeepSeek, and more.",
      technologies: ['Javascript', 'VS Code API', 'Git & GitHub', 'vsce '],
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=aicommit-publisher.commit-genius',
      githubUrl: 'https://github.com/anmolsah/AICommit01',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">TECHNOLOGY SECTION</h2>
          <div className="title-decoration">────────</div>
          <p className="section-subtitle">Latest Projects & Notable Achievements</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`project-article ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>FEATURED STORY</span>
                </div>
              )}

              <div className="article-header">
                <span className="article-category">{project.category}</span>
                <span className="article-date">{project.date}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>

              <div className="article-divider"></div>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="article-footer">
                <div className="project-links">
                  <motion.a
                    href={project.liveUrl}
                    className="project-link live"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="link-icon">↗</span>
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="link-icon">⟨/⟩</span>
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="footer-notice">
            <p className="notice-text">
              Each project demonstrates commitment to clean code,
              user-centered design, and modern development practices.
            </p>
            <div className="notice-ornament">✦ ✦ ✦</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
