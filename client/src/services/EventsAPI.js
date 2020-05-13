const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function getAllActiveEvents() {
  const response = await fetch(`${API_URL}/events/active`);
  return response.json();
};

export async function getAllPastEvents() {
  const response = await fetch(`${API_URL}/events/past`);
  return response.json();
};

export async function filterEvents(body) {
  const response = await fetch(`${API_URL}/events/filteredActiveEvents`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const res = await response.json();
  return res;
}

export async function addEvent(body, org_id) {
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('altruize-token')}`,
    },
    body: JSON.stringify(body),
  });

  const res = await response.json();
  await addOrgToEvent(org_id, res.id)
  return res;
};

async function addOrgToEvent(org_id, event_id) {
  const body = {
    "org_id": org_id,
    "event_id": event_id
  };

  const response = await fetch(`${API_URL}/events/addOrgToEvent`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

