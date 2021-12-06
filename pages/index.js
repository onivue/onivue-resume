import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
// import MyDoc from '@/components/resume'
import { BlobProvider } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'
import Form from '@/components/Form'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showForm, SetShowForm] = useState(false)
  const [text, setText] = useState('-')
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex h-screen mx-auto max-w-[1900px]">
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
                  className={`fixed z-10 w-full lg:w-3/5 h-full lg:p-4 p-4 pb-28 lg:static lg:block  ${
                    !showForm && 'hidden'
                  }`}
                >
                  <div className="w-full h-full rounded-md bg-gradient-to-b from-purple-500 to-indigo-500">
                    <Form />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full h-full mx-auto ">
                  <PDFViewer file={url} loading={loading}></PDFViewer>
                </div>
              </div>
            )
          }}
        </BlobProvider>
      )}
    </div>
  )
}

export default Home
