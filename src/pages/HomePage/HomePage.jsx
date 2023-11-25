import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../HomePage/HomePage.scss'
import OurStory from "../OurStory/OurStory.jsx";
import cat1 from '../../assets/Images/cat1.webp'
import cat2 from '../../assets/Images/cat2.jpeg'
import cat3 from '../../assets/Images/cat3.webp'
import cat4 from '../../assets/Images/cat4.jpg'
import cat5 from '../../assets/Images/cat5.jpeg'
import cat6 from '../../assets/Images/cat6.webp'


function HomePage() {
    const [carousel, setCarousel] = useState([]);
    const { categoryId } = useParams();
    const categoryImages = [cat1, cat2, cat3, cat4, cat5, cat6];
  
    useEffect(() => {
      async function getCategoriesData() {
        try {
          const response = await axios.get('http://localhost:5050/categories/');
          setCarousel(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
  
      getCategoriesData();
    }, []);
  
    return (<>
      <div className="carousel-container">
        {carousel.map(category => (
          <div key={category.id} className="category-card">
            <img src={categoryImages[category.category_id - 1]} alt={category.title} />
            <div className="card-summary">
              <h3>{category.category_name}</h3>
              {/* <p>{category.name}</p> */}
              <Link to={`/categories/${category.id}`}>Explore</Link>
            </div>
          </div>
         
        ))}
      </div>
      <OurStory />
    </>);
  }
  
  export default HomePage;