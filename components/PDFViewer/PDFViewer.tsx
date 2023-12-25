import useElementSize from '@/hooks/useElementSize';
import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file, loading, className, setFileDownloadURL }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pdfRef = useRef(null);
  const { width: pdfWidth, height: pdfHeight } = useElementSize(pdfRef);
  const [windowsDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowsDimension]);

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const onDocumentLoad = (d) => {
    setNumPages(d.numPages);
    setCurrentPage((prev) => Math.min(prev, d.numPages));
    setFileDownloadURL(file);
  };

  return (
    <div className={className}>
      <div
        className={`relative mx-auto grid h-full w-full grid-cols-1 items-center justify-center md:max-w-xl ${
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
            <Document loading={''} file={file} className="animate-fade-in" onLoadSuccess={onDocumentLoad}>
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
  );
};

const A4Page = ({ refWidth, refHeight, children }) => {
  return (
    <div
      style={{
        height: (refWidth * 99) / 70,
        width: refWidth,
      }}
      className="w-full rounded-lg bg-white ring-1 ring-black"
    >
      {children}
    </div>
  );
};

const PageNavigator = ({ currentPage, numPages, onPreviousPage, onNextPage }) => {
  if (numPages <= 1) return null;
  return (
    <div className="absolute bottom-0 left-1/2 my-2 flex w-full -translate-x-1/2 transform flex-col justify-center opacity-25 hover:opacity-80">
      <div className="flex w-full justify-center text-xs">
        {currentPage !== 1 && (
          <button
            className="mx-1 flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 px-3 text-gray-700 hover:bg-primary-400 hover:text-white"
            onClick={onPreviousPage}
          >
            <HiChevronLeft />
          </button>
        )}

        <div className="mx-1 rounded-lg bg-gray-200 px-3 py-1 text-gray-700 ">
          <div className="font-bold">{` ${currentPage} / ${numPages}`}</div>
        </div>
        {currentPage < numPages && (
          <div
            className="mx-1 flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 px-3 text-gray-700 hover:bg-primary-400 hover:text-white"
            onClick={onNextPage}
          >
            <HiChevronRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
