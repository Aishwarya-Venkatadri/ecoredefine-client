import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'; 
import './App.scss';

function App() {
    return(
    <Router>
    <Header />
  </Router>
    )

}
export default App;