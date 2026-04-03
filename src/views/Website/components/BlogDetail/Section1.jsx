import React from "react";
import WhiteButton from "../main/Buttons/WhiteButton";

const Input = ({ label, onchange, value, type, name }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-base text-white">{label}*</div>
      <div>
        <input
          className="border text-white w-full rounded-md border-white outline-none p-2"
          type={type}
          name={name}
          value={value}
          onChange={onchange}
          required
        />
      </div>
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div className="lg:px-26 md:px-10 px-0 w-full">
        <img
          className="object-cover w-full rounded-md"
          src="bdimg1.png"
          alt=""
        />
      </div>
      <div className="flex md:flex-row flex-col md:gap-20 gap-10">
        <div className="md:w-[40%] w-full flex flex-col gap-3 lg:pl-26 md:pl-10 pl-5 md:px-0 px-5">
          <div className="text-xl font-bold">LOGO</div>
          <div className="text-xl font-bold">The Acme Graphic Team </div>
          <div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </div>
        </div>
        <div className="md:w-[60%] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-5 lg:pr-26 md:pr-10 pr-0 md:px-0 px-5">
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold">What is Lorem Ipsum</div>
              <div className="w-full">
                <img
                  className="object-cover w-full rounded-md"
                  src="bdimg2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution reader will be distracted by the readable content of
              a page when looking at its layout
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold">What is Lorem Ipsum</div>
              <div className="w-full">
                <img
                  className="object-cover w-full rounded-md"
                  src="bdimg3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution reader will be distracted by the readable content of
              a page when looking at its layout
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold">What is Lorem Ipsum</div>
              <div className="w-full">
                <img
                  className="object-cover w-full rounded-md"
                  src="bdimg4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution reader will be distracted by the readable content of
              a page when looking at its layout
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
            <div className="text-3xl font-bold">What is Lorem Ipsum</div>
            <div className="text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution reader will be distracted by the readable content of
              a page when looking at its layout
            </div>
            <div className="text-base">
              It is a long established fact that
              <span className="text-red-600">
                a reader will be distracted by the readable content
              </span>
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution
            </div>
          </div>
          <div className="rounded-l-lg  md:px-10 px-5 md:py-20 py-5 bg-[#9A0F1E] flex flex-col gap-5">
            <div>
              <Input label="First Name" type="text" />
            </div>
            <div>
              <Input label="Last Name" type="text" />
            </div>
            <div>
              <Input label="Company" type="text" />
            </div>
            <div>
              <Input label="Email Address" type="email" />
            </div>
            <div>
              <Input label="Phone Number" type="number" />
            </div>
            <div>
              <Input label="Country" type="text" />
            </div>
            <div className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content{" "}
            </div>
            <div className="flex md:flex-row flex-col gap-2 text-sm text-white">
              <div className="flex gap-2">
                <input type="checkbox" className="scale-120" name="" id="" />{" "}
                distracted by the readable{" "}
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="scale-120" name="" id="" />{" "}
                distracted by the readable{" "}
              </div>
            </div>
            <div className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content{" "}
            </div>
            <div className="flex">
              <WhiteButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
