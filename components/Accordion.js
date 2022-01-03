import { classNames } from '@/lib/helper'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronUp } from 'react-icons/hi'
import colors from 'tailwindcss/colors'

export default function Accordion({
  title,
  children,
  style = 'primary',
  defaultOpen,
  className,
}) {
  const styles = {
    primary:
      'focus-visible:ring-primary-500 text-primary-900 bg-primary-200 hover:bg-primary-300 font-bold text-lg',
    secondary:
      'focus-visible:ring-primary-500 text-primary-900 bg-primary-100 hover:bg-primary-200 ',
  }
  return (
    <Disclosure as="div" className={className} defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              styles[style],
              'flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            <span>{title}</span>
            <HiChevronUp
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 self-center`}
            />
          </Disclosure.Button>

          <Disclosure.Panel
            className={`transition-all duration-300  ${
              open ? 'max-h-screen opacity-100 ' : 'max-h-0 opacity-0'
            } `}
            static
          >
            <Transition
              show={open}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-95 opacity-100"
              leaveTo="transform scale-100 opacity-0"
            >
              {children}
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
