// Actions
const CHECK_STATUS = 'CHECKING_STATUS';

// Reducer
const categories = [];

export default function categoryReducer(state = categories, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

// Action Creators
export const checkStatus = (category) => ({
  type: CHECK_STATUS,
  payload: category,
});

export const bookCategory = (state) => state.categories;
