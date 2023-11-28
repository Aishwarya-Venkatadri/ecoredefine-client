// CategoryItemPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CategoryItemPage.scss';

function CategoryItemPage() {
  const [listings, setListings] = useState([]);
  const [categories, setCategories]= useState([])
  console.log(categories);
  const { id } = useParams();

  useEffect(() => {
    async function getListingsData() {
      try {
        const response = await axios.get(`http://localhost:5050/categories/${id}`);
        setListings(response.data.listings);
        setCategories(response.data.category);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    }

    getListingsData();
  }, [id]);

  return (
    <>
      <Header />
      <div>
        <p>You are viewing: {categories.category_name}</p>
        <div className="product-cards">
          {listings.map((listing) => (
            <div key={listing.listing_id} className="product-card el-wrapper">
              <div className="box-up">
                <img src={`http://localhost:5050/listings-images/${listing.image}`} alt={`Listing ${listing.listing_id}`} className="img" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{listing.listing_name}</span>
                    <span className="p-company">{listing.category_name}</span>
                  </div>
                  <div className="a-size">Location: {listing.location}</div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <Link to={`/listings/${listing.listing_id}`} className="cart">
                  <span className="price">${listing.listing_borrow_price}</span>
                  <span className="add-to-cart">
                    <span className="txt" disabled={listing.availability === 'Unavailable'}>
                      {listing.availability === 'Unavailable' ? 'Out of Stock' : 'Borrow'}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryItemPage;