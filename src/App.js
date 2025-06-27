import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Transformation />
      <Testimonials />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
