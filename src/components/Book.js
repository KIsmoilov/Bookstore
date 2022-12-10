import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <h3>{title}</h3>
    <p>
      {author}
    </p>
    <button type="submit">Remove</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
