import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav() {
  return (
    <nav className="flex border-b-2 border-grey-500 justify-around items-center p-5 z-50 ml-8">
      <div className="nav-container">
        <input
          type="text"
          className="search-input py-3 px-5 border-none bg-stone-100 outline-none mr-5 rounded-md relative w-56"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile-container flex">
        <a href="#">
          <FiHeart className="nav-icons w-6 h-6 ml-8" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons w-6 h-6 ml-8" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons w-6 h-6 ml-8" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
