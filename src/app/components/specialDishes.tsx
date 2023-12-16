import { type } from "os";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

const SpecialDishes = () => {
    type cardType = {
        image:string; 
        title:string;
        sub:string;
        price:number;
        rating:number;
    }
    const cards:cardType[] = [
        {image:"/Sushi Salad 1.png", title:"Best Sushi Salad",sub:"Description of the item",price:10,rating:4.9},
        {image:"/Sushi Salad -- 2.png", title:"Zen Zest Sashimi Salad",sub:"Description of the item",price:22,rating:4.9},
        {image:"/Sushi Salad -- 3.png", title:"Seaside Sushi Salad ",sub:"Description of the item",price:18,rating:4.9},
    ]
    return ( 
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-[12px] text-[#F63B3B] font-bold w-full">SPECIAL DISHES</p>
            <div className="w-full flex justify-between">
                <h1 className="text-[28px]  font-bold ">Best Dishes <br/> From Our Menu </h1>
                <div className="flex gap-5">
                    <div className="w-7 h-7 rounded-full bg-[#EFEFEF] cursor-pointer flex items-center justify-center">
                        <IoIosArrowBack />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#39DB4A] cursor-pointer flex items-center justify-center text-white">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <div className="mt-5 flex gap-10 max-lg:grid max-lg:grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                {cards.map(card => (
                    <div className="bg-white shadow shadow-lg shadow-slate-400 rounded-xl pt-16 pb-10 px-5 w-72 flex flex-col gap-2 items-center justify-center relative" key={card.title}>
                        <div className="absolute top-0 right-0 w-16 h-12 bg-[#39DB4A] flex items-center justify-center rounded-tr-xl rounded-bl-3xl">
                            < FaRegHeart className="text-white"/>
                        </div>
                        <img src={card.image} alt="" className="w-32" />
                        <h3 className="text-[16px] font-bold w-full">{card.title}</h3>
                        <p className="text-[12px] w-full">{card.sub}</p>
                        <div className="flex justify-between w-full text-[12px]">
                            <p className="text-[#FF6868]">$<span className="font-bold text-[14px] text-black">{card.price}.00</span></p>
                            <div className="flex items-center gap-1">
                                <img src="/star1.png" alt="" className="w-3"/>
                                <p>{card.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}       
            </div>
        </div>
     );
}
 
export default SpecialDishes;