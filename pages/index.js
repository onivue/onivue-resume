import { useEffect, useState } from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MyDoc } from '@/components/Resume/Resume'
import PDFViewer from '@/components/PDFViewer/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/ResumeForm/ResumeForm'
import Backdrop from '@/components/Backdrop/Backdrop'
import SettingsContainer from '@/components/SettingsContainer/SettingsContainer'
import useFormStore from '@/stores/useFormStore'
import { classNames } from '@/lib/helper'
import ActionZone from '@/components/ActionZone/ActionZone'

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

  const formValues = useFormStore((state) => state.formValues)

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
              'fixed inset-0 top-0 z-10 p-4  overflow-auto',
              'bg-white border rounded-md lg:mx-0 lg:z-0 lg:w-1/2 lg:p-4 pb-28 lg:static lg:no-scrollbar',
            )}
          >
            <div className="pt-8 font-mono text-4xl font-semibold text-center transition-all duration-75 ease-in transform border rounded-lg h-28 shadow-bold hover:shadow-bolder hover:shadow-primary-200 shadow-primary-200">
              Settings
            </div>
            <Form />
          </SettingsContainer>

          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <BlobProvider document={<MyDoc resumeData={formValues} />}>
              {({ blob, url, loading, error }) => {
                return (
                  <>
                    <PDFViewer
                      file={url}
                      loading={loading}
                      className="w-full max-h-screen px-4 py-1 overflow-auto animate-fade-in-down no-scrollbar"
                    />
                    <BottomNavbar
                      isShowForm={showForm}
                      toggleForm={() => SetShowForm(!showForm)}
                      downloadFileUrl={url}
                    />
                  </>
                )
              }}
            </BlobProvider>
            <ActionZone />
          </div>
        </>
      )}
    </>
  )
}

export default Home
