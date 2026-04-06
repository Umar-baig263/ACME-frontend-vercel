import React, { useState } from "react";
import RedButton from "../main/Buttons/RedButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import RedButtonLink from "../main/Buttons/RedButtonLink";
import OutlineButton from "../main/Buttons/OutlineButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CorporateDescSec = ({ product }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(1);
  const [selectColor, setSelectColor] = useState("black");
  const [colorName, setColorName] = useState("Black");

  const [selectedSize, setSelectedSize] = useState("M");

  const colors = [
    {
      name: "Black",
      value: "black",
    },
    {
      name: "Yellow",
      value: "yellow-500",
    },
    {
      name: "Red",
      value: "red-500",
    },
    {
      name: "Blue",
      value: "blue-500",
    },
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
  const images = product.images || [product.img];

  const TableContent = [
    {
      name: "Product Id",
      text: "PRD-5PPY47Z1Y",
    },
    {
      name: "Type",
      text: "SweatShirt",
    },
    {
      name: "Brand",
      text: "JERZEES®",
    },
    {
      name: "Gender",
      text: "Unisex , Women , Men",
    },
    {
      name: "Material Detail",
      text: "50% Cotton and 50% Plyester",
    },
    {
      name: "Cuff Type",
      text: "Elastic",
    },
    {
      name: "Sleeves",
      text: "Long Sleeve",
    },
    {
      name: "Fit Feature",
      text: "None",
    },
    {
      name: "Length",
      text: "32in",
    },
    {
      name: "Product Weigth",
      text: "20.46oz",
    },
    {
      name: "Width",
      text: "30in",
    },
    {
      name: "Quality",
      text: "Classic",
    },
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);
  useEffect(() => {
    setSelectedImg(images[0]);
  }, [product]);

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    navigate("/check-out", {
      state: {
        buyNowProduct: {
          name: product.name,
          price: Number(product.price) || 39.99,
          img: product.img || images[0],
          qty: items,
          selectColor: colorName,
          selectSize: selectedSize,
        },
      },
    });
  };

  return (
    <div className="flex flex-col lg:px-26 gap-5 mt-5">
      <div className="flex gap-10">
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <div className="overflow-hidden rounded-xl h-[70%] group">
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
                  className={`w-32 h-32 object-cover cursor-pointer rounded-xl  ${
                    selectedImg == d ? "border-red-500" : "border-transparent"
                  } `}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold">
              Keep your team cozy and your brand on show with custom hoodies.
            </div>
            <div>
              <ul className="list-disc pl-5 text-lg">
                <li> 8 oz., midweight, 50% cotton, 50% polyester </li>
                <li> Pre-shrunk, NuBlend® pill-resistant fleece </li>
                <li> Two-ply hood with grommets and drawstring </li>
                <li>
                  {" "}
                  Seamless body with set-in sleeves & front pouch pocket{" "}
                </li>
                <li> 1x1 rib collar, cuffs and waistband with spandex </li>
                <li> High stitch density for a smooth printing canvas </li>
                <li> Double-needle stitched neck, armholes and waistband </li>
                <li> Tear away label </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="border-b border-gray-300 flex flex-col gap-3 pb-5 px-5">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-lg text-gray-800">{product.desc}</div>
            <div className="flex  w-full justify-between">
              <div className="font-semibold">
                <div>${( (Number(product.price) || 39.99) * 4.5 ).toFixed(2)} for 5 units</div>
                <div>
                  <span className="line-through">${((Number(product.price) || 39.99) * 1.2).toFixed(2)}</span>{" "}
                  <span className="text-red-700"></span> / unit
                </div>
                <div className="text-red-700">9% Volume Discount</div>
                <div> No setup fee</div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#FFB200] text-2xl">★★★★★</span>
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-800">({product.reviews})</span>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-6">
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
              {/* <div><RedButtonLink link="/customize" text="Customize Stamp" /></div> */}
            </div>
            <div>
              <div className="font-bold mb-2">Size</div>
              <div className="flex gap-2">
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded cursor-pointer ${
                      selectedSize === size
                        ? "border-red-600 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-lg">
                <span className="font-bold">Color:</span> {colorName}
              </div>
              <div>
                <div className="flex gap-2">
                  {colors.map((d, i) => (
                    <div
                      className={`p-3 rounded-full bg-${d.value} ${d.value == selectColor ? "border-red-600" : "border-white"} cursor-pointer border-2 `}
                      onClick={() => {
                        setSelectColor(d.value);
                        setColorName(d.name);
                      }}
                    ></div>
                  ))}
                  {/* <div className='p-3 rounded-full bg-yellow-500 border-2 '></div> */}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <RedButton
                  text="Customize Your Design"
                  onClick={() => navigate("/customize")}
                />
              </div>
              <div>
                <OutlineButton text="Buy Now" onClick={handleBuyNow} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl font-bold">Product features</div>
              <div>
                <table className="table-auto w-full text-sm">
                  {TableContent?.map((d, i) => (
                    <tr key={i} className="border-b border-gray-300">
                      <td className="p-2">{d?.name}</td>
                      <td className="p-2 text-gray-500">{d?.text}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-3/4 text-lg">
          Designed with comfort in mind, the JERZEES® NuBlend® Midweight Hoodie
          pairs perfectly with a tracksuit on workouts or your favorite jeans on
          weekends. It’s ideal for work uniforms and gives your team a vibrant
          and professional look. This custom hoodie features a convenient front
          pouch pocket that makes it easy to store a wallet, phone or any
          personal items – and it also serves as a hand warmer when it's
          freezing cold outside. Plus, the cozy drawstring hood makes it ideal
          for layering on a chilly morning or during unexpected weather
          conditions. Personalize with your favorite designs – logo, tagline or
          any other artwork in our easy-to-design studio – and keep your brand
          on display. And if you need support at any point during the
          customization process, our experts are here to help you.
        </div>
      </div>
    </div>
  );
};

export default CorporateDescSec;
