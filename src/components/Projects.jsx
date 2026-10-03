import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Radio } from "lucide-react";


function Projects() {
  const projects = [
    {
      number: "01",
      icon: ShoppingCart,
      title: "Orcodix E-Commerce",
      description:
        "A modern e-commerce website designed to provide a smooth shopping experience with a clean, responsive and user-friendly interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      type: "E-Commerce Web Development",
      github: "https://github.com/mohammedsaadmn",
      live: "https://orcodix.vercel.app/",
    },
    {
      number: "02",
      icon: Radio,
      title: "Real-Time Auction",
      description:
        "A real-time auction platform with live bidding and instant synchronization between users using Socket.IO.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
      ],
      type: "Real-Time Web Application",
      github: "https://github.com/mohammedsaadmn",
      live: "https://auction-zeta-rose.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Section heading */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">MY WORK</span>

          <h2>
            Projects I've <span>built.</span>
          </h2>

          <p>
            A selection of projects where I turn ideas into functional
            and interactive web experiences.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -10 }}
              >
      {/* Orcodix background video */}
     {project.number === "01" && (
      <video
    className="project-video"
    src={`${import.meta.env.BASE_URL}videos/hero-video.mp4`}
    autoPlay
    loop
    muted
    playsInline
  />
)}

<div className="project-video-overlay">
  
  </div>

  {project.number === "02" && (
      <video
    className="project-video"
    src={`${import.meta.env.BASE_URL}videos/hero-video2.mp4`}
    autoPlay
    loop
    muted
    playsInline
  />
)}

<div className="project-video-overlay">
  
  </div>

                {/* Card top */}
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    <Icon size={25} />
                  </div>
                </div>

                {/* Project content */}
                <div className="project-content">
                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {/* Technologies */}
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="project-actions">
                  <a
                    href={project.live}
                    className="project-button primary-project-button"
                  >
                    View Project
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button github-button"
                  >
                    GitHub
                  </a>
                </div>

                {/* Decorative glow */}
                <div className="project-glow"></div>

              </motion.article>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span>⚡</span>

          <p>
            Always building. Always learning. Always improving.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;