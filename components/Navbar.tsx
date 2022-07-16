import { useContext, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { 
    ChevronDownIcon,
    ChevronUpIcon,
    PencilAltIcon,
    LogoutIcon
} from "@heroicons/react/outline";
import CommonButton from "./CommonButton"
import logo from "../assets/logo.png"
import { AuthContext } from "../contexts/AuthContext";


export default function Menu() {
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu () {
        setIsMenuOpen(prevState => !prevState)
    }

    function login() {
        setIsLoggedIn(true)
    }

    function logout() {
        toggleMenu()
        setIsLoggedIn(false)
    }

    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 border-b border-blue-400/20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 hover:cursor-pointer w-48">
                                <Link href={"/"}>
                                    <Image src={logo} alt="Tip-A-Ton Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="relative inline-block text-left">
                            <div>
                                {
                                    isLoggedIn ?
                                    (
                                        <button className="inline-flex w-full justify-between text-white bg-slate-700 p-2 px-4 rounded-lg hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleMenu}>
                                            {user.account}
                                            { isMenuOpen ? 
                                                <ChevronUpIcon width={20} height={20} className="-mr-1 ml-2 h-5 w-5" />
                                                :
                                                <ChevronDownIcon width={20} height={20} className="-mr-1 ml-2 h-5 w-5"/>
                                            }
                                        </button>
                                    ) : 
                                    (
                                        <div>
                                            <button onClick={login}>
                                                <CommonButton title={"Connect"} className={isLoggedIn ? 'hidden' : ''}/>
                                            </button>
                                        </div> 
                                    )
                                }
                            </div>
                            {
                                isMenuOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-slate-700 ring-white ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                        <div className="py-1 flex-col" role="none">
                                            <div className="hover:bg-blue-400 hover:cursor-pointer">
                                                <Link href={"/"} role="menuitem" tabIndex={-1}>
                                                    <div className="flex-row text-white py-2 px-4 space-x-2 w-full">
                                                        <PencilAltIcon width={20} height={20} className="inline-block"/>
                                                        <span className="">Edit Profile</span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="hover:bg-blue-400 hover:cursor-pointer">
                                                <button onClick={logout} role="menuitem" tabIndex={-1}>
                                                    <div className="flex-row text-white py-2 px-4 space-x-2 ">
                                                        <LogoutIcon width={20} height={20} className="inline-block"/>
                                                        <span className="">Logout</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>           
        </div>
    )
}