import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
  return useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
  }, []);
}
