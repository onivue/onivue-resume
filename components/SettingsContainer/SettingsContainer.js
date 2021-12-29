import { Transition } from '@headlessui/react'

const SettingsContainer = ({ show, children, className }) => {
  return (
    <Transition
      appear={true}
      // as={Fragment}
      show={show}
      enter=" transition ease-out  duration-150 transform delay-150"
      enterFrom="translate-y-24 opacity-0 "
      enterTo="opacity-100 "
      leave="transition-all ease-in duration-150 transform"
      leaveFrom="opacity-100 "
      leaveTo="opacity-0 "
      className={className}
    >
      {children}
    </Transition>
  )
}

export default SettingsContainer
