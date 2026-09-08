import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useComponentGenerator } from './useComponentGenerator';

describe('useComponentGenerator', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should load components from localStorage on mount', () => {
    const mockComponents = [
      {
        id: 'test-1',
        prompt: 'Test prompt',
        code: '<div>Test</div>',
        createdAt: new Date('2024-01-01'),
      },
    ];
    localStorage.setItem('rcg_components', JSON.stringify(mockComponents));

    const { result } = renderHook(() => useComponentGenerator());

    expect(result.current.components).toHaveLength(1);
    expect(result.current.components[0].prompt).toBe('Test prompt');
  });

  it('should save empty components array to localStorage on initial render', () => {
    const { result } = renderHook(() => useComponentGenerator());

    const stored = localStorage.getItem('rcg_components');
    expect(stored).toBe('[]');
    expect(result.current.components).toEqual([]);
  });

  it('should handle empty localStorage gracefully', () => {
    const { result } = renderHook(() => useComponentGenerator());

    expect(result.current.components).toEqual([]);
  });

  it('should restore Date objects correctly from localStorage', () => {
    const testDate = '2024-01-15T10:30:00.000Z';
    const mockComponents = [
      {
        id: 'test-3',
        prompt: 'Test',
        code: '<div></div>',
        createdAt: testDate,
      },
    ];
    localStorage.setItem('rcg_components', JSON.stringify(mockComponents));

    const { result } = renderHook(() => useComponentGenerator());

    expect(result.current.components[0].createdAt).toBeInstanceOf(Date);
  });
});
