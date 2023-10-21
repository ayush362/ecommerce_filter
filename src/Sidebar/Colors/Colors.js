import React from "react";
import Input from "../../components/Input";
function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title text-2xl font-normal mb-5 ml-8 mt-8">
        Colors
      </h2>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />{" "}
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />{" "}
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <label
          htmlFor=""
          className="block relative pl-9 mb-3 cursor-pointer select-none"
        >
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>White
        </label>
      </div>
    </div>
  );
}

export default Colors;
