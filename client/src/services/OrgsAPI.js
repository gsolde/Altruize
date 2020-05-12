const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function addOrg (body) {
  const response = await fetch(`${API_URL}/orgs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export async function getOrgById () {
  const response = await fetch(`${API_URL}/orgs/getOrgById`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('altruize-token')}`,
    },
  });
  return response.json();
};

export async function getOrgLogin (org) {
  const response = await fetch(`${API_URL}/orgs/getOrgLogin`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(org),
  });
  return response.json();
};