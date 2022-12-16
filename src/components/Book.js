import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, DisplayBooks } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const {
    title, author, category, id,
  } = book;

  useEffect(() => {
    dispatch(DisplayBooks());
  }, [dispatch]);

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
                dispatch(removeBookAsync(id));
                dispatch(DisplayBooks());
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
