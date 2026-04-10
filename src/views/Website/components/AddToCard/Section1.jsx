import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/cartContext";
import { WishlistContext } from "../../../../contexts/wishlistContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import RedButtonLink from "../main/Buttons/RedButtonLink";

const Section1 = () => {
  const { cart, updateCartItemQty, removeFromCart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  // Cart item total price
  const getItemTotal = (item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    return price * qty;
  };

  const cartTotal = cart.reduce((acc, item) => acc + getItemTotal(item), 0);

  return (
    <div className="md:mt-10 mt-5 lg:px-26 md:px-10 px-6 pb-26 flex flex-col gap-5">
      <h2 className="text-3xl font-bold">My Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 mt-5">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full table-fixed border border-gray-300 md:text-sm text-xs">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300">
                  <td className="p-4 font-bold w-[40%]">Product</td>
                  <td className="p-4 font-bold w-[15%]">Price</td>
                  <td className="p-4 font-bold w-[15%] text-center border-x border-gray-100">Quantity</td>
                  <td className="p-4 font-bold w-[20%]">Total</td>
                  <td className="p-4 font-bold w-[10%] text-center">Action</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const price = Number(item.price) || 0;
                  const qty = Number(item.qty) || 1;
                  const total = price * qty;

                  return (
                    <tr key={item.cartKey} className="border border-gray-300">
                      <td className="p-4 flex items-center gap-4">
                        <img
                          src={item.img || item.image || "/business-img1.png"}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded-md"
                        />
                        <div className="flex flex-col overflow-hidden">
                          <span className="font-bold truncate">{item.name}</span>
                          {item.customDetails && (
                            <div className="text-[11px] text-gray-500 mt-1 flex flex-col">
                              {item.customDetails.apparelColor ? (
                                <>
                                  <span><span className="font-semibold text-gray-700">Size:</span> {item.customDetails.size}</span>
                                  <span><span className="font-semibold text-gray-700">Material:</span> {item.customDetails.material}</span>
                                </>
                              ) : (
                                <>
                                  {item.customDetails.themeColor && <span><span className="font-semibold text-gray-700">Theme:</span> <span className="capitalize">{item.customDetails.themeColor}</span></span>}
                                  {item.customDetails.layout && <span><span className="font-semibold text-gray-700">Layout:</span> <span className="capitalize">{item.customDetails.layout}</span></span>}
                                  {item.customDetails.style?.fontFamily && <span><span className="font-semibold text-gray-700">Font:</span> {item.customDetails.style.fontFamily}</span>}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">${price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => updateCartItemQty(item.cartKey, "dec")}
                            className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateCartItemQty(item.cartKey, "inc")}
                            className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </td>
                      <td className="p-4 font-semibold">${total.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() => removeFromCart(item.cartKey)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </span>
            <RedButtonLink link="/check-out" text="Proceed to Checkout" />
          </div>
        </>
      )}
    </div>
  );
};

export default Section1;
