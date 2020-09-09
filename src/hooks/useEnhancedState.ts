import React from 'react';

function useEnhancedState<T>(state: T): [T, (updatedValues: Partial<T>) => void] {
  const [_state, _setState] = React.useState<T>(state);

  const setState = React.useCallback((updatedValues: Partial<T>) => {
    _setState((prevState) => ({ ...prevState, ...updatedValues }));
  }, []);

  return [_state, setState];
}

export default useEnhancedState;
