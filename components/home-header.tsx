import Image from "next/image"
import duck from '../assets/duck.png'


export default function HomeHeader() {
    return (
        <div className="px-4 py-6 sm:px-0">
            <div className="flex">
              <h1 className="text-5xl text-white font-bold py-4 md:tracking-wider leading-normal">
                Tip easily with <br/>
                <span className="text-blue-400">TON </span>Payment
              </h1>
              <div className='relative h-32 w-64 mt-6 hidden md:block'>
                <Image src={duck} alt="Ton Ducks" layout='fill' objectFit='cover'/>
              </div>
            </div>
          </div>
    )
}