import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInputPosition = (e) => {
    if (e.target.name === 'title') {
      setBook((book) => ({
        ...book,
        title: e.target.value,
      }));
    } else {
      setBook((book) => ({
        ...book,
        author: e.target.value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...book,
      id: uuidv4(),
      percent: 15,
      category: 'Economy',
      chapter: 'Introduction',
    };

    dispatch(addBook(payload));
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputPosition}
          type="text"
          className="input-text"
          placeholder="Book title"
          name="title"
          value={book.title}
          required
        />
        <input
          onChange={handleInputPosition}
          type="text"
          className="input-text"
          placeholder="Author"
          name="author"
          value={book.author}
          required
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
