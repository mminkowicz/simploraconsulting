import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// Lazy load heavy components
const Services = React.lazy(() => import('./components/Services'));
const Transformation = React.lazy(() => import('./components/Transformation'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const CTA = React.lazy(() => import('./components/CTA'));
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail'));
const OurTeam = React.lazy(() => import('./components/OurTeam'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Transformation />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CTA />
      </Suspense>
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
          <Route path="/services/:serviceId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServiceDetail />
            </Suspense>
          } />
          <Route path="/team" element={
            <Suspense fallback={<LoadingSpinner />}>
              <OurTeam />
            </Suspense>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
