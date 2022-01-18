import create from 'zustand'

const defaultFormValues = {
  languages: [
    {
      title: 'English',
      level: '80',
    },
  ],
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
  details: {
    firstName: 'Bruce',
    lastName: 'Wayne',
    jobTitle: 'Batman',
    address: 'Street XY',
    plz: '9000 Gotham',
    phone: '071 000 00 00',
    mail: 'bruce.wayne@batman.com',
    image: null,
  },
  sections: [
    {
      blocks: [
        {
          title: 'Tags',
          type: 'tag',
          values: [
            {
              tags: ['react', 'tailwind'],
            },
          ],
        },
        {
          title: 'Level',
          type: 'level',
          values: [
            {
              title: 'German',
              level: '100',
            },
          ],
        },
        {
          title: 'Links',
          type: 'links',
          values: [
            {
              title: 'www.onivue.ch',
              url: 'https://onivue.ch',
            },
          ],
        },
      ],
    },
    {
      blocks: [
        {
          title: 'Experience',
          type: 'history',
          values: [
            {
              title: 'Application Engineer',
              location: 'LA',
              from: '01.01.2020',
              to: '01.01.2021',
              summary: 'My Summary \n- batman!',
            },
          ],
        },
        {
          title: 'Education',
          type: 'history',
          values: [
            {
              title: 'Technology School 2',
              location: 'LA',
              from: '01.01.2020',
              to: '01.01.2021',
              summary: '',
            },
          ],
        },
        {
          title: 'Text',
          type: 'text',
          values: [
            {
              text: 'My name is Bruce Wayne. I am a passionate, over-achieving employee who believes in justice\nEmoij Support: \n😜 💯 \n- batman!',
            },
          ],
        },
      ],
    },
  ],
}
// ! %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
  accentColor: '',
}

// ! --------------------------------------
// ! STORE
// ! --------------------------------------
const useResumeStore = create((set, get) => ({
  formValues: defaultFormValues,
  setFormValues: (payload) => {
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
  resumeDesign: defaultDesign,
  setResumeDesign: (payload) => {
    set({ resumeDesign: payload })
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
}))

export default useResumeStore
