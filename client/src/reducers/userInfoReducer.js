const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default userInfoReducer;
