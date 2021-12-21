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

      <Navigation className="bg-indigo-500 h-[75px] fixed inset-0 z-20" />
      <div className="flex flex-col  min-h-screen pt-[75px]">
        <main className="flex flex-col flex-1 lg:flex-row min-h-[calc(100vh-75px)] max-h-[calc(100vh-75px)] justify-center self-center max-w-screen-xl w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
