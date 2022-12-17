import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus, bookCategory } from '../redux/categories/categories';
import './pages.css';

const Categories = () => {
  const showCategory = useSelector(bookCategory);
  const dispatch = useDispatch();

  return (
    <div className="categ-Container">
      <h1 className="categoryStatus">
        {showCategory}
      </h1>
      <button type="button" className="cat-Btn" onClick={() => dispatch(checkStatus())}>CHECK STATUS</button>
    </div>
  );
};

export default Categories;
