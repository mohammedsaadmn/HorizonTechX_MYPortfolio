import { MessageCircle, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span>&lt;</span>Mohammed Saad<span>/&gt;</span>
          </div>

          <p>
            MERN Stack Developer building modern,
            responsive and interactive web experiences.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-connect">
          <h4>Connect</h4>

          <a
            href="mailto:ms7710420@gmail.com"
            title="Email"
          >
    
            Email
          </a>

          <a
            href="https://wa.me/917907762879?text=Hello%20Mohammed%20Saad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

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

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Mohammed Saad. All rights reserved.
        </span>

        <a href="#home" className="back-to-top">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
