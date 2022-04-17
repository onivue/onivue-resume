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
import ColorPicker from '@/components/ColorPicker/ColorPicker'
import SettingsForm from '@/components/Forms/SettingsForm/SettingsForm'
import Button from '@/components/Button/Button'

export default function ActionZone({ toggleForm }) {
  const [modalOpen, setModalOpen] = useState(false)
  const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL)
  const resumeSettings = useResumeStore((state) => state.resumeSettings)
  const formValues = useResumeStore((state) => state.formValues)
  const resetFormValues = useResumeStore((state) => state.resetFormValues)
  const resetResumeDesign = useResumeStore((state) => state.resetResumeDesign)
  const docType = useResumeStore((state) => state.docType)

  const saveFile = () => {
    saveAs(
      fileDownloadURL,
      docType === 'cover'
        ? resumeSettings.titleCover
        : resumeSettings.titleResume,
    )
  }
  const exportJsonData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(formValues),
    )}`
    const link = document.createElement('a')
    link.href = jsonString
    link.download = 'data.json'

    link.click()
  }

  const iconStyle = 'w-8 h-8 mx-auto center-self'
  return (
    <div className="self-center w-full max-w-3xl p-4">
      <div className="flex justify-between">
        <Item onClick={() => toggleForm()} className="lg:hidden">
          <HiOutlinePencilAlt className={iconStyle} />
        </Item>
        <ColorPicker
          icon={
            <Item>
              <HiOutlineColorSwatch className={iconStyle} />
            </Item>
          }
        />
        <Item onClick={() => setModalOpen((s) => !s)}>
          <HiOutlineCog className={iconStyle} />
        </Item>
        <Modal
          show={modalOpen}
          onClose={() => setModalOpen((s) => !s)}
          title="Settings"
          type="edit"
        >
          <div className="grid grid-cols-1 gap-4 ">
            <p className="text-center text-gray-500 dark:text-white">
              PDF Dokumenteneigenschaften anpassen.
            </p>
            <SettingsForm />
          </div>
          <div className="pt-8 my-8 border-t-2">
            <p className="mb-8 text-center text-gray-500 dark:text-white">
              Einstellungen zurücksetzen.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button style="secondary" onClick={() => resetFormValues()}>
                Formular Zurücksetzen
              </Button>
              <Button style="secondary" onClick={() => resetResumeDesign()}>
                Design Zurücksetzen
              </Button>
            </div>
          </div>
          <div className="pt-8 my-8 border-t-2">
            <p className="mb-8 text-center text-gray-500 dark:text-white">
              Daten herunterladen.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <Button style="secondary" onClick={() => exportJsonData()}>
                Download (JSON)
              </Button>
            </div>
          </div>
        </Modal>
        <Item onClick={() => saveFile()}>
          <HiOutlineDownload className={iconStyle} />
        </Item>
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
