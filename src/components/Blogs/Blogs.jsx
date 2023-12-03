// Import necessary modules and files
import React, { useState } from 'react';
import '../Blogs/Blogs.scss'; // Make sure to import your SCSS file
import blogsData from '../../assets/Data/blogs.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Import your images
import blog1Image from '../../assets/Images/blog1.jpeg';
import blog2Image from '../../assets/Images/blog2.jpeg';
import blog3Image from '../../assets/Images/blog3.jpeg';
import blog4Image from '../../assets/Images/blog4.webp';
import blog5Image from '../../assets/Images/blog5.jpeg';

const imageMap = {
  1: blog1Image,
  2: blog2Image,
  3: blog3Image,
  4: blog4Image,
  5: blog5Image,
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <Header />
      <div>
        {selectedBlog ? (
          <div className="modal">
            <div className="modal__content">
              <span className="modal__close" onClick={handleCloseModal}>
                &times;
              </span>
              <div
                className="modal__image"
                style={{ backgroundImage: `url(${imageMap[selectedBlog.id]})` }}
              ></div>
              <h2 className="modal__title">{selectedBlog.title}</h2>
              <p className="modal__text">{selectedBlog.content}</p>
            </div>
          </div>
        ) : (
          <ul className="cards">
            {blogsData.map((blog) => (
              <li key={blog.id} className="cards__item">
                <div className="card">
                  <div
                    className={`card__image card__image--blog${blog.id}`}
                    style={{ backgroundImage: `url(${imageMap[blog.id]})` }}
                  ></div>
                  <div className="card__content">
                    <div className="card__title">{blog.title}</div>
                    <p className="card__text">{blog.summary}</p>
                    <button
                      className="btn btn--block card__btn"
                      onClick={() => handleReadMore(blog)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
