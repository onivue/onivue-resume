import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import defaultFormValues from './defaultFormValues';

// ? --------------------------------------
const defaultDesign = {
  color: '',
  backgroundColor: '',
  accentColor: 'rgba(48, 106, 150, 1)',
  roundedImage: true,
};
// ? --------------------------------------
const resumeSettings = {
  titleResume: 'resume',
  titleCover: 'resume',
  author: 'https://resume.onivue.ch',
  creator: 'https://resume.onivue.ch',
  producer: 'https://resume.onivue.ch',
  subject: 'https://resume.onivue.ch',
  keywords: 'resume;bewerbung;cv',
  language: 'Deutsch',
  ...defaultDesign,
};

export const STORE_NAME = 'resume-storage';

// ! --------------------------------------
// ! STORE
// ! --------------------------------------
const useResumeStore = create(
  persist(
    (set, get) => ({
      formValues: defaultFormValues,
      setFormValues: (payload) => {
        set({ formValues: payload });
      },
      // ! --------------------------------------
      resetFormValues: () => {},
      setResetFormValues: (payload) => {
        set({ resetFormValues: () => payload(defaultFormValues) });
      },
      // ! --------------------------------------
      fileDownloadURL: '',
      setFileDownloadURL: (payload) => {
        set({ fileDownloadURL: payload });
      },
      // ! --------------------------------------
      resumeSettings: resumeSettings,
      setResumeSettings: (payload) => {
        set({ resumeSettings: payload });
      },
      // ! --------------------------------------
      resetResumeDesign: () => {
        set({ resumeSettings: { ...get().resumeSettings, ...defaultDesign } });
      },
      // ! --------------------------------------
      docTemplateName: 'zen',
      docType: 'cover',
      docTemplateResume: 'zen',
      docTemplateCover: 'zen',
      setDocType: (payload) => {
        set({ docType: payload });
        if (get().docType === 'cover') {
          set({ docTemplateName: get().docTemplateCover });
        }
        if (get().docType === 'resume') {
          set({ docTemplateName: get().docTemplateResume });
        }
      },
      // ! --------------------------------------
      StateDebug: ({ className }) => {
        const formValues = useResumeStore((state) => state.formValues);
        const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL);
        return (
          <div className={className}>
            <p className="text-center">DEBUG FORM VALUES</p>
            <pre className="text-xs">{JSON.stringify(formValues, null, 2)}</pre>
            <div>URL:{fileDownloadURL}</div>
          </div>
        );
      },
    }),
    {
      name: STORE_NAME, // name of the item in the storage (must be unique)
    },
  ),
);

export default useResumeStore;
