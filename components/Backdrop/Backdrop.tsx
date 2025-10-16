import { Transition } from '@headlessui/react';

const Backdrop = ({ show, className }: { show: boolean; className?: string }) => {
  return (
    <Transition
      show={show}
      enter="transition ease-out duration-150 transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in duration-300 transform"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter ${className}`} />
    </Transition>
  );
};

export default Backdrop;
