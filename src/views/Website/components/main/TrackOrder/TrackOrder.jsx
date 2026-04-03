import React from "react";
import RedButton from "../Buttons/RedButton";

const TrackOrder = ({ active , steps , item}) => {
    return (
        <div className="mt-10 flex flex-col gap-10">
            <div className="flex gap-5 w-full justify-between items-center">
                <div className="text-2xl font-bold">Track Order</div>
                <div className="">
                    <RedButton text="View Inovice" />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="relative w-full h-8 bg-white border border-gray-400 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-8 bg-[#C6131B] rounded-full"
                        style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-8 px-1 flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 flex justify-center items-center w-5 h-5 rounded-full"
                                style={{
                                    backgroundColor: index <= active ? '#fff' : '#fff',
                                    border: `1px solid ${index <= active ? '#C6131B' : '#C6131B'}`,
                                    color: index <= active ? '#C6131B' : '#C6131B'
                                }}>
                                ✓
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full top-12 flex justify-between">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center w-1/3">
                            <div className="font-medium">{step.label}</div>
                            <div className="text-xs text-gray-500">{step.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-xl">
                    Order Details
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-full text-sm text-left">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <td className="p-3">Product Info</td>
                                <td className="p-3">Volume</td>
                                <td className="p-3">Quantity</td>
                                <td className="p-3">Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {item.map((item, idx) => (
                                <tr key={idx} className="border-b border-gray-100">
                                    <td className="p-4 flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                                        <div>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-xs text-gray-500">Categories: {item.category}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">{item.volume}</td>
                                    <td className="p-4">{item.quantity}</td>
                                    <td className="p-4 font-medium">{item.price.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default TrackOrder;