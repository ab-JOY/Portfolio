import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './postForm.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    datePublished: new Date().toISOString().split('T')[0]
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    if (formData.title || formData.content) {
      if (window.confirm('Are you sure you want to discard this post?')) {
        navigate('/admin');
      }
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="post-form-page">
      <div className="post-form-container">
        <Link to="/admin" className="back-to-admin">
          <i className="fas fa-arrow-left"></i>
          Back to Dashboard
        </Link>

        <div className="post-form-header">
          <h1>Create New Post</h1>
          <p>Share your thoughts and insights with the world</p>
        </div>

        {showSuccess && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            Post created successfully! Redirecting...
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
                    Creating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check"></i>
                    Create Post
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preview Section */}
          {(formData.title || formData.content) && (
            <div className="post-preview">
              <h2>Preview</h2>
              <div className="preview-content">
                {formData.title && (
                  <div className="preview-title">{formData.title}</div>
                )}
                {formData.content && (
                  <div className="preview-text">{formData.content}</div>
                )}
                {!formData.title && !formData.content && (
                  <div className="preview-empty">
                    Start typing to see a preview...
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
