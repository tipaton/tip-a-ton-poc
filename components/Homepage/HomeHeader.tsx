import Image from "next/image"
import duck from '../../assets/duck.png'


export default function HomeHeader() {
    return (
        <div className="px-6 py-6 sm:px-0">
            <div className="flex">
              <h1 className="text-4xl md:text-5xl text-white font-bold py-4 md:tracking-wider leading-normal">
                Tip easily with
                <span className="text-blue-400 font-extrabold block">
                  TON 
                  <span className="text-white"> Payment</span>
                </span>
              </h1>
              <div className='relative h-32 w-64 mt-6 hidden md:block'>
                <Image src={duck} alt="Ton Ducks" layout='fill' objectFit='cover'/>
              </div>
            </div>
          </div>
    )
}