"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline,IoClose  } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [menu,setMenu] = useState(false)
    return ( 
        <div className="flex justify-between items-center Poppins">
            <div>
                <h1 className="text-[28px] max-md:text-[20px]"><span className="bg-[#39DB4A] text-white py-[1px] px-[7px] rounded-xl ">S</span>ushi</h1>
            </div>
            <div>
                <ul className="flex gap-5 text-[14px] max-md:text-[12px]  max-sm:hidden ">
                    <li className="text-[#39DB4A]">Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Sevices</li>
                    <li>Offers</li>
                </ul>
            </div>
            <div className="flex gap-6 max-md:gap-4  max-[500px]:gap-6 items-center">
                <IoIosSearch className="text-[24px] max-md:text-[20px]"/>
                <div className="relative">
                    <IoBagOutline className="text-[24px] max-md:text-[20px]"/>
                    <p className="bg-[#39DB4A] text-white rounded-full h-5 w-5 p-0 m-0 flex items-center justify-center text-[12px] absolute -top-2 -right-2">8</p>
                </div>
                <div className="bg-[#39DB4A] text-white rounded-full min-[500px]:w-[130px]  min-[500px]:h-[40px]  max-[500px]:p-1 flex gap-2 items-center justify-center">
                    <PiPhoneCall className="text-[24px] max-md:text-[20px]"/>
                    <p className="max-[500px]:hidden">Contact</p>
                </div>
            </div>
            <RxHamburgerMenu  className="text-[20px] cursor-pointer" onClick={()=>setMenu(true)}/>
            {menu &&
            <div className="absolute right-0 top-0 bg-[#39DB4A] w-40 h-52 text-white flex flex-col justify-center px-5">
                <div className="w-full flex justify-end ">
                <IoClose className="cursor-pointer" onClick={()=>setMenu(false)} />
                </div>
                <ul className="flex flex-col gap-5 text-[14px] max-md:text-[12px] text-white sm:hidden ">
                    <li className="">Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Sevices</li>
                    <li>Offers</li>
                </ul>
            </div>
            }
        </div>
     );
}
 
export default Header;