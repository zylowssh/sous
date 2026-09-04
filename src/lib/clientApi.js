const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');
const SESSION_KEY = 'sous.session';
const WORKSPACE_KEY = 'sous.workspace';
const OUTBOX_KEY = 'sous.outbox';

const readJson = (key, fallback = null) => {
  try {
    return JSON.parse(window.localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

const post = async (path, payload) => {
  if (!API_BASE) return null;

  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'La demande n’a pas pu être envoyée.');
  }

  return response.json().catch(() => ({}));
};

const persistSession = (account) => {
  const session = {
    email: account.email,
    name: account.name || account.firstName || account.email.split('@')[0],
    createdAt: new Date().toISOString(),
  };
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
};

const addToOutbox = (type, payload) => {
  const outbox = readJson(OUTBOX_KEY, []);
  outbox.push({ id: crypto.randomUUID(), type, payload, createdAt: new Date().toISOString() });
  window.localStorage.setItem(OUTBOX_KEY, JSON.stringify(outbox));
};

export const getSession = () => readJson(SESSION_KEY);

export const clearSession = () => window.localStorage.removeItem(SESSION_KEY);

export async function login(credentials) {
  const result = await post('/auth/login', credentials);
  return persistSession(result?.user || credentials);
}

export async function createAccount(form, preferences = {}) {
  const payload = { ...form, ...preferences };
  const result = await post('/auth/signup', payload);
  const { password: _password, ...workspace } = payload;
  window.localStorage.setItem(WORKSPACE_KEY, JSON.stringify(workspace));
  if (!API_BASE) addToOutbox('signup', workspace);
  return persistSession(result?.user || { email: form.email, name: form.firstName });
}

export async function sendContactMessage(payload) {
  await post('/contact', payload);
  if (!API_BASE) addToOutbox('contact', payload);
  return { queued: !API_BASE };
}
