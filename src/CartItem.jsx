import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    cart.forEach((item) => {
        totalCost += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return totalCost;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    const name = item.name;
    const quantity = item.quantity + 1;
    dispatch(updateQuantity({name, quantity}));
  };

  const handleDecrement = (item) => {
    const name = item.name;
    const quantity = item.quantity - 1;
    if(item && item.quantity > 0) {
        dispatch(updateQuantity({name, quantity}));
    } else {
        dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let totalCostPerItem = 0;
    totalCostPerItem = parseFloat(parseFloat(item.cost.substring(1))) * item.quantity;
    return totalCostPerItem;
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
                <div className="summary-value" id="totalItems">{cart.length}</div>
            </div>
            <div className="summary-item">
                <div className="summary-label">Total Cost</div>
                <div className="summary-value" id="totalCost">${calculateTotalAmount()}</div>
            </div>
        </div>

        <div className="cart-items" id="cartItems">
            {/* Cart items will be rendered here */}
            {cart.map((item, id) => (
                <div className="cart-item" key={id}>
                <img src={item.image} alt={item.name} className="cart-item-image" onerror="this.src='https://via.placeholder.com/80/4a7c29/ffffff?text={item.name}'" />
                <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <div className="cart-item-price">${item.price}</div>
                <div className="quantity-controls">
                    <button className="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div className="cart-item-total">$</div>
                <button className="btn-delete" onclick="removeFromCart(${item.id})" title="Remove item">🗑️</button>
            </div>
            ))};
        </div>

        <div className="cart-actions">
            <button className="btn-secondary" onClick={() => handleContinueShopping()}>Continue Shopping</button>
            <button className="btn-primary" onClick={() => checkout()}>Checkout</button>
        </div>
    </div>
  );
};

export default CartItem;


