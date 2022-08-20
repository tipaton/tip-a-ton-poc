import Link from 'next/link';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import nft1 from '../../assets/nft1.png';
import nft2 from '../../assets/nft2.png';
import nft3 from '../../assets/nft3.png';
import nft4 from '../../assets/nft4.png';

export default function NftGallery() {
    return (
        <div className="px-6 py-6 mt-6 sm:px-0">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
                    Trending NFTs
                </h2>
                <Link href="/nfts">
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
            <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 sm:gap-4 md:gap-8 lg:grid-cols-4">
                <Link href="/streamings/jessnolimit">
                    <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
                        <div className="space-y-4 bg-black shadow-lg hover:cursor-pointer ">
                            <Image
                                src={nft1}
                                alt="Dota 2"
                                layout="responsive"
                                className="mb-8"
                            />
                        </div>
                    </div>
                </Link>
                <Link href="/streamings/jessnolimit">
                    <div className="transition duration-200 ease-in transform shadow-lg md:hover:scale-105 hover:z-50">
                        <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                            <Image src={nft2} alt="League of Legends" layout="responsive" />
                        </div>
                    </div>
                </Link>
                <Link href="/streaming">
                    <div className="transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                        <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                            <Image src={nft3} alt="Counter Strike" layout="responsive" />
                        </div>
                    </div>
                </Link>
                <Link href="/streaming">
                    <div className="transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                        <div className="space-y-4 overflow-hidden bg-black shadow-lg hover:cursor-pointer">
                            <Image src={nft4} alt="Valorant" layout="responsive" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
