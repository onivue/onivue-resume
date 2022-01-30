import create from 'zustand'
import { persist } from 'zustand/middleware'
import defaultFormValues from './defaultFormValues'

// ? --------------------------------------
const defaultMetadata = {
  title: 'resume',
  author: 'https://resume.onivue.ch',
  creator: 'https://resume.onivue.ch',
  producer: 'https://resume.onivue.ch',
  subject: 'https://resume.onivue.ch',
  keywords: 'resume;bewerbung',
  language: 'Deutsch',
}
// ? --------------------------------------
const defaultDesign = {
  color: '',
  backgroundColor: '',
  accentColor: 'rgba(255,193,7,1)',
}

// ! --------------------------------------
// ! STORE
// ! --------------------------------------
const useResumeStore = create(
  persist((set, get) => ({
    formValues: defaultFormValues,
    setFormValues: (payload) => {
      set({ formValues: payload })
    },
    // ! --------------------------------------
    resetFormValues: () => {},
    setResetFormValues: (payload) => {
      set({ resetFormValues: () => payload(defaultFormValues) })
    },
    // ! --------------------------------------
    fileDownloadURL: '',
    setFileDownloadURL: (payload) => {
      set({ fileDownloadURL: payload })
    },
    // ! --------------------------------------
    resumeMetadata: defaultMetadata,
    setResumeMetadata: (payload) => {
      set({ resumeMetadata: payload })
    },
    // ! --------------------------------------
    resumeDesign: defaultDesign,
    setResumeDesign: (payload) => {
      set({ resumeDesign: payload })
    },
    resetResumeDesign: () => {
      set({ resumeDesign: defaultDesign })
    },
    // ! --------------------------------------
    docTemplateName: 'zen',
    docType: 'cover',
    docTemplateResume: 'zen',
    docTemplateCover: 'zen',
    setDocType: (payload) => {
      set({ docType: payload })
      if (get().docType === 'cover') {
        set({ docTemplateName: get().docTemplateCover })
      }
      if (get().docType === 'resume') {
        set({ docTemplateName: get().docTemplateResume })
      }
    },
    // ! --------------------------------------
    StateDebug: ({ className }) => {
      const formValues = useResumeStore((state) => state.formValues)
      const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL)
      return (
        <div className={className}>
          <p className="text-center">DEBUG FORM VALUES</p>
          <pre className="text-xs">{JSON.stringify(formValues, null, 2)}</pre>
          <div>URL:{fileDownloadURL}</div>
        </div>
      )
    },
  })),
)

export default useResumeStore
