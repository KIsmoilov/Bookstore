/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, DisplayBooks } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const {
    title, author, category, item_id,
  } = book;

  useEffect(() => {
    dispatch(DisplayBooks());
  });

  return (
    <>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul>
          <li><button type="submit">Comments</button></li>
          <li>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeBook(item_id));
              }}
            >
              Remove
            </button>

          </li>
          <li><button type="submit">Edit</button></li>
        </ul>
      </div>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
