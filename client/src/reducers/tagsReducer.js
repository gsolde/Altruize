import { getAllTags } from '../services/TagsAPI';

const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return getAllTags();
      // return tags
    // case 'GET_TAGS_SUCCESS':
    //   const tags = action.data
    //   return tags
    // case 'GET_TAGS_ERROR':
    //   const error = action.error
    //   //
    //   return error
    default: return state;
  }
};

export default tagsReducer;