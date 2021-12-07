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
      errors,
      dot,
      ...rest
    },
    ref,
  ) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-normal ">
          {label}
          {dot && <span className="text-red-500 pl-0.5">*</span>}
        </label>
        <div className="relative mt-1">
          <input
            {...rest}
            type={type}
            name={id}
            id={id}
            readOnly={readOnly}
            aria-required={dot}
            aria-invalid={!!errors[id]}
            className={classNames(
              readOnly
                ? 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40'
                : errors[id]
                ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
                : 'focus:ring-primary-500 border-gray-300 focus:border-primary-500',
              'block w-full rounded-md shadow-sm text-black ',
            )}
            placeholder={placeholder}
            aria-describedby={id}
            ref={ref}
          />

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
