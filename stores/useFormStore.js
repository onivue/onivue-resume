import { useState } from 'react'
import create from 'zustand'

const defaultFormValues = {
  name: 'Bruce Wayne',
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
const useFormStore = create((set, get) => ({
  formValues: defaultFormValues,
  setFormValues: (payload) => {
    // console.log('setFormValues - STORE')
    set({ formValues: payload })
  },
  StateDebug: ({ className }) => {
    const [state, setState] = useState('X')
    return (
      <div className={className}>
        <p className="text-xs text-center">DEBUG FORM VALUES</p>
        {JSON.stringify(get().formValues, null, 4)}
      </div>
    )
  },
}))

export default useFormStore
