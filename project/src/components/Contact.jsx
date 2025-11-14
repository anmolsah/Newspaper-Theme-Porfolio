import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import VisitorCounter from "./VisitorCounter";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setStatus({
        type: "success",
        message: "Message received! Will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status.message]);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">LETTERS TO THE EDITOR</h2>
          <div className="title-decoration">────────</div>
          <p className="section-subtitle">
            Submit Your Inquiry or Collaboration Proposal
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-box classified-style">
              <h3 className="info-title">CONTACT INFORMATION</h3>
              <div className="info-divider"></div>

              <div className="info-item">
                <span className="info-label">TELEGRAPH:</span>
                <span className="info-value">annifind010@gmail.com</span>
              </div>

              <div className="info-item">
                <span className="info-label">TELEPHONE:</span>
                <span className="info-value">+91 8250676762</span>
              </div>

              <div className="info-item">
                <span className="info-label">LOCATION:</span>
                <span className="info-value">Siliguri, WB</span>
              </div>

              <div className="info-divider"></div>

              <h4 className="social-title">FOLLOW THE NEWS</h4>
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/anmol-sah-551083238/"
                  className="social-link"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="social-icon">in</span>
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/anmolsah"
                  className="social-link"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="social-icon">gh</span>
                  GitHub
                </motion.a>
                <motion.a
                  href="https://x.com/anni_i29"
                  className="social-link"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="social-icon">tw</span>
                  Twitter
                </motion.a>
              </div>
            </div>

            <div className="availability-notice">
              <h4 className="notice-title">FOR THE RECORD</h4>
              <p className="notice-text">
                Open to new opportunities and collaborations.
              </p>
              <p className="notice-text">Response time: Within 24 hours</p>
              <VisitorCounter />
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-box">
              <h3 className="form-title">SUBMISSION FORM</h3>
              <p className="form-subtitle">
                All fields marked with * are required
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="6"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    <span className="status-icon">
                      {status.type === "success" ? "✓" : "✗"}
                    </span>
                    {status.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -3 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT MESSAGE"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
