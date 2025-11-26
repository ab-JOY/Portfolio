import { useState, useEffect } from 'react';
import BlogCard from '../../components/props/BlogCard';
import './blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for now - will connect to API later
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockPosts = [
        { 
          id: 1, 
          title: 'Getting Started with React and Vite', 
          content: 'Vite is a modern build tool that significantly improves the frontend development experience. In this post, we explore how to set up a React project with Vite and why it\'s faster than traditional bundlers like Webpack.',
          datePublished: '2024-11-20'
        },
        { 
          id: 2, 
          title: 'Building a MERN Stack Portfolio', 
          content: 'Learn how to create a full-stack portfolio website using MongoDB, Express, React, and Node.js. We\'ll cover everything from setting up the backend API to creating a beautiful frontend with modern design principles.',
          datePublished: '2024-11-18'
        },
        { 
          id: 3, 
          title: 'CSS Grid vs Flexbox: When to Use Each', 
          content: 'Both CSS Grid and Flexbox are powerful layout tools, but knowing when to use each can make your development process much smoother. This guide breaks down the differences and best use cases for both.',
          datePublished: '2024-11-15'
        },
      ];
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-header">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1>Tech Blog</h1>
          <p>Thoughts, tutorials, and insights on web development and technology</p>
        </div>

        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <div className="blog-empty-icon">📝</div>
            <h2>No Posts Yet</h2>
            <p>Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
