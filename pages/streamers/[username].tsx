import Image from "next/image"
import InstagramIcon from "../../assets/ig.png"
import TiktokIcon from "../../assets/tiktok.png"
import YoutubeIcon from "../../assets/youtube.png"


export default function StreamerProfile() {
    return (
        <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
            <div className="flex-col px-4 md:px-0 space-y-4 md:space-y-0 md:grid md:grid-cols-3">
                <div className="md:col-span-1 md:mr-4 h-64 bg-slate-700 rounded-lg">
                    <div className="flex-col text-white p-6">
                        <h1 className="text-2xl font-bold tracking-wider mb-4">Jess No Limit</h1>
                        <span className="font-extralight block tracking-tight mb-4">This is the profile of the streamers. They can say whatever they want, but we limit it only to 140 chars.</span>
                        <span className="font-bold block mb-2">Follow this creator on:</span>
                        <div className="flex flex-row space-x-2 justify-start">
                            <div>
                                <Image src={InstagramIcon} alt="Instagram Logo" width={30} height={30} />
                            </div>
                            <div>
                                <Image src={TiktokIcon} alt="Tiktok Logo" width={30} height={30} />
                            </div>
                            <div>
                                <Image src={YoutubeIcon} alt="Youtube Logo" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 h-64 border-2 border-dashed border-blue-300 rounded-lg">

                </div>
            </div>
        </div>
    )
}