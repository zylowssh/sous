import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExemplesGridSection from './ExemplesGridSection';

describe('ExemplesGridSection', () => {
  it('lets visitors filter the restaurant examples', () => {
    render(<ExemplesGridSection />);

    const japanese = screen.getByRole('button', { name: 'JAPONAIS' });
    fireEvent.click(japanese);

    expect(japanese).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Filtre actif : japonais')).toBeInTheDocument();
    expect(screen.getByText('TOUS')).toHaveAttribute('aria-pressed', 'false');
  });
});
