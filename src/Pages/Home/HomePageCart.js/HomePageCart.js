import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllProducts from "../../AllProducts/AllProducts";
import HomeCart from "./HomeCart/HomeCart";
import "./HomePageCart.css";
const HomePageCart = () => {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://warm-caverns-95911.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  Cart.length = 6;
  return (
    <div className="mt-5">
      <div className="hr-container my-5">
        <hr className="hr" />
      </div>
      <h1 className="my-5 title">
        <u>Products</u>
      </h1>

      <div className="cart-con-parent">
        <div className="container row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 cart-con">
          {Cart.map((cart) => (
            <HomeCart key={cart._id} cart={cart}></HomeCart>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Link className="see-all container " to="/allproducts">
          See All Products 🡆
        </Link>
      </div>
    </div>
  );
};

export default HomePageCart;
