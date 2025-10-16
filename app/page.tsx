'use client'

import Footer from '@/components/Footer/Footer'
import MotivationIcon from '@/components/Icons/MotivationIcon'
import ResumeIcon from '@/components/Icons/ResumeIcon'
import useResumeStore from '@/stores/useResumeStore'
import Link from 'next/link'

export default function Home() {
    const setDocType = useResumeStore((state) => state.setDocType)

    return (
        <div className="container">
            <div className="w-full animate-fade-in-down">
                <div className="mx-auto self-center px-6 py-16 text-center text-4xl font-bold md:text-5xl lg:w-2/3 lg:text-6xl">
                    <h1 className="bg-gradient-to-r from-primary-600 to-primary-900 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
                        Create Your Modern Resume
                    </h1>
                    <p className="mt-6 text-xl font-normal text-primary-700 dark:text-primary-300 md:text-2xl">
                        Build professional resumes and cover letters with ease
                    </p>
                </div>
            </div>
            <div className="grid animate-fade-in-up justify-items-center gap-y-20 p-8 py-12 md:grid-cols-2 lg:my-8 lg:gap-auto">
                <div>
                    <h2 className="text-center text-2xl font-bold leading-loose">
                        Resume
                    </h2>
                    <Link
                        href="/doc"
                        className="flex flex-col items-center justify-center"
                        onClick={() => setDocType('resume')}
                    >
                        <ResumeIcon className="mb-4 w-60 self-center rounded-lg shadow-2xl shadow-primary-200/40 transition duration-200 hover:scale-105 dark:shadow-none" />
                    </Link>
                </div>
                <div>
                    <h2 className="text-center text-2xl font-bold leading-loose">Cover</h2>
                    <Link
                        href="/doc"
                        className="flex flex-col items-center justify-center"
                        onClick={() => setDocType('cover')}
                    >
                        <MotivationIcon className="mb-4 w-60 self-center rounded-lg shadow-2xl shadow-primary-200/40 transition duration-200 hover:scale-105 dark:shadow-none" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
