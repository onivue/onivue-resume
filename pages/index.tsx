// @ts-nocheck
import Footer from '@/components/Footer/Footer';
import MotivationIcon from '@/components/Icons/MotivationIcon';
import ResumeIcon from '@/components/Icons/ResumeIcon';
import useResumeStore from '@/stores/useResumeStore';
import Link from 'next/link';

function Home() {
  const setDocType = useResumeStore((state) => state.setDocType);

  return (
    <div className="container min-h-screen">
      {/* Hero Section */}
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="w-full animate-fade-in-down">
          <div className="mx-auto mb-6 max-w-4xl px-6 text-center">
            <h1 className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent dark:from-primary-400 dark:to-primary-300 md:text-6xl lg:text-7xl">
              Einfach und modern deine Bewerbung erstellen
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-600 dark:text-primary-400 md:text-xl">
              Erstelle professionelle Lebensläufe und Anschreiben in wenigen Minuten mit unserem modernen CV-Generator
            </p>
          </div>
        </div>

        {/* CTA Cards */}
        <div className="mt-12 grid w-full max-w-5xl animate-fade-in-up gap-8 px-6 md:grid-cols-2">
          <Link
            href="/doc"
            onClick={() => setDocType('resume')}
            className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-primary-700 dark:bg-dark-100"
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200">Resume</h2>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 dark:bg-primary-800">
                  📄
                </div>
              </div>
              <p className="mb-8 text-primary-600 dark:text-primary-400">
                Erstelle einen professionellen Lebenslauf mit modernen Templates
              </p>
              <ResumeIcon className="mx-auto w-64 rounded-xl shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl dark:shadow-primary-500/20" />
              <div className="mt-6 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <span className="mr-2 font-semibold">Jetzt erstellen</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-900/20" />
          </Link>

          <Link
            href="/doc"
            onClick={() => setDocType('cover')}
            className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-primary-700 dark:bg-dark-100"
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200">Cover</h2>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 dark:bg-primary-800">
                  ✉️
                </div>
              </div>
              <p className="mb-8 text-primary-600 dark:text-primary-400">
                Erstelle ein überzeugendes Motivationsschreiben
              </p>
              <MotivationIcon
                src="/img/motivation.svg"
                alt="motivation-icon"
                className="mx-auto w-64 rounded-xl shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl dark:shadow-primary-500/20"
              />
              <div className="mt-6 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <span className="mr-2 font-semibold">Jetzt erstellen</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-900/20" />
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20 w-full max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-primary-100 bg-white/50 p-6 backdrop-blur-sm dark:border-primary-800 dark:bg-dark-100/50">
              <div className="mb-3 text-3xl">⚡</div>
              <h3 className="mb-2 font-bold text-primary-800 dark:text-primary-200">Schnell & Einfach</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Erstelle deine Bewerbung in wenigen Minuten
              </p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-white/50 p-6 backdrop-blur-sm dark:border-primary-800 dark:bg-dark-100/50">
              <div className="mb-3 text-3xl">🎨</div>
              <h3 className="mb-2 font-bold text-primary-800 dark:text-primary-200">Modern & Professionell</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Verwende zeitgemäße und professionelle Templates
              </p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-white/50 p-6 backdrop-blur-sm dark:border-primary-800 dark:bg-dark-100/50">
              <div className="mb-3 text-3xl">📱</div>
              <h3 className="mb-2 font-bold text-primary-800 dark:text-primary-200">Responsive Design</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Funktioniert perfekt auf allen Geräten
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
