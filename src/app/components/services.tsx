import { type } from "os";

const Services = () => {
    type cardType = {
        image:string; 
        title:string;
        sub:string
    }
    const cards:cardType[] = [
        {image:"/Vector (1).png", title:"CATERING",sub:"Delight your guests with our flavors and  presentation"},
        {image:"/time.png", title:"FAST DELIVERY",sub:"We deliver your order promptly to your door"},
        {image:"/cart.png", title:"ONLINE ORDERING",sub:"Explore menu & order with ease using our Online Ordering "},
        {image:"/gift.png", title:"GIFT CARDS",sub:"Give the gift of exceptional dining with Foodi Gift Cards"}
    ]
    return ( 
        <div className="flex max-md:flex-col gap-5 justify-between">
            <div className="flex flex-col gap-5 md:w-1/2 mt-5">
                <p className="text-[12px] text-[#F63B3B] font-bold w-full">OUR STORY & SERVICES</p>
                 <h1 className="text-[44px] max-sm:text-[32px]  font-bold ">Our Culinary Journey And Services </h1>
                 <p className="text-[16px] text-[#555555] font-bold w-full">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                 <button className="bg-[#39DB4A] w-36 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow shadow-md shadow-[#39DB4A] ">Explore</button>
            </div>
            <div className="grid grid-cols-2 gap-7">
                {cards.map(card => (
                    <div className="bg-white shadow shadow-lg shadow-slate-400 rounded-xl py-7 px-5 w-44 flex flex-col gap-2 items-center justify-center">
                        <img src={card.image} alt="" className="w-10" />
                        <h3 className="text-[14px] font-bold text-[#39DB4A] capitalize">{card.title}</h3>
                        <p className="text-[12px] text-center text-[#90BD95]">{card.sub}</p>
                    </div>
                ))}       
            </div>
        </div>
     );
}
 
export default Services;