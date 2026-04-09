
import React, { useState, useContext } from 'react';
import RedButton from '../main/Buttons/RedButton';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import RedButtonLink from "../main/Buttons/RedButtonLink";
// import SignUpPopUp from './SignUpPopUp';
import OutlineButton from "../main/Buttons/OutlineButton";
import { useLocation, useNavigate } from "react-router-dom";

import { CartContext } from "../../../../contexts/cartContext";

const StampDesc = ({ product: propProduct }) => {
  const { state } = useLocation();
  const product = propProduct || state?.product;

  const handleQtyChange = (index, type) => {
    setItems((prevItems) => {
      return prevItems.map((item, i) => {
        if (i === index) {
          const newQty =
            type === "inc"
              ? item.qty + 1
              : item.qty > 1
                ? item.qty - 1
                : item.qty;
          return { ...item, qty: newQty };
        }
        return item;
      });
    });
  };
  const keyFeatures = [
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
    {
      heading: "Laser-Crafted Precision",
      description:
        "Trodat TR-4910 Sharp 9×26 mm prints with laser-cut precision.",
    },
  ];
  // const images = product?.images || [product?.img];

  // const dummyImages = [
  //   product?.img || "/productImgDesc.png",
  //   "/productImgDesc1.png",
  //   "/productImgDesc2.png",
  //   "/productImgDesc3.png",
  // ];
  // const images = product?.images && product.images.length > 0 ? product.images : dummyImages;

 
  const dummyImages = [
  product?.img || "/productImgDesc.png",
  "/productImgDesc1.png",
  "/productImgDesc2.png",
  "/productImgDesc3.png",
];

const images =
  product?.images && product.images.length > 0
    ? product.images
    : dummyImages;


  const [items, setItems] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(images[0]);

  React.useEffect(() => {
    setSelectedImg(images[0]);
  }, [product]);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ If no product
  if (!product?.id) {
    return <div className="p-10">No product data found</div>;
  }

  // ✅ Quantity handlers
  const increaseQty = () => setItems((prev) => prev + 1);
  const decreaseQty = () => setItems((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ Add to Cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      price: Number(product.price) || 39.99,
      qty: items,
    });
  };

  // ✅ Buy Now
  const handleBuyNow = () => {
    navigate("/check-out", {
      state: { buyNowProduct: { ...product, price: Number(product.price) || 39.99, qty: items } },
    });
  };

  return (
    <div className="flex flex-col lg:px-26 gap-5 mt-5">
      <div className="flex gap-10">
        <div className="w-1/2">
          <div className="overflow-hidden rounded-xl aspect-square bg-gray-50 border border-gray-100 flex justify-center items-center p-12 group">
            <img
              src={selectedImg}
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
              alt={product.name}
            />
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 mt-4 whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400">
            {images.map((d, i) => (
              <img
                key={i}
                src={d}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setSelectedImg(d)}
                className={`w-32 h-32 object-contain bg-gray-50 p-2 cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                  selectedImg === d ? "border-[#C6131B]" : "border-gray-100 opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="border-b border-gray-300 flex flex-col gap-3 pb-5 px-5">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-lg text-gray-800">{product.desc}</div>
            <div className="flex  w-full items-center justify-between">
              <div className="text-xl font-bold">${product.price}</div>
              <div className="flex gap-2 items-center">
                <span className="text-[#FFB200] text-2xl">★★★★★</span>
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-800">(10934)</span>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <div className="flex w-full justify-between items-center">
              <div>
                <div className="flex">
                  <div className="flex justify-between items-center gap-2 text-sm p-1 bg-gray-100 rounded-full md:text-xs text-sm">
                    <div
                      onClick={() => (items > 1 ? setItems(items - 1) : "")}
                      className="p-2 rounded-full border border-white hover:border-red-600 bg-white "
                    >
                      <FaMinus />
                    </div>
                    <div>{items}</div>
                    <div
                      onClick={() => setItems(items + 1)}
                      className="p-2 rounded-full border border-white hover:border-red-600 bg-white "
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div onClick={() => navigate("/stamp-customize", { state: { product } })}>
                  <RedButton text="Customize Stamp" />
                </div>
                <div>
                  <OutlineButton text="Add to Cart" onClick={handleAddToCart} />
                </div>
                <div>
                  <OutlineButton text="Buy Now" onClick={handleBuyNow} />
                </div>
              </div>
            </div>
            <div className="text-lg text-gray-700">
              Introducing the Trodat Printy TR-4910, a compact self-inking stamp
              with dimensions of 9 x 26 mm (3/8" x 1-1/32"). Perfect for those
              seeking a small yet efficient stamp for quick and precise
              impressions. Ideal for addresses, logos, or personalized messages
              in a space-efficient design. Enjoy global shipping on every order.
              Free shipping for orders above $30. Ideal for offices and personal
              use. Order now!
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-xl font-bold">Key Features</div>
              <div className="flex flex-col gap-5 p-2 bg-gray-100 h-[250px] overflow-hidden">
                <div className="overflow-y-auto">
                  <ul className="list-disc p-5 flex flex-col gap-2">
                    {keyFeatures?.map((d, i) => (
                      <li key={i}>
                        <div className="text-lg font-bold">{d?.heading}</div>
                        <div className="text-lg">{d?.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed bg-black/80 w-full h-screen top-0 left-0 flex justify-center items-center z-50">

                    <div className='absolute top-5 right-5 text-white text-xl cursor-pointer' onClick={() => setIsOpen(false)}>
                        <FaX />
                    </div>

                    <div className="bg-white p-5 w-3/5 flex gap-5">
                        <div className="w-1/2">
                            <img src="signUpImg.png" className="w-full" alt="" />
                        </div>

                        <div className="w-1/2 flex flex-col items-center gap-5">
                            <div className="text-xl font-bold">Sign Up</div>

                            <div className="w-full">
                                <input placeholder="Email" className="border p-2 w-full" />
                            </div>

                            <RedButton text="Sign up" width="w-full" />
                            <OutlineButton text="Google" width="w-full" />
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default StampDesc;
