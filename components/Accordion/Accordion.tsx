import { classNames } from '@/lib/helper';
import { Disclosure, Transition } from '@headlessui/react';
import { HiChevronUp } from 'react-icons/hi';

export default function Accordion({
  title,
  children,
  style = 'primary',
  defaultOpen,
  className,
  menu,
  renameInput,
  showRename,
}) {
  const styles = {
    primary:
      'focus-visible:ring-primary-200 dark:text-inherit text-primary-900 bg-white dark:bg-transparent hover:bg-primary-200 border-2 border-primary-300',
    secondary:
      'focus-visible:ring-primary-500 text-primary-900 dark:text-inherit bg-primary-100 hover:bg-primary-200 dark:bg-transparent font-medium text-sm dark:border',
  };
  return (
    <Disclosure as="div" className={className} defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <div
            className={classNames(
              styles[style],
              'flex w-full justify-between rounded-lg px-2  py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            {menu}
            {showRename && renameInput}
            <Disclosure.Button className={classNames('flex justify-between ', !showRename && 'w-full')}>
              {!showRename && <span>{title}</span>}
            </Disclosure.Button>

            <Disclosure.Button className={classNames('flex justify-between ', !showRename && '')}>
              <div className="flex self-center">
                <HiChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
              </div>
            </Disclosure.Button>
          </div>
          <Disclosure.Panel
            className={`transition-all duration-300  ${open ? 'max-h-[10000px] opacity-100 ' : 'max-h-0 opacity-0'} `}
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
              <div className={classNames('mt-2', style === 'primary' && '')}>{children}</div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
