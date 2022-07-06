import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Menu from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Tip-A-Ton</title>
        <meta name="description" content="Tip your creator with Ton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full bg-black">
        <div className="bg-gradient-to-tr from-blue-400/5 to-slate-900/5">
          <Menu />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
    
  )
}

export default MyApp
