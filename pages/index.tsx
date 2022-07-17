import { useContext, useEffect } from 'react';
import HomeHeader from '../components/Homepage/HomeHeader';
import ActiveStreaming from '../components/Homepage/ActiveStreaming';
import { AuthContext } from '../contexts/AuthContext';

function Home() {
  const user = useContext(AuthContext);

  useEffect(() => {
    console.log('User logged in: ', user);
  });

  return (
    <div className="min-h-screen py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <HomeHeader />
      <ActiveStreaming />
    </div>
  );
}

export default Home;
