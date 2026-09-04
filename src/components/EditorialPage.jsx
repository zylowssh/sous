import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MarketingPageShell from './MarketingPageShell';
import NativeEditorialSection from './NativeEditorialSection';
import DesktopArtworkFrame from './DesktopArtworkFrame';
import { goToSection } from './fx';

function useDesktopArtwork() {
  const [desktop, setDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const update = () => setDesktop(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return desktop;
}

export default function EditorialPage({
  title,
  description,
  rootClassName,
  background,
  sections,
  darkSectionIds = [],
}) {
  const desktopArtwork = useDesktopArtwork();
  const navigate = useNavigate();
  const navSections = useMemo(
    () => sections.map(({ id, label }) => ({ id, label })),
    [sections],
  );

  const handleArtworkAction = (event) => {
    const action = event.target.closest('[data-route], [data-scroll]');
    if (!action) return;

    if (action.dataset.route) navigate(action.dataset.route);
    if (action.dataset.scroll) goToSection(action.dataset.scroll);
  };

  return (
    <MarketingPageShell
      title={title}
      description={description}
      rootClassName={`${rootClassName} min-h-screen w-full`}
      background={background}
      sections={navSections}
      darkSectionIds={darkSectionIds}
      mainClassName="pt-16 md:pt-20 lg:pt-0"
      onMainClick={desktopArtwork ? handleArtworkAction : undefined}
    >
      {sections.map(({ id, label: _label, component: Artwork, mobile, ...frameProps }, index) => (
        desktopArtwork ? (
          <DesktopArtworkFrame key={id} id={id} {...frameProps}>
            <Artwork />
          </DesktopArtworkFrame>
        ) : (
          <NativeEditorialSection
            key={id}
            id={id}
            index={index}
            mobile={mobile}
            background={frameProps.background}
            dark={darkSectionIds.includes(id)}
          />
        )
      ))}
    </MarketingPageShell>
  );
}
