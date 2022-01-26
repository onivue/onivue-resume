import useResumeStore from '@/stores/useResumeStore'
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { RgbaStringColorPicker } from 'react-colorful'

//TODO https://codesandbox.io/s/react-colorful-sketch-picker-ouz5t

export default function ColorPicker({ icon }) {
  const resumeDesign = useResumeStore((state) => state.resumeDesign)
  const setResumeDesign = useResumeStore((state) => state.setResumeDesign)

  const [color, setColor] = useState(resumeDesign.accentColor)

  const timeout = useRef(null)
  // DELAY FUNCTION
  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setResumeDesign({ ...resumeDesign, accentColor: color })
    }, 600)
    return () => {
      clearTimeout(timeout.current)
    }
  }, [color])

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
            <Popover.Panel className="absolute z-10 mb-4 transform -translate-x-1/2 bg-white rounded-lg left-1/2 bottom-full">
              <div className="flex flex-col justify-center overflow-hidden rounded-lg shadow-lg ">
                <RgbaStringColorPicker
                  color={resumeDesign.accentColor}
                  onChange={(data) => {
                    // console.log(data)
                    // setResumeDesign({ ...resumeDesign, accentColor: data })
                    setColor(data)
                  }}
                />
                <div className="text-base">
                  {color}
                  {/* <input
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value)
                    }}
                  /> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

// }
