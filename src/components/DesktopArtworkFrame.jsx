import { useEffect, useRef, useState } from 'react';
import Section from './Section';

const ARTBOARD_WIDTH = 1440;
const STACKED_SECTION_CLASS = '!min-h-0 lg:!min-h-[100vh]';

export default function DesktopArtworkFrame({
  id,
  background,
  backgroundClass,
  children,
  artworkOffsetY = 0,
  first = false,
  fitContent = false,
  height = 810,
  stack = true,
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / ARTBOARD_WIDTH));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const update = () => setScale(container.clientWidth / ARTBOARD_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const firstSectionClass = first ? ' lg:rounded-t-none lg:shadow-none' : '';
  const heightClass = fitContent ? '!min-h-0' : STACKED_SECTION_CLASS;

  return (
    <Section id={id} bg={backgroundClass} stack={stack} className={heightClass + firstSectionClass}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: height * scale, background }}
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: ARTBOARD_WIDTH,
            height,
            transform: `scale(${scale}) translateY(${artworkOffsetY}px)`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </Section>
  );
}
