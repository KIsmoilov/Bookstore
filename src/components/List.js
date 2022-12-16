import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { listOfBooks } from '../redux/books/books';

const List = () => {
  const books = useSelector(listOfBooks);
  return (
    <div className="bookList">
      {books.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
};

export default List;
