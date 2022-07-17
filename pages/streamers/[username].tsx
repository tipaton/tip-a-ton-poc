import Image from 'next/image';
import InstagramIcon from '../../assets/ig.png';
import TiktokIcon from '../../assets/tiktok.png';
import YoutubeIcon from '../../assets/youtube.png';
import CommonButton from '../../components/CommonButton';

export default function StreamerProfile() {
  return (
    <div className="min-h-screen py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex-col px-4 space-y-4 md:px-0 md:space-y-0 md:grid md:grid-cols-3">
        <div className="h-64 rounded-lg md:col-span-1 md:mr-4 bg-slate-700">
          <div className="flex flex-col p-6 text-white">
            <h1 className="mb-4 text-2xl font-bold tracking-wider">Jess No Limit</h1>
            <span className="block mb-4 tracking-tight font-extralight">This is the profile of the streamers. They can say whatever they want, but we limit it only to 140 chars.</span>
            <span className="block mb-2 font-bold">Follow this creator on:</span>
            <div className="flex flex-row justify-start space-x-2">
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
        <div className="space-y-4 md:col-span-2">
          <div className="h-64 border-2 border-blue-300 border-dashed rounded-lg">
            <div className="flex flex-col items-center h-full p-6 text-white justify-evenly">
              <div>
                <h2 className="text-lg font-bold tracking-wide">Support me to buy a new Keyboard</h2>
              </div>
              <div className="w-full px-8">
                <div className="w-full h-5 rounded-lg bg-slate-500">
                  <div className="w-20 h-5 bg-blue-400 rounded-lg" />
                </div>
                <div className="py-2 font-bold text-center"> 20/100 TON</div>
              </div>
              <div>
                <CommonButton title="Support Me Now!" />
              </div>
            </div>
          </div>
          <div className="h-64 border-2 border-blue-300 border-dashed rounded-lg">
            <div className="flex flex-col items-center h-full p-6 text-white justify-evenly">
              <div>
                <h2 className="text-lg font-bold tracking-wide">Active Streaming</h2>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
