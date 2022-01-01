import { useState } from 'react'
import create from 'zustand'

const defaultFormValues = {
  name: 'Bruce Wayne',
  jobTitle: 'Batman',
  address: 'Street XY1',
  plz: '9000 Gotham',
  phone: '071 000 00 00',
  mail: 'bruce.wayne@batman.com',
  aboutMe:
    'My name is Bruce Wayne. I am a passionate, over-achieving employee who believes in justice.',
  experience: [
    {
      title: 'Application Engineer',
      location: 'Gotham',
      from: '01.01.2010',
      to: '01.01.2020',
      summary: 'My Summary',
    },
  ],
  education: [
    {
      title: 'Technology School',
      location: 'Gotham',
      from: '01.01.2013',
      to: '01.01.2018',
      summary: 'My Summary',
    },
  ],
  skills: ['react', 'tailwind'],
}
const useFormStore = create((set, get) => ({
  formValues: defaultFormValues,
  setFormValues: (payload) => {
    set({ formValues: payload })
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
