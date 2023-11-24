import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const [carousel, setCarousel] = useState([]);
  const { categoryId } = useParams();
 console.log(carousel)

  useEffect(() => {
    async function getCategoriesData() {
      try {
        const response = await axios.get('http://localhost:5050/categories/');
        setCarousel(response.data); // Assuming your data is an array
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getCategoriesData();
  }, []);

  return (
    <div className="carousel-container">
      {carousel.map(category => (
        <div key={category.id} className="category-card">
          <img src={category.imageSrc} alt={category.title} />
          <div className="card-summary">
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <Link to={`/categories/${category.id}`}>Explore</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
