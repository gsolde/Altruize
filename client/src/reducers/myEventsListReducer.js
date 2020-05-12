const myEventListReducer = (state = [], action) => {
    switch (action.type) {
      case 'MY_EVENTS_LIST':
        return action.payload;
      default: return state;
    }
  };
  
  export default myEventListReducer;