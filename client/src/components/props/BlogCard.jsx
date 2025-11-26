import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get first letter of title for icon
  const getInitial = (title) => {
    return title ? title.charAt(0).toUpperCase() : '📝';
  };

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <span style={{ zIndex: 1 }}>{getInitial(post.title)}</span>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-date">
            <i className="far fa-calendar"></i>
            {formatDate(post.datePublished)}
          </span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">
          {post.content?.substring(0, 150)}
          {post.content?.length > 150 ? '...' : ''}
        </p>
        <div className="blog-card-footer">
          <Link to={`/blog/${post._id || post.id}`} className="blog-card-link">
            Read More <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
