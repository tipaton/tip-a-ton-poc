import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '../assets/small_logo.png'
import SampleML from '../assets/sampleml.png'
import SampleML2 from '../assets/sampleml2.png'
import SampleML3 from '../assets/sampleml3.png'


export default function ActiveStreaming() {
    return (
        <div className="px-8 py-6 sm:px-0">
            <div>
              <h2 className='text-3xl font-bold text-white tracking-wide'>
                Active Streaming
              </h2>
              <div className='py-8 space-y-4 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3'>
                <Link href={"/streaming"}>
                  <div className="max-w-md bg-gradient-to-bl from-blue-400/30 to-slate-800 p-2 rounded-lg transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg h-72 sm:max-w-sm hover:cursor-pointer ">
                      <Image src={SampleML} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                      <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                        <span className='tracking-wider'>Jess No Limit</span>
                        <div className='text-blue-400 space-x-2'>
                          <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                          <span>100</span> 
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/streaming"}>
                  <div className="max-w-md bg-gradient-to-bl from-blue-400/30 to-slate-800 p-2 rounded-lg transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg h-72 sm:max-w-sm hover:cursor-pointer">
                        <Image src={SampleML2} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                        <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                          <span className='tracking-wider'>Bang Bang</span>
                          <div className='text-blue-400 space-x-2'>
                          <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                          <span>10</span> 
                        </div>
                        </div>
                      </div>
                  </div>
                </Link>
                <Link href={"/streaming"}>
                  <div className="max-w-md bg-gradient-to-bl from-blue-400/30 to-slate-800 p-2 rounded-lg transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg h-72 sm:max-w-sm hover:cursor-pointer">
                        <Image src={SampleML3} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                        <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                          <span className='tracking-wider'>Donkey Bar Bar</span>
                          <div className='text-blue-400 space-x-2'>
                          <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                          <span>80</span> 
                        </div>
                        </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
    )
}