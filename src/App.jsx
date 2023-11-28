import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CategoryItemPage from './pages/CategoryItemPage/CategoryItemPage';
import './App.scss';
import OurStory from './pages/OurStory/OurStory';

function App() {
    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryItemPage />} />
      <Route path="/ourstory" element={<OurStory/>} />
      </Routes>
      </BrowserRouter>
    )
    
}
export default App;
