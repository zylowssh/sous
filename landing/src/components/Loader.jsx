import { useEffect } from 'react';
import { setReady } from './ready';

/**
 * Keep the reveal coordinator without holding the visitor behind a timed splash.
 * Content becomes ready on the first paint and loading is handled by the browser.
 */
export default function Loader() {
  useEffect(() => {
    const id = requestAnimationFrame(setReady);
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}
