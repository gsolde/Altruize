export const isUserLoggedIn = () => {
  return {
    type: 'LOG_IN',
  };
};

export const userId = (id) => {
  return {
    type: 'LOG_IN_USER',
    payload: id,
  };
};

export const orgId = (id) => {
  return {
    type: 'LOG_IN_ORG',
    payload: id,
  };
};

export const eventSelectionButton = (selection) => {
  return {
    type: 'EVENT_SELECTION', // EVENT_SELECTION_BUTTON
    payload: selection,
  };
};

export const tags = (selection) => {
  return {
    type: 'GET_TAGS',
    payload: selection,
  };
};

export const userInfo = (selection) => {
  return {
    type: 'USER_INFO',
    payload: selection,
  };
};

export const orgInfo = (selection) => {
  return {
    type: 'ORG_INFO',
    payload: selection,
  };
};
