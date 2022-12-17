import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, DisplayBooks } from '../redux/books/books';
import './Book.css';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const {
    title, author, category, id,
  } = book;

  useEffect(() => {
    dispatch(DisplayBooks());
  }, [dispatch]);

  return (
    <div className="listContainer">
      <div className="eachBookList">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul className="btn-list">
          <li><button className="btn-one" type="submit">Comments</button></li>
          <li>
            <button
              className="btn-two"
              type="button"
              onClick={() => {
                dispatch(removeBookAsync(id));
                dispatch(DisplayBooks());
              }}
            >
              Remove
            </button>
          </li>
          <li><button className="btn-three" type="submit">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div className="progress-chart">
          <div className="chart" />
          <div className="status">
            <p className="percent">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="chapter">
          <p className="current-chap">CURRENT CHAPTER</p>
          <p className="chap-num">Chapter 15</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
