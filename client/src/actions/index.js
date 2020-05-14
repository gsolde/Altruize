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
    type: 'EVENT_SELECTION_BUTTON', // EVENT_SELECTION_BUTTON
    payload: selection,
  };
};

export const eventSelection = (selection) => {
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
export const currentEventInfo = (selection) => {
  return {
    type: 'EVENT_INFO',
    payload: selection,
  };
};

export const allEventsList = (allEventsList) => {
  return {
    type: 'ALL_EVENTS_LIST',
    payload: allEventsList
  };
};

export const myEventsList = (myEventsList) => {
  return {
    type: 'MY_EVENTS_LIST',
    payload: myEventsList
  };
};

export const searchedEventsList = (searchedEventsList) => {
  return {
    type: 'SEARCHED_EVENTS_LIST',
    payload: searchedEventsList

  };
};

export const orgEventsList = (orgEventsList) => {
  return {
    type: 'ORG_EVENTS_LIST',
    payload: orgEventsList
  };
};


