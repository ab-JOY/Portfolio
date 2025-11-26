import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './blogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - will connect to API later
    setTimeout(() => {
      const mockPosts = {
        1: { 
          id: 1, 
          title: 'Getting Started with React and Vite', 
          content: 'Vite is a modern build tool that significantly improves the frontend development experience. In this post, we explore how to set up a React project with Vite and why it\'s faster than traditional bundlers like Webpack.\n\nVite provides instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds. It leverages native ES modules in the browser during development, which means no bundling is required.\n\nTo get started with Vite and React, simply run: npm create vite@latest my-app -- --template react',
          datePublished: '2024-11-20'
        },
        2: { 
          id: 2, 
          title: 'Building a MERN Stack Portfolio', 
          content: 'Learn how to create a full-stack portfolio website using MongoDB, Express, React, and Node.js. We\'ll cover everything from setting up the backend API to creating a beautiful frontend with modern design principles.\n\nThe MERN stack is one of the most popular technology stacks for building modern web applications. It combines MongoDB for the database, Express.js for the backend framework, React for the frontend, and Node.js as the runtime environment.',
          datePublished: '2024-11-18'
        },
        3: { 
          id: 3, 
          title: 'CSS Grid vs Flexbox: When to Use Each', 
          content: 'Both CSS Grid and Flexbox are powerful layout tools, but knowing when to use each can make your development process much smoother. This guide breaks down the differences and best use cases for both.\n\nFlexbox is best for one-dimensional layouts (either rows or columns), while CSS Grid excels at two-dimensional layouts (rows and columns simultaneously). Understanding these differences will help you choose the right tool for your layout needs.',
          datePublished: '2024-11-15'
        },
      };
      setPost(mockPosts[id]);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h1>Post Not Found</h1>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-container">
        <Link to="/blog" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>
        
        <article className="blog-post">
          <header className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">
                <i className="far fa-calendar"></i>
                {new Date(post.datePublished).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </header>

          <div className="blog-post-content">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
