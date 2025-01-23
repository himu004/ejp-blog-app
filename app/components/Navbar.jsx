

import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import Link from "next/link";

const Navbar = async () => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/75 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
              BlogSpace
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href='/' className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link href='/myprofile' className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                My Profile
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div>
            {user ? (
              <LogoutLink className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 border border-transparent hover:border-white/20 space-x-2">
                <FiLogOut className="w-5 h-5 mr-2" />
                Logout</LogoutLink>
            ) : (
       
              <LoginLink 
              postLoginRedirectURL="/"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 border border-transparent hover:border-white/20 space-x-2">
                <FiLogIn className="w-5 h-5 mr-2" />
                Login
              </LoginLink>
            )}
          </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
 
  );
};

export default Navbar;
