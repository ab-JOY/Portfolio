import './home.css';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Allen Joy Bueza</h1>
          <h2 className="hero-title">AI Engineer & Tech Enthusiast</h2>
          <p className="hero-description">
            I build beautiful, functional web applications and share my journey through code.
            Welcome to my digital space where creativity meets technology.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View My Work
            </a>
            <a href="#contact" className="hero-btn hero-btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
