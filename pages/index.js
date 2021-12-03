import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
// import MyDoc from '@/components/resume'
import { BlobProvider } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'

function Home() {
  const [isClient, setIsClient] = useState(false)
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
              <div className="flex flex-col items-stretch flex-1 h-full md:flex-row">
                <div className="w-full md:w-1/3 bg-gradient-to-b from-purple-500 to-indigo-500">
                  <div>
                    <h2 class="text-2xl pt-8 px-6 pb-6 tracking-wide uppercase">
                      CV settings
                    </h2>
                    <div className="flex justify-around">
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
