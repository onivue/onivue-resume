// @ts-nocheck
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
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
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Navigation />
        <div className="flex min-h-screen  flex-col pt-[60px]">
          <main className="flex w-full flex-1  justify-center self-center lg:flex-row ">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
