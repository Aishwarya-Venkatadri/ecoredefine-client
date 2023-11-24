import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Hero from './components/Hero.jsx/Hero';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

function App() {
    return(
    <Router>
    <Header />
   <Hero />
   <HomePage />
    <Footer />
  </Router>
    )

}
export default App;
