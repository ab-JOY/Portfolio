import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          AB
        </Link>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`navbar-link ${isActive('/projects')}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`navbar-link ${isActive('/blog')}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
