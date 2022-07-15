import Image from 'next/image'
import Link from 'next/link'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import SmallLogo from '../../assets/small_logo.png'
import SampleML from '../../assets/sampleml.png'
import SampleML2 from '../../assets/sampleml2.png'
import SampleML3 from '../../assets/sampleml3.png'


export default function ActiveStreaming() {
    return (
        <div className="px-6 py-6 sm:px-0">
            <div>
              <div className="flex flex-row justify-between">
                <h2 className='text-2xl md:text-3xl font-bold text-white tracking-wide'>
                  Now Streaming
                </h2>
                <Link href={"/streamings/jessnolimit"}>
                  <div className="inline-flex items-center group">
                    
                      <span className="text-white group-hover:cursor-pointer group-hover:text-blue-400">See all</span>
                      <ArrowNarrowRightIcon className="block-inline text-white group-hover:cursor-pointer group-hover:text-blue-400 mx-2" width={20} height={20}/>
                    
                  </div>
                </Link>
                
              </div>
              
              <div className='py-8 space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3'>
                <Link href={"/streamings/jessnolimit"}>
                  <div className="max-w-md shadow-lg transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg sm:max-w-sm hover:cursor-pointer ">
                      <Image src={SampleML} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                      <div className='flex flex-col justify-center'>
                        <div className='flex bg-slate-700 rounded-b-lg justify-between py-4 px-4 text-white text-lg md:text-xl font-bold'>
                          <span className='tracking-wider'>Jess No Limit</span>
                          <div className='text-blue-400 space-x-2'>
                            <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                            <span>100</span> 
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </Link>
                <Link href={"/streamings/jessnolimit"}>
                  <div className="max-w-md shadow-lg transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg sm:max-w-sm hover:cursor-pointer">
                        <Image src={SampleML2} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                        <div className='flex flex-col justify-center'>
                          <div className='flex justify-between bg-slate-700 rounded-b-lg py-4 px-4 text-white text-lg md:text-xl font-bold'>
                            <span className='tracking-wider'>Jess With Limit</span>
                            <div className='text-blue-400 space-x-2'>
                              <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                              <span>15</span> 
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </Link>
                <Link href={"/streaming"}>
                  <div className="max-w-md transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                    <div className="bg-black max-w-md rounded-lg overflow-hidden shadow-lg sm:max-w-sm hover:cursor-pointer">
                        <Image src={SampleML3} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-lg'/>
                        <div className='flex flex-col justify-center'>
                          <div className='flex justify-between bg-slate-700 rounded-b-lg py-4 px-4 text-white text-lg md:text-xl font-bold'>
                            <span className='tracking-wider'>Jess Some Limit</span>
                            <div className='text-blue-400 space-x-2'>
                              <Image src={SmallLogo} alt="Small Logo" height={16} width={16}/>
                              <span>100</span> 
                            </div>
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