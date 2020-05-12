const isLoggedInUserReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return action.payload;
    default: return state;
  }
};

export default isLoggedInUserReducer;