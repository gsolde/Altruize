const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return action.payload;
    default:
      return state;
  }
};

export default tagsReducer;
