const searchedEventListReducer = (state = null, action) => {
    switch (action.type) {
      case 'SEARCHED_EVENTS_LIST':
        return action.payload;
      default: return state;
    }
  };
  
  export default searchedEventListReducer;