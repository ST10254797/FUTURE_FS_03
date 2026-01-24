import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Disciplines from './pages/Disciplines'; // Updated import
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* The new Disciplines route */}
            <Route path="/disciplines" element={<Disciplines />} />

            <Route path ="/gallery" element={<Gallery />} />
            
            {/* Fallback route to Home for undefined paths */}
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;