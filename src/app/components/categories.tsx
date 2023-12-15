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
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-[12px] text-[#F63B3B] font-bold">CUSTOMER FAVORITES</p>
            <h1 className="text-[28px]  font-bold">Popular Categories</h1>
            <div className="mt-5 flex gap-10">
                {cards.map(card => (
                    <div className="bg-white shadow shadow-lg shadow-slate-400 rounded-xl py-5 px-12 flex flex-col gap-2 items-center justify-center">
                        <div className="bg-[#C1F1C6] flex items-center justify-center w-24 h-24 rounded-full">
                            <img src={card.image} alt="" className="w-16" />
                        </div>
                        <h3 className="text-[14px] font-bold">{card.title}</h3>
                        <p className="text-[12px]">{card.sub}</p>
                    </div>
                ))}       
            </div>
        </div>
     );
}
 
export default Categories