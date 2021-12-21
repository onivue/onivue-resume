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
    <>
      {isClient && (
        <div className="flex flex-col justify-center flex-1 lg:flex-row">
          <Backdrop show={showForm && !isDesktop} />
          <SettingsContainer
            show={showForm || isDesktop}
            className="fixed inset-0 top-0 z-10 p-4 m-4 overflow-auto rounded-md lg:w-1/2 lg:p-4 pb-28 lg:static lg:block bg-gradient-to-b from-purple-500 to-indigo-500 no-scrollbar"
          >
            <Form />
            <Form />
            <Form />
            <Form />
          </SettingsContainer>
          <BlobProvider document={<MyDoc text={text} />}>
            {({ blob, url, loading, error }) => {
              return (
                <>
                  <PDFViewer
                    file={url}
                    loading={loading}
                    className="grid self-center w-full h-full max-h-screen grid-cols-1 p-12 overflow-auto lg:w-1/2 animate-fade-in-dow"
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
    </>
  )
}

export default Home
