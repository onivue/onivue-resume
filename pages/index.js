import { useEffect, useState } from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MyDoc } from '@/components/Resume/Resume'
import PDFViewer from '@/components/PDFViewer/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/Form'
import Backdrop from '@/components/Backdrop'
import SettingsContainer from '@/components/SettingsContainer/SettingsContainer'
import useFormStore from '@/stores/useFormStore'
import { classNames } from '@/lib/helper'

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
  const isDesktop = useMediaQuery(`(min-width: ${screens.lg})`)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const formState = useFormStore((state) => state.formState)
  const StateDebug = useFormStore((state) => state.StateDebug)

  return (
    <>
      {isClient && (
        <>
          <Backdrop show={showForm && !isDesktop} />

          {/* <StateDebug className="fixed right-0 z-20 w-2/5 p-4 font-mono text-white bg-gray-500 rounded top-20 opacity-80" /> */}

          <SettingsContainer
            show={showForm || isDesktop}
            className={classNames(
              'transition-all duration-75 ease-in',
              'fixed inset-0 top-0 z-10 p-4 mx-4 my-4 overflow-auto',
              'bg-white border rounded-md lg:mx-0 lg:z-0 lg:w-1/2 lg:p-4 pb-28 lg:static lg:blockno-scrollbar',
            )}
          >
            <div className="pt-8 font-mono text-4xl font-semibold text-center transition-all duration-75 ease-in transform border rounded-lg h-28 shadow-bold hover:shadow-bolder hover:shadow-green-200 shadow-green-200">
              Settings
            </div>
            <Form />
          </SettingsContainer>
          <BlobProvider document={<MyDoc resumeData={formState} />}>
            {({ blob, url, loading, error }) => {
              return (
                <>
                  <PDFViewer
                    file={url}
                    loading={loading}
                    className="grid self-center w-full h-full max-h-screen grid-cols-1 p-8 overflow-auto lg:w-1/2 animate-fade-in-down"
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
        </>
      )}
    </>
  )
}

export default Home
