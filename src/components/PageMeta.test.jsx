import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageMeta from './PageMeta';

describe('PageMeta', () => {
  it('updates the document metadata for a route', async () => {
    render(<PageMeta title="Tarifs | Sous" description="Des tarifs clairs." path="/tarifs" />);

    await waitFor(() => expect(document.title).toBe('Tarifs | Sous'));
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Des tarifs clairs.');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://sous-app.fr/tarifs');
  });
});
