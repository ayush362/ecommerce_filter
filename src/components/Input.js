import React from "react";

function Input({ handleChange, value, title, name, color }) {
  return (
    <label
      htmlFor=""
      className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none"
    >
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark ml-5 style={{backgroundColor:color}}">
        {title}
      </span>
    </label>
  );
}

export default Input;
