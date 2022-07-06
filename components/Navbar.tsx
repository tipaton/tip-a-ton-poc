import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import CommonButton from "./CommonButton"
import logo from "../assets/logo.png"
import LoginModal from "./LoginModal";
import TippingModal from "./TippingModal";


export default function Menu() {
    function openModal() {
        if (showLoginModal == false) {
            setShowLoginModal(true);
        } else {
            setShowLoginModal(false)
        }
    }

    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <div className=""> 
            {/* {showLoginModal ? <TippingModal /> : <div></div>
                // <LoginModal setShowLoginModal={setShowLoginModal}/> : <div></div>
            }  */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 border-b border-blue-400/20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 hover:cursor-pointer w-48">
                                <Link href={"/"}>
                                    <Image src={logo} alt="Tip-A-Ton Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button onClick={openModal}>
                                <CommonButton title={"Connect"} />
                            </button>
                        </div>
                    </div>
                </div>           
        </div>
    )
}