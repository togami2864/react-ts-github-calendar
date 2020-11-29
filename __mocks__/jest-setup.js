/* eslint-disable @typescript-eslint/no-empty-function */
import 'mock-local-storage';

window.getSelection = () => {
  return {
    addRange: () => {},
    removeAllRanges: () => {},
  };
};
