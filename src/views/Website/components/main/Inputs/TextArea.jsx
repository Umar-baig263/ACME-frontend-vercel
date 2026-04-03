import React from "react";

const TextArea = ({ value, placeHolder, onchange, label, name, rows , isreq }) => {
  return (
    <div className="flex gap-2 flex-col w-full">
      <div className="">{label} {isreq ? "*" : ""}</div>
      <div>
        {/* <input type="text" /> */}
        <textarea
          value={value}
          placeholder={placeHolder}
          required={isreq ? "required" : ""}
          onChange={onchange}
          name={name}
          className="bg-gray-100 border w-full border-gray-300 outline-none p-2"
          rows={rows}
        />
      </div>
    </div>
  );
};

export default TextArea;
