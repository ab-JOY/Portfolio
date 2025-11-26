import { Link } from 'react-router-dom';
import './layout.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Allen Joy Bueza</h3>
            <p>
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
            <div className="footer-social">
              <a href="https://github.com/ab-JOY" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/allenjoybueza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com/profile.php?id=61578835007929" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out for collaborations or just a friendly chat.</p>
            <p>
              <a href="mailto:your.email@example.com">allenjoybueza@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Allen Joy Bueza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
