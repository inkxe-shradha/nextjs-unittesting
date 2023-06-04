import { renderHook } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';
import { act } from 'react-dom/test-utils';

describe('useCounterHook', () => {
  it('Should render the initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it('Should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  /**
   * act functions
   *
   * * It update the utils before the assertions, like fetch api, update state, user events, etc
   */
  it('Should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  it('Should decrement the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(9);
  });
});
