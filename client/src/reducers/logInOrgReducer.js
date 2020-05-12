const isLoggedInOrgReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOG_IN_ORG':
      return action.payload;
    default: return state;
  }
};

export default isLoggedInOrgReducer;