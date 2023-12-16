import { FaCirclePlay } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
    return ( 
        <div className="flex max-lg:flex-col">
            <div>
                <h1 className="text-[60px] max-lg:text-[52px] font-bold leading-tight mb-10">Sushi Bliss, Every Roll a Flavorful <span className="text-[#39DB4A]">Kiss</span> </h1>
                <p className="text-[#4A4A4A] mb-6 text-[20px]">Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations, Where Tradition Meets Innovation!</p>
                <div className="flex items-center gap-5">
                    <button className="bg-[#39DB4A] w-36 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow shadow-md shadow-[#39DB4A] ">Order now</button>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <p className="font-semibold text-[#4A4A4A]">Watch Video</p>
                        <div className="bg-white shadow shadow-lg shadow-slate-400 rounded-full w-12 h-12 flex items-center justify-center">
                            < FaPlay  className=" text-[20px] " /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="/Group 33.png" alt="" className="w-64 absolute -top-11 max-lg:top-6 max-lg:w-56 -left-20 max-lg:-left-12" />
                <img src="/MAIN SUSHI IMAGE.png" alt=""className="lg:-mt-20 max-lg:w-96"/>
                <div className="absolute bottom-16 left-10">
                    <div className="flex absolute -bottom-5 gap-5">
                        <div className="flex items-center gap-1 bg-white shadow shadow-lg shadow-slate-400 rounded-xl w-48 h-16 pl-2">
                            <img src="/shushi1.png" alt="" className="w-12" />
                            <div className="text-[13px]">
                                <p>Makizushi</p>
                                <div>
                                    <img src="/Group 6.png" alt="" className="w-16"/>
                                </div>
                                <div>
                                    <p><span>$</span>18.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 bg-white shadow shadow-lg shadow-slate-400 rounded-xl w-48 h-16 pl-2">
                            <img src="/shushi2.png" alt="" className="w-12" />
                            <div className="text-[13px]">
                                <p>Califonia roll</p>
                                <div>
                                    <img src="/Group 6.png" alt="" className="w-16" />
                                </div>
                                <div>
                                    <p><span>$</span>23.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;