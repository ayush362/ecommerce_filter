import React from "react";

function Products({ result }) {
  return (
    <>
      <section className="card-container flex flex-wrap ml-80 mt-8 -z-10">
        {result}
      </section>
    </>
  );
}

export default Products;
