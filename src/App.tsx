const experience = [
  {
    company: "Amazon",
    url: "https://amazon.com",
    role: "Software Engineer II",
    period: "Mar 2026 – Present",
    location: "Pittsburgh, PA",
    note: "Promotions Configuration Management",
  },
  {
    company: "Amazon",
    url: "https://amazon.com",
    role: "Software Engineer I",
    period: "Apr 2025 – Mar 2026",
    location: "Pittsburgh, PA",
    note: "Promotions Configuration Management",
  },
  {
    company: "Amazon Web Services",
    url: "https://aws.amazon.com",
    role: "Software Engineer I",
    period: "Jun 2024 – Apr 2025",
    location: "Sunnyvale, CA",
    note: "Network, Internet Monitoring and Control",
  },
  {
    company: "Amazon Web Services",
    url: "https://aws.amazon.com",
    role: "Software Engineer Intern",
    period: "Summer 2023",
    location: "Boston, MA",
    note: "Connect Wisdom",
  },
];

const projects = [
  {
    name: "Pitt Gym Tracker",
    description:
      "Displays live occupancy at Pitt's rec facilities. Built a scraper pipeline with AWS Lambda, EventBridge, ECR, Docker, and GitHub Actions. Frontend in Next.js, deployed on Vercel.",
    tech: ["Next.js", "Python", "AWS", "Docker"],
    link: "https://github.com/Steven-Jarmell/Pitt-Gym-Tracker",
  },
  {
    name: "Pitt Computer Science Club Internship Website",
    description:
      "Replacement for the Pitt CSC internship repository. GitHub OAuth login, job submissions with an admin review queue, and tag-based filtering.",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    link: "https://github.com/Steven-Jarmell/CSC-Internships",
  },
  {
    name: "MediLingo",
    description:
      "Built at Pitt Challenge 2023 — a DuoLingo inspired app to incrementally teach people various medical terms. Won Health Literacy and Best Use of MongoDB.",
    tech: ["React", "TypeScript", "Node", "MongoDB"],
    link: "https://github.com/Steven-Jarmell/MediLingo",
  },
  {
    name: "Pitt CS Wiki",
    description:
      "Migrated the Pitt CSC Wikipedia from Gatsby to Next.js to fix long-standing stability issues and lower the barrier for future contributors.",
    tech: ["Next.js", "TypeScript"],
    link: "https://github.com/Steven-Jarmell/pittcswiki-next",
  }
];

const App = () => {
  return (
    <main>
      {/* Intro */}
      <section className="intro">
        <h1>Steven Jarmell</h1>
        <p>
          Software Engineer II at{" "}
          <a
            className="prose-link"
            href="https://amazon.com"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
          . Computer Science graduate from the{" "}
          <a
            className="prose-link"
            href="https://www.pitt.edu"
            target="_blank"
            rel="noreferrer"
          >
            University of Pittsburgh.
          </a>
        </p>
        <div className="intro-links">
          <a
            href="https://github.com/Steven-Jarmell"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jarmell/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Steven-Jarmell/Resume/blob/main/Steven_Jarmell_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
        <p className="section-label">Experience</p>
        <ul className="experience-list">
          {experience.map((job, i) => (
            <li key={i} className="experience-item">
              <span className="experience-dot" />
              <div className="experience-body">
                <div className="experience-left">
                  <a
                    className="experience-company"
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.company}
                  </a>
                  <span className="experience-role">
                    {job.role}
                    {job.note ? ` · ${job.note}` : ""}
                  </span>
                </div>
                <div className="experience-right">
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-location">{job.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <p className="section-label">Projects</p>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="project-header">
                <a
                  className="project-name"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
                <span className="project-tech">{project.tech.join(" · ")}</span>
              </div>
              <p className="project-desc">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer>Steven Jarmell · {new Date().getFullYear()}</footer>
    </main>
  );
};

export default App;
