/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zC3am58ytnzfmIQECjdZ/books';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const DISPLAY_BOOKS = 'DISPLAY_BOOKS';

// Reducer
const books = [];

export default function bookReducer(state = books, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case DISPLAY_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
}

// Action Creators
const loadBook = (books) => {
  const jsonArr = Object.entries(books).map(([id, item]) => ({ id, ...item[0] })).sort((a, b) => {
    const fa = a.title.toLowerCase();
    const fb = b.title.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return { type: DISPLAY_BOOKS, payload: jsonArr };
};

const removeBook = (item_id) => ({ type: REMOVE_BOOK, payload: item_id });
const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const DisplayBooks = createAsyncThunk(DISPLAY_BOOKS,
  async (_, thunk) => {
    const json = await axios.get(BASE_URL);
    thunk.dispatch(loadBook(json.data));
  });

export const addBookAsync = createAsyncThunk(ADD_BOOK,
  async (payload, thunk) => {
    await axios.post(BASE_URL, payload);
    return thunk.dispatch(addBook(payload));
  });

export const removeBookAsync = createAsyncThunk(REMOVE_BOOK,
  async (item_id, thunk) => {
    await axios.delete(`${BASE_URL}/${item_id}`);
    return thunk.dispatch(removeBook(item_id));
  });

export const listOfBooks = (state) => state.books;
