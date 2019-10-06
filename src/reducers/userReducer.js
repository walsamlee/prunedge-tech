const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return { ...state, fetching: true };
    }
    case 'RETURN_USER': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.json,
      };
    }
    case 'GET_USER_ERROR': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};