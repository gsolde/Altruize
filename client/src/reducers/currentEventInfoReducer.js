const currentEventInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EVENT_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default currentEventInfoReducer;
