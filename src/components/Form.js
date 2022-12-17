import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/books';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();

  const containWhiteSpace = (x) => {
    const space = new RegExp(/^\s$/);
    return space.test(x.charAt(0));
  };

  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form
        className="form-container"
        onSubmit={(e) => {
          if (!containWhiteSpace(e.target.elements.title.value)
          && !containWhiteSpace(e.target.elements.author.value)) {
            e.preventDefault();
            const title = e.target.elements.title.value.trim();
            const author = e.target.elements.author.value.trim();
            const category = e.target.elements.category.value;
            const payload = {
              item_id: uuidv4(), title, author, category,
            };
            dispatch(addBookAsync(payload));
            e.target.reset();
          }
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
        <select id="bookCategory" name="category">
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Science fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
