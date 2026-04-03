import React, { useState } from "react";
import RedButton from "../main/Buttons/RedButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import RedButtonLink from "../main/Buttons/RedButtonLink";
import OutlineButton from "../main/Buttons/OutlineButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardDescSec1 = ({ product }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(1);
  const [selected, setSelected] = useState(null);

  const images = product.images ? product.images : [product.img];
  const [selectedImg, setSelectedImg] = useState(images[0]);

  // ✅ Update selectedImg whenever product changes
  useEffect(() => {
    setSelectedImg(images[0]);
  }, [product]); // dependency on product

  // ✅ Upload handler
  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
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

  return (
    <div className="flex flex-col lg:px-26 gap-5 mt-5">
      <div className="flex gap-10">
        <div className="w-1/2">
          <div className="overflow-hidden  h-[70%] group">
            <img
              src={selectedImg}
              className="object-cover w-full transform transition-transform duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 mt-4 whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400">
            {images.map((d, i) => (
              <img
                key={i}
                src={d}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setSelectedImg(d)}
                className={`w-32 h-32 object-cover cursor-pointer ${
                  selectedImg == d ? "border-red-500" : "border-transparent"
                } `}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="border-b border-gray-300 flex flex-col gap-3 pb-5 px-5">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="flex gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="font-bold">{product.rating}</span>
              <span className="text-gray-800">({product.reviews})</span>
            </div>
            <div className="text-lg text-gray-800">{product.desc}</div>
            <div className="text-lg font-bold">100 starting at $21.99</div>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2 text-lg">
              <div>Shape</div>
              <div className="flex w-full">
                <select className="p-3 rounded-lg appearance-none border border-gray-600 focus:ring-2 focus:ring-[#C6131B] focus:outline-none w-full">
                  <option value="" disabled selected>
                    Select ......
                  </option>
                  <option value="Rounded">Rounded</option>
                  <option value="Square">Square</option>
                  <option value="Circle">Circle</option>
                  <option value="Oval">Oval</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-lg">
              <div>Quantity</div>
              <div className="flex flex-col gap-3">
                {options.map((opt, index) => (
                  <label
                    key={index}
                    className={`flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer transition ${selected === index ? "bg-[#C6131B] text-white" : "bg-white text-black"}`}
                  >
                    <input
                      type="radio"
                      name="quantity"
                      className="hidden"
                      onChange={() => setSelected(index)}
                      checked={selected === index}
                    />
                    <span className="font-medium">{opt.qty}</span>
                    <div className="text-right text-sm">
                      <div className="text-lg">
                        ${opt.price.toFixed(2)}
                        <span className="ml-1 text-xs">
                          ${opt.unit.toFixed(2)}/unit
                          {opt.savings && (
                            <span className="ml-1">{opt.savings}</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <RedButton text="Make your own Design" />
                </div>
                <div>
                  <OutlineButton text="See more Quantity" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center w-full">
                <button
                  className="flex flex-col py-2 cursor-pointer px-5 bg-[#C6131B] text-white w-full text-left"
                  onClick={() => navigate("/card-template")}
                >
                  <div className="text-lg font-bold">Browse design</div>
                  <div className="text-sm">choose one of our temolates</div>
                </button>
              </div>
              <div className="flex items-center w-full">
                <button
                  className="flex flex-col py-2 cursor-pointer px-5 border-1 border-black w-full text-left"
                  onClick={handleUploadClick}
                >
                  <div className="text-lg font-bold">Upload design </div>
                  <div className="text-sm">
                    Have a design? Upload and edit it{" "}
                  </div>
                </button>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      alert(`Selected file: ${e.target.files[0].name}`);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescSec1;
