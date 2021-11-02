import { PDFDownloadLink } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { MyDoc } from '@/components/pdf'
import { BlobProvider, Document, Page, View, Text } from '@react-pdf/renderer'
import PDFViewer from '@/components/PDFViewer'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [text, setText] = useState('test')
  useEffect(() => {
    setIsClient(true)
  })
  return (
    <div>
      <p>onvue-resume</p>
      {isClient && (
        <>
          <div className="flex-1 ">
            <BlobProvider document={<MyDoc text={text} />}>
              {({ blob, url, loading, error }) => {
                return <PDFViewer file={url} loading={loading}></PDFViewer>
              }}
            </BlobProvider>
          </div>
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
              setText((actualState) => actualState + 'TEXT SET')
            }}
          >
            Add Text
          </button>
        </>
      )}
    </div>
  )
}

export default Home
