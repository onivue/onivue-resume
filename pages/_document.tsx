import { Head, Html, Main, NextScript } from 'next/document';

const APP_NAME = 'resume-onivue';
const APP_DESCRIPTION = 'online resume editor';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />

        <meta name="theme-color" content="#f9e288" />
        <meta charSet="utf-8" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>

      <body className=" bg-gray-50 text-gray-900 antialiased selection:bg-primary-200 dark:bg-dark-200 dark:text-white ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
