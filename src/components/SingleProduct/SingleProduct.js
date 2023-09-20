import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Slices/cartSlice";

function SingleProduct({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const curItem = cart.find((item) => item.id == product.id);
  const curQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className="SingleProduct">
      <img className="productimage" src={product.image} alt={product.title} />

      <div className="productInfo">
        <h2 className="producttitle">{product.title}</h2>
        <p className="productprice">
          <b>Price: </b>
          {product.price}
        </p>
        <p className="productcategory">
          {" "}
          <b>Category:</b> {product.category}
        </p>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
        <h4>{curQuantity}</h4>
        <button
          className="button"
          onClick={() => dispatch(addToCart(product.id))}
        >
          +{" "}
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
