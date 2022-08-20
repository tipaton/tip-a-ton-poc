import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import sample1 from '../../assets/sampleml.png';
import sample2 from '../../assets/sampleml2.png';
import sample3 from '../../assets/sampleml3.png';

export default function HotGamers() {
  return (
    <div className="mt-6 mb-6">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
          Top Streamers
        </h2>
        <Link href="/streamers">
          <div className="inline-flex items-center group">
            <span className="text-white group-hover:cursor-pointer group-hover:text-blue-400">
              See all
            </span>
            <ArrowNarrowRightIcon
              className="mx-2 text-white block-inline group-hover:cursor-pointer group-hover:text-blue-400"
              width={20}
              height={20}
            />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3">
        <Link href="/streamings/jessnolimit">
          <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
            <div className="space-y-4 bg-black shadow-lg hover:cursor-pointer ">
              <Image
                src={sample1}
                alt="Dota 2"
                layout="responsive"
                className="mb-8"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white">Push Rank Mabar ML</span>
                <span className="font-light tracking-wider text-white">Jess No Limit</span>
                <span className="text-white font-extralight">15.4K Viewers</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/streamings/jessnolimit">
          <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
            <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
              <Image src={sample2} alt="League of Legends" layout="responsive" />
              <div className="flex flex-col">
                <span className="font-bold text-white">New Heroes Valorant</span>
                <span className="font-light tracking-wider text-white">Reza Arap</span>
                <span className="text-white font-extralight">4K Viewers</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/streaming">
          <div className="transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
            <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
              <Image src={sample3} alt="Counter Strike" layout="responsive" />
              <div className="flex flex-col">
                <span className="font-bold text-white">Dota 2 Mini Tournament</span>
                <span className="font-light tracking-wider text-white">Dendi NAVI</span>
                <span className="text-white font-extralight">154K Viewers</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
