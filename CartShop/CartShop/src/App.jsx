import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Shopping Cart</h1>
      <Cart />
      <ProductList />
    </div>
  );
};

export default App;

