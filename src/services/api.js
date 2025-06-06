// src/services/api.js
const API_URL = 'http://localhost:2000';

export async function fetchUserByEmail(email) {
  const res = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}`);
  const data = await res.json();
  // Devolver el usuario si existe (o [] si no)
  return data.length ? data[0] : null;
}

export async function fetchAllSubscriptions() {
  const res = await fetch(`${API_URL}/subscriptions`);
  return res.json();
}

export async function fetchSubscriptionById(id) {
  const res = await fetch(`${API_URL}/subscriptions/${id}`);
  return res.json();
}

export async function createSubscription(sub) {
  const res = await fetch(`${API_URL}/subscriptions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sub),
  });
  return res.json();
}

export async function updateSubscription(id, sub) {
  const res = await fetch(`${API_URL}/subscriptions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sub),
  });
  return res.json();
}

export async function deleteSubscription(id) {
  const res = await fetch(`${API_URL}/subscriptions/${id}`, {
    method: 'DELETE',
  });
  return res.ok;
}
