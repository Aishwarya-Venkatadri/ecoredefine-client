import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CategoryItemPage from './pages/CategoryItemPage/CategoryItemPage';
import './App.scss';
import OurStory from './pages/OurStory/OurStory';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import AddListingsPage from './pages/AddListingPage/AddListingPage';
import EditListingPage from './pages/EditListingPage/EditListingPage';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Blogs from './components/Blogs/Blogs'

function App() {
    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryItemPage />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path='/listings/:id' element={<ProductDetailPage />} />
      <Route path='/add-listing' element={<AddListingsPage />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path="/edit-listing/:id" element={<EditListingPage />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    )
    
}
export default App;
