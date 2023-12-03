
import React from "react";
import { Link } from "react-router-dom";
import '../Blogs/Blogs.scss'
 import blogData from '../../assets/Data/blogs.json';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="card-summary">
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <Link to={`/blog/${blog.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
