const allEventListReducer = (state = [], action) => {
    switch (action.type) {
      case 'ALL_EVENTS_LIST':
        return action.payload;
      default: return state;
    }
  };
  
  export default allEventListReducer;