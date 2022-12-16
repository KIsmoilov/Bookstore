import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from './pages/Categories';
import Books from './pages/Home';
import { DisplayBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  dispatch(DisplayBooks()).unwrap();

  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
