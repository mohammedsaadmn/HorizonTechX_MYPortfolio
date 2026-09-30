import { motion } from "framer-motion";
import { Code2, Globe, Rocket, GraduationCap } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Code2 size={24} />,
      number: "MERN",
      text: "Full Stack Development",
    },
    {
      icon: <Rocket size={24} />,
      number: "Building",
      text: "Real-World Projects",
    },
    {
      icon: <Globe size={24} />,
      number: "3+",
      text: "Languages",
    },
    {
      icon: <GraduationCap size={24} />,
      number: "2026",
      text: "Growing Every Day",
    },
  ];

  return (
    <section id="about" className="about-section">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>01. About Me</span>
        <h2>
          Turning ideas into{" "}
          <strong>digital experiences.</strong>
        </h2>
      </motion.div>

      <div className="about-content">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm <strong>Mohammed Saad</strong>, a MERN Stack Developer
            passionate about creating modern and interactive web
            applications.
          </p>

          <p>
            I enjoy turning complex ideas into clean, responsive and
            user-friendly digital experiences using technologies like
            React, Node.js, Express and MongoDB.
          </p>

          <p>
            I'm constantly learning, building projects and improving my
            problem-solving skills to become a better developer.
          </p>

          <div className="about-highlight">
            <span>⚡</span>
            <p>
              Always learning. Always building. Always improving.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="about-icon">
                {card.icon}
              </div>

              <h3>{card.number}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;