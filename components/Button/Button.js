import { classNames } from '@/lib/helper'
import { forwardRef } from 'react'

const baseStyle = classNames(
  'align-bottom inline-flex items-center justify-center',
  'cursor-pointer leading-5',
  'transition ease-in duration-150 font-medium',
)

const colors = {
  // primary: {
  //   base: 'bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-indigo-100 text-white',
  //   active:
  //     'active:bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-300',
  //   disabled: 'opacity-50 cursor-not-allowed',
  // },
  primary: {
    base: 'text-white bg-purple-600 border border-transparent',
    active:
      'active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  secondary: {
    base: 'text-purple-600 bg-purple-100 border border-transparent',
    active:
      'active:bg-purple-200 hover:bg-purple-200 focus:ring focus:ring-purple-300',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  link: `bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 focus:ring-offset-gray-100 text-indigo-600 
  hover:bg-gray-200 focus:outline-none`,
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
        colors[type].base || colors.primary,
        disabled ? colors[type].disabled : colors[type].active,
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
      indigo: `border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white`,
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
