import React from "react";

const CardDescSec2 = ({img}) => {
    return (
        <div className="mt-5 lg:px-26 md:px-10 px-5">
            <div className='flex gap-10'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <div className="flex flex-col gap-5">
                        <div className="text-3xl font-bold">Make smoother connections with rounded corner business cards.</div>
                        <div className="text-lg">
                            <ul className="list-disc pl-5">
                                <li>1/4" rounded corners</li>
                                <li>11 paper stock options</li>
                                <li>Multiple thickness options</li>
                                <li>Square shape option</li>
                                <li>Special finishes available</li>
                                <li>Vivid, full-color printing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 pr-5'>
                        <div className='text-3xl font-bold'>Soft edges for a strong impact</div>
                        <div className='text-lg'>Rounded corner business cards have a look that’s hard to miss. Not to mention, a soft, smooth feel in people’s hands. The attention-grabbing shape looks elegant and professional – but also gives your design a unique, modern vibe. The best part? Rounded edges are less likely to bend than sharp corners, meaning these cards can stay looking fresh for longer.</div>
                        <div className='text-3xl font-bold'>Customization options</div>
                        <div className='text-lg'>Rounded corner business cards have a look that’s hard to miss. Not to mention, a soft, smooth feel in people’s hands. The attention-grabbing shape looks elegant and professional – but also gives your design a unique, modern vibe. The best part? Rounded edges are less likely to bend than sharp corners, meaning these cards can stay looking fresh for longer.</div>
                        <div className='text-3xl font-bold'>Fast & simple to design</div>
                        <div className='text-lg'>Rounded corner business cards have a look that’s hard to miss. Not to mention, a soft, smooth feel in people’s hands. The attention-grabbing shape looks elegant and professional – but also gives your design a unique, modern vibe. The best part? Rounded edges are less likely to bend than sharp corners, meaning these cards can stay looking fresh for longer.</div>
                    </div>
                    <div></div>
                </div>
                <div className='w-1/2 flex flex-col gap-5'>
                    <div className="w-full ">
                        <img className="w-full object-cover" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardDescSec2;