import classNames from 'classnames';

/**
 * Utility function to conditionally join classNames together
 */
export const cn = (...args) => {
  return classNames(...args);
};
