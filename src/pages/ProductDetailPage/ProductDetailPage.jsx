import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../ProductDetailPage/ProductDetailPage.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Chart from 'chart.js/auto';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isBorrowed, setBorrowed] = useState(false);
  const [myChart, setMyChart] = useState(null);
  const chartRef = useRef(null);

  const calculateCarbonFootprint = useCallback(async () => {
    try {
      if (!product) {
        console.error('Product data is not available.');
        return;
      }

      const response = await axios.post('http://localhost:5050/listings/calculate-carbon-footprint', {
        listing_weight: product.listing_weight,
        listing_material: product.listing_material,
      });

      const savedCarbonFootprint = (response.data.carbonFootprint || 0) * 0.2;

      setBorrowed(true);

      if (myChart) {
        // If chart already exists, update data
        myChart.data.labels = ['Carbon Footprint (kg CO2)', 'Saved Carbon Footprint (kg CO2)'];
        myChart.data.datasets[0].data = [response.data.carbonFootprint || 0, savedCarbonFootprint];
        myChart.update();
      } else {
        // If chart does not exist, create a new one
        const newChart = new Chart(chartRef.current, {
          type: 'doughnut',
          data: {
            labels: ['Carbon Footprint (kg CO2)', 'Saved Carbon Footprint (kg CO2)'],
            datasets: [
              {
                data: [response.data.carbonFootprint || 0, savedCarbonFootprint],
                backgroundColor: ['#36A2EB', '#4CAF50'],
                hoverBackgroundColor: ['#36A2EB', '#4CAF50'],
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Carbon Footprint',
                font: {
                  size: 16,
                },
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function (context) {
                    const label = context.label || '';
                    const value = context.formattedValue;
                    return label + ': ' + value + ' kg CO2';
                  },
                },
              },
            },
          },
        });

        setMyChart(newChart);
      }
    } catch (error) {
      console.error('Error calculating carbon footprint:', error);

      if (error.response) {
        console.error('Error response:', error.response.data);
      }
    }
  }, [product, myChart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/listings/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  // Trigger chart creation when isBorrowed state is updated
  useEffect(() => {
    if (isBorrowed) {
      calculateCarbonFootprint();
    }
  }, [isBorrowed, calculateCarbonFootprint]);

  return (
    <>
      <Header />
      <div className='update-button-container'>
      <Link to={`/edit-listing/${id}`} className="update-button">
          Update ?
        </Link>
      </div>
      <div className="product-detail-container">
        {product ? (
          <>
            <div className="product-image">
              <img src={`http://localhost:5050/listings-images/${product.image}`} alt={product.listing_name} />
            </div>
            <div className="product-details">
              <h3>{product.listing_name}</h3>
              <p className="location">Location: {product.location}</p>
              <p className="availability">Availability: {product.availability}</p>
              <p className="price">Price: ${product.listing_borrow_price}</p>
              <p className="details-label">Contact Information:</p>
              <p>Email: {product.email}</p>
              <p>Address: {product.address}</p>
              <p>Location: {product.location}</p>
              {!isBorrowed && (
                <button className="borrow-button" onClick={() => setBorrowed(true)}>
                  Borrow
                </button>
              )}
              {isBorrowed && (
                <div className="donut-graph">
                  <canvas ref={chartRef}></canvas>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
