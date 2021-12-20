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
      <div className="flex flex-col min-h-screen ">
        <div className="bg-indigo-500 h-[75px]">NAVIGATION</div>
        <main className="relative flex flex-col self-center flex-1 w-full max-w-screen-xl overflow-hidden ">
          <Component {...pageProps} />
        </main>
        <div className="bg-indigo-500 ">FOOTER</div>
      </div>
    </>
  )
}

export default MyApp
