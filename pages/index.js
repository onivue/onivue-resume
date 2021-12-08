import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
// import MyDoc from '@/components/resume'
import { BlobProvider } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/Form'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// HELPER FOR MEDIA QUERY
const screens = {
  sm: '640px',
  md: '768px',
  lg: '1023px',
  xl: '1280px',
  '2xl': '1536px',
}

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showForm, SetShowForm] = useState(false)
  const [text, setText] = useState('-')
  const isDesktop = useMediaQuery(`(min-width: ${screens.lg})`)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex flex-1 mx-auto max-w-[1900px] relative">
      {isClient && (
        <BlobProvider document={<MyDoc text={text} />}>
          {({ blob, url, loading, error }) => {
            return (
              <div className="flex flex-col items-stretch flex-1 h-full lg:flex-row">
                <BottomNavbar
                  isShowForm={showForm}
                  toggleForm={SetShowForm}
                  downloadFileUrl={url}
                  loading={loading}
                />
                <div
                  className={`z-10  lg:max-h-screen  w-full  lg:w-3/5  lg:p-4 p-4 pb-28 lg:static lg:block justify-center   ${
                    !showForm && 'hidden'
                  } `}
                >
                  <div className="w-full h-full overflow-auto rounded-md bg-gradient-to-b from-purple-500 to-indigo-500 no-scrollbar ">
                    <Form />
                  </div>
                </div>

                <motion.div
                  className="flex flex-col justify-center w-full h-full mx-auto"
                  initial={`open`}
                  animate={showForm && !isDesktop ? `closed` : `open`}
                  variants={{
                    open: {
                      y: [-50, 0],
                      opacity: [0, 1],
                      transition: {
                        duration: 2,
                      },
                    },
                    closed: {
                      opacity: 0,
                      display: 'none',
                    },
                  }}
                >
                  <PDFViewer file={url} loading={loading}></PDFViewer>
                </motion.div>
              </div>
            )
          }}
        </BlobProvider>
      )}
    </div>
  )
}

export default Home
