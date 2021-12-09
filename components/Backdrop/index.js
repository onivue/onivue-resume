import { Transition } from '@headlessui/react'

const Backdrop = ({ show }) => {
  return (
    <Transition
      // appear={true}
      // as={Fragment}
      show={show}
      enter=" transition ease-out duration-300 transform "
      enterFrom="opacity-0 "
      enterTo="opacity-100"
      leave="transition-all ease-in duration-300 transform"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 "
      className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm "
    ></Transition>
  )
}

export default Backdrop
