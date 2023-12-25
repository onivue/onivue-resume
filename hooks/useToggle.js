import { useCallback, useState } from 'react';

/**
 * Returns a stateful boolean, and a function to toggle it.
 * @example
 *      const [ isLoading, toggleLoading ] = useToggle();
 *      toggleLoading()
 * @returns {boolean} the toggle state
 * @returns {function} the toggle function
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
