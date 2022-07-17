import Image from 'next/image';
import { useQRCode } from 'next-qrcode';
import { XCircleIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction } from 'react';
import DuckYellow from '../assets/duck-yellow.png';

export default function LoginModal(
  { setShowLoginModal }: { setShowLoginModal: Dispatch<SetStateAction<boolean>> },
) {
  const { Canvas } = useQRCode();

  function closeModal() {
    setShowLoginModal(false);
  }
  return (
    <div className="z-10 p-8 bg-white opacity-80">
      <div className="flex items-center justify-center h-screen">
        <div className="p-4 rounded-lg shadow-xl bg-slate-700">
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="hover:cursor-pointer">
              <XCircleIcon className="w-10 h-10 text-white " />
            </button>
          </div>
          <div className="flex-col p-4 space-y-8">
            <div className="flex justify-center">
              <Image src={DuckYellow} alt="Yellow Duck TON" />
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold tracking-wide text-white">Login using Tonkeeper</h4>
              <span className="text-lg text-white font-extralight">Scan the QR below using your Tonkeeper App to Login</span>
            </div>
            <div className="flex justify-center">
              <div className="flex-col space-y-2">
                <Canvas
                  text="https://app.tonkeeper.com/ton-login/getgems.io/tk?id=u3hmAxDtJAXpEnLkxYw8JQ"
                  options={{
                    type: 'image/jpeg',
                    quality: 0.4,
                    level: 'M',
                  }}
                />
                <span className="flex justify-center text-lg text-white font-extralight">OR</span>
                <span className="flex justify-center text-lg text-white">Login with Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
