import { XCircleIcon } from "@heroicons/react/outline";
import { useQRCode } from "next-qrcode";
import CommonButton from "../CommonButton";

export default function TippingModal() {
    const { Canvas } = useQRCode();

    return (
        <div className="bg-white opacity-80 p-8 z-10">
            <div className="flex h-screen justify-center items-center">
                <div className="bg-slate-700 p-4 rounded-lg shadow-xl">
                    <div className="flex justify-end">
                        <button className="hover:cursor-pointer">
                            <XCircleIcon className=" text-white h-10 w-10"/>
                        </button>
                    </div>
                    <div className="flex-col space-y-8 p-4">
                        <div className="text-center tracking-wide">
                            <h4 className="font-bold text-3xl text-white">TIP 1 TON</h4>
                            <span className="font-bold text-white text-3xl">to Jess No Limit</span>
                        </div>
                        <div className="font-bold text-white text-lg">
                            <span>1. Scan this QR Code using your TonKeeper App</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex-col space-y-2">
                                <Canvas 
                                    text={'https://app.tonkeeper.com/ton-login/getgems.io/tk?id=u3hmAxDtJAXpEnLkxYw8JQ'}
                                    options={{
                                        type: 'image/jpeg',
                                        quality: 0.4,
                                        level: 'M',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex-col space-y-4 font-bold text-white text-lg">
                            <div>2. Once done, Click to confirm</div>
                            <div className="flex justify-center">
                                <button>
                                    <CommonButton title={"I have sent 1 TON!"}/>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}