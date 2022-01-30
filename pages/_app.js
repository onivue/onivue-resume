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
        <title>onivue-resume</title>
      </Head>

      <Navigation className="" />
      <div className="flex flex-col  min-h-screen pt-[60px]">
        <main className="flex flex-1 lg:flex-row  justify-center self-center max-w-[1900px] w-full ">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
