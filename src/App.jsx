import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
//import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    
      <Layout>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Layout>
   
  );
}

export default App;
