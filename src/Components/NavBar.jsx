import React from 'react'
import Logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <>
        <div className="container">
            <div className="fixed w-full bg-[#e5e7e9] shadow-md px-6 py-2 flex items-center justify-between">
        
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className="h-8" />
                    <p className="text-[16px] font-bold">ERGO Academic Care</p>
                </div>

                <div>
                    <ul className="flex gap-x-8 text-[12px] font-medium">
                        <li className="hover:text-red-600 transition "><a href="#">Home</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">Schedule</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">Classes</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">Teachers</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">Exam</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">About</a></li>
                        <li className="hover:text-red-600 transition"><a href="#">Contact</a></li>
                    </ul>
                </div>


                <div className="flex gap-4">
                    <button className="py-1 px-3 bg-amber-50 hover:bg-amber-900 text-amber-700 hover:text-white font-medium rounded-md transition text-[12px]">Log In</button>
                    <button className="py-1 px-3 bg-white text-red-600 hover:bg-black hover:text-white font-medium rounded-md transition text-[12px]">Sign Up</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default NavBar
