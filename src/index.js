import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './reset.scss';
import './index.scss';
import Home from './Route/Home';
import GamePage from './Route/GamePage';
import Instructions from './Route/Instructions';
import AboutUs from './Route/AboutUs';
import Header from './Component/Header';
import Footer from './Component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);
