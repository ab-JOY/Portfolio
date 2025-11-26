import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './postForm.css';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    datePublished: ''
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Mock data - will connect to API later
    setTimeout(() => {
      const mockPosts = {
        1: { 
          id: 1, 
          title: 'Getting Started with React and Vite', 
          content: 'Vite is a modern build tool that significantly improves the frontend development experience. In this post, we explore how to set up a React project with Vite and why it\'s faster than traditional bundlers like Webpack.\n\nVite provides instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds.',
          datePublished: '2024-11-20'
        },
        2: { 
          id: 2, 
          title: 'Building a MERN Stack Portfolio', 
          content: 'Learn how to create a full-stack portfolio website using MongoDB, Express, React, and Node.js. We\'ll cover everything from setting up the backend API to creating a beautiful frontend with modern design principles.',
          datePublished: '2024-11-18'
        },
        3: { 
          id: 3, 
          title: 'CSS Grid vs Flexbox: When to Use Each', 
          content: 'Both CSS Grid and Flexbox are powerful layout tools, but knowing when to use each can make your development process much smoother. This guide breaks down the differences and best use cases for both.',
          datePublished: '2024-11-15'
        },
      };
      
      const post = mockPosts[id];
      if (post) {
        setFormData(post);
      }
      setFetchLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    // Simulate API call - will connect to backend later
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/admin');
      }, 1500);
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to discard changes?')) {
      navigate('/admin');
    }
  };

  if (fetchLoading) {
    return (
      <div className="post-form-page">
        <div className="post-form-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!formData.title) {
    return (
      <div className="post-form-page">
        <div className="post-form-container">
          <h1>Post Not Found</h1>
          <Link to="/admin" className="back-to-admin">
            <i className="fas fa-arrow-left"></i>
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="post-form-page">
      <div className="post-form-container">
        <Link to="/admin" className="back-to-admin">
          <i className="fas fa-arrow-left"></i>
          Back to Dashboard
        </Link>

        <div className="post-form-header">
          <h1>Edit Post</h1>
          <p>Update your post content and save changes</p>
        </div>

        {showSuccess && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            Post updated successfully! Redirecting...
          </div>
        )}

        <div className="post-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter an engaging title..."
                value={formData.title}
                onChange={handleChange}
                maxLength={100}
              />
              <div className={`char-counter ${formData.title.length > 80 ? 'warning' : ''}`}>
                {formData.title.length}/100
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="form-textarea"
                placeholder="Write your post content here..."
                value={formData.content}
                onChange={handleChange}
              />
              <div className="char-counter">
                {formData.content.length} characters
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="form-btn form-btn-secondary"
                onClick={handleCancel}
                disabled={loading}
              >
                <i className="fas fa-times"></i>
                Cancel
              </button>
              <button
                type="submit"
                className="form-btn form-btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Updating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-save"></i>
                    Update Post
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preview Section */}
          <div className="post-preview">
            <h2>Preview</h2>
            <div className="preview-content">
              <div className="preview-title">{formData.title}</div>
              <div className="preview-text">{formData.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
