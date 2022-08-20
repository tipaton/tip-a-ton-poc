import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import cs from '../../assets/cs.png';
import dota from '../../assets/dota.png';
import lol from '../../assets/lol.png';
import valorant from '../../assets/valorant.png';

export default function ActiveStreaming() {
  return (
    <div className="px-6 py-6 sm:px-0">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
            Hot Games
          </h2>
          <Link href="/streamings">
            <div className="inline-flex items-center group">
              <span className="text-white group-hover:cursor-pointer group-hover:text-blue-400">See all</span>
              <ArrowNarrowRightIcon className="mx-2 text-white block-inline group-hover:cursor-pointer group-hover:text-blue-400" width={20} height={20} />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 sm:gap-4 md:gap-8 lg:grid-cols-4">
          <Link href="/streamings/jessnolimit">
            <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="space-y-4 bg-black shadow-lg hover:cursor-pointer ">
                <Image src={dota} alt="Dota 2" layout="responsive" className="mb-8" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Dota 2</span>
                  <span className="text-white">15.4K Viewers</span>
                </div>

              </div>

            </div>
          </Link>
          <Link href="/streamings/jessnolimit">
            <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
              <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                <Image src={lol} alt="League of Legends" layout="responsive" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">League of Legends</span>
                  <span className="text-white">14.4K Viewers</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/streaming">
            <div className="transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
              <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                <Image src={cs} alt="Counter Strike" layout="responsive" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Counter Strike</span>
                  <span className="text-white">4K Viewers</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/streaming">
            <div className="transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
              <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                <Image src={valorant} alt="Valorant" layout="responsive" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Valorant</span>
                  <span className="text-white">15K Viewers</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
