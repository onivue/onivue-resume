import useResumeStore from '@/stores/useResumeStore';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { RgbaStringColorPicker } from 'react-colorful';

//TODO https://codesandbox.io/s/react-colorful-sketch-picker-ouz5t

export default function ColorPicker({ icon }) {
  const resumeSettings = useResumeStore((state) => state.resumeSettings);
  const setResumeSettings = useResumeStore((state) => state.setResumeSettings);
  const [didMount, setDidMount] = useState(false);

  const [color, setColor] = useState(resumeSettings.accentColor);

  const timeout = useRef(null);

  // Setting didMount to true upon mounting
  useEffect(() => {
    setDidMount(true);
  }, []);

  // DELAY FUNCTION
  useEffect(() => {
    if (didMount) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setResumeSettings({ ...resumeSettings, accentColor: color });
      }, 600);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [color]);

  return (
    <Popover className="relative cursor-default">
      {({ open }) => (
        <>
          <Popover.Button>{icon}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute bottom-full left-1/2 z-10 mb-4 -translate-x-1/2 transform rounded-lg bg-white">
              <div className="flex flex-col justify-center overflow-hidden rounded-lg shadow-lg ">
                <RgbaStringColorPicker
                  color={resumeSettings.accentColor}
                  onChange={(data) => {
                    setColor(data);
                  }}
                />
                <div className="flex">
                  <input
                    type="text"
                    className="w-full border-none py-2 text-center text-xs text-black focus:ring-0 lg:text-sm"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

// }
