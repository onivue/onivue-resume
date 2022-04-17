import React, { useState, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import useElementSize from '@/hooks/useElementSize'
import useResumeStore from '@/stores/useResumeStore'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PDFViewer = ({ file, loading, className }) => {
  const [numPages, setNumPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const pdfRef = useRef(null)
  const { width: pdfWidth, height: pdfHeight } = useElementSize(pdfRef)

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
  }
  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const onDocumentLoad = (d) => {
    setNumPages(d.numPages)
    setCurrentPage((prev) => Math.min(prev, d.numPages))
    setFileDownloadURL(file)
  }

  const setFileDownloadURL = useResumeStore((state) => state.setFileDownloadURL)

  return (
    <div className={className}>
      <div
        className="relative grid items-center justify-center w-full h-full max-w-3xl grid-cols-1 mx-auto lg:max-w-3xl"
        ref={pdfRef}
        id="WRAPPER"
      >
        <A4Page refWidth={pdfWidth}>
          {!loading && (
            <Document
              loading={''}
              file={file}
              className="animate-fade-in"
              onLoadSuccess={onDocumentLoad}
            >
              <Page
                scale={1.0}
                // renderMode="svg"
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={pdfWidth}
                pageNumber={currentPage}
                loading={''}
              />
              <div className="relative">
                <PageNavigator
                  currentPage={currentPage}
                  numPages={numPages}
                  onNextPage={onNextPage}
                  onPreviousPage={onPreviousPage}
                />
              </div>
            </Document>
          )}
          <div className="h-1"></div>
        </A4Page>
        {/* TRICK FOR OVERFLOW */}
      </div>
      {/* <div className="text-red-600">{pdfWidth}</div> */}
    </div>
  )
}

const A4Page = ({ refWidth, children }) => {
  return (
    <div
      style={{
        height: (refWidth * 99) / 70,
        width: refWidth,
      }}
      className="w-full bg-white rounded-lg ring-black ring-1"
    >
      {children}
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
    <div className="absolute bottom-0 flex flex-col justify-center w-full my-2 transform -translate-x-1/2 opacity-25 hover:opacity-80 left-1/2">
      <div className="flex justify-center w-full text-xs">
        {currentPage !== 1 && (
          <button
            className="flex items-center justify-center px-3 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-primary-400 hover:text-white"
            onClick={onPreviousPage}
          >
            <HiChevronLeft />
          </button>
        )}

        <div className="px-3 py-1 mx-1 text-gray-700 bg-gray-200 rounded-lg ">
          <div className="font-bold">{` ${currentPage} / ${numPages}`}</div>
        </div>
        {currentPage < numPages && (
          <div
            className="flex items-center justify-center px-3 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-primary-400 hover:text-white"
            onClick={onNextPage}
          >
            <HiChevronRight />
          </div>
        )}
      </div>
    </div>
  )
}

export default PDFViewer
