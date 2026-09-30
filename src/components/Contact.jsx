import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04. CONTACT</span>

          <h2>
            Let's build something{" "}
            <span>great together.</span>
          </h2>

          <p>
            Have a project, internship opportunity, or just want
            to connect? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="contact-grid">

          {/* Contact information */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in touch</h3>

            <p className="contact-intro">
              I'm currently open to internships, freelance work
              and full-time opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:ms7710420@gmail.com"
              className="contact-item"
            >
              <div className="contact-item-icon">
               <Mail size={21} />
              </div>

              <div>
                <small>Email</small>
                <span>ms7710420@gmail.com</span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917907762879"
              className="contact-item"
            >
              <div className="contact-item-icon">
                <Phone size={21} />
              </div>

              <div>
                <small>Phone</small>
                <span>+91 79077 62879</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917907762879?text=Hello%20Mohammed%20Saad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">
                <MessageCircle size={21} />
              </div>

              <div>
                <small>WhatsApp</small>
                <span>Chat on whatsApp</span>
              </div>

              <ArrowUpRight className="contact-arrow" size={18} />
            </a>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            className="contact-cta-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-cta-icon">
              <MessageCircle size={30} />
            </div>

            <h3>Let's talk.</h3>

            <p>
              The fastest way to reach me is through WhatsApp.
              Send me a message and let's discuss your idea,
              project or opportunity.
            </p>

            <motion.a
              href="https://wa.me/917907762879?text=Hello%20Mohammed%20Saad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-main-button"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 15px 40px rgba(139,92,246,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Chat with me
              <ArrowUpRight size={19} />
            </motion.a>

            {/* Social links */}
            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/mohammed-saad-m-n-4253263a2"
                target="_blank"
                rel="noopener noreferrer"
              >
    
                LinkedIn
              </a>

              <a
                href="https://github.com/mohammedsaadmn/"
                target="_blank"
                rel="noopener noreferrer"
              >
        
                GitHub
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;