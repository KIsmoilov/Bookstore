import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const author = e.target.elements.author.value;
          const payload = {
            item_id: uuidv4(), title, author, category: 'fiction',
          };
          dispatch(addBookAsync(payload));
          e.target.reset();
        }}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Book title"
          name="title"
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Author"
          name="author"
          required
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
