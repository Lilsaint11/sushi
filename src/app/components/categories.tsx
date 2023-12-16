import { type } from "os";

const Categories = () => {
    type cardType = {
        image:string; 
        title:string;
        sub:string
    }
    const cards:cardType[] = [
        {image:"/shushi2.png", title:"Main Dish",sub:"(86 dishes)"},
        {image:"/sushi3.png", title:"Break Fast",sub:"(12 break fast)"},
        {image:"/sushi4.png", title:"Sushi Combo",sub:"(Combo of 6)"},
        {image:"/shushi1.png", title:"Browse All",sub:"(255 items)"}
    ]
    return ( 
        <div className="flex flex-col justify-center items-center gap-4 max-sm:gap-2">
            <p className="text-[12px] text-[#F63B3B] font-bold">CUSTOMER FAVORITES</p>
            <h1 className="text-[28px]  font-bold">Popular Categories</h1>
            <div className="mt-5 flex gap-10 max-lg:gap-5 max-sm:grid max-sm:grid-cols-2">
                {cards.map(card => (
                    <div className="bg-white shadow shadow-lg shadow-slate-400 rounded-xl py-5 max-md:py-3 px-12 max-sm:px-10 max-sm:py-5 max-md:px-6 flex flex-col gap-2 items-center justify-center" key={card.title}>
                        <div className="bg-[#C1F1C6] flex items-center justify-center w-24 max-md:w-16 h-24 max-md:h-16 rounded-full">
                            <img src={card.image} alt="" className="w-16" />
                        </div>
                        <h3 className="text-[14px] max-lg:text-[12px] font-bold">{card.title}</h3>
                        <p className="text-[12px] max-lg:text-[10px]">{card.sub}</p>
                    </div>
                ))}       
            </div>
        </div>
     );
}
 
export default Categories