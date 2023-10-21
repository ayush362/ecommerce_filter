import React from "react";
// import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="card m-5 border-2 border-gray-100 p-5 cursor-pointer ">
      <img src={img} className="w-52 mb-4" alt={title} />
      <div className="card-details">
        <h3 className="card-title mb-4">{title}</h3>
        <section className="card-reviews flex mb-4 ">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews text-base ml-3">{reviews}</span>
        </section>
        <section className="card-price flex justify-around items-center">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
}
export default Card;
