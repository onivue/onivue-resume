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
  // !

  return (
    <>
      <div className="grid w-11/12 grid-cols-1 mx-auto ">
        <div
          className="relative w-full h-full max-w-xl col-span-1 mx-auto lg:max-w-2xl"
          ref={pdfRef}
          id="WRAPPER"
        >
          {loading ? (
            <LoadingA4Page refWidth={pdfWidth} />
          ) : (
            <Document
              loading={<LoadingA4Page refWidth={pdfWidth} />}
              className="shadow-xl "
              file={file}
              onLoadSuccess={onDocumentLoad}
            >
              <Page
                scale={1.0}
                className="rounded "
                width={pdfWidth}
                pageNumber={currentPage}
              />
            </Document>
          )}
          <PageNavigator
            currentPage={currentPage}
            numPages={numPages}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
          />
        </div>
      </div>
      <div>
        <div className="text-red-600">{pdfWidth}</div>
      </div>
    </>
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
      className="rounded shadow-xl animate-pulse"
    ></div>
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
    <div className="absolute bottom-0 flex flex-col justify-center w-full my-2 transform -translate-x-1/2 opacity-25 hover:opacity-80 left-1/2">
      <div className="flex justify-center w-full my-2 text-sm">
        {currentPage !== 1 && ''}
        <div
          className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
          onClick={onPreviousPage}
        >
          <div className="flex items-center font-bold ">
            <span className="mx-1">{'<'}</span>
          </div>
        </div>

        <div className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg ">
          <div className="font-bold">{`Page ${currentPage} / ${numPages}`}</div>
        </div>
        {currentPage < numPages && ''}
        <div
          className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
          onClick={onNextPage}
        >
          <div className="flex items-center font-bold">
            <span className="mx-1">{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFViewer
