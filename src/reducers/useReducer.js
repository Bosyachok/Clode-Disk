const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function useReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
