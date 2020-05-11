const orgInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORG_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default orgInfoReducer;
