const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';


export async function getAllActiveEvents() {
  const response = await fetch(`${API_URL}/events/active`);
  return response.json();
};

export async function getAllPastEvents() {
  const response = await fetch(`${API_URL}/events/past`);
  return response.json();
};


export async function addEvent(body) {
  console.log("addEvent -> body", JSON.stringify(body))
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

//TODO update the relationship between event and org when creating event.
