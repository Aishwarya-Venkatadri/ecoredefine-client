// HomePage.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../HomePage/HomePage.scss';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero.jsx/Hero.jsx";
// import Blogs from "../../components/Blogs/Blogs.jsx";
// import blogData from '../../assets/Data/blogs.json';
import cat1 from '../../assets/Images/cat1.webp';
import cat2 from '../../assets/Images/cat2.jpeg';
import cat3 from '../../assets/Images/cat3.webp';
import cat4 from '../../assets/Images/cat4.jpg';
import cat5 from '../../assets/Images/cat5.jpeg';
import cat6 from '../../assets/Images/cat6.webp';
// import blog1Image from '../../assets/Images/blog1.jpeg';
// import blog2Image from '../../assets/Images/blog2.jpeg';
// import blog3Image from '../../assets/Images/blog3.jpeg';
// import blog4Image from '../../assets/Images/blog4.webp';
// import blog5Image from '../../assets/Images/blog5.jpeg';

const HomePage = () => {
 
  const calculateSlidesToShow = useCallback(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1200) {
      return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }, []);

  const [carousel, setCarousel] = useState([]);
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
  });

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

  useEffect(() => {
    const handleResize = () => {
      //  number of slides to show on window resize
      setSettings(prevSettings => ({
        ...prevSettings,
        slidesToShow: calculateSlidesToShow(),
      }));
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateSlidesToShow]);

  const memoizedCards = useMemo(() => {
    const categoryImages = [cat1, cat2, cat3, cat4, cat5, cat6];

    return carousel.map(category => (
      <div key={category.id} className="category-card">
        <img src={categoryImages[category.category_id - 1]} alt={category.title} />
        <div className="card-summary">
          <h3>{category.category_name}</h3>
          <Link to={`/category/${category.category_id}`}>Explore</Link>
        </div>
      </div>
    ));
  }, [carousel]);

  // const memoizedBlogCards = useMemo(() => {
  //   const blogImages = [blog1Image, blog2Image, blog3Image, blog4Image, blog5Image];
  
  //   return blogData.map((blog, index) => (
  //     <Blogs key={blog.id} blog={{ ...blog, image: blogImages[index] }} />
  //   ));
  // }, []); 
  
  

  return (
    <>
      <Header />
      <Hero />
      
      {/* Slick Carousel for Category Cards */}
      <Slider {...settings} className="carousel-container">
        {memoizedCards}
      </Slider>

      {/* Slick Carousel for Blog Cards
      <Slider {...settings} className="blog-container">
        {memoizedBlogCards}
      </Slider> */}

      <Footer />
    </>
  );
};

export default HomePage;
