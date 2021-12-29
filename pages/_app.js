import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'
import '@/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
        />
      </Head>

      <Navigation className="backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 h-[75px] fixed inset-0 z-10 shadow-lg shadow-primary-500/20 px-4" />
      <div className="flex flex-col  min-h-screen pt-[75px]">
        <main className="flex flex-col flex-1 lg:flex-row min-h-[calc(100vh-75px)] max-h-[calc(100vh-75px)] justify-center self-center max-w-screen-xl w-full px-4">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
