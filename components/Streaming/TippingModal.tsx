import { XCircleIcon } from '@heroicons/react/outline';
import { useQRCode } from 'next-qrcode';
import CommonButton from '../CommonButton';

export default function TippingModal() {
  const { Canvas } = useQRCode();

  return (
    <div className="z-10 p-8 bg-white opacity-80">
      <div className="flex items-center justify-center h-screen">
        <div className="p-4 rounded-lg shadow-xl bg-slate-700">
          <div className="flex justify-end">
            <button type="button" className="hover:cursor-pointer">
              <XCircleIcon className="w-10 h-10 text-white " />
            </button>
          </div>
          <div className="flex-col p-4 space-y-8">
            <div className="tracking-wide text-center">
              <h4 className="text-3xl font-bold text-white">TIP 1 TON</h4>
              <span className="text-3xl font-bold text-white">to Jess No Limit</span>
            </div>
            <div className="text-lg font-bold text-white">
              <span>1. Scan this QR Code using your TonKeeper App</span>
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
              </div>
            </div>
            <div className="flex-col space-y-4 text-lg font-bold text-white">
              <div>2. Once done, Click to confirm</div>
              <div className="flex justify-center">
                <button type="button">
                  <CommonButton title="I have sent 1 TON!" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
