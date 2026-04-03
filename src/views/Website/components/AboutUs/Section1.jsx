import React from "react";

const Section1 = () => {
  return (
    <div className=" mt-10 flex flex-col items-center gap-5 justify-center text-center lg:px-26 md:px-10 px-5">
      <div className="md:text-3xl text-xl font-bold">PHILOSOPHY</div>
      <div className="md:text-base text-sm lg:px-26 md:px-10 px-5">
        At ACME Graphic Solutions, we believe in empowering businesses with
        innovative and comprehensive solutions that simplify their journey
        toward success. Our philosophy is built on the foundation of providing a
        "One Window Solution" a seamless, integrated approach to meet all the
        creative, marketing, and technological needs of modern businesses.
      </div>
      <div className="md:text-base text-sm font-semibold">We are guided by the following core principles:</div>
      <div className="flex gap-5 flex-wrap lg:px-40 md:px-10 px-5 items-center justify-center ">
       <div>.Customer-Centric Excellence </div>   
       <div>.Innovation and Creativity</div> 
       <div>.Collaboration and Partnership </div> 
       <div>.Simplicity and Efficiency</div> 
       <div>.Quality and Integrity</div> 
      </div>
    </div>
  );
};

export default Section1;
