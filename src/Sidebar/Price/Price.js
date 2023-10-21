import React from "react";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title text-2xl font-normal mb-5 mt-5 ml-8">
        Price
      </h2>
      <div className="flex flex-col mt-5">
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="0-50"
          title="0 - 50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value="50-100"
          title="50 - 100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value="100-150"
          title="100 - 150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value="150+"
          title="Over 150"
          name="test2"
        />
      </div>
    </div>
  );
}

export default Price;
