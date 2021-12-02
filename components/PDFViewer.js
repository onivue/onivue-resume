import React, { useState, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useElementSize } from '@/hooks/useElementSize'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PDFViewer = ({ file, loading }) => {
  const [numPages, setNumPages] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)

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
  const pdfRef = useRef(null)
  const pdfWrapperRef = useRef(null)
  const { width: pdfWidth, height: pdfHeight } = useElementSize(pdfRef)
  const { width: pdfWrapperWidth, height: pdfWrapperHeight } =
    useElementSize(pdfWrapperRef)

  const allowedWidth = pdfWidth

  // !

  return (
    <div
      className="flex flex-col justify-center h-full overflow-auto ring-4 ring-blue-600"
      ref={pdfWrapperRef}
    >
      {!loading && !file && (
        <div className="bg-red-600">You are not rendering a valid document</div>
      )}
      <div className="flex justify-center w-4/5 mx-auto ">
        <div
          className="w-full h-full max-w-xl lg:max-w-2xl ring-4 ring-red-600"
          ref={pdfRef}
        >
          {loading ? (
            <LoadingA4Page refWidth={pdfWidth} />
          ) : (
            <Document
              loading={<LoadingA4Page refWidth={pdfWidth} />}
              className="shadow "
              file={file}
              onLoadSuccess={onDocumentLoad}
            >
              <Page
                scale={1.0}
                className="overflow-y-auto rounded"
                width={pdfWidth}
                pageNumber={currentPage}
              />
            </Document>
          )}
        </div>
      </div>
      {/* <div className="text-blue-600">
        {pdfWrapperWidth} / {pdfWrapperHeight}
      </div>
      <div className="text-red-600">
        {pdfWidth} / {pdfHeight}
      </div> */}

      <div className="text-red-600">{window.innerHeight}</div>
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
        width: refWidth,
        height: (refWidth * 99) / 70,
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
