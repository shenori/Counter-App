import "./Awards.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Best Independent Café",
      description: "National Specialty Coffee Awards — voted best independent café in the country for three consecutive years.",
      year: "2021 · 2022 · 2023"
    },
    {
      id: 2,
      title: "Michelin Bib Gourmand",
      description: "ecognised three years running for outstanding quality and exceptional value in our brunch programme.",
      year: "2021 · 2022 · 2023"
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