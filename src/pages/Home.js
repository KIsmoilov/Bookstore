import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './pages.css';

const Books = () => (
  <div className="bookContainer">
    <List />
    <hr />
    <Form />
  </div>
);

export default Books;
