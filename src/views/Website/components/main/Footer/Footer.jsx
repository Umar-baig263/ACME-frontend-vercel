import React from "react";
// import footerBg from '/footerTopBgImg.png'; // Adjust path as needed
// import BlueButton from '../buttons/BlueButton';
// import BorderButton from '../buttons/BorderButton';
import { FaFacebookF, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa";
import { FaLocationPin, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Custom Products", url: "/" },
    { name: "Custom Stamp", url: "/" },
    { name: "Shop", url: "/" },
    { name: "About Us", url: "/" },
    { name: "Contact", url: "/" },
  ];
  const Customer = [
    // { name: 'Palm Island', url: '/', },
    { name: "Help Center", url: "/" },
    { name: "FAQs", url: "/" },
    { name: "Shipping & Returns", url: "/" },
    { name: "Track Your Order", url: "/" },
    { name: "Privacy Policy", url: "/" },
    { name: "Terms & Conditions", url: "/" },
  ];
  const contactUs = [
    { name: "Address", des: "Palm Jumeirah, Dubai, UAE" },
    { name: "Phone", des: "+971-XXXX-XXXX" },
    { name: "Email", des: "info@palmislands.com" },
  ];

  return (
    // <div className='w-full relative flex justify-center lg:px-24 sm:px-12 px-6  bg-[#BC202B]  md:pt-20'>

    //   <section className='w-full sm:pt-10 pt-24 text-white'>
    //       <div className="w-full sm:py-10 py-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-20 sm:gap-10 gap-5 sm:text-start text-center">
    //           <div className="w-full flex flex-col gap-3">
    //               <h2 className='uppercase md:text-3xl text-2xl'>Logo here</h2>
    //               <p className='md:text-sm text-xs'>Discover luxury living redefined on the iconic Palm Islands. Experience world-class amenities, stunning landscapes..</p>
    //               <h2 className='text-2xl font-palm'>Follow Us:</h2>
    //                 <ul className='flex flex-row sm:justify-start justify-center gap-3 '>
    //                     <li className='bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center'><FaFacebookF /></li>
    //                     <li className='bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center'><FaInstagram /></li>
    //                     <li className='bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center'><FaXTwitter /></li>
    //                 </ul>
    //             </div>
    //             <div className="w-full flex flex-col gap-3">
    //                 <h2 className='font-palm md:text-3xl text-xl'>Quick Links:</h2>
    //                 <div className="flex flex-col gap-2 md:text-sm text-xs">
    //                     {quickLinks.map((data, index) => (
    //                         <NavLink
    //                             to={data.url}
    //                             key={index}>
    //                             {data.name}
    //                         </NavLink>
    //                     ))}
    //                 </div>
    //             </div>
    //             <div className="w-full flex flex-col gap-3">
    //                 <h2 className='font-palm md:text-3xl text-xl'>The Great Palms</h2>
    //                 <div className="flex flex-col gap-2 md:text-sm text-xs">
    //                     {theGreatPalms.map((data, index) => (
    //                         <NavLink
    //                             to={data.url}
    //                             key={index}>
    //                             {data.name}
    //                         </NavLink>
    //                     ))}
    //                 </div>
    //             </div>
    //             <div className="w-full flex flex-col gap-3">
    //                 <h2 className='font-palm md:text-3xl text-xl'>Contact Us:</h2>
    //                 <div className="flex flex-col gap-2 md:text-sm text-xs">
    //                     {contactUs.map((data, index) => (
    //                         <div key={index}>
    //                             <p>{data.name}: <span>{data.des}</span> </p>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="w-full py-5 border-t border-white/50 flex sm:flex-row flex-col justify-between items-center gap-2">
    //             <h2 className='sm:text-sm text-xs'>© 2024 <span className='font-bold'>Palm Island</span> All Rights Reserved.</h2>
    //             <h2 className='sm:text-sm text-xs'>Privacy Policy / Terms & Conditions</h2>
    //         </div>
    //     </section>
    // </div>
    <div className="w-full relative flex  flex-col justify-center bg-[#9A0F1E]">
      <div className="flex md:flex-row flex-col justify-between items-center gap-5 lg:px-26 sm:px-10 px-5 border-b border-white/50 md:py-15 py-10">
        <div className="md:text-xl text-lg md:w-1/2  w-full text-white md:px-5 px-0">
          Sign up to the <b className="md:text-2xl text-xl">ACME GRAPHIC</b> for
          special offers, news and inspiration
        </div>
        <div className="md:w-1/2 w-full px-2 py-2 bg-white md:mx-2 mx-0 ">
          <input
            type="email"
            className="w-full outline-none px-2 py-1 "
            placeholder="info@gmail.com"
          />
        </div>
      </div>
      <div className="w-full text-white ">
        {/* <div className="   lg:px-26 sm:px-10 px-5 w-full sm:py-10 py-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-20 sm:gap-10 gap-5 sm:text-start text-center">
            <div className="w-full flex flex-col gap-3">
              <h2 className="uppercase md:text-3xl text-2xl">Logo here</h2>
              <p className="md:text-sm text-xs">
                Discover luxury living redefined on the iconic Palm Islands.
                Experience world-class amenities, stunning landscapes..
              </p>
              <h2 className="text-2xl font-palm">Follow Us:</h2>
              <ul className="flex flex-row sm:justify-start justify-center gap-3 ">
                <li className="bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center">
                  <FaFacebookF />
                </li>
                <li className="bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center">
                  <FaInstagram />
                </li>
                <li className="bg-white text-[#5DAABA] rounded-full w-8 h-8 flex justify-center items-center">
                  <FaXTwitter />
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h2 className="font-palm md:text-3xl text-xl">Quick Links:</h2>
              <div className="flex flex-col gap-2 md:text-sm text-xs">
                {quickLinks.map((data, index) => (
                  <NavLink to={data.url} key={index}>
                    {data.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h2 className="font-palm md:text-3xl text-xl">The Great Palms</h2>
              <div className="flex flex-col gap-2 md:text-sm text-xs">
                {theGreatPalms.map((data, index) => (
                  <NavLink to={data.url} key={index}>
                    {data.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h2 className="font-palm md:text-3xl text-xl">Contact Us:</h2>
              <div className="flex flex-col gap-2 md:text-sm text-xs">
                {contactUs.map((data, index) => (
                  <div key={index}>
                    <p>
                      {data.name}: <span>{data.des}</span>{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        <div className="lg:px-26 md:px-10 px-5 w-full md:py-20 py-5 flex md:flex-row flex-col jusify-between items-center lg:gap-10 sm:gap-5 gap-5 sm:text-start text-center">
          <div className="w-full flex flex-col gap-5 md:p-5 p-0">
            <div className="">
              <img
                src="/mainLogoWhite.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="text-base">
              ACME offers custom printing, ready-to-shop products, and marketing
              solutions to bring your ideas to life with quality and creativity.
            </div>
          </div>
          <div className="w-full flex md:flex-row justify-center flex-row gap-10 ">
            <div className="flex flex-col gap-3">
              <h2 className="font-palm md:text-xl text-lg">Quick Links:</h2>
              <div className="flex flex-col gap-3 md:text-sm text-xs">
                {quickLinks.map((data, index) => (
                  <NavLink to={data.url} key={index}>
                    {data.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-palm md:text-xl text-lg">Customer Care:</h2>
              <div className="flex flex-col gap-3 md:text-sm text-xs">
                {Customer.map((data, index) => (
                  <NavLink to={data.url} key={index}>
                    {data.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-5 ">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.039439306521!2d67.05778807421204!3d24.86250254517797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc4330000d7%3A0x392be2a6cc28669b!2sBidec%20Solution&#39;s%20(pvt)%20Ltd!5e0!3m2!1sen!2s!4v1751363360263!5m2!1sen!2s"
                className="border-none md:w-[250px] h-[250px] w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div className="flex gap-2 md:text-sm text-xs">
                <div>
                  <FaPhone />
                </div>
                <div>855.233.4333</div>
              </div>
              <div className="flex gap-2  md:text-sm text-xs">
                <div>
                  <FaLocationPin />
                </div>
                <div>3209 Commander Driver Carrollton (Dallas), TX75006</div>
              </div>
              <ul className="flex flex-row sm:justify-start justify-center gap-3 ">
                <li className="text-white border border-white rounded-full w-8 h-8 flex justify-center items-center">
                  <FaFacebookF />
                </li>
                <li className="text-white border border-white rounded-full w-8 h-8 flex justify-center items-center">
                  <FaInstagram />
                </li>
                <li className="text-white border border-white rounded-full w-8 h-8 flex justify-center items-center">
                  <FaTiktok />
                </li>
                <li className="text-white border border-white rounded-full w-8 h-8 flex justify-center items-center">
                  <FaXTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:px-26 sm:px-10 px-5 w-full py-5 border-t border-white/50 flex sm:flex-row flex-col justify-between items-center gap-2">
          <h2 className="sm:text-sm text-xs">
            © 2025 <span className="font-bold">ACME Graphic</span> All Rights
            Reserved.
          </h2>
          <h2 className="sm:text-sm text-xs flex md:gap-5 gap-3">
            <div>Terms & Conditions</div> |<div>Pricacy Policy</div> |
            <div>Company information</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
