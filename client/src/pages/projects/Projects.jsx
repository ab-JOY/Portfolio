import { useState } from 'react';
import ProjectCard from '../../components/props/ProjectCard';
import './projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Mock project data - replace with real data later
  const projects = [
    {
      id: 1,
      title: 'Portfolio & Blog',
      description: 'A full-stack personal portfolio with an integrated tech blog. Built with MERN stack, featuring CRUD operations, responsive design, and modern UI.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      icon: '🌐',
      liveUrl: 'https://github.com/ab-JOY',
      githubUrl: 'https://github.com/ab-JOY/Portfolio'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with shopping cart, payment integration, and admin dashboard for product management.',
      technologies: ['React', 'Redux', 'Stripe', 'Firebase'],
      category: 'frontend',
      icon: '🛒',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ab-JOY'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, role-based access control, and real-time updates.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      icon: '📋',
      githubUrl: 'https://github.com/ab-JOY'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, 7-day forecast, and interactive maps using weather APIs.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      icon: '🌤️',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ab-JOY'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and automated reporting features.',
      technologies: ['Python', 'Django', 'React', 'D3.js'],
      category: 'fullstack',
      icon: '📊',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ab-JOY'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      icon: '💬',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ab-JOY'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>A collection of my work showcasing various technologies and skills</p>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <div className="projects-empty-icon">🔍</div>
            <h2>No Projects Found</h2>
            <p>Try selecting a different filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
