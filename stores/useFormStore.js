import { useState } from 'react'
import create from 'zustand'

const defaultFormValues = {
  name: 'Bruce Wayne',
  jobTitle: 'Batman',
  aboutMe:
    'My name is Bruce Wayne. I am a passionate, over-achieving employee who believes in justice.',
  experience: [
    {
      title: 'SharePoint Application Engineer',
      location: 'St. Gallen',
      from: '01.01.2010',
      to: '01.01.2020',
      summary: 'My Summary',
    },
  ],
  education: [
    {
      title: 'Technology School',
      location: 'St. Gallen',
      from: '01.01.2013',
      to: '01.01.2018',
      summary: 'My Summary',
    },
  ],
}
const useFormStore = create((set, get) => ({
  formState: defaultFormValues,
  setFormState: (payload) => {
    set({ formState: payload })
  },
  StateDebug: ({ className }) => {
    const [state, setState] = useState('X')
    return (
      <div className={className}>
        <p className="text-xs text-center">DEBUG FORM STATE</p>
        {JSON.stringify(get().formState, null, 4)}
      </div>
    )
  },
}))

export default useFormStore
