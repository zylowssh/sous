import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('offers a clear way back home', () => {
    render(<MemoryRouter><NotFoundPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: /cette table n’existe pas/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /retour à l’accueil/i })).toHaveAttribute('href', '/');
  });
});
