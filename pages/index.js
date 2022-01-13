import { useEffect, useState } from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { MyDoc } from '@/components/Resume/Resume'
import PDFViewer from '@/components/PDFViewer/PDFViewer'
import Form from '@/components/Forms/ResumeForm/ResumeForm'
import Backdrop from '@/components/Backdrop/Backdrop'
import useResumeStore from '@/stores/useResumeStore'
import { classNames } from '@/lib/helper'
import ActionZone from '@/components/ActionZone/ActionZone'
import { HiOutlinePencilAlt } from 'react-icons/hi'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showForm, SetShowForm] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const formValues = useResumeStore((state) => state.formValues)

  const StateDebug = useResumeStore((state) => state.StateDebug)

  return (
    <>
      <div className="fixed z-50 flex items-center space-x-4 bottom-5 right-5 lg:hidden">
        <button
          onClick={() => SetShowForm(!showForm)}
          className="z-50 p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 focus:outline-none focus:ring"
        >
          <HiOutlinePencilAlt className="w-8 h-8" />
        </button>
      </div>
      {isClient && (
        <>
          {/* <StateDebug className="fixed right-0 z-20 w-2/5 p-4 font-mono text-white bg-gray-500 rounded top-20 opacity-80" /> */}
          <Backdrop show={showForm} className="lg:hidden" />
          <aside
            className={classNames(
              'flex-1 fixed lg:static',
              'z-10 lg:z-0 p-2',
              'lg:w-1/2  lg:translate-y-0 duration-500 transition  ease-in-out  lg:animate-fade-in-up',
              'inset-0 inset-y-0 top-0',
              showForm ? 'translate-y-0 ' : 'translate-y-full  lg:opacity-100',
            )}
          >
            <div className="h-full p-4 overflow-auto bg-white border rounded-md lg:no-scrollbar ">
              <div className="pt-8 font-mono text-4xl font-semibold text-center transition-all duration-75 ease-in transform border rounded-lg h-28 shadow-bold hover:shadow-bolder hover:shadow-primary-200 shadow-primary-200">
                Settings
              </div>
              <Form />
            </div>
          </aside>

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
