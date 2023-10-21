import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar w-1/6 fixed h-full border-r-2 border-slate-200 z-20 flex flex-col items-center ">
        <div className="logo-container mb-16">
          <h1 className="mt-6">🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
