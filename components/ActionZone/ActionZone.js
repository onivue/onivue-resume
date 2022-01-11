import {
  HiOutlinePencilAlt,
  HiOutlineDownload,
  HiOutlineCog,
} from 'react-icons/hi'
import useFormStore from '@/stores/useFormStore'
import { saveAs } from 'file-saver'

export default function ActionZone({ toggleForm, downloadFileUrl }) {
  const fileDownloadURL = useFormStore((state) => state.fileDownloadURL)
  const saveFile = () => {
    saveAs(fileDownloadURL, 'example.pdf')
  }
  return (
    <div className="p-4 ">
      <div className="bg-white border rounded-lg px-7">
        <div className="flex">
          <div className="flex-1 group" onClick={() => toggleForm()}>
            <div className="flex items-end justify-center w-full px-4 py-2 mx-auto text-center text-gray-400 cursor-pointer group-hover:text-primary-400">
              <div className="block px-1 pt-1 pb-1">
                <div className="block w-5 h-1 "></div>
                <HiOutlineCog className="block pt-1 mx-auto mb-1 text-2xl" />

                <div className="block w-5 h-1 mx-auto rounded-full group-hover:bg-primary-300"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 group" onClick={() => saveFile()}>
            <div className="flex items-end justify-center w-full px-4 py-2 mx-auto text-center text-gray-400 cursor-pointer group-hover:text-primary-400">
              <div className="block px-1 pt-1 pb-1 ">
                <div className="block w-5 h-1 "></div>

                <HiOutlineDownload className="block pt-1 mx-auto mb-1 text-2xl " />

                <div className="block w-5 h-1 mx-auto rounded-full group-hover:bg-primary-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
