import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Books from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
