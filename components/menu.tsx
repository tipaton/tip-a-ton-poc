import Image from "next/image"
import Link from "next/link"
import logo from "../assets/logo.png"

export default function Menu() {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 hover:cursor-pointer">
                            <Link href={"/"}>
                                <Image src={logo} alt="Tip-A-Ton Logo"/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-400 px-8 p-2 text-white rounded-3xl">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}