import Link from "next/link"
import Image from "next/image"
import SmallLogo from "../../assets/small_logo.png"
import SampleML2 from "../../assets/sampleml2.png"

export default function StreamingsList() {
    return (
        <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4">
                <h1 className="text-white font-bold tracking-wide text-3xl">Currently Streaming</h1>
            </div>
            <div className="mt-6 px-4 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                <div className="group relative">
                    <Link href={"/streamings/123456"}>
                        <div className="shadow-lg overflow-hidden transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                            <div className="w-full h-full bg-black object-center object-cover rounded-lg overflow-hidden shadow-lg hover:cursor-pointer">
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
                </div>
                <div className="group relative">
                    <Link href={"/streaming/123456"}>
                        <div className="shadow-lg overflow-hidden transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                            <div className="w-full h-full bg-black object-center object-cover rounded-lg overflow-hidden shadow-lg hover:cursor-pointer">
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
                </div>
                <div className="group relative">
                    <Link href={"/streaming"}>
                        <div className="shadow-lg overflow-hidden transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                            <div className="w-full h-full bg-black object-center object-cover rounded-lg overflow-hidden shadow-lg hover:cursor-pointer">
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
                </div>
            </div>
        </div>
    )
}