import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus, bookCategory } from '../redux/categories/categories';

const Categories = () => {
  const showCategory = useSelector(bookCategory);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" className="#" onClick={() => dispatch(checkStatus())}>Check status</button>
      <h1 className="categoryStatus">
        {showCategory}
      </h1>
    </div>
  );
};

export default Categories;
