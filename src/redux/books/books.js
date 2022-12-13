// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
const initState = {
  books: [],
};

export default function bookReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [state.filter((book) => book.id === action.payload.id)];
    default: return state;
  }
}

// Action Creators
const nextBookId = 0;
export const addBook = () => ({
  type: ADD_BOOK,
  payload: {
    title: '',
    author: '',
    id: nextBookId + 1,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});
