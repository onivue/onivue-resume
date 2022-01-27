import { classNames } from '@/lib/helper'
import React, { useCallback, useEffect, useState } from 'react'
import LogoIcon from '../LogoIcon/LogoIcon'
import Link from 'next/link'

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
            <Link href="/">
              <a href="">
                <LogoIcon className="w-10 h-10" />
              </a>
            </Link>
            {/* <div className="ml-4 font-mono text-xl ">ONIVUE-RESUME</div> */}
          </div>
          <div className="">
            <div className="flex items-center text-sm divide-x-2 divide-primary-200">
              {/* <HiOutlineUserCircle className="w-8 h-8 " /> */}

              <Link href="/">
                <a className="pr-2 hover:text-primary-500">home</a>
              </Link>
              <Link href="/resume">
                <a className="px-2 hover:text-primary-500">resume</a>
              </Link>
              <Link href="/">
                <a className="pl-2 hover:text-primary-500">motivation letter</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
