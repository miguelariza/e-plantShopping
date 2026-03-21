import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 
  };

  const handleContinueShopping = (e) => {
   
  };



  const handleIncrement = (item) => {
  };

  const handleDecrement = (item) => {
   
  };

  const handleRemove = (item) => {
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return (

    <div className="cart-container">
        <div className="cart-header">
            <h1 className="page-title">Your Shopping Cart</h1>
            <p className="page-subtitle">Review your selections before checkout</p>
        </div>

        <div className="cart-summary">
            <div className="summary-item">
                <div className="summary-label">Total Items</div>
                <div className="summary-value" id="totalItems">0</div>
            </div>
            <div className="summary-item">
                <div className="summary-label">Total Cost</div>
                <div className="summary-value" id="totalCost">${calculateTotalAmount()}</div>
            </div>
        </div>

        <div className="cart-items" id="cartItems">
            {/* Cart items will be rendered here */}
        </div>

        <div className="cart-actions">
            <button className="btn-secondary" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
            <button className="btn-primary" onClick={() => checkout()}>Checkout</button>
        </div>
    </div>
  );
};

export default CartItem;


