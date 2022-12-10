/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author }) => (
  <li>
    <h3>{title}</h3>
    <p>
      {author}
    </p>
    <button type="submit">Remove</button>
  </li>
);

export default Book;
