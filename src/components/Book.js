import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{book.category}</p>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <ul>
        <li><button type="submit">Comments</button></li>
        <li><button type="submit" onClick={() => { dispatch(removeBook(book.id)); }}>Remove</button></li>
        <li><button type="submit">Edit</button></li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
};
