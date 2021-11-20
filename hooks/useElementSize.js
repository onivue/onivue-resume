// SOURCE: https://usehooks-ts.com/react-hook/use-event-listener
import { useCallback, useLayoutEffect, useState } from 'react'

import { useEventListener } from '@/hooks/useEventListener'

export const useElementSize = (elementRef) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      })
    }
  }, [elementRef])

  // Initial size on mount
  useLayoutEffect(() => {
    updateSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEventListener('resize', updateSize)
  useEventListener('change', updateSize)

  return size
}
