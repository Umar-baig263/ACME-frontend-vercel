import React from "react";

const Section4 = () => {
    const desc = [
        {
            head : "Certified Quality Materials" ,
            desc : "We use high-grade, weather-resistant banners and brackets approved by Canadian safety standards, ensuring long-term durability in all conditions."
        },
        {
            head : "Nationwide Coverage" ,
            desc : "From Vancouver to Toronto, we offer outdoor advertising solutions across Canada to maximize your brand’s reach"
        },
        {
            head : "14+ Years of Expertise" ,
            desc : "With over a decade of experience in outdoor marketing, our expert team knows how to deliver campaigns that drive real results."
        },
        {
            head : "End-to-End Support" ,
            desc : "From design to installation, we handle every step of the process so you can focus on your business."
        },
    ]
    return (
        <div className="lg:px-26 md:px-10 px-5  md:mt-20 mt-10 flex md:flex-row flex-col items-center justify-center gap-10">
            <div className="md:w-1/2 w-full">
                <img src="markets4.png" className="w-full object-contain" alt="" />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-5">
                <div className="text-3xl font-bold">What Makes Us Stand Out in Outdoor Marketing</div>
                <div className="flex flex-col gap-5">
                    {
                        desc?.map((d, i)=> (
                            <div className="flex flex-col" key={i}>
                                <div className=" font-bold">{d?.head}</div>
                                <div className="">{d?.desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section4