// @ts-nocheck
import { forwardRef } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

import { classNames } from '@/lib/helper';

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
      iconRight,
      iconLeft,
      ...rest
    },
    ref,
  ) => {
    const baseStyle = 'transition duration-150 ease-in focus:outline-none dark:shadow-none';
    const styles = {
      text: {
        base: 'w-full rounded-md text-black dark:bg-dark-200 dark:text-white',
        active: 'focus:ring-primary-300 focus:border-primary-200 ',
        disabled: 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error: 'focus:ring-red-500 border-red-500 focus:border-red-500',
      },
      file: {
        base: 'block w-full text-sm text-gray-500 dark:text-white file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 hover:file:ring-2 hover:file:ring-primary-300 ',
        active: 'file:focus:ring-primary-300 file:focus:ring-2 file:focus:border-primary-200 file rounded p-1 ',
        disabled: 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300 text-opacity-40',
        error: 'focus:ring-red-500 border-red-500 focus:border-red-500 ',
      },
      radio: {
        base: 'text-primary-400 focus:border-primary-300 ',
        active: 'focus:ring-primary-300 focus:border-primary-200',
        disabled: 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error: 'focus:ring-red-500 border-red-500 focus:border-red-500 ',
      },
      checkbox: {
        base: 'text-primary-400 focus:border-primary-300  rounded',
        active: 'focus:ring-primary-300 focus:border-primary-200',
        disabled: 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300  text-opacity-40',
        error: 'focus:ring-red-500 border-red-500 focus:border-red-500',
      },
    };

    const resolveObjectPath = (object, path) => {
      return path
        .replace(/\[/g, '.')
        .replace(/\]/g, '')
        .split('.')
        .reduce((o, k) => (o || {})[k], object);
    };

    return (
      <div className="pb-2">
        {(type === 'text' || type === 'file') && (
          <label htmlFor={id} className="block text-sm font-semibold">
            {label}
            {dot && <span className="pl-0.5 text-red-500">*</span>}
            {dirtyFields[id] && <span className="pl-0.5 text-blue-500">*</span>}
          </label>
        )}

        <div className="relative mt-1">
          <input
            {...rest}
            type={type}
            name={id}
            id={id}
            aria-required={dot}
            // aria-invalid={!!errors[id]}
            aria-invalid={!!resolveObjectPath(errors, id)}
            className={classNames(
              baseStyle,
              styles[type].base,
              readOnly
                ? styles[type].disabled
                : // : errors[id]
                  resolveObjectPath(errors, id)
                  ? styles[type].error
                  : styles[type].active,
              iconLeft && 'pl-12',
              iconRight && 'pr-12',
            )}
            placeholder={placeholder}
            aria-describedby={id}
            ref={ref}
            readOnly={readOnly}
            disabled={readOnly}
          />
          {/* {!dot && (
            <div
              htmlFor={id}
              className="absolute right-0 self-center w-12 mr-4 text-sm font-semibold text-center"
            >
              {label}
              <HiExclamationCircle className="text-xl text-red-500" />
            </div>
          )} */}

          {type !== 'text' && type !== 'file' && (
            <label htmlFor={id} className="ml-2 align-middle text-sm font-semibold">
              {label}
              {dot && <span className="pl-0.5 text-red-500">*</span>}
              {dirtyFields[id] && <span className="pl-0.5 text-blue-500">has changes</span>}
            </label>
          )}

          {iconLeft && (
            <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center ">{iconLeft}</div>
          )}
          {(resolveObjectPath(errors, id) || iconRight) && (
            <div className="absolute inset-y-0 right-0 flex w-12 items-center justify-center ">
              {resolveObjectPath(errors, id) && <HiExclamationCircle className="text-xl text-red-500" />}
              {iconRight && iconRight}
            </div>
          )}
        </div>
        {(helperText !== '' || errors[id]?.message) && (
          <div className="p-2">
            {helperText !== '' && <div className="text-xs text-gray-500">{helperText}</div>}
            {errors[id] && <span className="text-sm text-red-500">{errors[id].message}</span>}
          </div>
        )}
      </div>
    );
  },
);

export default Input;
