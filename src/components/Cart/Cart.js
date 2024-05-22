import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
const Cart = () => {
  const [cartedItems, setcartedItems] = useState([]);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    setcartedItems(carts);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedcarts = cartedItems.filter(
      (_, index) => index !== indexToDelete
    );
    setcartedItems(updatedcarts);
    localStorage.setItem("cart", JSON.stringify(updatedcarts));
  };

  const calculateTotal = () => {
    return cartedItems.reduce((total, item) => total + item.price.value, 0);
  };

  return (
    <div>
      <h2>carted Items</h2>
      <div className="total">
        <h3>Total: Rs {calculateTotal()}</h3>
      </div>
      {cartedItems.length === 0 ? (
        <p>No carts yet.</p>
      ) : (
        <div className="card-div">
          {cartedItems.map((item, index) => (
            <div className="card1" key={index}>
              <img
                src={item.images[0].src}
                alt={item.title}
                className="image-size"
              />
              <h3>{item.title}</h3>
              <p>{item.vendor}</p>
              <p>Rs {item.price.value}</p>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
