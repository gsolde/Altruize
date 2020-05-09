export const isUserLoggedIn = () => {
  return {
    type: 'LOG_IN'
  };
};

export const userId = (id) => {
  return {
    type: 'LOG_IN_USER',
    payload: id
  };
};

export const orgId = (id) => {
  return {
    type: 'LOG_IN_ORG',
    payload: id
  };
};

export const eventSelection = (selection) => {
  return {
    type: 'EVENT_SELECTION',
    payload: selection
  }
};
