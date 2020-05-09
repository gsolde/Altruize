const eventListSelectorReducer = (state = "ALL EVENTS", action) => {
  switch (action.type) {
    case 'EVENT_SELECTION':
      return action.payload;
    default: return state;
  }
};

export default eventListSelectorReducer;