import { Transition } from '@headlessui/react'

const SettingsContainer = ({ show, children }) => {
  return (
    <Transition
      appear={true}
      // as={Fragment}
      show={show}
      enter=" transition ease-out duration-500 transform "
      enterFrom="translate-y-24"
      enterTo="opacity-100 "
      leave="transition-all ease-in duration-500 transform"
      leaveFrom="opacity-100 "
      leaveTo="opacity-0 "
      className="absolute z-10 justify-center w-full p-4 lg:max-h-screen lg:w-3/5 lg:p-4 pb-28 lg:static lg:block"
    >
      <div className="w-full h-full overflow-auto rounded-md bg-gradient-to-b from-purple-500 to-indigo-500 no-scrollbar ">
        {children}
      </div>
    </Transition>
  )
}

export default SettingsContainer
