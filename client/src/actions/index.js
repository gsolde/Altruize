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

export const getTags = () => {
  return {
    type: 'GET_TAGS',
  };
};

// export const getTagsSuccess = (tags) => {
//   return {
//     type: 'GET_TAGS_SUCCESS',
//     data: tags
//   };
// };

// export const getTagsError = (error) => {
//   return {
//     type: 'GET_TAGS_ERROR',
//     error
//   };
// };
