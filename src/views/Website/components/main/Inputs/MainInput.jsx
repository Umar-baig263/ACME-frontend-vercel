import React from "react";

const MainInput = ({
  value,
  onchange,
  label,
  name,
  placeHolder,
  type,
  isreq,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-base text-gray-800">
        {label}{isreq ? "*" : ""}
      </div>
      <div>
        <input
          className="bg-gray-100 border w-full border-gray-300 outline-none p-2"
          type={type}
          name={name}
          value={value}
          onChange={onchange}
          placeholder={placeHolder}
          required={isreq ? "required" : "no"}
        />
      </div>
    </div>
  );
};

export default MainInput;
