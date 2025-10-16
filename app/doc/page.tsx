'use client'

import ActionZone from '@/components/ActionZone/ActionZone'
import Backdrop from '@/components/Backdrop/Backdrop'
import Form from '@/components/Forms/DocForm/DocForm'
import { classNames } from '@/lib/helper'
import useResumeStore from '@/stores/useResumeStore'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { HiX } from 'react-icons/hi'

export const dynamic = 'force-dynamic'

function FileGenerationContent() {
    const [isClient, setIsClient] = useState(false)
    const [PDFComponents, setPDFComponents] = useState<any>(null)
    const [showForm, SetShowForm] = useState(false)
    const searchParams = useSearchParams()

    useEffect(() => {
        setIsClient(true)
        // Load PDF components only on client side
        import('@react-pdf/renderer').then((mod) => {
            setPDFComponents({
                BlobProvider: mod.BlobProvider,
            })
        })
        import('@/components/PDFViewer/PDFViewer').then((mod) => {
            setPDFComponents((prev: any) => ({
                ...prev,
                PDFViewer: mod.default,
            }))
        })
        import('@/components/TemplateChooser/TemplateChooser').then((mod) => {
            setPDFComponents((prev: any) => ({
                ...prev,
                TemplateChooser: mod.default,
            }))
        })
    }, [])

    const toggleForm = () => {
        SetShowForm(!showForm)
    }

    const StateDebug = useResumeStore((state) => state.StateDebug)
    const setFileDownloadURL = useResumeStore((state) => state.setFileDownloadURL)
    const docTemplateName = useResumeStore((state) => state.docTemplateName)
    const docType = useResumeStore((state) => state.docType)
    const formValues = useResumeStore((state) => state.formValues)
    const resumeSettings = useResumeStore((state) => state.resumeSettings)

    return (
        <div className="flex max-h-[calc(100vh-60px)] min-h-[calc(100vh-60px)] w-full max-w-[1900px]">
            {showForm && (
                <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-4 lg:hidden">
                    <button
                        type="button"
                        onClick={toggleForm}
                        className="text-primary-lighter hover:text-primary z-50 rounded-md bg-primary-50 p-1 ring-primary-300 transition-colors duration-200 hover:bg-primary-100 focus:outline-none focus:ring dark:text-black"
                    >
                        <HiX className="h-8 w-8" />
                    </button>
                </div>
            )}
            {isClient && (
                <>
                    {searchParams?.get('debug') && (
                        <StateDebug className="fixed right-0 top-20 z-20 h-[1200px] w-2/5 overflow-auto rounded bg-gray-500 p-4 font-mono text-white opacity-80" />
                    )}
                    <Backdrop show={showForm} className="lg:hidden" />
                    <aside
                        className={classNames(
                            'fixed flex-1 lg:static',
                            'z-10 pt-4 lg:z-0 lg:py-0',
                            'transition  duration-500 ease-in-out lg:w-1/2  lg:translate-y-0  lg:animate-fade-in-up',
                            'inset-0 inset-y-0 top-0',
                            showForm
                                ? 'translate-y-0 '
                                : 'translate-y-full  opacity-0 lg:opacity-100',
                        )}
                    >
                        <div className="h-full overflow-auto rounded-lg bg-white p-4 dark:bg-dark-100">
                            <div className=" transform rounded-lg border p-4 text-center font-mono text-2xl font-semibold transition-all duration-75 ease-in ">
                                Formular
                            </div>
                            <Form />
                        </div>
                    </aside>

                    <div className="flex w-full flex-col justify-center lg:w-1/2">
                        {PDFComponents?.BlobProvider &&
                            PDFComponents?.PDFViewer &&
                            PDFComponents?.TemplateChooser && (
                                <PDFComponents.BlobProvider
                                    document={
                                        <PDFComponents.TemplateChooser
                                            docTemplateName={docTemplateName}
                                            docType={docType}
                                            formValues={formValues}
                                            resumeSettings={resumeSettings}
                                        />
                                    }
                                >
                                    {({ blob, url, loading, error }: any) => {
                                        return (
                                            <PDFComponents.PDFViewer
                                                file={url}
                                                loading={loading}
                                                className="no-scrollbar max-h-screen w-auto animate-fade-in-down  overflow-auto px-4 py-4"
                                                setFileDownloadURL={setFileDownloadURL}
                                            />
                                        )
                                    }}
                                </PDFComponents.BlobProvider>
                            )}
                        <ActionZone toggleForm={toggleForm} />
                    </div>
                </>
            )}
        </div>
    )
}

export default function FileGeneration() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FileGenerationContent />
        </Suspense>
    )
}
