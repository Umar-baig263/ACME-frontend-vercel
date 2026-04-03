import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import RedButton from "../main/Buttons/RedButton";
import OutlineButton from "../main/Buttons/OutlineButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/cartContext";
import { useLocation } from "react-router-dom";

const Section1 = () => {
  const { cart, setCart } = useContext(CartContext);
  const location = useLocation();
  const buyNowProduct = location.state?.buyNowProduct;
  const items = buyNowProduct ? [buyNowProduct] : cart;

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name",
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Unexpected API response format (not an array)");
      }

      const countryList = data
        .map((c) => c?.name?.common)
        .filter(Boolean)
        .sort();

      setCountries(countryList);
    } catch (err) {
      console.error("Error fetching countries:", err.message);
      setError("Failed to load country list. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  // Handle Purchase Now click
  const handlePurchase = () => {
    if (items.length === 0) return;
    setOrderPlaced(true); // show confirmation
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <div className="lg:px-26 md:px-10 px-5 md:mt-10 mt-5 pb-26">
      <div className="md:text-5xl text-3xl font-bold">Check Out</div>
      <div className=" md:flex gap-10 md:mt-10 mt-5 justify-between ">
        <div className="md:w-[65%] w-full flex flex-col gap-8">
          <div className="flex flex-col w-full gap-3">
            <div className="md:text-3xl text-xl text-medium">Contact</div>
            <div>
              <input
                className="w-full p-3 border border-gray-200 outline-none rounded-md "
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-2 items-center md:text-base text-sm">
              <input
                type="checkbox"
                className="accent-[#C6131B] scale-120"
                name=""
                id=""
              />
              <span>Email me with news and offers</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="md:text-3xl text-xl text-medium">Delivery</div>
            <div className="flex gap-2 items-center md:text-base text-sm">
              <input
                type="checkbox"
                className="accent-[#C6131B] scale-120"
                name=""
                id=""
              />
              <span>
                Use save address (If checked, the previously saved address will
                auto-fill here)
              </span>
            </div>
            <div className="flex gap-1 text-sm">
              <input
                type="text"
                className="w-full p-3 border outline-none rounded-md border-gray-200"
                placeholder="City: select your city name here"
                required
              />
              <button className="cursor-pointer rounded-md bg-gray-100 flex justify-center items-center p-2 px-4">
                <div className="flex">
                  <FaSearch />
                </div>
              </button>
            </div>
            <div className="flex md:flex-row flex-col gap-2 items-center text-sm">
              <div className="md:w-1/2 w-full">
                <select
                  required
                  className="w-full border border-gray-200 outline-none rounded-md p-3"
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:w-1/2 w-full">
                <input
                  required
                  type="text"
                  placeholder="Landmarks"
                  className="p-3 border border-gray-200 rounded-md w-full "
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 items- text-sm">
              <div className="md:w-1/2 w-full">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="p-3 w-full border border-gray-200 rounded-md"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="p-3 w-full border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex text-sm">
              <input
                type="text"
                required
                placeholder="Address"
                className="p-3 w-full rounded-md border border-gray-200"
                name=""
                id=""
              />
            </div>
            <div className="flex md:flex-row flex-col gap-2 items-center text-sm">
              <div className="md:w-1/2 w-full">
                <input
                  type="number"
                  placeholder="Postal Code (Option)"
                  className="p-3 w-full border border-gray-200 rounded-md"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <input
                  type="number"
                  placeholder="Phone"
                  required
                  className="p-3 w-full border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center md:text-base text-sm">
              <input
                type="checkbox"
                className="accent-[#C6131B] scale-120"
                name=""
                id=""
              />
              <span>Save this information for next time</span>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.711555051858!2d67.05486443088834!3d24.863810271954023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc4330000d7%3A0x392be2a6cc28669b!2sBidec%20Solution&#39;s%20(pvt)%20Ltd!5e0!3m2!1sen!2s!4v1753259941301!5m2!1sen!2s"
              className="w-full md:h-[450px] h-[225px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="md:text-3xl text-xl text-medium">Payment</div>
            <div className="flex flex-col">
              <div className="flex justify-between border-b border-gray-200 items-center w-full p-2">
                <div className="flex gap-3 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="accent-[#C6131B] scale-120"
                  />{" "}
                  Cash On Delivery
                </div>
                <div>
                  <img
                    src="cod.png"
                    className="w-[100px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-200 items-center w-full p-2">
                <div className="flex gap-3 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="accent-[#C6131B] scale-120"
                  />{" "}
                  Bank Transfer
                </div>
                <div>
                  <img
                    src="visaCard.png"
                    className="w-[100px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-200 items-center w-full p-2">
                <div className="flex gap-3 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="accent-[#C6131B] scale-120"
                  />{" "}
                  EasyPaisa or Jazz Cash
                </div>
                <div className="flex">
                  <img
                    src="easypaisa.png"
                    className="w-[50px] object-contain"
                    alt=""
                  />
                  <img
                    src="jazzCash.png"
                    className="w-[50px] object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-red-500">
            *Note: Use your gift card balance or earned loyalty points to reduce
            your total amount at checkout.
          </div>
        </div>
        <div className="md:w-[35%] w-full">
          <div className="flex flex-col w-full gap-5 border-b border-gray-200 py-10">
            <div className="md:text-3xl text-xl text-medium">Your Order</div>
            <div className="flex flex-col gap-2 pb-5">
              {items.length === 0 ? (
                <div className="text-sm text-gray-500">Your cart is empty</div>
              ) : (
                items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center justify-between border-b border-gray-200 p-2"
                  >
                    <div className="w-[20%]">
                      <img
                        src={item.img}
                        className="rounded-md w-full"
                        alt={item.name}
                      />
                    </div>

                    <div className="w-[80%] flex text-sm w-full justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="font-bold">{item.name}</div>

                        <div className="flex gap-3 text-xs items-center">
                          <div>${item.price}</div>

                          <div className="flex gap-2 bg-gray-100 border border-gray-200 rounded-md p-1">
                            <div>{item.qty}</div>
                          </div>
                        </div>

                        <div className="text-xs">
                          Size: {item.selectSize} | Color: {item.selectColor}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div>${(item.price * item.qty).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 border-b border-gray-200 py-5 text-sm">
            <div className="flex justify-between items-center w-full ">
              <div>Items:</div>
              <div>
                {" "}
                {items.reduce((total, item) => total + (item.qty || 1), 0)}
              </div>
            </div>
            <div className="flex justify-between items-center w-full ">
              <div>Subtotal:</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between items-center w-full ">
              <div>Delivery:</div>
              <div>$3.02</div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 border-b border-gray-200 py-5 text-sm">
            <div className="flex justify-between items-center w-full ">
              <div>Discount Code:</div>
              <div>
                <input className="p-2 border border-gray-200 rounded-md outline-none" />
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-2">
                <div className="p-2 rounded-md bg-blue-200 text-xs flex gap-2 text-gray-800">
                    <div>CRE432</div>
                    <div>X</div>
                </div>
            </div> */}
          </div>
          <div className="flex flex-col w-full gap-2 py-5">
            <div className="flex justify-between items-center w-full text-sm">
              <div>Discount Price:</div>
              <div></div>
            </div>
            <div className="flex justify-between items-center w-full text-lg font-bold">
              <div>Grand Total:</div>
              <div>${(subtotal + 3.02).toFixed(2)}</div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-2 ">
            <Link to="/" className="md:w-1/2 w-full">
              <OutlineButton
                text="Continue Shopping"
                color="[#9A0F1E]"
                width=" justify-center flex rounded-md w-full"
              />
            </Link>
            {/* ✅ Updated Purchase Now button */}
            <button onClick={handlePurchase} className="md:w-1/2 w-full">
              <RedButton text="Purchase Now" width="rounded-md w-full" />
            </button>
          </div>

          {/* ✅ Order Confirmation Message */}
          {orderPlaced && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center font-semibold">
              🎉 Order has been placed!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section1;
