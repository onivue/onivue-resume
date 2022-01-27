import Link from 'next/link'
import { useEffect, useState } from 'react'

function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showForm, SetShowForm] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleForm = () => {
    SetShowForm(!showForm)
  }

  // const StateDebug = useResumeStore((state) => state.StateDebug)

  return (
    <div className="justify-center max-w-screen-xl px-8 ">
      <div className="text-[2.0rem] font-bold text-center self-center mx-auto py-14 lg:text-5xl lg:w-2/3">
        Einfach und Modern deine Bewerbung erstellen.
      </div>

      <div className="grid p-8 gap-y-20 lg:gap-auto lg:grid-cols-2 justify-items-center">
        <div>
          <h2 className="text-lg text-center">Lebenslauf</h2>
          <Link href="/resume">
            <a className="flex flex-col items-center justify-center">
              <img
                src="/img/resume.svg"
                alt="resume-icon"
                className="self-center w-32 my-4 transition duration-200 shadow-lg shadow-primary-200/40 hover:scale-110"
              />
              <button className="p-4 px-6 text-center rounded-lg shadow-lg cursor-pointer bg-primary-200 shadow-primary-100 hover:bg-primary-300">
                Create!
              </button>
            </a>
          </Link>
        </div>
        <div>
          <h2 className="text-lg text-center">Motivationsschreiben</h2>
          <Link href="/">
            <a className="flex flex-col items-center justify-center">
              <img
                src="/img/motivation.svg"
                alt="motivation-icon"
                className="self-center w-32 my-4 transition duration-200 shadow-lg shadow-primary-200/40 hover:scale-110"
              />
              <button className="p-4 px-6 text-center rounded-lg shadow-lg cursor-pointer bg-primary-200 shadow-primary-100 hover:bg-primary-300">
                Create!
              </button>
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="flex flex-col p-4 my-8 border-2 rounded-lg border-primary-200">
        <div className="text-xl ">coming soon features</div>
        <div className="">- new templates</div>
        <div className="">- new fonts</div>
      </div> */}
    </div>
  )
}

export default Home
