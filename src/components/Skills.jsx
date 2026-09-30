import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Globe,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["Responsive Design", "API Integration", "Authentication"],
    },
    {
      icon: GitBranch,
      title: "Currently Learning",
      skills: ["Advanced React", "Full Stack Development", "Deployment"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <span className="section-number">02. MY SKILLS</span>

        <h2>
          Technologies I use to{" "}
          <span>build digital experiences.</span>
        </h2>

        <p>
          A collection of technologies and tools I use to build
          modern, responsive and interactive web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-icon">
                <Icon size={25} />
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;