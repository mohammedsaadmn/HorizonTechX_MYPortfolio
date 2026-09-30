import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowUpRight,
  Download,
  Code2,
  Database,
  FileCode2,
  Wind,
  Zap,
} from "lucide-react";
import "./App.css";
import About from "./components/About";
import profileImage from "./assets/Profile.jpg";
import resume from "./assets/Developer_CV.pdf";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
/* ── vCard data for QR code ──
   ✅ LinkedIn & GitHub are real values from your project.
   ⚠️  Replace the TWO placeholders below with your actual values:
       EMAIL → your real Gmail address
       TEL   → your real phone number (with country code, e.g. +919876543210) */
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Saad;;;;",
  "EMAIL:ms7710420@gmail.com",       
  "TEL:+917907762879",                    
  "URL:https://www.linkedin.com/in/mohammed-saad-m-n-4253263a2",
  "URL:https://github.com/mohammedsaadmn/",
  "TITLE:MERN Stack Developer",
  "END:VCARD",
].join("\n");

function App() {
  return (
    <div className="portfolio">

      {/* Background */}
      <div className="background-grid"></div>
      <div className="background-glow glow-purple"></div>
      <div className="background-glow glow-blue"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span>Mohammed Saad<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <motion.a
          href="https://wa.me/7907762879?text=Hello%20Mohammed%20Saad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
         target="_blank"
         rel="noopener noreferrer"
         className="nav-button"
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">

        {/* LEFT CONTENT */}
        <motion.section
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="status-dot"></span>
            Available for opportunities
          </motion.div>

          <p className="intro">👋 Hello, I'm</p>

          <h1>
            Mohammed
            <br />
            <span>Saad</span>
          </h1>

          <h2>
            I build <span>digital experiences</span>
          </h2>

          <p className="description">
            MERN Stack Developer focused on building modern,
            responsive and interactive web applications that
            combine clean code with great user experiences.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="primary-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(139,92,246,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowUpRight size={19} />
            </motion.a>

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Resume
            </motion.a>
          </div>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </motion.section>

        {/* RIGHT — PROFILE ORBIT SYSTEM */}
        <motion.section
          className="profile-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Ambient glow */}
          <div className="profile-glow"></div>

          {/* ── Outer orbit ring + 3 skills (clockwise, 30s) ── */}
          <div className="orbit-track orbit-track--outer">
            <div className="orbit-ring"></div>

            {/* JavaScript – 0° (top) */}
            <div className="orbit-card-anchor orbit-outer-0">
              <div className="orbit-skill">
                <div className="skill-icon"><FileCode2 size={20} /></div>
                <span>JavaScript</span>
              </div>
            </div>

            {/* MongoDB – 120° (bottom-right) */}
            <div className="orbit-card-anchor orbit-outer-1">
              <div className="orbit-skill">
                <div className="skill-icon"><Database size={20} /></div>
                <span>MongoDB</span>
              </div>
            </div>

            {/* Node.js – 240° (bottom-left) */}
            <div className="orbit-card-anchor orbit-outer-2">
              <div className="orbit-skill">
                <div className="skill-icon"><Zap size={20} /></div>
                <span>Node.js</span>
              </div>
            </div>
          </div>

          {/* ── Inner orbit ring + 3 skills (counter-clockwise, 24s) ── */}
          <div className="orbit-track orbit-track--inner">
            <div className="orbit-ring"></div>

            {/* React – 60° (top-right) */}
            <div className="orbit-card-anchor orbit-inner-0">
              <div className="orbit-skill">
                <div className="skill-icon"><Code2 size={20} /></div>
                <span>React</span>
              </div>
            </div>

            {/* Express – 180° (bottom) */}
            <div className="orbit-card-anchor orbit-inner-1">
              <div className="orbit-skill">
                <div className="skill-icon"><Code2 size={20} /></div>
                <span>Express</span>
              </div>
            </div>

            {/* Tailwind – 300° (top-left) */}
            <div className="orbit-card-anchor orbit-inner-2">
              <div className="orbit-skill">
                <div className="skill-icon"><Wind size={20} /></div>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          {/* ── Profile flip card ── */}
          <div className="profile-flip-container">
            <div className="profile-flip-card">
              {/* FRONT */}
              <div className="profile-face profile-front">
                <img
                  src={profileImage}
                  alt="Mohammed Saad"
                  className="profile-image"
                />
              </div>

              {/* BACK – Real QR Code */}
              <div className="profile-face profile-back">
                <div className="qr-back-content">
                  
                  <h3 className="qr-title">Let's <span>Connect</span></h3>

                  {/* Real, scannable QR code */}
                  <div className="qr-wrapper">
                    <QRCodeSVG
                      value={VCARD}
                      size={148}
                      level="M"
                      bgColor="#ffffff"
                      fgColor="#0a0812"
                      marginSize={2}
                    />
                  </div>

                  <span className="qr-hint">Hover away to return</span>
                </div>
              </div>
            </div>
          </div>

          {/* MERN badge */}
          <motion.div
            className="floating-card code-card"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <span>&lt;/&gt;</span>
            <div>
              <small>Stack</small>
              <b>MERN</b>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;