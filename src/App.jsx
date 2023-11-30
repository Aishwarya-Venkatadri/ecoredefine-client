import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CategoryItemPage from './pages/CategoryItemPage/CategoryItemPage';
import './App.scss';
import OurStory from './pages/OurStory/OurStory';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'

function App() {
    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryItemPage />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path='/listings/:id' element={<ProductDetailPage />} />
      </Routes>
      </BrowserRouter>
    )
    
}
export default App;
