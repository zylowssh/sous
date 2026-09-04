import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('opens the mobile menu and exposes real route links', () => {
    render(<MemoryRouter initialEntries={['/exemples']}><Navbar /></MemoryRouter>);

    const toggle = screen.getByRole('button', { name: /ouvrir le menu/i });
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('link', { name: 'Tarifs' })[0]).toHaveAttribute('href', '/tarifs');
    expect(screen.getAllByRole('link', { name: 'Exemples' })[0]).toHaveAttribute('aria-current', 'page');
    expect(screen.getAllByRole('link', { name: /commencer/i })[0]).toHaveAttribute('href', '/signup');
  });
});
