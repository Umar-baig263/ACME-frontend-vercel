import React from "react";
import RedButton from "../main/Buttons/RedButtonLink";
import MainInput from "../main/Inputs/MainInput";
import TextArea from "../main/Inputs/TextArea";

const Section1 = () => {
  return (
    <div className="mt-10 flex flex-col lg:px-26 md:px-10 px-5">
      <div className="flex flex-col">
        <div className="text-3xl font-bold">Contact us</div>
        <div className="text-lg text-gray-600">
          Manage Your Orders, Profile & More
        </div>
      </div>
      <div className="md:m-10 m-0 md:mt-0 mt-5 lg:py-26 md:py-10 py-5 shadow-xl p-5 flex flex-col  md:gap-15  gap-5 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="md:text-3xl text-xl font-bold text-center">
            Get in touch with us{" "}
          </div>
          <div className="md:text-base text-sm text-center">
            Have questions or need assistance? Fill out the form below, and
            we’ll get back to you as soon as possible!
          </div>
        </div>
        <form action="" className="w-full  lg:px-26 md:px-10 px-0">
          <div className="w-full flex flex-col md:gap-10 gap-5  lg:px-26 md:px-10 px-0">
            <div className="flex flex-col gap-5">
              <div className="flex md:flex-row flex-col gap-5 w-full">
                <div className="flex flex-col gap-2 md:w-1/2 w-full">
                  <MainInput label="Name" type="text" />
                </div>
                <div className="flex flex-col gap-2 md:w-1/2 w-full">
                  <MainInput label="Phone no" type="number" />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2  w-full">
                  <MainInput label="Email" type="email" />
                </div>
              </div>
              <div>
                <div className="flex gap-2 flex-col w-full">

                  <TextArea label="Comment" rows="3" />
                </div>
              </div>
            </div>
            <div>
              <RedButton text="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section1;
