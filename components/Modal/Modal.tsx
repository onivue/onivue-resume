import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import {
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlinePencil,
  HiOutlinePencilAlt,
  HiX,
} from 'react-icons/hi';
export default function Modal({ show, onClose, onCancel, onSubmit, title, children, type }) {
  const closeButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 my-6 overflow-y-auto "
          onClose={onClose}
          initialFocus={closeButtonRef}
        >
          <div className="block min-h-screen items-end justify-center text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* //! -----------------------BACKDROP--------------------------------- */}
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 tanslate-y-0"
              leave="ease-in duration-200 "
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-6"
            >
              {/* //! -----------------------CONTENT--------------------------------- */}
              <div className="inline-block w-11/12 transform overflow-hidden rounded-lg text-left align-middle shadow-xl transition-all lg:my-8 lg:w-full lg:max-w-2xl">
                {/* //! -----------------------CLOSE X BUTTON--------------------------------- */}
                <button
                  className="absolute right-0 flex cursor-pointer items-center justify-center p-2 focus:outline-none"
                  onClick={onClose}
                  ref={closeButtonRef}
                >
                  <HiX className="h-5 w-5 text-gray-600" aria-hidden="true" />
                </button>
                {/* //! -----------------------HEADER--------------------------------- */}
                <div className="bg-white p-6 dark:bg-dark-100 dark:text-white">
                  <div className="items-center sm:flex">
                    {/* //! -----------------------ICON--------------------------------- */}

                    {type === 'warning' && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                        <HiOutlineExclamation className="h-6 w-6 text-red-600" />
                      </div>
                    )}
                    {type === 'info' && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                        <HiOutlineInformationCircle className="h-6 w-6 text-blue-600" />
                      </div>
                    )}
                    {(type === 'edit' || !type) && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                        <HiOutlinePencilAlt className="h-6 w-6 text-primary-600" />
                      </div>
                    )}
                    {/* //! -----------------------TITLE--------------------------------- */}
                    <Dialog.Title as="h3" className="mt-4 text-center text-xl font-medium leading-6 sm:mt-0 ">
                      {title}
                    </Dialog.Title>
                  </div>
                  {/* //! -----------------------CONTENT--------------------------------- */}
                  <div className="mt-3 ">{children}</div>
                </div>
                {/* //! -----------------------FOOTER--------------------------------- */}
                {(onSubmit || onCancel) && (
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {onSubmit && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Deactivate
                      </button>
                    )}

                    {onCancel && (
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
