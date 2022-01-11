import { useState, useEffect } from 'react'

/**
 * custom React media query hook for more responsive apps
 * @param {string} query the media query
 * @returns {boolean} true if media query
 * @example
 *  const isMobileSidenav = useMediaQuery('(min-width: 800px)')
 */

// HELPER FOR MEDIA QUERY
const screens = {
  sm: '640px',
  md: '768px',
  lg: '1023px',
  xl: '1280px',
  '2xl': '1536px',
}

const useMediaQuery = (query) => {
  if (!query) throw new Error('Invalid or missing MediaQuery!')
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
