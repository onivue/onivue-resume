import { classNames } from '@/lib/helper'
import React, { useCallback, useEffect, useState } from 'react'

export const useHeaderVisible = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

    setPrevScrollPos(currentScrollPos)
  }, [setVisible, setPrevScrollPos, prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return visible
}

const Navigation = ({ className }) => {
  const visible = useHeaderVisible()
  return (
    <nav
      className={classNames(
        'backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 h-[60px] fixed inset-0 z-10  duration-300 border-primary-200  shadow  ',
        visible
          ? 'top-0 '
          : '-top-[55px] border-primary-200 border-b-[5px] border-opacity-100 rounded-lg',
      )}
    >
      <div className="flex items-center h-full mx-auto max-w-[1900px] flex-nowrap">
        <div className="relative flex items-center justify-between w-full h-full px-3 py-2 lg:py-3">
          <div className="flex items-center">
            <img src="img/logo.png" className="w-10 "></img>
            <div className="ml-4 font-mono text-xl ">ONIVUE-RESUME</div>
          </div>
          <div className="">
            <div className="">
              {/* <HiOutlineUserCircle className="w-8 h-8 " /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
