import React, { useContext } from "react";
import RedButton from "../main/Buttons/RedButton";
import { WishlistContext } from "../../../../contexts/wishlistContext";
import { CartContext } from "../../../../contexts/cartContext";

const Section1 = () => {
  const { wishlist, removeFromWishlist, clearWishlist, updateQuantity } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      qty: item.quantity,
      price: Number(item.price) || 0,
    });
  };

  const handleQuantityChange = (id, type) => {
    const item = wishlist.find((p) => p.id === id);
    if (!item) return;
    if (type === "inc") updateQuantity(id, item.quantity + 1);
    else updateQuantity(id, item.quantity - 1);
  };

  return (
    <div className="flex flex-col gap-5 px-6 md:px-10 lg:px-26 pb-26 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">WISH LIST</h1>
        <RedButton text="Delete All" onClick={clearWishlist} />
      </div>

      <table className="min-w-full border border-gray-300 mt-5">
        <thead>
          <tr>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-center">Price</th>
            <th className="p-4 text-center">Quantity</th>
            <th className="p-4 text-center">Remove</th>
            <th className="p-4 text-center">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="p-4">{item.name}</td>
              <td className="p-4 text-center">
                ${(Number(item.price) || 0).toFixed(2)}
              </td>
              <td className="p-4 flex items-center justify-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, "dec")}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "inc")}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                >
                  Remove
                </button>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer"
                >
                  Add To Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section1;
