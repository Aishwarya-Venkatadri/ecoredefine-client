import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CategoryItemPage from './pages/CategoryItemPage/CategoryItemPage';
import './App.scss';
import OurStory from './pages/OurStory/OurStory';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import AddListingsPage from './pages/AddListingPage/AddListingPage';

function App() {
    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryItemPage />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path='/listings/:id' element={<ProductDetailPage />} />
      <Route path='/add-listing' element={<AddListingsPage />} />
      </Routes>
      </BrowserRouter>
    )
    
}
export default App;
