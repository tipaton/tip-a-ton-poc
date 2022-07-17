import Link from 'next/link';
import Image from 'next/image';
import SmallLogo from '../../assets/small_logo.png';
import SampleML2 from '../../assets/sampleml2.png';

export default function StreamingsList() {
  return (
    <div className="min-h-screen py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="px-4">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Currently Streaming
        </h1>
      </div>
      <div className="grid grid-cols-1 px-4 mt-6 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="relative group">
          <Link href="/streamings/123456">
            <div className="overflow-hidden transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="object-cover object-center w-full h-full overflow-hidden bg-black rounded-lg shadow-lg hover:cursor-pointer">
                <Image
                  src={SampleML2}
                  alt="Mobile Legend Streaming"
                  layout="responsive"
                  className="rounded-t-lg"
                />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess With Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image
                        src={SmallLogo}
                        alt="Small Logo"
                        height={16}
                        width={16}
                      />
                      <span>15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link href="/streaming/123456">
            <div className="overflow-hidden transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="object-cover object-center w-full h-full overflow-hidden bg-black rounded-lg shadow-lg hover:cursor-pointer">
                <Image
                  src={SampleML2}
                  alt="Mobile Legend Streaming"
                  layout="responsive"
                  className="rounded-t-lg"
                />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess With Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image
                        src={SmallLogo}
                        alt="Small Logo"
                        height={16}
                        width={16}
                      />
                      <span>15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link href="/streaming">
            <div className="overflow-hidden transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="object-cover object-center w-full h-full overflow-hidden bg-black rounded-lg shadow-lg hover:cursor-pointer">
                <Image
                  src={SampleML2}
                  alt="Mobile Legend Streaming"
                  layout="responsive"
                  className="rounded-t-lg"
                />
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between px-4 py-4 text-lg font-bold text-white rounded-b-lg bg-slate-700 md:text-xl">
                    <span className="tracking-wider">Jess With Limit</span>
                    <div className="space-x-2 text-blue-400">
                      <Image
                        src={SmallLogo}
                        alt="Small Logo"
                        height={16}
                        width={16}
                      />
                      <span>15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
