import useResumeStore from '@/stores/useResumeStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Home() {
  const setDocType = useResumeStore((state) => state.setDocType)

  return (
    <div className="justify-center max-w-screen-xl px-4 ">
      <div className="text-[2.0rem] font-bold text-center self-center mx-auto py-6 lg:text-5xl lg:w-2/3 animate-fade-in-down">
        Einfach und modern deine Bewerbung erstellen
        <label className="text-primary-400">.</label>
      </div>

      <div className="grid p-8 py-24 gap-y-20 lg:gap-auto lg:grid-cols-2 justify-items-center lg:my-8 bg-gradient-to-bl from-primary-100 via-primary-200 to-primary-300 rounded-xl shadow-2xl">
        <div className="animate-fade-in">
          <h2 className="text-lg text-center font-semibold leading-loose">
            Lebenslauf
          </h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('resume')}
            >
              <img
                src="/img/resume.svg"
                alt="resume-icon"
                className="self-center w-60 my-4 transition duration-200  rounded-lg shadow-2xl shadow-primary-200/40 hover:scale-110 dark:shadow-none animate-fade-in"
              />
            </a>
          </Link>
        </div>
        <div className="animate-fade-in">
          <h2 className="text-lg text-center font-semibold leading-loose">
            Motivationsschreiben
          </h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('cover')}
            >
              <img
                src="/img/motivation.svg"
                alt="motivation-icon"
                className="self-center w-60 my-4 transition duration-200  rounded-lg shadow-2xl shadow-primary-200/40 hover:scale-110 dark:shadow-none animate-fade-in"
              />
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
