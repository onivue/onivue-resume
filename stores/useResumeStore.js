import create from 'zustand'

const defaultFormValues = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  jobTitle: 'Batman',
  address: 'Street XY1',
  plz: '9000 Gotham',
  phone: '071 000 00 00',
  mail: 'bruce.wayne@batman.com',
  aboutMe: `My name is Bruce Wayne. I am a passionate, over-achieving employee who believes in justice\nEmoij Support: \n😜 💯 \n- batman!`,
  languages: [{ title: 'English', level: '80' }],
  experience: [
    {
      title: 'Application Engineer',
      location: 'Gotham',
      from: '01.01.2010',
      to: '01.01.2020',
      summary: 'My Summary \n- batman!',
    },
  ],
  education: [
    {
      title: 'Technology School',
      location: 'Gotham',
      from: '01.01.2013',
      to: '01.01.2018',
      summary: '',
    },
  ],
  skills: ['react', 'tailwind'],
  image: null,
}
// ? --------------------------------------
const defaultMetadata = {
  docTitle: 'resume',
  author: '',
  creator: '',
  producer: '',
  subject: '',
  keywords: '',
  language: '',
}
// ? --------------------------------------
const defaultDesign = {
  color: '',
  backgroundColor: '',
}

// ! --------------------------------------
// ! STORE
// ! --------------------------------------
const useResumeStore = create((set, get) => ({
  formValues: defaultFormValues,
  setFormValues: (payload) => {
    // console.log('setFormValues - STORE')
    set({ formValues: payload })
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
  resumeDesign: defaultMetadata,
  setResumeDesign: (payload) => {
    set({ resumeDesign: payload })
  },
  // ! --------------------------------------
  StateDebug: ({ className }) => {
    const formValues = useResumeStore((state) => state.formValues)
    const fileDownloadURL = useResumeStore((state) => state.fileDownloadURL)
    return (
      <div className={className}>
        <p className="text-xs text-center">DEBUG FORM VALUES</p>
        {JSON.stringify(formValues, null, 4)}
        <div>URL:{fileDownloadURL}</div>
      </div>
    )
  },
}))

export default useResumeStore
