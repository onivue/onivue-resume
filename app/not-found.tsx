import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="container flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-6 text-center">
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
            <h2 className="mt-4 text-3xl font-semibold text-primary-800 dark:text-primary-200">
                Page Not Found
            </h2>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-400">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-8 rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
                Go Home
            </Link>
        </div>
    )
}
