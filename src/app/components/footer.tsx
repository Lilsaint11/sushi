import { LuFacebook,LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

const Footer = () => {
    return ( 
        <div className="flex flex-col gap-24 mt-10">
            <div className="flex max-sm:grid max-sm:grid-cols-2 gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[24px]"><span className="bg-[#39DB4A] text-white py-[1px] px-[7px] rounded-xl ">S</span>ushi</h1>
                    <p className="text-[14px] w-48 max-sm:w-40 text-[#555555]">Savor the artistry where every dish is a culinary masterpiece</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Useful links</h1>
                    <p className="text-[14px] text-[#555555]">About us</p>
                    <p className="text-[14px] text-[#555555]">Events</p>
                    <p className="text-[14px] text-[#555555]">Blogs</p>
                    <p className="text-[14px] text-[#555555]">FAQ</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Main Menu</h1>
                    <p className="text-[14px] text-[#555555]">Home</p>
                    <p className="text-[14px] text-[#555555]">Offers</p>
                    <p className="text-[14px] text-[#555555]">Menus</p>
                    <p className="text-[14px] text-[#555555]">Reservation</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold">Contact Us</h1>
                    <p className="text-[14px] text-[#555555]">example@email.com</p>
                    <p className="text-[14px] text-[#555555]">+64 958 248 966</p>
                    <p className="text-[14px] text-[#555555]">Social media</p>
                </div>
            </div>
            <div className="flex gap-40 items-center">
                <div className="flex gap-5 items-center">
                    <div className="h-10 w-10 bg-[#EDFFEF] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#39DB4A] hover:text-white transition duration-200">
                        <LuFacebook />
                    </div>
                    <div className="h-10 w-10 bg-[#EDFFEF] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#39DB4A] hover:text-white transition duration-200">
                        <LuInstagram />
                    </div>
                    <div className="h-10 w-10 bg-[#EDFFEF] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#39DB4A] hover:text-white transition duration-200">
                        <LuTwitter />
                    </div>
                    <div className="h-10 w-10 bg-[#EDFFEF] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#39DB4A] hover:text-white transition duration-200">
                        <LuYoutube />
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#555555]">Copyright © 2023 Dscode | All rights reserved</p>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;