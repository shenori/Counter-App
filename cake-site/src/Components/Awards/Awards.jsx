import "./Project.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CrackCode",
      subtitle: "Gamified Learning Platform",
      description: "A full-stack gamified learning platform that revolutionizes coding education through interactive experiences. Developed both frontend and backend components using React for a dynamic user interface and Node.js with Express for robust server-side functionality. The platform offers comprehensive learning paths across Python, JavaScript, Java, and C++ with hands-on coding challenges, real-time code execution, and instant feedback systems. Implemented MongoDB for efficient data management of user progress, course content, and achievements. Key features include user authentication with JWT, personalized learning dashboards, progress tracking with visual analytics, interactive code editors, and gamification elements like badges, points, and skill-based assessments. The responsive design ensures seamless learning experiences across desktop and mobile devices, while the RESTful API architecture enables smooth communication between frontend and backend services.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "JWT", "RESTful API"],
      year: "2025 - Present",
      type: "Group Project",
      status: "Completed",
    },
    {
      id: 2,
      title: "Inventory Management System",
      subtitle: "Internal Tool — Ceyntics Systems (Pvt) Ltd",
      description:
        "A secure internal inventory management system built for Ceyntics Systems. Features role-based access control, item tracking with borrow/return flow, storage hierarchy management, and a full audit log trail. Deployed on Railway (backend) and Vercel (frontend).",
      technologies: ["Next.js", "Laravel", "PostgreSQL", "Sanctum"],
      year: "2026",
      type: "Individual Project",
      status: "Completed",
      link: "https://inventory-frontend-weld-three.vercel.app",
    },
    {
      id: 3,
      title: "BetterMe",
      subtitle: "Personal Development Website",
      description: "Led a team to create a comprehensive personal development website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      type: "Group Project (Team Leader)",
      status: "Completed",
    },
    {
      id: 4,
      title: "GearRent Pro",
      subtitle: "Multi-Branch Equipment Rental System",
      description:
        "A comprehensive Java desktop application for managing equipment rentals across multiple branches. Features role-based access control (Admin, Branch Manager, Staff), equipment inventory management, reservation and rental processing with dynamic pricing, return settlement with late fee and damage charge calculation, overdue rental tracking, and branch revenue reports.",
      technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
      year: "2025",
      type: "Individual Project",
      status: "Completed",
    },
    {
      id: 5,
      title: "Hostel Management System",
      subtitle: "Room & Student Management",
      description: "A comprehensive Java application for managing hostel operations.",
      technologies: ["Java", "MySQL", "JavaFX"],
      year: "2025",
      type: "Individual Project",
      status: "Completed",
    },
    {
      id: 6,
      title: "Traffic Data Analysis",
      subtitle: "Data Collection at Junctions",
      description: "Python application for gathering and analyzing traffic data.",
      technologies: ["Python", "Tkinter"],
      year: "2024",
      type: "Individual Project",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className={`status ${project.status === "In Progress" ? "in-progress" : ""}`}>
                {project.status}
              </span>
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p className="project-meta">{project.type} • {project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;