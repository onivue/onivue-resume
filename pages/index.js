import { PDFDownloadLink } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdfResume'
import { BlobProvider, Document, Page, View, Text } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [text, setText] = useState('-')
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="h-screen">
      <p>onivue-resume</p>
      <div className="flex flex-row h-full">
        <div className="w-64 bg-indigo-100"></div>
        <div className="flex-col justify-center flex-1 mx-auto">
          {isClient && (
            <>
              <BlobProvider document={<MyDoc text={text} />}>
                {({ blob, url, loading, error }) => {
                  return <PDFViewer file={url} loading={loading}></PDFViewer>
                }}
              </BlobProvider>

              <PDFDownloadLink
                document={<MyDoc />}
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
