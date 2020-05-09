const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function getAllTags() {
  const response = await fetch(`${API_URL}/tags`);
  const tags = await response.json();
  // if it worked
  // dispatch(getTagsSuccess(tags))

  // if fails
  // getTagsFail(e)
  return tags;
};