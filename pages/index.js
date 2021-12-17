import { useEffect, useState } from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MyDoc } from '@/components/pdfResume'
import PDFViewer from '@/components/PDFViewer/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/Form'
import Backdrop from '@/components/Backdrop'
import SettingsContainer from '@/components/SettingsContainer/SettingsContainer'

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
    <div className="relative flex flex-1 mx-auto overflow-hidden">
      {isClient && (
        <div className="flex flex-col items-stretch flex-1 h-full lg:flex-row ">
          <Backdrop show={showForm && !isDesktop} />
          <SettingsContainer show={showForm || isDesktop}>
            <Form />
          </SettingsContainer>
          <BlobProvider document={<MyDoc text={text} />}>
            {({ blob, url, loading, error }) => {
              return (
                <>
                  <PDFViewer
                    file={url}
                    loading={loading}
                    className="grid w-full h-full max-h-screen grid-cols-1 p-12 overflow-auto lg:w-1/2 animate-fade-in-down"
                  ></PDFViewer>
                  <BottomNavbar
                    isShowForm={showForm}
                    toggleForm={() => SetShowForm(!showForm)}
                    downloadFileUrl={url}
                  />
                </>
              )
            }}
          </BlobProvider>
        </div>
      )}
    </div>
  )
}

export default Home
