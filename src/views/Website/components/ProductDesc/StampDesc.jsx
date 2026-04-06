
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
        <div className='flex flex-col lg:px-26 gap-5 mt-5'>

            <div className='flex gap-10'>

                {/* LEFT SIDE */}
                <div className='w-1/2'>
                    <div className='overflow-hidden rounded-xl h-[70%] group flex justify-center items-center'>
                        <img src={selectedImg} alt="" className="object-contain max-h-full" />
                    </div>

                    <div className="flex overflow-x-auto gap-2 mt-4">
                        {images.map((d, i) => (
                            <img
                                key={i}
                                src={d}
                                onClick={() => setSelectedImg(d)}
                                className={`w-32 h-32 object-cover cursor-pointer rounded-xl ${selectedImg === d ? 'border-2 border-red-500' : ''}`}
                                alt=""
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='w-1/2'>

                    <div className='border-b pb-5 px-5'>
                        <div className='text-3xl font-bold'>{product.name}</div>
                        <div className='text-lg text-gray-800'>{product.desc}</div>

                        <div className='flex justify-between mt-3'>
                            <div className='text-xl font-bold'>$ {Number(product.price) || 39.99}</div>
                            <div className='flex gap-2'>
                                <span className='text-yellow-500'>★★★★★</span>
                                <span className='font-bold'>5</span>
                                <span>(10934)</span>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 flex flex-col gap-5'>

                        {/* Quantity */}
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
                                <div onClick={decreaseQty} className="p-2 bg-white rounded cursor-pointer">
                                    <FaMinus />
                                </div>
                                <div className="px-2">{items}</div>
                                <div onClick={increaseQty} className="p-2 bg-white rounded cursor-pointer">
                                    <FaPlus />
                                </div>
                            </div>

                            <div onClick={() => setIsOpen(true)}>
                                <RedButton text="Customize Stamp" />
                            </div>
                        </div>

                        {/* ✅ BUTTONS ADDED */}
                        <div className="flex gap-3">
                            <RedButton text="Buy Now" onClick={handleBuyNow} width="w-1/2" />
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="w-1/2 py-3 rounded border border-black text-black"
                            >
                                Add To Cart
                            </button>
                        </div>

                        {/* ✅ Design Navigation Buttons */}
                        <div className="flex flex-col gap-3 mt-2">
                            <div 
                                onClick={() => navigate('/card-template')}
                                className="bg-[#cc1016] cursor-pointer text-white flex flex-col justify-center items-start px-4 py-3 hover:bg-[#a10d12] transition-colors"
                            >
                                <div className="text-lg font-medium">Browse design</div>
                                <div className="text-xs font-light">choose one of our templates</div>
                            </div>
                            <div 
                                onClick={() => navigate('/card-template')}
                                className="bg-white border border-gray-400 cursor-pointer text-black flex flex-col justify-center items-start px-4 py-3 hover:bg-gray-50 transition-colors"
                            >
                                <div className="text-lg font-medium">Upload design</div>
                                <div className="text-xs font-light text-gray-500">Have a design? Upload and edit it</div>
                            </div>
                        </div>

                        <div className='text-gray-700'>
                            Introducing the Trodat Printy TR-4910...
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
