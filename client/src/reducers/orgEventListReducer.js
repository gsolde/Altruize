const orgEventListReducer = (state = [], action) => {
    switch (action.type) {
      case 'ORG_EVENTS_LIST':
        return action.payload;
      default: return state;
    }
  };
  
  export default orgEventListReducer;