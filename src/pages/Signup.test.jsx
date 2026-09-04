import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Signup from './Signup';

describe('Signup', () => {
  it('links existing customers to login and updates the site preview live', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);

    expect(screen.getByRole('link', { name: 'Se connecter' })).toHaveAttribute('href', '/login');

    fireEvent.change(screen.getByLabelText('Nom de votre restaurant'), { target: { value: 'Chez June' } });
    const previews = screen.getAllByRole('region', { name: 'Aperçu en direct du site' });
    previews.forEach((preview) => {
      expect(within(preview).getByText('Chez June')).toBeInTheDocument();
      expect(within(preview).getByText('chez-june.fr')).toBeInTheDocument();
      expect(within(preview).queryByRole('img')).not.toBeInTheDocument();
    });
  });
});
