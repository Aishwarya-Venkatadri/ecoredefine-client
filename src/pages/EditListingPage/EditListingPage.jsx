import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderNav from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../AddListingPage/AddListingPage.scss";

function EditListingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listingData, setListingData] = useState({
    listing_name: "",
    category_id: 0,
    location: "",
    availability: "",
    user_id: 0,
    email: "",
    address: "",
    listing_weight: "",
    listing_material: "",
    listing_borrow_price: "",
  });

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchListingDetails() {
      try {
        const response = await axios.get(
          `http://localhost:5050/listings/${id}`
        );
        setListingData(response.data);

        const categoriesResponse = await axios.get(
          "http://localhost:5050/categories"
        );
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    }

    fetchListingDetails();
  }, [id]);

  const handleUpdateListing = async (e) => {
    e.preventDefault();

    try {
      const validationErrors = validateForm(listingData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      await axios.put(`http://localhost:5050/listings/${id}`, listingData);

      window.alert("Listing updated successfully!");
      navigate(`/listings/${id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.listing_name.trim()) {
      errors.listing_name = "Listing name is required";
    }

    return errors;
  };

  return (
    <>
      <div className="edit-listing-page">
        <HeaderNav />

        <div className="add-listing-page">
          <div className="form-container">
            <h2>Edit Listing</h2>
            <form onSubmit={handleUpdateListing}>
              <div className="form-group">
                <label htmlFor="category_id" className="form-label">
                  Category:
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  className={`form-input ${
                    errors.category_id ? "has-error" : ""
                  }`}
                  value={listingData.category_id}
                  onChange={(e) =>
                    setListingData({
                      ...listingData,
                      category_id: parseInt(e.target.value),
                    })
                  }
                >
                  {categories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_id}
                    >
                      {category.category_id} {category.category_name}
                    </option>
                  ))}
                </select>
                {errors.category_id && (
                  <p className="error-message">{errors.category_id}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="listing_name" className="form-label">
                  Listing Name:
                </label>
                <input
                  type="text"
                  id="listing_name"
                  name="listing_name"
                  className={`form-input ${
                    errors.listing_name ? "has-error" : ""
                  }`}
                  value={listingData.listing_name}
                  onChange={(e) =>
                    setListingData({
                      ...listingData,
                      listing_name: e.target.value,
                    })
                  }
                />
                {errors.listing_name && (
                  <p className="error-message">{errors.listing_name}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-input"
                  value={listingData.location}
                  onChange={(e) =>
                    setListingData({ ...listingData, location: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="availability" className="form-label">
                  Availability:
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  className="form-input"
                  value={listingData.availability}
                  onChange={(e) =>
                    setListingData({
                      ...listingData,
                      availability: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-input"
                  value={listingData.email}
                  onChange={(e) =>
                    setListingData({ ...listingData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-input"
                  value={listingData.address}
                  onChange={(e) =>
                    setListingData({ ...listingData, address: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="listing_weight" className="form-label">
                  Listing Weight:
                </label>
                <input
                  type="text"
                  id="listing_weight"
                  name="listing_weight"
                  className="form-input"
                  value={listingData.listing_weight}
                  onChange={(e) =>
                    setListingData({
                      ...listingData,
                      listing_weight: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="listing_material" className="form-label">
                  Listing Material:
                </label>
                <input
                  type="text"
                  id="listing_material"
                  name="listing_material"
                  className="form-input"
                  value={listingData.listing_material}
                  onChange={(e) =>
                    setListingData({
                      ...listingData,
                      listing_material: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="listing_borrow_price" className="form-label">
                  Listing Borrow Price:
                </label>
                <input
  type="number"
  id="listing_borrow_price"
  name="listing_borrow_price"
  className="form-input"
  value={listingData.listing_borrow_price}
  onChange={(e) => setListingData({ ...listingData, listing_borrow_price: parseFloat(e.target.value) })}
/>

              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn">
                  Update Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditListingPage;
