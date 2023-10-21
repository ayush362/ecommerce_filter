import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

import Data from "./db/Data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //  input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtereditems = Data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(Data, selected, query) {
    let filteredProducts = Data;

    // filtering input items
    if (query) {
      filteredProducts = filtereditems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newprice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newprice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(Data, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange}></Nav>
      <Recommended handleChange={handleClick}></Recommended>
      <Products result={result}></Products>
    </>
  );
}

export default App;
