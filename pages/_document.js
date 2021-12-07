import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'onivue.'
const APP_DESCRIPTION = 'Development Area of onivue'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="apple-mobile-web-app-title" content="onivue." />
                    <meta name="application-name" content="onivue." />
                    <meta name="theme-color" content="#a3e635" />
                    <meta charSet="utf-8" />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="shortcut icon" href="/icons/favicon.ico" /> */}
        </Head>
        <body className="antialiased text-gray-900  bg-indigo-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
