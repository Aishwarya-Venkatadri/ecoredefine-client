import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryItemPage() {
  const [listings, setListings] = useState([]);
  console.log(listings);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getListingsData() {
      try {
        const response = await axios.get(`http://localhost:5050/categories/${id}`);
        console.log('Listings Data:', response.data);
        setListings(response.data.listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    }

    getListingsData();
  }, [id]);

  console.log('Listings:', listings);

  return (
    <div>
      <h2>Category Item Page</h2>
      <p>Category ID: {id}</p>
      <ul className='listings-list'>
        {listings.map((listing) => (
          <li key={listing.listing_id}>
           <img src={`http://localhost:5050/listings-images/${listing.image}`} alt={`Listing ${listing.listing_id}`} />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryItemPage;
