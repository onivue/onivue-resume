import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'
import {
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlinePencil,
  HiOutlinePencilAlt,
  HiX,
} from 'react-icons/hi'
export default function Modal({
  show,
  onClose,
  onCancel,
  onSubmit,
  title,
  children,
  type,
}) {
  const closeButtonRef = useRef(null)
  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 my-6 overflow-y-auto "
          onClose={onClose}
          initialFocus={closeButtonRef}
        >
          <div className="items-end justify-center block min-h-screen text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* //! -----------------------BACKDROP--------------------------------- */}
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
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
              <div className="inline-block w-11/12 overflow-hidden text-left align-middle transition-all transform rounded-lg shadow-xl lg:my-8 lg:max-w-2xl lg:w-full">
                {/* //! -----------------------CLOSE X BUTTON--------------------------------- */}
                <button
                  className="absolute right-0 flex items-center justify-center p-2 cursor-pointer focus:outline-none"
                  onClick={onClose}
                  ref={closeButtonRef}
                >
                  <HiX className="w-5 h-5 text-gray-600" aria-hidden="true" />
                </button>
                {/* //! -----------------------HEADER--------------------------------- */}
                <div className="p-6 bg-white dark:text-white dark:bg-dark-100">
                  <div className="items-center sm:flex">
                    {/* //! -----------------------ICON--------------------------------- */}

                    {type === 'warning' && (
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10 sm:mr-4">
                        <HiOutlineExclamation className="w-6 h-6 text-red-600" />
                      </div>
                    )}
                    {type === 'info' && (
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10 sm:mr-4">
                        <HiOutlineInformationCircle className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    {(type === 'edit' || !type) && (
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10 sm:mr-4">
                        <HiOutlinePencilAlt className="w-6 h-6 text-primary-600" />
                      </div>
                    )}
                    {/* //! -----------------------TITLE--------------------------------- */}
                    <Dialog.Title
                      as="h3"
                      className="mt-4 text-xl font-medium leading-6 text-center sm:mt-0 "
                    >
                      {title}
                    </Dialog.Title>
                  </div>
                  {/* //! -----------------------CONTENT--------------------------------- */}
                  <div className="mt-3 ">{children}</div>
                </div>
                {/* //! -----------------------FOOTER--------------------------------- */}
                {(onSubmit || onCancel) && (
                  <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {onSubmit && (
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Deactivate
                      </button>
                    )}

                    {onCancel && (
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
  )
}
