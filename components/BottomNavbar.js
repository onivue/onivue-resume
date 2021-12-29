import { HiOutlinePencilAlt, HiOutlineDownload } from 'react-icons/hi'
import { RiLoader5Fill } from 'react-icons/ri'

import { saveAs } from 'file-saver'

export default function BottomNavbar({ toggleForm, downloadFileUrl }) {
  const saveFile = () => {
    saveAs(downloadFileUrl, 'example.pdf')
  }
  return (
    <div className="fixed bottom-0 z-20 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg px-7 rounded-2xl left-1/2">
      <div className="flex">
        <div className="flex-1 group" onClick={() => toggleForm()}>
          <div className="flex items-end justify-center w-full px-4 py-2 mx-auto text-center text-gray-400 cursor-pointer group-hover:text-indigo-500">
            <div className="block px-1 pt-1 pb-1">
              <div className="block w-5 h-1 "></div>
              <HiOutlinePencilAlt className="block pt-1 mx-auto mb-1 text-2xl" />

              <div className="block w-5 h-1 mx-auto rounded-full group-hover:bg-indigo-500"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 group" onClick={() => saveFile()}>
          <div className="flex items-end justify-center w-full px-4 py-2 mx-auto text-center text-gray-400 cursor-pointer group-hover:text-indigo-500">
            <div className="block px-1 pt-1 pb-1 ">
              <div className="block w-5 h-1 "></div>

              <HiOutlineDownload className="block pt-1 mx-auto mb-1 text-2xl " />

              <div className="block w-5 h-1 mx-auto rounded-full group-hover:bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
