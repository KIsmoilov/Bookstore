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
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    case `${DISPLAY_BOOKS}/fulfilled`:
      if (action.payload === '') {
        return [];
      }
      return [
        ...action.payload,
      ];
    default: return state;
  }
}

// Action Creators
export const DisplayBooks = createAsyncThunk(DISPLAY_BOOKS,
  async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    let jsonArr = Object.keys(json).map((item) => {
      json[item][0].item_id = item;
      return json[item][0];
    });
    jsonArr = jsonArr.sort((a, b) => {
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
    return jsonArr;
  });

export const addBook = createAsyncThunk(ADD_BOOK,
  async (payload) => {
    await axios.post(BASE_URL, payload);
    return payload;
  });

export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (item_id) => {
    await axios.delete(`${BASE_URL}/${item_id}`);
    return item_id;
  });

export const listOfBooks = (state) => state.books;
