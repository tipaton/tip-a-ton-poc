/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useQRCode} from "next-qrcode";
import { XCircleIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction } from "react";
import DuckYellow from "../assets/duck-yellow.png";

export default function LoginModal({setShowLoginModal}: { setShowLoginModal: Dispatch<SetStateAction<boolean>>}) {
    const { Canvas } = useQRCode()

    function closeModal() {
        setShowLoginModal(false)
    }
    return(
        <div className="bg-white opacity-80 p-8 z-10">
            <div className="flex h-screen justify-center items-center">
                <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-end">
                        <button onClick={closeModal} className="hover:cursor-pointer">
                            <XCircleIcon className=" text-white h-10 w-10"/>
                        </button>
                    </div>
                    <div className="flex-col space-y-8 p-4">
                        <div className="flex justify-center">
                            <Image src={DuckYellow} alt="Yellow Duck TON"/>
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold text-3xl text-white tracking-wide">Login using Tonkeeper</h4>
                            <span className="font-extralight text-white text-lg">Scan the QR below using your Tonkeeper App to Login</span>
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
                                <span className="flex font-extralight text-lg text-white justify-center">OR</span>
                                <span className="flex text-lg text-white justify-center">Login with Link</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}