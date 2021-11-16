import React, { useEffect, useState, useRef } from 'react'
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs } from 'react-pdf'
import { useAsync } from 'react-use'
import { useElementSize } from '@/hooks/useElementSize'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const styles = {
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

  return (
    <div className="flex flex-col justify-center h-full ring-4 ring-red-600">
      {width} / {height}
      {!loading && !file && (
        <div className="bg-red-600">You are not rendering a valid document</div>
      )}
      <div className="flex justify-center w-4/5 mx-auto lg:w-1/2">
        <div className="w-full h-full ring-4 ring-red-600" ref={docRef}>
          {loading ? (
            <LoadingA4Page refWidth={width} />
          ) : (
            <Document
              loading={<LoadingA4Page refWidth={width} />}
              className="shadow "
              file={file}
              onLoadSuccess={onDocumentLoad}
            >
              <Page
                scale={1.0}
                className="rounded"
                // height={height}
                width={width}
                pageNumber={currentPage}
              />
            </Document>
          )}
        </div>
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

const LoadingA4Page = ({ refWidth }) => {
  return (
    <div
      style={{
        width: refWidth * 0.9,
        height: (refWidth * 0.9 * 99) / 70,
        backgroundColor: 'white',
      }}
      className="rounded"
    >
      refWidth: {refWidth}
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
      <ul className="flex flex-wrap justify-center my-4">
        <div className="flex justify-center w-full my-2">
          <div className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200 ">
            <div className="font-bold">{`Page ${currentPage} / ${numPages}`}</div>
          </div>
        </div>

        {currentPage !== 1 && (
          <li
            className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
            onClick={onPreviousPage}
          >
            <div className="flex items-center font-bold ">
              <span className="mx-1">previous</span>
            </div>
          </li>
        )}

        {currentPage < numPages && (
          <li
            className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
            onClick={onNextPage}
          >
            <div className="flex items-center font-bold">
              <span className="mx-1">next</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PDFViewer
