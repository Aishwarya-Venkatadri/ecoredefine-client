// AddListingsPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../AddListingPage/AddListingPage.scss';

function AddListingsPage() {
  const [formData, setFormData] = useState({
    listing_name: '',
    category_id: '',
    location: '',
    availability: '',
    user_id: 1,
    email: '',
    address: '',
    listing_weight: '',
    listing_material: '',
    listing_borrow_price: '',
  });

  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:5050/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }

    try {
      const formattedFormData = {
        ...formData,
        listing_borrow_price: parseFloat(formData.listing_borrow_price),
      };
    // eslint-disable-next-line
      const response = await axios.post('http://localhost:5050/listings/add', formattedFormData);
      setSuccessMessage('Listing added successfully!');
      setErrorMessage('');

      navigate(`/categories/${formData.category_id}`);
    } catch (error) {
      console.error('Error adding listing:', error);
      setSuccessMessage('');
      setErrorMessage('Could not add the listing. Please try again.');
    }
  };

  const isValidForm = () => {
    return (
      formData.listing_name.trim() !== '' &&
      formData.category_id !== '' &&
      formData.location.trim() !== '' &&
      formData.availability.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.listing_weight.trim() !== '' &&
      formData.listing_material.trim() !== '' &&
      formData.listing_borrow_price !== '' &&
      !isNaN(parseFloat(formData.listing_borrow_price))
    );
  };

  return (
    <>
      <div className='header-mod'>
        <Header />
      </div>
      <div className="add-listing-page">
        <div className="form-container">
          <h2>Add New Listing</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="category_id" className="form-label">Category:</label>
              <select
                id="category_id"
                name="category_id"
                className="form-input"
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.category_id} {category.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="listing_name" className="form-label">Listing Name:</label>
              <input
                type="text"
                id="listing_name"
                name="listing_name"
                className="form-input"
                value={formData.listing_name}
                onChange={(e) => setFormData({ ...formData, listing_name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location" className="form-label">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-input"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="availability" className="form-label">Availability:</label>
              <input
                type="text"
                id="availability"
                name="availability"
                className="form-input"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-input"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="listing_weight" className="form-label">Listing Weight:</label>
              <input
                type="text"
                id="listing_weight"
                name="listing_weight"
                className="form-input"
                value={formData.listing_weight}
                onChange={(e) => setFormData({ ...formData, listing_weight: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="listing_material" className="form-label">Listing Material:</label>
              <input
                type="text"
                id="listing_material"
                name="listing_material"
                className="form-input"
                value={formData.listing_material}
                onChange={(e) => setFormData({ ...formData, listing_material: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="listing_borrow_price" className="form-label">Listing Borrow Price:</label>
              <input
                type="number"
                id="listing_borrow_price"
                name="listing_borrow_price"
                className="form-input"
                value={formData.listing_borrow_price}
                onChange={(e) => setFormData({ ...formData, listing_borrow_price: e.target.value })}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Add Listing</button>
            </div>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddListingsPage;
