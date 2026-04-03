import React from "react";

const Section2 = ({img , desc1 , desc2 , head , isreversed , index}) =>{
    return (
        <div className={`md:mt-30 mt-20 flex items-center justify-center flex-col ${isreversed ? "md:flex-row-reverse " : "md:flex-row flex-col"}}   gap-14 lg:px-26 md:px-10 px-5`}>    
            <div className="flex flex-col gap-5 md:w-1/2 w-full md:px-10 px-0">
                <div className="md:text-3xl text-xl font-bold text-red-600">0{index}</div>
                <div className="md:text-3xl text-xl font-bold">{head}</div>
                <div className="md:text-base text-sm">{desc1}</div>
                <div className="md:text-base text-sm">{desc2}</div>
            </div>
            <div className="md:w-1/2 w-full">
                <img className="w-full object-contian" src={img} alt="" />
            </div>
        </div>
    )
}

export default Section2