/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const {
    title, author, category, item_id,
  } = book;

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
              type="button"
              onClick={() => {
                dispatch(removeBookAsync(item_id));
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
