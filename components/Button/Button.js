import { classNames } from '@/lib/helper'
import { forwardRef } from 'react'

const baseStyle = classNames(
  'align-bottom inline-flex items-center justify-center',
  'cursor-pointer leading-5',
  'transition ease-in duration-150 font-medium',
)

const styles = {
  primary: {
    base: 'text-white bg-primary-600 border border-transparent',
    active:
      'active:bg-primary-600 hover:bg-primary-700 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  secondary: {
    base: 'text-primary-600 bg-primary-100 border border-transparent',
    active:
      'active:bg-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  link: {
    base: 'text-primary-600 border border-transparent',
    active:
      'active:bg-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
}
const sizes = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
}
export const Button = forwardRef(
  (
    {
      type = 'primary',
      rounded,
      size,
      disabled,
      className = '',
      children,
      ...props
    },
    ref,
  ) => (
    <button
      {...props}
      disabled={disabled}
      ref={ref}
      className={classNames(
        className,
        baseStyle,
        rounded ? 'rounded-full' : 'rounded-md',
        sizes[size] || sizes.md,
        styles[type].base || styles.primary,
        disabled ? styles[type].disabled : styles[type].active,
      )}
    >
      {children}
    </button>
  ),
)
export const OutlineButton = forwardRef(
  ({ children, color, ...props }, ref) => {
    const colorsOutline = {
      primary: `border-blue-700 border-2 text-blue-700 active:bg-blue-700 active:text-white`,
      success: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
      danger: `border-red-600 border-2 text-red-600 active:bg-red-600 active:text-white`,
      dark: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
      warning: `border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white`,
      indigo: `border-primary-900 border-2 text-primary-900 active:bg-primary-900 active:text-white`,
    }
    return (
      <button
        {...props}
        className={`${colorsOutline[color]} focus:outline-none shadow rounded-md px-4 py-2 font-medium m-1.5 `}
      >
        {children}
      </button>
    )
  },
)

export default Button
