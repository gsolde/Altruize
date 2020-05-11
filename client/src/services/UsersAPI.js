const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function getUserByName (user) {
  const response = await fetch(`${API_URL}/users/getUserByName`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export async function getUserById (user) {
  const response = await fetch(`${API_URL}/users/getUserById`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};
export async function getUserLogin (user) {
  const response = await fetch(`${API_URL}/users/getUserLogin`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export async function addEventToUser (event) {
  const response = await fetch(`${API_URL}/users/addEventToUser`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return response.json();
};
export async function deleteEventFromUser (event) {
  const response = await fetch(`${API_URL}/users/deleteEventFromUser`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return response.json();
};

export async function addUser (user) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};
