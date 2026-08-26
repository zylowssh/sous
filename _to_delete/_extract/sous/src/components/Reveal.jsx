import { useEffect, useRef } from 'react';
import { onReady } from './ready';

const transforms = {
  up: { '--ty': '32px', '--tx': '0px' },
  down: { '--ty': '-32px', '--tx': '0px' },
  left: { '--tx': '40px', '--ty': '0px' },
  right: { '--tx': '-40px', '--ty': '0px' },
  none: { '--tx': '0px', '--ty': '0px' },
};

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let io;
    const cancel = onReady(() => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            io.unobserve(el);
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      io.observe(el);
    });

    return () => {
      cancel();
      io?.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms`, ...transforms[from] }}>
      {children}
    </div>
  );
}
