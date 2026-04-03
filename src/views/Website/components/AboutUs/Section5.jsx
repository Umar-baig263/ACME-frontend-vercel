import  React from 'react';


const Section5 = () => { 

    const data = [
        {
        icon: "abouts5icon1.png",
        title: "All-in-one Service Hub",
        description: "From concept to completion, we manage it all — design, print, brand, and deploy."
    },
    {
        icon: "abouts5icon2.png",
        title: "Fast Turnaround & Reliable Support",
        description: "Time is money — we deliver both quality and speed."
    },
    {
        icon: "abouts5icon3.png",
        title: "Custom Solutions for Every Industry",
        description: "Whether you’re a startup or an enterprise, we tailor our services to meet your unique needs."
    },
]

    return(
        <div className='w-full md:mt-30 mt-20 flex flex-col gap-10 '>
            <div className='lg:px-26 md:px-10 px-5 md:text-5xl text-3xl font-bold text-center'>Why Choose Us?</div>
            <div className='lg:px-20 md:px-10 px-5  grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5 md:mt-10 mt-2 '>
               {
                data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <div className='w-24 h-24'>
                            <img className='w-full object-contain' src={item.icon} alt="" />
                        </div>
                        <div className='font-bold'>{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                ))
               }
            </div>
        </div>
    )
}

export default Section5;