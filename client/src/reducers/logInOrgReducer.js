const isLoggedInOrgReducer = (state = 5, action) => {
  switch (action.type) {
    case 'LOG_IN_ORG':
      return action.payload;
    default: return state;
  }
};

export default isLoggedInOrgReducer;