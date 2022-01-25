import {
  HiOutlinePencilAlt,
  HiOutlineDownload,
  HiOutlineCog,
  HiOutlineColorSwatch,
} from 'react-icons/hi'
import useResumeStore from '@/stores/useResumeStore'
import { saveAs } from 'file-saver'
import Modal from '@/components/Modal/Modal'
import { useState } from 'react'
import ColorPicker from '../ColorPicker/ColorPicker'

export default function ActionZone({ toggleForm, downloadFileUrl }) {
  const [modalOpen, setModalOpen] = useState(false)
  const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL)
  const saveFile = () => {
    saveAs(fileDownloadURL, 'example.pdf')
  }
  return (
    <div className="p-4 ">
      <div className="px-7">
        <div className="flex justify-around">
          <Item onClick={() => setModalOpen((s) => !s)}>
            <HiOutlineCog className="w-8 h-8 mx-auto" />
          </Item>
          <Modal
            show={modalOpen}
            onClose={() => setModalOpen((s) => !s)}
            title="Settings"
            type="edit"
          >
            This is the Description
            <p className="text-sm text-gray-500">This is the Description</p>
          </Modal>

          <Item>
            <ColorPicker
              icon={
                <HiOutlineColorSwatch className="w-8 h-8 mx-auto center-self" />
              }
            />
          </Item>

          <Item onClick={() => saveFile()}>
            <HiOutlineDownload className="w-8 h-8 mx-auto" />
          </Item>

          <Item onClick={() => toggleForm()} className="lg:hidden">
            <HiOutlinePencilAlt className="w-8 h-8 mx-auto" />
          </Item>
        </div>
      </div>
    </div>
  )
}

const Item = ({ children, onClick, className }) => {
  return (
    <div className={`relative text-3xl group ${className}`} onClick={onClick}>
      <div className="relative flex flex-col items-end justify-between w-full px-6 py-2 mx-auto text-center text-gray-300 transition-all duration-150 cursor-pointer group-hover:text-primary-400">
        {children}
      </div>
      <div className="absolute bottom-0 w-full h-1 mx-auto transition-all duration-150 rounded-full group-hover:bg-primary-300"></div>
    </div>
  )
}
