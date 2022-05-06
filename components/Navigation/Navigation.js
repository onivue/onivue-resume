import { classNames } from '@/lib/helper'
import React, { useCallback, useEffect, useState } from 'react'
import LogoIcon from '../LogoIcon/LogoIcon'
import Link from 'next/link'
import useResumeStore from '@/stores/useResumeStore'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi'

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

const Themes = {
  light: 'light',
  dark: 'dark',
}

const Navigation = ({ className }) => {
  const visible = useHeaderVisible()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const setDocType = useResumeStore((state) => state.setDocType)
  const docType = useResumeStore((state) => state.docType)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const toggleTheme = useCallback(() => {
    console.log(theme)

    setTheme(theme === Themes.light ? Themes.dark : Themes.light)
  }, [setTheme, theme])

  return (
    <nav
      className={classNames(
        '  backdrop-filter backdrop-blur-sm h-[60px] fixed inset-0 z-10  duration-200  delay-200   border-opacity-100 rounded-lg',
        visible
          ? 'top-0  '
          : '-top-[55px] border-primary-200 border-b-[5px] border-opacity-100 rounded-lg',
      )}
    >
      {isClient && (
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
            <div className="flex">
              <button onClick={toggleTheme} className="mx-4 opacity-50">
                {theme === Themes.light ? (
                  <HiMoon className="w-6 h-6 " />
                ) : (
                  <HiSun className="w-6 h-6" />
                )}
              </button>
              <div className="flex items-center text-sm divide-x-2 divide-primary-200">
                <Link href="/">
                  <a
                    className={`px-2 hover:text-primary-500 ${
                      router.pathname === '/' && 'text-primary-500'
                    }`}
                  >
                    home
                  </a>
                </Link>
                <Link href="/doc">
                  <a
                    className={`px-2 hover:text-primary-500 ${
                      router.pathname === '/doc' &&
                      docType === 'resume' &&
                      'text-primary-500'
                    }`}
                    onClick={() => setDocType('resume')}
                  >
                    resume
                  </a>
                </Link>
                <Link href="/doc">
                  <a
                    className={`px-2 hover:text-primary-500 ${
                      router.pathname === '/doc' &&
                      docType === 'cover' &&
                      'text-primary-500'
                    }`}
                    onClick={() => setDocType('cover')}
                  >
                    cover
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
