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
            <HiOutlineCog className="block pt-1 mx-auto mb-1 text-3xl" />
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
            <HiOutlineColorSwatch className="block pt-1 mx-auto mb-1 text-3xl" />
          </Item>
          <Item onClick={() => saveFile()}>
            <HiOutlineDownload className="block pt-1 mx-auto mb-1 text-3xl" />
          </Item>
        </div>
      </div>
    </div>
  )
}

const Item = ({ children, onClick }) => {
  return (
    <div className="text-3xl group" onClick={onClick}>
      <div className="flex items-end justify-center w-full px-6 py-2 mx-auto text-center text-gray-300 transition-all duration-150 cursor-pointer hover:scale-110 group-hover:text-primary-400">
        <div className="block px-1 pt-1 pb-1">
          <div className="block w-5 h-1 "></div>
          {children}
          <div className="block w-5 h-1 mx-auto transition-all duration-150 rounded-full group-hover:bg-primary-300"></div>
        </div>
      </div>
    </div>
  )
}
