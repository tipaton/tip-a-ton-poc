import type { NextPage } from 'next'
import HomeHeader from '../components/HomeHeader'
import ActiveStreaming from '../components/ActiveStreaming'


const Home: NextPage = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
      <HomeHeader />
      <ActiveStreaming />
    </div>
  )
}

export default Home
