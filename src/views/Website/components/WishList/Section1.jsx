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

      <table className="min-w-full table-fixed border border-gray-300 mt-5">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
            <th className="p-4 text-left w-[35%]">Product</th>
            <th className="p-4 text-center w-[15%]">Price</th>
            <th className="p-4 text-center w-[20%] border-x border-gray-100">
              Quantity
            </th>
            <th className="p-4 text-center w-[15%]">Remove</th>
            <th className="p-4 text-center w-[15%]">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="p-4 truncate font-medium">{item.name}</td>
              <td className="p-4 text-center">
                ${(Number(item.price) || 0).toFixed(2)}
              </td>
              <td className="p-4">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, "dec")}
                    className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors rounded font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "inc")}
                    className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors rounded font-bold"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-3 py-1 bg-[#C6131B] text-white rounded cursor-pointer hover:bg-[#9A0F1E] transition"
                  >
                    Remove
                  </button>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-3 py-1 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700 transition font-medium"
                  >
                    Add To Cart
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section1;
