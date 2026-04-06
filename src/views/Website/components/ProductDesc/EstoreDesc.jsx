import React, { useContext, useState, useEffect } from "react";
import RedButton from "../main/Buttons/RedButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import RedButtonLink from "../main/Buttons/RedButtonLink";
import OutlineButton from "../main/Buttons/OutlineButton";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../../../../constants/products";
import { CartContext } from "../../../../contexts/cartContext";

const EstoreDesc = () => {
  // ✅ ALL HOOKS TOP PE (fix)
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [items, setItems] = useState(1);
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [selected, setSelected] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);

  const allProducts = products;
  const currentProduct = allProducts.find((item) => item.slug === slug);

  //  image set fix (hook issue solve)
  useEffect(() => {
    if (currentProduct) {
      setSelectedImg(currentProduct.img);
    }
  }, [currentProduct]);

  //  condition AFTER hooks
  if (!currentProduct) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectSize || !selectColor) {
      setErrorMessage("⚠ Please select a size and color");
      return;
    }

    setErrorMessage("");
    const product = {
      ...currentProduct,
      qty: items,
      price: Number(currentProduct.price) || 39.99,
      selectSize,
      selectColor,
    };

    addToCart(product);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    const product = {
      ...currentProduct,
      qty: items,
      price: Number(currentProduct.price) || 39.99,
      selectSize,
      selectColor,
    };

    navigate("/check-out", {
      state: { buyNowProduct: product },
    });
  };

  const options = [
    { qty: 50, price: 22.99, unit: 0.32, savings: null },
    { qty: 100, price: 22.99, unit: 0.32, savings: "31% savings" },
    { qty: 100, price: 22.99, unit: 0.32, savings: "31% savings" },
    { qty: 100, price: 22.99, unit: 0.32, savings: "31% savings" },
    { qty: 100, price: 22.99, unit: 0.32, savings: "31% savings" },
  ];

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

  const images = [currentProduct.img, currentProduct.img];

  const colorMap = {
    Red: "bg-red-500",
    Blue: "bg-blue-500",
    Black: "bg-black",
    White: "bg-white",
    Grey: "bg-gray-400",
    Green: "bg-green-500",
    Yellow: "bg-yellow-500",
    Navy: "bg-blue-800",
    Olive: "bg-olive-500",
    Brown: "bg-yellow-800",
  };

  return (
    <div className="flex flex-col lg:px-26 gap-5 mt-5">
      {showPopup && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Item added to cart 🛒
        </div>
      )}
      <div className="flex flex-col lg:px-26 gap-5 mt-5">
        <div className="flex gap-10">
          <div className="w-1/2 flex flex-col">
            <div className="overflow-hidden rounded-xl h-[70%]  group">
              <img
                src={selectedImg}
                className="object-contain w-full transform transition-transform duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 mt-4  whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400">
              {images.map((d, i) => (
                <img
                  key={i}
                  src={d}
                  alt={`Thumbnail ${i + 1}`}
                  onClick={() => setSelectedImg(d)}
                  className={`w-32 h-32 object-cover cursor-pointer rounded-xl  ${
                    selectedImg == d ? "border-red-500" : "border-transparent"
                  } `}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <div className="border-b border-gray-300 flex flex-col gap-3 pb-5 px-5">
              <div className="text-3xl font-bold">{currentProduct.name}</div>
              <div className="flex gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-800">{currentProduct.reviews}</span>
              </div>
              <div className="text-3xl font-bold">${currentProduct.price}</div>
              <div className="text-lg text-gray-800">{currentProduct.desc}</div>
            </div>
            <div className="flex gap-10 border-b border-gray-300  py-5 px-5">
              <div className="flex flex-col gap-2">
                <div className="text-lg">Size</div>
                <div className="flex gap-2">
                  {currentProduct.sizes.map((d, i) => (
                    <div
                      onClick={() => setSelectSize(d)}
                      className={`text-lg border ${
                        d == selectSize
                          ? " border-red-700 bg-red-700 text-white"
                          : "border-black"
                      } cursor-pointer px-3 rounded-lg flex py-1 justify-center items-center text-lg`}
                      key={i}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-lg">Color</div>
                <div className="flex gap-2">
                  {currentProduct.colors.map((color, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectColor(color)}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                        colorMap[color] || "bg-gray-200"
                      } ${
                        selectColor === color
                          ? "border-red-600"
                          : "border-white"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-2">
                <div className="text-lg">Quantity</div>
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
              </div>

              {errorMessage && (
                <div className="text-red-500 font-semibold mb-2">
                  ⚠ Please select a size and color
                </div>
              )}

              <div className="flex">
                {/* ✅ FIX */}
                <Link to={`/product-customize/${currentProduct.id}`}>
                  <RedButton text="Customize Template" />
                </Link>
              </div>

              <div className="flex gap-2">
                <div>
                  <RedButton text="Buy now" onClick={handleBuyNow} />
                </div>
                <div>
                  <OutlineButton text="Add to Cart" onClick={handleAddToCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstoreDesc;
