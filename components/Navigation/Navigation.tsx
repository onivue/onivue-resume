import { classNames } from '@/lib/helper';
import useResumeStore from '@/stores/useResumeStore';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import LogoIcon from '../LogoIcon/LogoIcon';

export const useHeaderVisible = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, [setVisible, setPrevScrollPos, prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return visible;
};

const Themes = {
  light: 'light',
  dark: 'dark',
};

const Navigation = ({ className }) => {
  const visible = true; //useHeaderVisible()
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const setDocType = useResumeStore((state) => state.setDocType);
  const docType = useResumeStore((state) => state.docType);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const toggleTheme = useCallback(() => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme]);

  return (
    <nav
      className={classNames(
        '  fixed inset-0 z-10 h-[60px] rounded-lg border-opacity-100  backdrop-blur-sm  backdrop-filter   delay-200 duration-200',
        visible ? 'top-0  ' : '-top-[55px] rounded-lg border-b-[5px] border-primary-200 border-opacity-100',
      )}
    >
      {isClient && (
        <div className="mx-auto flex h-full max-w-[1900px] flex-nowrap items-center">
          <div className="relative flex h-full w-full items-center justify-between px-3 py-2 lg:py-3">
            <div className="flex items-center">
              <Link href="/">
                <LogoIcon className="h-10 w-10" />
              </Link>
              {/* <div className="ml-4 font-mono text-xl ">ONIVUE-RESUME</div> */}
            </div>
            <div className="flex">
              <button onClick={toggleTheme} className="mx-4 opacity-50">
                {theme === Themes.light ? (
                  <HiMoon className="h-6 w-6 text-primary-400" />
                ) : (
                  <HiSun className="h-6 w-6 text-primary-400" />
                )}
              </button>
              <div className="flex items-center  divide-primary-200 text-sm">
                <Link
                  href="/"
                  className={`px-2 text-primary-500 hover:text-primary-500 ${
                    router.pathname === '/' ? 'font-bold text-primary-600' : 'opacity-30'
                  }`}
                >
                  home
                </Link>
                <Link
                  href="/doc"
                  className={`px-2 text-primary-500 hover:text-primary-500 ${
                    router.pathname === '/doc' && docType === 'resume' ? 'font-bold text-primary-600' : 'opacity-30'
                  }`}
                  onClick={() => setDocType('resume')}
                >
                  resume
                </Link>
                <Link
                  href="/doc"
                  className={`px-2 text-primary-500 hover:text-primary-500 ${
                    router.pathname === '/doc' && docType === 'cover' ? 'font-bold text-primary-600' : 'opacity-30'
                  }`}
                  onClick={() => setDocType('cover')}
                >
                  cover
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
