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
      errors = {},
      dirtyFields = {},
      dot,
      ...rest
    },
    ref,
  ) => {
    const baseStyle = 'transition duration-150 ease-in'
    const styles = {
      text: {
        base: 'w-full rounded-md text-black shadow-bold',
        active:
          'focus:ring-primary-300 focus:border-primary-200 focus:shadow-primary-200',
        disabled:
          'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error:
          'focus:ring-red-500 border-red-500 focus:border-red-500 shadow-red-300',
      },
      radio: {
        base: 'text-primary-400 focus:border-primary-300 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0',
        active:
          'focus:ring-primary-300 focus:border-primary-200 focus:shadow-primary-200',
        disabled:
          'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error:
          'focus:ring-red-500 border-red-500 focus:border-red-500 shadow-red-300',
      },
      checkbox: {
        base: 'text-primary-400 focus:border-primary-300 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0 rounded',
        active:
          'focus:ring-primary-300 focus:border-primary-200 focus:shadow-primary-200',
        disabled:
          'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error:
          'focus:ring-red-500 border-red-500 focus:border-red-500 shadow-red-300',
      },
    }

    return (
      <div>
        {type === 'text' && (
          <label htmlFor={id} className="block text-sm font-semibold">
            {label}
            {dot && <span className="text-red-500 pl-0.5">*</span>}
            {dirtyFields[id] && <span className="text-blue-500 pl-0.5">*</span>}
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
              baseStyle,
              styles[type].base,
              readOnly
                ? styles[type].disabled
                : errors[id]
                ? styles[type].error
                : styles[type].active,
            )}
            placeholder={placeholder}
            aria-describedby={id}
            ref={ref}
            readOnly={readOnly}
            disabled={readOnly}
          />

          {type !== 'text' && (
            <label
              htmlFor={id}
              className="ml-2 text-sm font-semibold align-middle"
            >
              {label}
              {dot && <span className="text-red-500 pl-0.5">*</span>}
              {dirtyFields[id] && (
                <span className="text-blue-500 pl-0.5">*</span>
              )}
            </label>
          )}
          {errors[id] && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <HiExclamationCircle className="text-xl text-red-500" />
            </div>
          )}
        </div>
        <div className="p-2">
          {helperText !== '' && (
            <div className="text-xs text-gray-500">{helperText}</div>
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
