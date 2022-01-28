import create from 'zustand'
import { persist } from 'zustand/middleware'

const defaultFormValues = {
  details: {
    firstName: 'Leslie',
    lastName: 'Knope',
    jobTitle: 'Deputy Director Parks Department',
    address: '',
    plz: 'Pawnee, Indiana',
    phone: '317-660-2160',
    mail: 'lknope@parksdept.com',
    image: null,
  },
  sections: [
    {
      name: 'Section 0',
      blocks: [
        {
          title: 'Skills',
          type: 'tag',
          values: [
            {
              tags: ['Microsoft', 'Word', 'Excel', 'PerfectMind'],
            },
          ],
        },
        {
          title: 'Sprachen',
          type: 'level',
          values: [
            {
              title: 'Deutsch',
              level: '100',
            },
            {
              title: 'Englisch',
              level: '89',
            },
          ],
        },
        {
          title: 'Soft Skills',
          type: 'text',
          values: [
            {
              text: '- Positivity\n- Leadership\n- Public Speaking',
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
      name: 'Section 1',
      blocks: [
        {
          title: 'Über mich',
          type: 'text',
          values: [
            {
              text: "My name is Leslie Knope. I am a passionate, over-achieving government employee who believes the government's #1 job is serving the people. By pairing the right people with the right messaging at the right time, the parks department and your local government can make the world a better place for everyone! I have met Joe Biden, and one day I will become the first female President of the United States.",
            },
          ],
        },
        {
          title: 'Berufserfahrung',
          type: 'career',
          values: [
            {
              title: 'City Councilor',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2012',
              to: 'aktuell',
              summary:
                '- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.\n- Etiam porttitor tortor vel lobortis ultricies.\n- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.\n- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.\n- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.',
            },
            {
              title: 'Deputy Director Parks Department',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2009',
              to: 'Jan 2012',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
            {
              title: 'Deputy Director Parks Department',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2009',
              to: 'Jan 2012',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
            {
              title: 'Deputy Director Parks Department',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2009',
              to: 'Jan 2012',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
            {
              title: 'Deputy Director Parks Department',
              location: 'Deputy Director Parks Department',
              from: 'Deputy Director Parks Department',
              to: 'Deputy Director Parks Department',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
          ],
        },
        {
          title: 'Ausbildung',
          type: 'career',
          values: [
            {
              title: 'A Environmental and Public Affairs',
              location: 'Indiana University, Bloomington, Indiana',
              from: 'Oct 1993',
              to: 'May 1993',
              summary: '',
            },
          ],
        },
      ],
    },
  ],
}

// ? --------------------------------------
const defaultMetadata = {
  title: 'resume',
  author: 'https://resume.onivue.ch',
  creator: 'https://resume.onivue.ch',
  producer: 'https://resume.onivue.ch',
  subject: 'https://resume.onivue.ch',
  keywords: 'resume;Test',
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
