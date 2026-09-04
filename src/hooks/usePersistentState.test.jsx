import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import usePersistentState from './usePersistentState';

describe('usePersistentState', () => {
  beforeEach(() => window.localStorage.clear());

  it('restores dashboard changes from local storage', () => {
    const first = renderHook(() => usePersistentState('site-name', 'Mamma Rosa'));

    act(() => first.result.current[1]('Chez June'));
    first.unmount();

    const second = renderHook(() => usePersistentState('site-name', 'Mamma Rosa'));
    expect(second.result.current[0]).toBe('Chez June');
  });
});
