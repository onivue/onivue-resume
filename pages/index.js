import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
import { BlobProvider } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/Form'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Backdrop from '@/components/Backdrop'
import SettingsContainer from '@/components/SettingsContainer'

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
        <div className="flex flex-col items-stretch flex-1 h-full lg:flex-row">
          <Backdrop show={showForm && !isDesktop} />

          <SettingsContainer show={showForm || isDesktop}>
            <Form />
          </SettingsContainer>

          <BlobProvider document={<MyDoc text={text} />}>
            {({ blob, url, loading, error }) => {
              return (
                <>
                  <BottomNavbar
                    isShowForm={showForm}
                    toggleForm={() => SetShowForm(!showForm)}
                    downloadFileUrl={url}
                  />
                  <div className="flex flex-col justify-center w-full h-full max-h-screen mx-auto overflow-auto animate-fade-in-down">
                    <PDFViewer file={url} loading={loading}></PDFViewer>
                  </div>
                </>
              )
            }}
            {/* <motion.div
                    className="flex flex-col justify-center w-full h-full mx-auto"
                    initial={`open`}
                    animate={showForm && !isDesktop ? `closed` : `open`}
                    variants={{
                      open: {
                        y: [-500, 0],
                        opacity: [0, 1],
                        transition: {
                          duration: 2,
                        },
                      },
                      closed: {
                        opacity: 1,
                      },
                    }}
                  >
                  <PDFViewer file={url} loading={loading}></PDFViewer>
                </motion.div> */}
          </BlobProvider>
        </div>
      )}
    </div>
  )
}

export default Home
