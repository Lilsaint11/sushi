import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";

const Header = () => {
    return ( 
        <div className="flex justify-between items-center Poppins">
            <div>
                <h1 className="text-[28px]"><span className="bg-[#39DB4A] text-white py-[1px] px-[7px] rounded-xl ">S</span>ushi</h1>
            </div>
            <div>
                <ul className="flex gap-5 text-[14px]">
                    <li className="text-[#39DB4A]">Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Sevices</li>
                    <li>Offers</li>
                </ul>
            </div>
            <div className="flex gap-6 items-center">
                <IoIosSearch className="text-[24px]"/>
                <div className="relative">
                    <IoBagOutline className="text-[24px]"/>
                    <p className="bg-[#39DB4A] text-white rounded-full h-5 w-5 p-0 m-0 flex items-center justify-center text-[12px] absolute -top-2 -right-2">8</p>
                </div>
                <div className="bg-[#39DB4A] text-white rounded-full w-[130px] h-[40px] flex gap-2 items-center justify-center">
                    <PiPhoneCall className="text-[24px]"/>
                    <p>Contact</p>
                </div>
            </div>
        </div>
     );
}
 
export default Header;