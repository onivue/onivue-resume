import { forwardRef } from 'react'
import { HiExclamationCircle } from 'react-icons/hi'

import { classNames } from '@/lib/helper'

const TextArea = forwardRef(
  (
    {
      label,
      placeholder = '',
      helperText = '',
      id,
      readOnly = false,
      errors = {},
      dirtyFields = {},
      dot,
      ...rest
    },
    ref,
  ) => {
    const baseStyle = 'transition ease-in duration-150 ease-in'
    const styles = {
      base: 'w-full rounded-md text-black shadow-md block dark:bg-dark-200 dark:text-white',
      active:
        'focus:ring-primary-300 focus:border-primary-200 focus:shadow-primary-200 dark:shadow-none',
      disabled:
        'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
      error:
        'focus:ring-red-500 border-red-500 focus:border-red-500 shadow-red-300',
    }
    return (
      <div className="py-2">
        <label htmlFor={id} className="block text-sm font-semibold ">
          {label}
          {dot && <span className="text-red-500 pl-0.5">*</span>}
          {dirtyFields[id] && <span className="text-blue-500 pl-0.5">*</span>}
        </label>
        <div className="relative mt-1">
          <textarea
            {...rest}
            name={id}
            id={id}
            readOnly={readOnly}
            aria-required={dot}
            aria-invalid={!!errors[id]}
            className={classNames(
              baseStyle,
              styles.base,
              readOnly
                ? styles.disabled
                : errors[id]
                ? styles.error
                : styles.active,
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
        {(helperText !== '' || errors[id]?.message) && (
          <div className="p-1 pl-2">
            {helperText !== '' && (
              <div className="mb-2 text-xs text-gray-500">{helperText}</div>
            )}
            {errors[id] && (
              <span className="text-sm text-red-500">{errors[id].message}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

export default TextArea
