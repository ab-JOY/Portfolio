const ProjectCard = ({ project }) => {
  // Get icon based on project type or use first letter
  const getIcon = () => {
    if (project.icon) return project.icon;
    return project.title ? project.title.charAt(0).toUpperCase() : '💻';
  };

  return (
    <div className="project-card">
      <div className="project-card-image">
        <span style={{ zIndex: 1, fontSize: '4rem' }}>{getIcon()}</span>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-card-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-card-footer">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link project-link-primary"
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link project-link-secondary"
            >
              <i className="fab fa-github"></i>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
