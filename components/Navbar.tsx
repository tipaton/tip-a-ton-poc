import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilAltIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import CommonButton from './CommonButton';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';

export default function Menu() {
  const {
    user, isLoggedIn, setIsLoggedIn,
  } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    toggleMenu();
    setIsLoggedIn(false);
  }

  return (
    <div className="">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-blue-400/20">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-48 hover:cursor-pointer">
              <Link href="/">
                <Image src={logo} alt="Tip-A-Ton Logo" />
              </Link>
            </div>
          </div>
          <div className="relative inline-block text-left">
            <div>
              {
                isLoggedIn
                  ? (
                    <button type="button" className="inline-flex justify-between w-full p-2 px-4 text-white rounded-lg bg-slate-700 hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleMenu}>
                      {user.account}
                      { isMenuOpen
                        ? <ChevronUpIcon width={20} height={20} className="w-5 h-5 ml-2 -mr-1" />
                        : <ChevronDownIcon width={20} height={20} className="w-5 h-5 ml-2 -mr-1" />}
                    </button>
                  )
                  : (
                    <div>
                      <button type="button" onClick={login}>
                        <CommonButton title="Connect" className={isLoggedIn ? 'hidden' : ''} />
                      </button>
                    </div>
                  )
                }
            </div>
            {
                isMenuOpen && (
                <div className="absolute right-0 w-56 mt-2 origin-top-right rounded-lg shadow-lg bg-slate-700 ring-white ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="flex-col py-1" role="none">
                    <div className="hover:bg-blue-400 hover:cursor-pointer">
                      <Link href="/" role="menuitem" tabIndex={-1}>
                        <div className="flex-row w-full px-4 py-2 space-x-2 text-white">
                          <PencilAltIcon width={20} height={20} className="inline-block" />
                          <span className="">Edit Profile</span>
                        </div>
                      </Link>
                    </div>
                    <div className="hover:bg-blue-400 hover:cursor-pointer">
                      <button type="button" onClick={logout} role="menuitem" tabIndex={-1}>
                        <div className="flex-row px-4 py-2 space-x-2 text-white ">
                          <LogoutIcon width={20} height={20} className="inline-block" />
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
  );
}
