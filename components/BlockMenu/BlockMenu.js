import { classNames } from '@/lib/helper'
import { Disclosure, Transition } from '@headlessui/react'
import {
  HiChevronUp,
  HiDotsVertical,
  HiOutlineArrowSmDown,
  HiOutlineArrowSmUp,
  HiOutlineTrash,
  HiPencil,
  HiSwitchHorizontal,
} from 'react-icons/hi'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'

export default function BlockMenu({
  editFunction,
  moveUpFunction,
  moveDownFunction,
  changeSectionFunction,
  removeFunction,
}) {
  return (
    <Menu
      as="div"
      className="relative flex self-center justify-center text-left"
    >
      <Menu.Button>
        <HiDotsVertical className={`text-primary-400 w-5 h-5 self-center`} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-bold shadow-gray-300 ring-2 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {editFunction && (
              <MenuItem
                icon={<HiPencil className="w-5 h-5 mr-2" />}
                title="Edit"
                onClick={editFunction}
              />
            )}
            {moveUpFunction && (
              <MenuItem
                icon={<HiOutlineArrowSmUp className="w-5 h-5 mr-2" />}
                title="Up"
                onClick={moveUpFunction}
              />
            )}
            {moveDownFunction && (
              <MenuItem
                icon={<HiOutlineArrowSmDown className="w-5 h-5 mr-2" />}
                title="Down"
                onClick={moveDownFunction}
              />
            )}
            {changeSectionFunction && (
              <MenuItem
                icon={<HiSwitchHorizontal className="w-5 h-5 mr-2" />}
                title="Switch Section"
                onClick={changeSectionFunction}
              />
            )}
            {removeFunction && (
              <MenuItem
                icon={<HiOutlineTrash className="w-5 h-5 mr-2" />}
                title="Delete"
                onClick={removeFunction}
              />
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const MenuItem = ({ onClick, title, icon }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-primary-400 text-white' : 'text-gray-900'
          } flex rounded-md items-center w-full px-2 py-2 text-sm`}
          onClick={onClick}
        >
          <div
            className={`${active ? 'text-white' : 'text-primary-400'} `}
            aria-hidden="true"
          >
            {icon}
          </div>
          {title}
        </button>
      )}
    </Menu.Item>
  )
}
