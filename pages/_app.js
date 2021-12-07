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
      <div className="flex min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
