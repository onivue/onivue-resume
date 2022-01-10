import React, { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useElementSize } from '@/hooks/useElementSize'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import useFormStore from '@/stores/useFormStore'
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

  const setFileDownloadURL = useFormStore((state) => state.setFileDownloadURL)

  return (
    <div className={className}>
      <div
        className="relative grid items-center justify-center w-full h-full max-w-3xl grid-cols-1 mx-auto lg:max-w-3xl"
        ref={pdfRef}
        id="WRAPPER"
      >
        <LoadingA4Page refWidth={pdfWidth}>
          {!loading && (
            <Document
              loading={''}
              className="relative"
              file={file}
              onLoadSuccess={onDocumentLoad}
              className="animate-fade-in"
            >
              <Page
                scale={1.0}
                renderMode="svg"
                width={pdfWidth}
                pageNumber={currentPage}
                loading={''}
              />
              <PageNavigator
                currentPage={currentPage}
                numPages={numPages}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
              />
            </Document>
          )}
          <div className="h-1"></div>
        </LoadingA4Page>
        {/* TRICK FOR OVERFLOW */}
      </div>
      {/* <div className="text-red-600">{pdfWidth}</div> */}
    </div>
  )
}

const LoadingA4Page = ({ refWidth, children }) => {
  return (
    <div
      style={{
        height: (refWidth * 99) / 70,
        width: refWidth,
      }}
      className="w-full bg-white loadingA4Page"
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
      <div className="flex justify-center w-full my-2 text-sm">
        {currentPage !== 1 && ''}
        <button
          className="flex items-center justify-center px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
          onClick={onPreviousPage}
        >
          <HiChevronLeft />
        </button>

        <div className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg ">
          <div className="font-bold">{` ${currentPage} / ${numPages}`}</div>
        </div>
        {currentPage < numPages && ''}
        <div
          className="flex items-center justify-center px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
          onClick={onNextPage}
        >
          <HiChevronRight />
        </div>
      </div>
    </div>
  )
}

export default PDFViewer
