import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../asset/logo.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toogle() {
    setIsActive(true);
  }
  function toogleClose() {
    setIsActive(false);
  }
  return (
    <div>
      <nav className="bg-amber-400 dark:bg-gray-800 shadow z-50 fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex items-center justify-between h-20">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="h-10" src={logo} alt="logo" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to={"/"} className="text-white focus:text-gray-800 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    home
                  </NavLink>
                  <NavLink to={"/table"} className="text-white focus:text-gray-800 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    Table Product
                  </NavLink>
                  <NavLink to={"/form"} className="text-white focus:text-gray-800 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    Add Product
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {!isActive && (
                <button onClick={toogle} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              )}
              {isActive && (
                <button onClick={toogleClose} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10" viewBox="3 0 18 22">
                    <path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35"></path>
                    <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"></path>
                    <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        {isActive && (
          <>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to={"/"} className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  home
                </NavLink>
                <NavLink to={"/table"} className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Table Product
                </NavLink>
                <NavLink to={"/form"} className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Add Product
                </NavLink>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
