import Image from 'next/image'
import SampleML from '../assets/sampleml.png'
import SampleML2 from '../assets/sampleml2.png'
import SampleML3 from '../assets/sampleml3.png'


export default function ActiveStreaming() {
    return (
        <div className="px-4 py-6 sm:px-0">
            <div>
              <h2 className='text-2xl font-bold text-white tracking-wide'>
                Active Streaming
              </h2>
              <div className='py-8 sm:grid md:grid-cols-2 lg:grid-cols-3'>
                <div className="bg-slate-800 max-w-md rounded-2xl overflow-hidden shadow-lg h-80 sm:max-w-sm md:h-72">
                  <Image src={SampleML} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-2xl'/>
                  <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                    <span className='tracking-wider'>Jess No Limit</span>
                    <span className='text-blue-400'>100 TON</span>
                  </div>
                </div>
                <div className="bg-slate-800 my-8 md:my-0 md:mx-4 max-w-md rounded-2xl overflow-hidden shadow-lg h-80 sm:max-w-sm md:h-72">
                  <Image src={SampleML2} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-2xl'/>
                  <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                    <span className='tracking-wider'>Bang Bang</span>
                    <span className='text-blue-400'>10 TON</span>
                  </div>
                </div>
                <div className="bg-slate-800 md:my-8 lg:my-0 lg:mx-4 max-w-md rounded-2xl overflow-hidden shadow-lg h-80 sm:max-w-sm md:h-72">
                  <Image src={SampleML3} alt="Mobile Legend Streaming" layout="responsive" className='rounded-t-2xl'/>
                  <div className='flex items-center justify-between py-4 px-4 text-white text-xl font-bold'>
                    <span className='tracking-wider'>Donkey Bar Bar</span>
                    <span className='text-blue-400'>80 TON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}