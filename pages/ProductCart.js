// src/pages/ProductCart.js
import React from "react";
import "../Styles/ProductCart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
} from "../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCart = () => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {cart.length > 0 ? (
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4>Cart Items</h4>
              </div>
              <div className="card-body">
                {cart.map((item) => (
                  <div className="row mb-3 border-bottom pb-3" key={item.id}>
                    <div className="col-md-4 d-flex justify-content-center">
                      <img
                        src={item.image}
                        className="img-fluid rounded"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <h5>{item.title}</h5>
                      <p className="mb-1">Price: ${item.price}</p>
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="number"
                          className="form-control w-25 text-center"
                          value={item.quantity}
                          min="1"
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm ms-2"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <button
                        className="btn btn-danger btn-sm mt-2"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4>Summary</h4>
            </div>
            <div className="card-body">
              <p className="d-flex justify-content-between">
                <strong>Subtotal:</strong> ${getTotalPrice()}
              </p>
              <p className="d-flex justify-content-between">
                <strong>Tax (10%):</strong> ${getTotalPrice() * 0.1}
              </p>
              <h4 className="fw-bold d-flex justify-content-between">
                Total: ${getTotalPrice() * 1.1}
              </h4>
              <button className="btn btn-primary btn-block mt-3">
                Checkout
              </button>
              <button className="btn btn-warning btn-block mt-3 text-white border-0">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
