import useResumeStore from '@/stores/useResumeStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ResumeIcon from '@/components/Icons/ResumeIcon'
import MotivationIcon from '@/components/Icons/MotivationIcon'

function Home() {
  const setDocType = useResumeStore((state) => state.setDocType)

  return (
    <div className="container ">
      <div className="w-full animate-fade-in-down ">
        <div className="mx-auto self-center py-16 px-6 text-center text-4xl font-bold md:text-5xl lg:w-2/3 lg:text-5xl">
          Einfach und modern deine Bewerbung erstellen
        </div>
      </div>
      <div className="lg:gap-auto grid animate-fade-in-up justify-items-center gap-y-20 p-8 py-12 md:grid-cols-2 lg:my-8 ">
        <div className="">
          <h2 className="text-center text-2xl font-bold leading-loose">
            Resume
          </h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('resume')}
            >
              <ResumeIcon
                // src="/img/resume.svg"
                // alt="resume-icon"
                className="mb-4 w-60 self-center rounded-lg shadow-2xl  shadow-primary-200/40 transition duration-200 hover:scale-105 dark:shadow-none "
              />
            </a>
          </Link>
        </div>
        <div className="">
          <h2 className="text-center text-2xl font-bold leading-loose">
            Cover
          </h2>
          <Link href="/doc">
            <a
              className="flex flex-col items-center justify-center"
              onClick={() => setDocType('cover')}
            >
              <MotivationIcon
                src="/img/motivation.svg"
                alt="motivation-icon"
                className="mb-4 w-60 self-center rounded-lg shadow-2xl  shadow-primary-200/40 transition duration-200 hover:scale-105 dark:shadow-none "
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
