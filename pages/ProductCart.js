import React, { useContext } from "react";
import "../Styles/ProductCart.css";
import { CartContext } from "../context/CartContext";

const ProductCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {cart.length > 0 ? (
            <div className="card mb-3">
              <div className="card-header">
                <h4>Cart Items</h4>
              </div>
              <div className="card-body">
                {cart.map((item) => (
                  <div className="row mb-3" key={item.id}>
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <h5>{item.title}</h5>
                      <p className="mb-1">Price: ${item.price}</p>
                      <input
                        type="number"
                        className="form-control w-25"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                      />
                      <button
                        className="btn btn-danger btn-sm mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4>Summary</h4>
            </div>
            <div className="card-body">
              <p>Subtotal: ${getTotalPrice()}</p>
              <p>Tax: ${getTotalPrice() * 0.1}</p>
              <h4 className="fw-medium">Total: ${getTotalPrice() * 1.1}</h4>
              <button className="btn btn-primary btn-block mt-3 me-3 fw-medium">
                Checkout
              </button>
              <button className="btn btn-warning btn-block mt-3 fw-medium border-secondary">
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
