import { Transition } from '@headlessui/react';
import {
  HiDotsVertical,
  HiOutlineArrowSmDown,
  HiOutlineArrowSmUp,
  HiOutlineTrash,
  HiPencil,
  HiSwitchHorizontal,
} from 'react-icons/hi';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

export default function BlockMenu({
  editFunction,
  moveUpFunction,
  moveDownFunction,
  changeSectionFunction,
  removeFunction,
}) {
  return (
    <Menu as="div" className="relative flex justify-center self-center text-left">
      <Menu.Button>
        <HiDotsVertical className={`h-5 w-5 self-center`} />
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white ring-2 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {editFunction && (
              <MenuItem icon={<HiPencil className="mr-2 h-5 w-5" />} title="Edit" onClick={editFunction} />
            )}
            {moveUpFunction && (
              <MenuItem icon={<HiOutlineArrowSmUp className="mr-2 h-5 w-5" />} title="Up" onClick={moveUpFunction} />
            )}
            {moveDownFunction && (
              <MenuItem
                icon={<HiOutlineArrowSmDown className="mr-2 h-5 w-5" />}
                title="Down"
                onClick={moveDownFunction}
              />
            )}
            {changeSectionFunction && (
              <MenuItem
                icon={<HiSwitchHorizontal className="mr-2 h-5 w-5" />}
                title="Switch Section"
                onClick={changeSectionFunction}
              />
            )}
            {removeFunction && (
              <MenuItem icon={<HiOutlineTrash className="mr-2 h-5 w-5" />} title="Delete" onClick={removeFunction} />
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const MenuItem = ({ onClick, title, icon }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-primary-400 text-white' : 'text-gray-900'
          } flex w-full items-center rounded-md px-2 py-2 text-sm`}
          onClick={onClick}
        >
          <div className={`${active ? 'text-white' : 'text-primary-400'} `} aria-hidden="true">
            {icon}
          </div>
          {title}
        </button>
      )}
    </Menu.Item>
  );
};
