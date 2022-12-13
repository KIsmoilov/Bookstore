// Actions
const CHECK_STATUS = 'CHECKING_STATUS';

// Reducer
const initState = {
  categories: [],
};

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

// Action Creators
export const checkStatus = (category) => ({
  type: CHECK_STATUS,
  category,
});
