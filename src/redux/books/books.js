// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
const books = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
    category: 'Action',
    percentage: '64',
    chapter: 'Chapter 17',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: 2,
    category: 'Science Fiction',
    percentage: '8',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,
    category: 'Economy',
    percentage: '0',
    chapter: 'Introduction',
  },
];

export default function bookReducer(state = books, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
}

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const listOfBooks = (state) => state.books;
