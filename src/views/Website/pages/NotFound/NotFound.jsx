import React from "react";
import { Link } from "react-router-dom";
import RedButton from "../../components/main/Buttons/RedButton";
import Navbar from "../../components/main/Navbar/Navbar";

const NotFound = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="404 Page" isBanner={false} />
      <div className="h-full flex flex-col gap-2 justify-center items-center md:mb-30 mb-20 ">
        <div className="flex flex-col items-center">
          <div className="text-[200px] font-bold text-[#9A0F1E]">404</div>
          <div className="text-3xl font-bold text-gray-500">Page Not Found</div>
        </div>
        <div className="text-gray-500 text-sm">
          The page you are looking for does not exist.
        </div>
        <div className="text-gray-500 text-sm">
          Please check the URL or return to the homepage.
        </div>

        {/* <Link to={"/"} className="px-5 py-2 bg-[#9A0F1E] bg-linear-to-t from-[#9A0F1E] to-[#C6131B] text-white">Back To Home</Link> */}
        <RedButton text="Back To Home" link="/" />

        <div className="text-gray-500 text-sm">© 2023 ACME Corporation</div>
        <div className="text-gray-500 text-sm">All rights reserved.</div>
      </div>
    </div>
  );
};

export default NotFound;
