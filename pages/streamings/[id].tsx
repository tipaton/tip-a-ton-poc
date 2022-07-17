import Image from 'next/image';
import Link from 'next/link';
import CommonButton from '../../components/CommonButton';
import SmallLogo from '../../assets/small_logo.png';

async function sendTon() {
  console.log('Sending TON');
}

export default function Streaming() {
  return (
    <div className="min-h-full bg-black">
      <div className="bg-gradient-to-tr from-blue-400/5 to-slate-900/5">
        <div className="min-h-screen py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-6 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Mobile Legend: Bang Bang</h1>
            <div className="flex-col py-8 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
              <div className="w-full md:col-span-2">
                <iframe
                  height={390}
                  className="w-full rounded-lg aspect-video"
                  src="https://www.youtube.com/embed/b4Ck7wfVBFw"
                  title="YouTube video player"
                />
              </div>
              <div className="md:col-span-1">
                <div className="flex-col text-white">
                  <Link href="/streamers/jessnolimit">
                    <h2 className="mb-4 text-3xl font-bold font-poppins md:text-4xl hover:cursor-pointer hover:underline">Jess No Limit</h2>
                  </Link>
                  <span className="text-white/75">Trying to play Odette! Come and support me to get all the nice skins</span>
                </div>
                <div className="flex justify-between my-8 space-x-4 text-white align-center">
                  <span className="text-lg font-extralight">Total Tips: </span>
                  <div className="space-x-2 text-lg font-bold text-blue-400">
                    <Image src={SmallLogo} alt="Small Logo" height={16} width={16} />
                    <span>100</span>
                  </div>
                </div>
                <button type="submit" onClick={sendTon} className="w-full my-8 font-bold text-white bg-blue-400 md:tracking-wider rounded-3xl">
                  <CommonButton title="TIP 1 TON" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
