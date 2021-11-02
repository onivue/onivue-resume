import React, { useEffect, useState, useRef } from 'react'
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs } from 'react-pdf'
import { useAsync } from 'react-use'
import { useElementSize } from '@/hooks/useElementSize'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const styles = {
  message: {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    zIndex: '1000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    transition: 'all 1s',
  },
  wrapper: {
    flex: '1',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  documentWrapper: {
    flex: '1',
    padding: '1em',
    display: 'flex',
    zIndex: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: { fontSize: '17px', cursor: 'pointer', transition: 'opacity 0.3s' },
}

const PDFViewer = ({ file, value, onUrlChange, onRenderError, loading }) => {
  const [numPages, setNumPages] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)

  const render = useAsync(async () => {
    if (!value) return null

    const blob = await pdf(value).toBlob()
    const url = URL.createObjectURL(blob)

    return url
  }, [value])

  // useEffect(() => onUrlChange(render.value), [render.value])

  // useEffect(() => onRenderError(render.error), [render.error])

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const onDocumentLoad = (d) => {
    setNumPages(d.numPages)
    setCurrentPage((prev) => Math.min(prev, d.numPages))
  }
  //  !
  const docRef = useRef(null)
  const { width, height } = useElementSize(docRef)
  // !

  if (loading) {
    return (
      <div className="flex justify-center flex-1 w-full h-auto " ref={docRef}>
        <div
          style={{
            width: width * 0.9,
            height: (width * 0.9 * 99) / 70,
            backgroundColor: 'white',
          }}
          className="rounded"
        >
          Rendering PDF...
        </div>
      </div>
    )
  }

  return (
    <div style={styles.wrapper}>
      {!loading && !file && (
        <div style={styles.message}>You are not rendering a valid document</div>
      )}

      <div className="flex justify-center flex-1 w-full h-auto " ref={docRef}>
        <Document
          loading={null}
          className="shadow"
          file={file}
          onLoadSuccess={onDocumentLoad}
        >
          <Page
            className="rounded"
            width={width * 0.9}
            pageNumber={currentPage}
          />
        </Document>
      </div>

      <PageNavigator
        currentPage={currentPage}
        numPages={numPages}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />
    </div>
  )
}

const PageNavigator = ({
  currentPage,
  numPages,
  onPreviousPage,
  onNextPage,
}) => {
  if (numPages <= 1) return null

  return (
    <div>
      {currentPage !== 1 && (
        <div onClick={onPreviousPage} style={styles.arrow}>
          {'<'}
        </div>
      )}

      <div
        style={{ margin: '0px 12px' }}
      >{`Page ${currentPage} / ${numPages}`}</div>

      {currentPage < numPages && (
        <div onClick={onNextPage} style={styles.arrow}>
          {'>'}
        </div>
      )}
    </div>
  )
}

export default PDFViewer
