import Image from 'next/image';
import duck from '../../assets/duck.png';

export default function HomeHeader() {
  return (
    <div className="px-6 py-6 sm:px-0">
      <div className="flex">
        <h1 className="py-4 text-4xl font-bold leading-normal text-white md:text-5xl md:tracking-wider">
          Tip easily with
          <span className="block font-extrabold text-blue-400">
            TON
            <span className="text-white"> Payment</span>
          </span>
        </h1>
        <div className="relative hidden w-64 h-32 mt-6 md:block">
          <Image src={duck} alt="Ton Ducks" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
