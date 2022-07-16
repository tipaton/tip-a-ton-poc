import { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import HomeHeader from '../components/Homepage/HomeHeader'
import ActiveStreaming from '../components/Homepage/ActiveStreaming'
import { AuthContext } from '../contexts/AuthContext'

const Home: NextPage = () => {
  const user = useContext(AuthContext);
  
  useEffect(() => {
    console.log("User logged in: ", user);
  })

  return (
    <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
      <HomeHeader />
      <ActiveStreaming />
    </div>
  )
}

export default Home
