import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tip A Ton</title>
        <meta name="description" content="Tip your creator with Ton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-8">
        Hello World
      </div>
    </div>
  )
}

export default Home
