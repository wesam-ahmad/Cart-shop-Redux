import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-md">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
