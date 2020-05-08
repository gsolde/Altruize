const isLoggedInUserReducer = (state = 2, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return action.payload;
    default: return state;
  }
};

export default isLoggedInUserReducer;