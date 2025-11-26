import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import Home from './pages/home/Homepage';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog/BlogPost';
import AdminDashboard from './pages/home/AdminDashboard';
import CreatePost from './pages/blog/CreatePost';
import EditPost from './pages/blog/EditPost';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
