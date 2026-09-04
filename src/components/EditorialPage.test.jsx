import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import EditorialPage from './EditorialPage';
import { goToSection } from './fx';

vi.mock('./MarketingPageShell', () => ({
  // Test-only event boundary mirrors the delegated native listener in MarketingPageShell.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  default: ({ children, onMainClick }) => <main onClick={onMainClick}>{children}</main>,
}));

vi.mock('./DesktopArtworkFrame', () => ({
  default: ({ children }) => <section>{children}</section>,
}));

vi.mock('./NativeEditorialSection', () => ({
  default: () => <section>Mobile</section>,
}));

vi.mock('./fx', () => ({ goToSection: vi.fn() }));

const Sections = () => (
  <>
    <button type="button" data-route="/signup">Route explicite</button>
    <button type="button" data-scroll="details">Défilement explicite</button>
    <button type="button">Créer sans action</button>
  </>
);

const sections = [{
  id: 'hero',
  label: 'Intro',
  component: Sections,
  mobile: { eyebrow: 'Intro', title: 'Test' },
}];

describe('EditorialPage actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query.includes('min-width: 1024px'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  });

  it('uses explicit route and scroll metadata', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<EditorialPage title="Test" rootClassName="test" sections={sections} />} />
          <Route path="/signup" element={<p>Destination signup</p>} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Défilement explicite' }));
    expect(goToSection).toHaveBeenCalledWith('details');

    fireEvent.click(screen.getByRole('button', { name: 'Route explicite' }));
    expect(screen.getByText('Destination signup')).toBeInTheDocument();
  });

  it('does not infer navigation from button copy', () => {
    render(
      <MemoryRouter>
        <EditorialPage title="Test" rootClassName="test" sections={sections} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Créer sans action' }));
    expect(goToSection).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Créer sans action' })).toBeInTheDocument();
  });
});
