import { forwardRef } from 'react'
import { HiExclamationCircle } from 'react-icons/hi'

import { classNames } from '@/lib/helper'

const Input = forwardRef(
  (
    {
      label,
      placeholder = '',
      helperText = '',
      id,
      type = 'text',
      readOnly = false,
      errors = [],
      dot,
      ...rest
    },
    ref,
  ) => {
    function typeStyle(type) {
      switch (type) {
        case 'radio':
          return 'text-purple-600 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 dark:focus:ring-gray-300'
        case 'checkbox':
          return 'text-purple-600 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 rounded dark:focus:ring-gray-300'
        default:
          return 'w-full rounded-md text-black'
      }
    }
    return (
      <div>
        {type === 'text' && (
          <label htmlFor={id} className="block text-sm font-normal ">
            {label}
            {dot && <span className="text-red-500 pl-0.5">*</span>}
          </label>
        )}

        <div className="relative mt-1">
          <input
            {...rest}
            type={type}
            name={id}
            id={id}
            aria-required={dot}
            aria-invalid={!!errors[id]}
            className={classNames(
              typeStyle(type),
              readOnly
                ? 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40'
                : errors[id]
                ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
                : 'focus:ring-primary-500 border-gray-300 focus:border-primary-500 shadow-sm',
            )}
            placeholder={placeholder}
            aria-describedby={id}
            ref={ref}
            readOnly={readOnly}
            disabled={readOnly}
          />

          {type !== 'text' && (
            <>
              <label htmlFor={id} className="ml-2 align-middle">
                {label}
                {dot && <span className="text-red-500 pl-0.5">*</span>}
              </label>
            </>
          )}

          {errors[id] && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <HiExclamationCircle className="text-xl text-red-500" />
            </div>
          )}
        </div>

        <div className="mt-1">
          {helperText !== '' && (
            <div className="mb-2 text-xs text-gray-500">{helperText}</div>
          )}
          {errors[id] && (
            <span className="text-sm text-red-500">{errors[id].message}</span>
          )}
        </div>
      </div>
    )
  },
)

export default Input
