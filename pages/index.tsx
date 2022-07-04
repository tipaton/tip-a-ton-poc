import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/menu'
import HomeHeader from '../components/home-header'
import ActiveStreaming from '../components/active-streaming'


const Home: NextPage = () => {
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
          <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
            <HomeHeader />
            <ActiveStreaming />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
