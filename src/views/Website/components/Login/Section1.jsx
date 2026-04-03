import React from "react";
import MainInput from "../main/Inputs/MainInput";
// import RedButtonLink from "../main/Buttons/RedButtonLink";
import RedButton from "../main/Buttons/RedButton";
import { Link } from "react-router-dom";
import RedButtonLink from "../main/Buttons/RedButtonLink";

const Section1 = () => {
  return (
    <div className="mt-10 flex flex-col lg:px-26 md:px-10 px-5">
      <div className="flex flex-col">
        <div className="text-3xl font-bold">My Account</div>
        <div className="text-lg text-gray-600">
          Manage Your Orders, Profile & More
        </div>
      </div>
      <div className="flex md:w-1/2 w-full flex-col gap-5 my-20">
        <div className="text-3xl font-bold">Login</div>
        <div>
            <MainInput label="Email" isreq={true} type="email" />
        </div>
            <MainInput label="Password" isreq={true} type="password"/>
        <div className="flex gap-2">
            <div><input type="checkbox" name="" id="" /></div>
            <div className="text-gray-500">Remember me</div>
        </div>
        <div className="w-full cursor-pointer">
            <RedButtonLink text="Login" link="/account-setting" width="w-full"/>
        </div>
        <div className=" text-gray-500 text-sm">Doesn't Have Account ? <Link className="underline text-blue-500" to={'/register'}>Register</Link></div>
      </div>
    </div>
  );
};

export default Section1;
