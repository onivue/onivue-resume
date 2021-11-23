import { PDFDownloadLink } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
// import MyDoc from '@/components/resume'

import { BlobProvider, Document, Page, View, Text } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [text, setText] = useState('-')
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="flex h-screen">
      <div className="flex flex-row items-stretch flex-1 h-full">
        <div className="w-24 bg-green-200"></div>
        <div className="flex flex-col justify-center flex-1 mx-auto">
          {isClient && (
            <>
              <BlobProvider document={<MyDoc text={text} />}>
                {({ blob, url, loading, error }) => {
                  return <PDFViewer file={url} loading={loading}></PDFViewer>
                }}
              </BlobProvider>

              <div className="flex justify-between">
                <PDFDownloadLink
                  document={<MyDoc />}
                  fileName="resume.pdf"
                  className="px-4 py-2 text-center text-white bg-green-500 rounded hover:bg-green-700"
                >
                  {({ loading }) =>
                    loading ? 'Loading document...' : 'Download File'
                  }
                </PDFDownloadLink>

                <button
                  className="px-4 py-2 text-center text-white bg-green-500 rounded hover:bg-green-700"
                  onClick={() => {
                    setText((actualState) => actualState + 'Aurora')
                  }}
                >
                  Add Text
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
