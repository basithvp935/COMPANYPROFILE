import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Future of EdTech: Transforming Traditional Classrooms",
    excerpt: "Discover how emerging technologies are reshaping the educational landscape and providing unprecedented opportunities for personalized learning.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop",
    date: "July 12, 2026",
  },
  {
    id: 2,
    title: "Cultivating Leadership Skills in Tomorrow's Educators",
    excerpt: "Effective institutional growth starts with empowering teachers. Learn the core strategies for building a strong foundation of leadership within your faculty.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    date: "June 28, 2026",
  },
  {
    id: 3,
    title: "Bridging the Gap: Academic Excellence and Core Values",
    excerpt: "Academic success is only one piece of the puzzle. Explore how integrating ethical values into the curriculum creates well-rounded, future-ready students.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    date: "June 15, 2026",
  }
];

const Blog = () => {
  return (
    <section className="section blog-section-white" id="blog">
      <div className="container">
        
        <div className="section-header center">
          <h2 className="section-title">
            <span className="title-dark">LATEST</span> <span className="title-accent">INSIGHTS</span>
          </h2>
          <p className="section-subtitle">
            Thoughts, strategies, and updates from my journey in educational leadership.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#read-more" className="read-more-btn" onClick={(e) => e.preventDefault()}>
                  Read More <ArrowRight size={16} className="arrow-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <a href="#all-posts" className="btn-outline" onClick={(e) => e.preventDefault()}>View All Articles</a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
