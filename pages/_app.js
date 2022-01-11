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

      <Navigation className="backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 h-[70px] fixed inset-0 z-10 shadow-lg shadow-primary-400/20 " />
      <div className="flex flex-col  min-h-screen pt-[70px]">
        <main className="lg:px-4 py-4 flex flex-1 lg:flex-row min-h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] justify-center self-center max-w-screen-xl w-full ">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
