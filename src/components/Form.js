import React from 'react';

const Form = () => (
  <return>
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Book title"
          name="title"
        />
        <input
          type="text"
          className="input-text"
          placeholder="Author"
          name="author"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </div>
  </return>
);

export default Form;
