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
            <table className="min-w-full table-auto border border-gray-300 md:text-sm text-xs">
              <thead>
                <tr>
                  <td className="p-4">Product</td>
                  <td className="p-4">Price</td>
                  <td className="p-4">Quantity</td>
                  <td className="p-4">Total</td>
                  <td className="p-4">Action</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const price = Number(item.price) || 0;
                  const qty = Number(item.qty) || 1;
                  const total = price * qty;

                  return (
                    <tr key={item.cartKey} className="border border-gray-300">
                      <td className="p-4 flex items-center gap-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="p-4">${price.toFixed(2)}</td>
                      <td className="p-4 ">
                        <button
                          onClick={() => updateCartItemQty(item.cartKey, "dec")}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-2">{qty}</span>
                        <button
                          onClick={() => updateCartItemQty(item.cartKey, "inc")}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <FaPlus />
                        </button>
                      </td>
                      <td className="p-4">${total.toFixed(2)}</td>
                      <td className="p-4">
                        <button
                          onClick={() => removeFromCart(item.cartKey)}
                          className="text-red-500 flex "
                        >
                          <FaTrash />
                        </button>
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
