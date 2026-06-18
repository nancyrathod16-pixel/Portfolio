function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>User Side Website</h3>
          <p>
            Property Listing Website developed using React.js.
          </p>
        </div>

        <div className="project-card">
          <h3>Admin Side Website</h3>
          <p>
            Property Management Dashboard with CRUD Operations.
          </p>
        </div>

        <div className="project-card">
          <h3>Weather Forecast Dashboard</h3>
          <p>
              Real-time weather forecasting using API integration.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;