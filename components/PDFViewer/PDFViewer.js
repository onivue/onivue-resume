import useElementSize from '@/hooks/useElementSize'
import { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PDFViewer = ({ file, loading, className , setFileDownloadURL}) => {
  const [numPages, setNumPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const pdfRef = useRef(null)
  const { width: pdfWidth, height: pdfHeight } = useElementSize(pdfRef)
  const [windowsDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowsDimension])

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


  return (
    <div className={className}>
      <div
        className={`relative grid items-center justify-center w-full h-full grid-cols-1 mx-auto md:max-w-xl ${
          windowsDimension.height < 800
            ? 'lg:max-w-xs'
            : windowsDimension.height < 900
            ? 'lg:max-w-md'
            : windowsDimension.height < 1200
            ? 'lg:max-w-lg'
            : windowsDimension.height < 1400 && 'lg:max-w-2xl'
        }`}
        ref={pdfRef}
        id="WRAPPER"
      >
        <A4Page refWidth={pdfWidth} refHeight={pdfHeight}>
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
            </Document>
          )}
          <div className="h-1"></div>
        </A4Page>
        <div className="relative">
          <PageNavigator
            currentPage={currentPage}
            numPages={numPages}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
          />
        </div>
        {/* TRICK FOR OVERFLOW */}
      </div>
      {/* <div className="text-red-600">{pdfWidth}</div> */}
    </div>
  )
}

const A4Page = ({ refWidth, refHeight, children }) => {
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
