import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock data - will connect to API later
  useEffect(() => {
    setTimeout(() => {
      const mockPosts = [
        { 
          id: 1, 
          title: 'Getting Started with React and Vite', 
          datePublished: '2024-11-20',
          views: 245
        },
        { 
          id: 2, 
          title: 'Building a MERN Stack Portfolio', 
          datePublished: '2024-11-18',
          views: 189
        },
        { 
          id: 3, 
          title: 'CSS Grid vs Flexbox: When to Use Each', 
          datePublished: '2024-11-15',
          views: 312
        },
      ];
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // Will connect to API later
      setPosts(posts.filter(post => post.id !== id));
      alert('Post deleted successfully!');
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <Link to="/create-post" className="admin-create-btn">
            <i className="fas fa-plus"></i>
            Create New Post
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="admin-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="stat-info">
              <h3>{posts.length}</h3>
              <p>Total Posts</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-eye"></i>
            </div>
            <div className="stat-info">
              <h3>{totalViews}</h3>
              <p>Total Views</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-calendar"></i>
            </div>
            <div className="stat-info">
              <h3>{posts.length > 0 ? new Date(posts[0].datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '-'}</h3>
              <p>Latest Post</p>
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="admin-posts">
          <div className="admin-posts-header">
            <h2>Manage Posts</h2>
            <input
              type="text"
              placeholder="Search posts..."
              className="admin-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {loading ? (
            <div className="admin-empty">
              <p>Loading...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div>
              {filteredPosts.map(post => (
                <div key={post.id} className="post-item">
                  <div className="post-info">
                    <div className="post-title">{post.title}</div>
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar"></i>
                        {new Date(post.datePublished).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span>
                        <i className="far fa-eye"></i>
                        {post.views} views
                      </span>
                    </div>
                  </div>
                  <div className="post-actions">
                    <Link to={`/blog/${post.id}`} className="post-action-btn view">
                      <i className="fas fa-eye"></i>
                      View
                    </Link>
                    <Link to={`/edit-post/${post.id}`} className="post-action-btn edit">
                      <i className="fas fa-edit"></i>
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(post.id)} 
                      className="post-action-btn delete"
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="admin-empty">
              <div className="admin-empty-icon">📝</div>
              <h3>No Posts Found</h3>
              <p>
                {searchTerm 
                  ? 'Try a different search term' 
                  : 'Create your first blog post to get started'}
              </p>
              {!searchTerm && (
                <Link to="/create-post" className="admin-create-btn">
                  <i className="fas fa-plus"></i>
                  Create New Post
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
