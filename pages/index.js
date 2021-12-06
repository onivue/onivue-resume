import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
// import MyDoc from '@/components/resume'
import { BlobProvider } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'
import BottomNavbar from '@/components/BottomNavbar'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showForm, SetShowForm] = useState(false)
  const [text, setText] = useState('-')
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex h-screen">
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
                  className={`absolute z-10  w-full h-full lg:p-2 p-2 pb-28 lg:static lg:block lg:w-1/3 ${
                    !showForm && 'hidden'
                  }`}
                >
                  <div className="w-full h-full rounded-md bg-gradient-to-b from-purple-500 to-indigo-500">
                    <div>
                      <h2 className="px-6 pt-8 pb-6 text-2xl tracking-wide uppercase">
                        CV settings
                      </h2>
                      {/* <div className="flex justify-around">
                        <button
                          className="px-4 py-2 text-center text-white bg-green-500 rounded hover:bg-green-700"
                          onClick={() => {
                            setText((actualState) => actualState + 'Aurora')
                          }}
                        >
                          Add Text
                        </button>
                        <a
                          href={url}
                          download="resume.pdf"
                          className="px-4 py-2 text-center text-white bg-green-500 rounded hover:bg-green-700"
                        >
                          {loading ? 'Loading document...' : 'Download File'}
                        </a>
                      </div>*/}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full h-full mx-auto">
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
