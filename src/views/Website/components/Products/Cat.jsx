import React from "react";

const Cate = ({ Cat, selectedTopCat, setSelectedTopCat }) => {
  return (
    <div className="overflow-hidden flex justify-center items-center w-full px-10">
      <div className="flex gap-5">
        {Cat?.map((d, i) => {
          const isActive = selectedTopCat === d.name; // sync with parent
          return (
            <div
              key={i}
              className="gap-2 flex flex-col items-center cursor-pointer py-2"
              onClick={() => setSelectedTopCat(d.name)} // notify parent
            >
              <div className="bg-gray-200 rounded-full overflow-hidden w-38 h-38 flex items-center justify-center">
                <img
                  src={d.img}
                  alt=""
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </div>
              <div
                className={`md:text-base text-base text-center relative ${
                  isActive
                    ? "after:content-[''] after:block after:h-[4px] after:rounded-xl after:w-1/2 after:bg-[#C6131B] after:absolute after:-bottom-1 after:left-1/4"
                    : ""
                }`}
              >
                {d.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cate;
