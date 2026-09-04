import { useEffect, useState } from 'react';

const PREFIX = 'sous.dashboard.';

export default function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const fallback = typeof initialValue === 'function' ? initialValue() : initialValue;

    if (typeof window === 'undefined') return fallback;

    try {
      const saved = window.localStorage.getItem(`${PREFIX}${key}`);
      return saved === null ? fallback : JSON.parse(saved);
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    } catch {
      // The dashboard remains usable when storage is blocked or full.
    }
  }, [key, value]);

  return [value, setValue];
}
