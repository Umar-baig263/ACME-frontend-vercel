import React, { useState } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import { FaPen } from "react-icons/fa";
import { FaRegPenToSquare, FaX, FaXmark } from "react-icons/fa6";
import RedButton from "../../components/main/Buttons/RedButton";
import RedButtonLink from "../../components/main/Buttons/RedButtonLink";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const links = [
    "Personal Information",
    "Security Settings",
    "Order History",
    "Logout",
  ];
  return (
    <div className="w-full md:w-1/4 border-r border-gray-200  md:p-4 p-0">
      {links.map((link) => (
        <div
          key={link}
          onClick={() => setActiveTab(link)}
          className={`cursor-pointer py-2 pl-2 border-l-2 text-sm md:text-base ${activeTab === link
            ? "text-red-700 border-red-700"
            : "text-gray-500 border-transparent"
            }`}
        >
          {link}
        </div>
      ))}
    </div>
  );
};

const PersonalInformation = () => {
  const [isInput, setIsInput] = useState(false);
  const [id, setId] = useState(0);
  return (
    <div className="p-4 w-full flex flex-col gap-5  md:px-10 px-0">
      <h2 className="md:text-3xl text-xl font-semibold mb-4">
        Personal Information
      </h2>
      <div className=" flex flex-col gap-5">
        <table className="w-full table-auto">
          {[
            { label: "Name", value: "Wade Armstrong", type: "text" },
            { label: "Phone Number", value: "021-3456-789", type: "number" },
            {
              label: "Email Address",
              value: "contact@bombaychoconuts.com",
              type: "email",
            },
            { label: "Address", value: "Karachi XYZ Block 2", type: "text" },
          ].map((item, i) => (
            <tr
              key={item.label}
              className={` border-b ${i == 0 ? "border-t" : ""
                }  border-gray-400 `}
            >
              <td className="text-left text-sm py-3 md:px-2">{item.label}</td>
              <td className=" text-left text-sm py-3 md:px-2">
                {id == i && isInput ? (
                  <input
                    className="outline-none border-none w-full "
                    type={item.type}
                    value={item.value}
                  />
                ) : (
                  item.value
                )}
              </td>
              <td
                className="text-left py-3 md:px-2 cursor-pointer"
                onClick={() => {
                  isInput ? setIsInput(false) : setIsInput(true);
                  setId(i);
                }}
              >
                {id == i && isInput ? <FaXmark /> : <FaRegPenToSquare />}
              </td>
            </tr>
          ))}
        </table>

        <div>
          <RedButton text="Save" />
        </div>
      </div>
    </div>
  );
};

const SecuritySettings = () => {
  return (
    <div className="md:p-4 w-full flex flex-col gap-5">
      <h2 className="md:text-3xl text-xl font-semibold mb-4">
        Change Your Password
      </h2>
      <div className=" flex flex-col gap-5">
        <table className="w-full table-auto">
          <tr className={` border-b border-t  border-gray-400 `}>
            <td className="text-left text-sm py-3 md:px-2">
              Current Password
            </td>
            <td className=" text-left text-sm py-3 md:px-2">
              <input className="outline-none p-2 md:w-2/3 w-full border-b border-gray-400 " />
            </td>
            <td className=" md:flex hiddne text-left py-3 md:px-2 ">
              <div className="bg-gray-200 rounded-full hidden md:block md:p-2 md:px-3 md:text-sm text-xs cursor-pointer">
                Forget Password
              </div>
            </td>
          </tr>
          <tr className={` border-b   border-gray-400 `}>
            <td className="text-left text-sm py-3 md:px-2">
              Change Password
            </td>
            <td className=" text-left text-sm py-3 md:px-2">
              <input className="outline-none md:w-2/3 w-full  p-2 w-2/3 border-b border-gray-400" />
            </td>
          </tr>
          <tr className={` border-b  border-gray-400 `}>
            <td className="text-left text-sm py-3 md:px-2">
              Confirm Password
            </td>
            <td className=" text-left text-sm py-3 md:px-2">
              <input className="outline-none md:w-2/3 w-full  p-2 w-2/3 border-b border-gray-400 " />
            </td>
          </tr>
        </table>

        <div>
          <RedButton text="Save" />
        </div>
      </div>
    </div>
  );
};

const OrderHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(1);
  const totalStars = 5;
  const orders = [
    {
      id: "P001",
      name: "Caps",
      price: "$2.99",
      date: "2025-07-18",
      reviewed: false,
    },
    {
      id: "P002",
      name: "T-Shirts",
      price: "$3.49",
      date: "2025-07-15",
      reviewed: true,
    },
    {
      id: "P003",
      name: "Cards",
      price: "$5.00",
      date: "2025-07-10",
      reviewed: false,
    },
    {
      id: "P004",
      name: "Stamps",
      price: "$5.00",
      date: "2025-07-10",
      reviewed: false,
    },
  ];

  return (
    <div className="md:p-4 w-full flex flex-col gap-5">
      <h2 className="md:text-3xl text-xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto  md:text-sm text-xs">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 ">Order ID</th>
              <th className="text-left py-2 px-4 ">Product</th>
              <th className="text-left py-2 px-4 ">Price</th>
              <th className="text-left py-2 px-4 ">Date</th>
              <th className="text-left py-2 px-4 ">Review Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-400">
                <td className="py-2 px-4 ">{order.id}</td>
                <td className="py-2 px-4 ">{order.name}</td>
                <td className="py-2 px-4 ">{order.price}</td>
                <td className="py-2 px-4 ">{order.date}</td>
                <td className="py-2 px-4 ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`px-3 bg-linear-to-t cursor-pointer from-[#9A0F1E] to-[#C6131B] py-2 text-white text-xs`}
                  >
                    Share Your FeedBack
                  </button>
                  {/* <RedButton text="Share Your Feedback"/> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <div className="fixed bg-black/80  w-full h-[100vh] top-0 left-0 z-1000 flex justify-center items-center">
          <div className="absolute bg-white px-8 py-5  flex flex-col justify-between gap-1 right-0 items-center w-1/3">
            <div  className="w-full flex justify-end cursor-pointer" onClick={() => setIsOpen(false)}>
              <FaX/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="text-xl font-bold">Rate Your Order  </div>
              <div className="text-sm text-gray-500">We’d love to hear how your experience was.</div>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col gap-1 items-start">
                <h2 className="text-lg font-bold">Star Rating</h2>

                {/* Stars */}
                <div className="flex">
                  {[...Array(totalStars)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={index < rating ? "gold" : "none"}
                      stroke={index < rating ? "gold" : "gray"}
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 
                8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 
                21z"
                      />
                    </svg>
                  ))}
                </div>

                {/* Slider + Value */}
                <div className="flex items-center w-full">
                  <input
                    type="range"
                    min="1"
                    max={totalStars}
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="border px-2 py-1">{rating}</div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="text-lg font-bold">FeedBack Text</div>
              <div>
                <textArea className="border border-gray-400 p-2 w-full focus:outline-none" rows="5" placeholder="Write you Experience here"></textArea>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="text-lg font-bold">Upload a Photo</div>
              <div>
                <label htmlFor="fileUp23"><RedButton text="Chosse File" /></label>
                <input type="file" name="" id="fileUp23" className="hidden" />
              </div>
              <div>
                <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
              </div>
            </div>
            <div className="w-full">
              <RedButton text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Logout = () => (
  <div className="md:p-4 w-full flex flex-col gap-5">
    <h2 className="md:text-3xl text-xl font-semibold">Logout</h2>
    <p className="text-sm text-gray-500 mt-2">
      Are you sure you want to logout?
    </p>
    <div>
      <RedButtonLink link="/login" text="Logout" />
    </div>
  </div>
);

const MainContent = ({ activeTab }) => {
  switch (activeTab) {
    case "Personal Information":
      return <PersonalInformation />;
    case "Security Settings":
      return <SecuritySettings />;
    case "Order History":
      return <OrderHistory />;
    case "Logout":
      return <Logout />;
    default:
      return null;
  }
};

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Personal Information");
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Account Settings" isBanner={false} />
      <div className="flex flex-col gap-5 md:mt-10 mt-5">
        <div className="lg:px-26 md:px-10 px-5">
          <div className="flex flex-col ">
            <div className="text-3xl font-bold">Setting</div>
          </div>
        </div>
        <div className="lg:px-26 md:px-10 px-5 pb-26 ">
          <div className="flex flex-col md:flex-row text-sm gap-10">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="w-full md:w-3/4">
              <MainContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
