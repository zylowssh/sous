import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TarifsFaqSection from './TarifsFaqSection';

describe('TarifsFaqSection', () => {
  it('opens and closes pricing answers', () => {
    render(<TarifsFaqSection />);

    const setupQuestion = screen.getByRole('button', { name: /frais de mise en place/i });
    fireEvent.click(setupQuestion);
    expect(setupQuestion).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/aucun frais de mise en place/i)).toBeVisible();

    fireEvent.click(setupQuestion);
    expect(setupQuestion).toHaveAttribute('aria-expanded', 'false');
  });
});
