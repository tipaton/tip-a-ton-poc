import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import SmallLogo from '../../assets/small_logo.png';
import SampleML from '../../assets/sampleml.png';
import SampleML2 from '../../assets/sampleml2.png';
import SampleML3 from '../../assets/sampleml3.png';

export default function ActiveStreaming() {
  return (
    <div className="px-6 py-6 sm:px-0">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
            Now Streaming
          </h2>
          <Link href="/streamings">
            <div className="inline-flex items-center group">
              <span className="text-white group-hover:cursor-pointer group-hover:text-blue-400">See all</span>
              <ArrowNarrowRightIcon className="mx-2 text-white block-inline group-hover:cursor-pointer group-hover:text-blue-400" width={20} height={20} />
            </div>
          </Link>
        </div>
        <div className="py-8 space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3">
          <Link href="/streamings/jessnolimit">
            <div className="max-w-md transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="max-w-md overflow-hidden bg-black rounded-lg shadow-lg sm:max-w-sm hover:cursor-pointer ">
                <Image src={SampleML} alt="Mobile Legend Streaming" layout="responsive" className="rounded-t-lg" />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess No Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image src={SmallLogo} alt="Small Logo" height={16} width={16} />
                      <span>100</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>
          <Link href="/streamings/jessnolimit">
            <div className="max-w-md transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="max-w-md overflow-hidden bg-black rounded-lg shadow-lg sm:max-w-sm hover:cursor-pointer">
                <Image src={SampleML2} alt="Mobile Legend Streaming" layout="responsive" className="rounded-t-lg" />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess With Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image src={SmallLogo} alt="Small Logo" height={16} width={16} />
                      <span>15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/streaming">
            <div className="max-w-md transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
              <div className="max-w-md overflow-hidden bg-black rounded-lg shadow-lg sm:max-w-sm hover:cursor-pointer">
                <Image src={SampleML3} alt="Mobile Legend Streaming" layout="responsive" className="rounded-t-lg" />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess Some Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image src={SmallLogo} alt="Small Logo" height={16} width={16} />
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
            Top Streamers
          </h2>
          <Link href="/streamers">
            <div className="inline-flex items-center group">
              <span className="text-white group-hover:cursor-pointer group-hover:text-blue-400">See all</span>
              <ArrowNarrowRightIcon className="mx-2 text-white block-inline group-hover:cursor-pointer group-hover:text-blue-400" width={20} height={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
