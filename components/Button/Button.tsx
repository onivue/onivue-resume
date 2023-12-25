// @ts-nocheck
import { classNames } from '@/lib/helper';
import { forwardRef } from 'react';

const baseStyle = classNames(
  'align-bottom inline-flex items-center justify-center',
  'cursor-pointer leading-5',
  'transition ease-in duration-150 font-medium focus:outline-none',
);

const styles = {
  primary: {
    base: 'text-white bg-primary-600 border border-transparent',
    active: 'active:bg-primary-600 hover:bg-primary-700 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  secondary: {
    base: 'text-primary-600 bg-primary-100 border border-transparent',
    active: 'active:bg-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  link: {
    base: 'text-primary-600 border border-transparent',
    active: 'active:bg-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
};
const sizes = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef(
  ({ style = 'primary', rounded = false, size, disabled, className = '', children, ...rest }, ref) => (
    <button
      {...rest}
      disabled={disabled}
      ref={ref}
      className={classNames(
        className,
        baseStyle,
        rounded ? 'rounded-full' : 'rounded-md',
        sizes[size] || sizes.md,
        styles[style].base || styles.primary,
        disabled ? styles[style].disabled : styles[style].active,
      )}
    >
      {children}
    </button>
  ),
);

export default Button;
