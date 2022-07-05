import useResumeStore from '@/stores/useResumeStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ResumeIcon from '@/components/Icons/ResumeIcon'
import MotivationIcon from '@/components/Icons/MotivationIcon'

function Home() {
  const setDocType = useResumeStore((state) => state.setDocType)

  return (
    <div className="w-full">
      <div className="bg-gradient-to-tl from-orange-300 via-primary-400 to-orange-300  text-white w-full py-20 animate-fade-in-down ">
        <div className="text-[2.0rem] font-bold text-center self-center mx-auto py-16 lg:text-5xl lg:w-2/3 ">
          Einfach und modern deine Bewerbung erstellen
          <label className="text-gray-600">.</label>
        </div>
      </div>
      <div className="animate-fade-in-up grid p-8 py-24 gap-y-20 lg:gap-auto lg:grid-cols-2 justify-items-center lg:my-8 ">
        <div className="">
          <h2 className="text-xl text-center leading-loose">Lebenslauf</h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('resume')}
            >
              <ResumeIcon
                // src="/img/resume.svg"
                // alt="resume-icon"
                className="self-center w-60 my-4 transition duration-200  rounded-lg shadow-2xl shadow-primary-200/40 hover:scale-110 dark:shadow-none "
              />
            </a>
          </Link>
        </div>
        <div className="">
          <h2 className="text-xl text-center leading-loose">
            Motivationsschreiben
          </h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('cover')}
            >
              <MotivationIcon
                src="/img/motivation.svg"
                alt="motivation-icon"
                className="self-center w-60 my-4 transition duration-200  rounded-lg shadow-2xl shadow-primary-200/40 hover:scale-110 dark:shadow-none "
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
