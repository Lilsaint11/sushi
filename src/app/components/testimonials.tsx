const Testimonials = () => {
    return ( 
        <div className="flex items-center">
            <img src="/Group 37.png" alt="" className="w-[450px]"/>
            <div className="flex flex-col gap-5">
                <p className="text-[12px] text-[#F63B3B] font-bold w-full">TESTIMONIALS</p>
                 <h1 className="text-[44px]  font-bold ">What Our Customers Say About Us </h1>
                 <p className="text-[16px] text-[#555555] font-bold w-full">“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                 <div className="flex items-center gap-5">
                     <img src="/Group 34.png" alt="" className="w-28"/>
                     <div>
                         <h3 className="font-bold">Customer Feedback</h3>
                         <div className="flex items-center gap-1">
                                <img src="/star1.png" alt="" className="w-3"/>
                                <p className="text-[14px]">4.9</p>
                                <p className="text-[12px] text-[#807E7E] font-bold w-full">(18.6k Reviews)</p>
                            </div>
                     </div>
                 </div>
            </div>
        </div>
     );
}
 
export default Testimonials;