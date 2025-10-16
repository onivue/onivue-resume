import Navigation from '@/components/Navigation/Navigation'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: {
        default: 'onivue-resume | Create Your Modern CV',
        template: '%s | onivue-resume',
    },
    description:
        'Create easy and modern your CV! A free, open-source resume and cover letter builder with client-side PDF generation.',
    keywords: [
        'resume',
        'cv',
        'cover letter',
        'bewerbung',
        'lebenslauf',
        'pdf generator',
        'react-pdf',
        'free resume builder',
        'modern cv',
    ],
    authors: [{ name: 'Albin Hoti', url: 'https://www.onivue.ch' }],
    creator: 'Albin Hoti',
    publisher: 'onivue',
    applicationName: 'onivue-resume',
    appleWebApp: {
        title: 'onivue-resume',
        capable: true,
        statusBarStyle: 'default',
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://resume.onivue.ch/',
        title: 'onivue-resume | Create Your Modern CV',
        description:
            'Create easy and modern your CV! A free, open-source resume and cover letter builder with client-side PDF generation.',
        siteName: 'onivue-resume',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'onivue-resume | Create Your Modern CV',
        description:
            'Create easy and modern your CV! A free, open-source resume and cover letter builder.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <Navigation />
                    <div className="flex min-h-screen flex-col pt-[60px]">
                        <main className="flex w-full flex-1 justify-center self-center lg:flex-row">
                            {children}
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
