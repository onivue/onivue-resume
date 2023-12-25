import Button from '@/components/Button/Button';
import ColorPicker from '@/components/ColorPicker/ColorPicker';
import SettingsForm from '@/components/Forms/SettingsForm/SettingsForm';
import Modal from '@/components/Modal/Modal';
import useResumeStore from '@/stores/useResumeStore';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { HiOutlineCog, HiOutlineColorSwatch, HiOutlineDownload, HiOutlinePencilAlt } from 'react-icons/hi';

export default function ActionZone({ toggleForm }) {
  const [modalOpen, setModalOpen] = useState(false);
  const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL);
  const resumeSettings = useResumeStore((state) => state.resumeSettings);
  const formValues = useResumeStore((state) => state.formValues);
  const resetFormValues = useResumeStore((state) => state.resetFormValues);
  const resetResumeDesign = useResumeStore((state) => state.resetResumeDesign);
  const docType = useResumeStore((state) => state.docType);

  const saveFile = () => {
    saveAs(fileDownloadURL, docType === 'cover' ? resumeSettings.titleCover : resumeSettings.titleResume);
  };
  const exportJsonData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(formValues))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  const iconStyle = 'w-8 h-8 mx-auto center-self';
  return (
    <div className="w-full max-w-3xl self-center p-4">
      <div className="flex justify-between">
        <Item onClick={() => toggleForm()} className="lg:hidden">
          <HiOutlinePencilAlt className={iconStyle} />
        </Item>
        <ColorPicker
          icon={
            <Item className="" onClick={null}>
              <HiOutlineColorSwatch className={iconStyle} />
            </Item>
          }
        />
        <Item onClick={() => setModalOpen((s) => !s)} className="">
          <HiOutlineCog className={iconStyle} />
        </Item>
        <Modal
          show={modalOpen}
          onClose={() => setModalOpen((s) => !s)}
          title="Settings"
          type="edit"
          onCancel={null}
          onSubmit={null}
        >
          <div className="grid grid-cols-1 gap-4 ">
            <p className="text-center text-gray-500 dark:text-white">PDF Dokumenteneigenschaften anpassen.</p>
            <SettingsForm />
          </div>
          <div className="my-8 border-t-2 pt-8">
            <p className="mb-8 text-center text-gray-500 dark:text-white">Einstellungen zurücksetzen.</p>
            <div className="grid grid-cols-2 gap-4">
              {/* @ts-ignore */}
              <Button style="secondary" onClick={() => resetFormValues()}>
                Formular Zurücksetzen
              </Button>
              {/* @ts-ignore */}
              <Button style="secondary" onClick={() => resetResumeDesign()}>
                Design Zurücksetzen
              </Button>
            </div>
          </div>
          <div className="my-8 border-t-2 pt-8">
            <p className="mb-8 text-center text-gray-500 dark:text-white">Daten herunterladen.</p>
            <div className="grid grid-cols-1 gap-4">
              {/* @ts-ignore */}
              <Button style="secondary" onClick={() => exportJsonData()}>
                Download (JSON)
              </Button>
            </div>
          </div>
        </Modal>
        {/* @ts-ignore */}
        <Item onClick={() => saveFile()}>
          <HiOutlineDownload className={iconStyle} />
        </Item>
      </div>
    </div>
  );
}

const Item = ({ children, onClick, className }) => {
  return (
    <div className={`group relative text-3xl ${className}`} onClick={onClick}>
      <div className="relative mx-auto flex w-full cursor-pointer flex-col items-end justify-between px-6 py-2 text-center text-gray-300 transition-all duration-150 group-hover:text-primary-400">
        {children}
      </div>
      <div className="absolute bottom-0 mx-auto h-1 w-full rounded-full transition-all duration-150 group-hover:bg-primary-300"></div>
    </div>
  );
};
