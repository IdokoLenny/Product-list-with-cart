import React, { useState } from "react";
import data from "./../data.json";

const ItemDisplay = ({ items, cart, setCart, id }) => {
  const [startAddToCart, setStartAddToCart] = useState(false);
  const [count, setCount] = useState(0);

  function handleChange(text, id) {
    if (text === "add") {
      addToCart(id);
      cart.findIndex((item) => item.id == id) == -1 ? setCount(1) : setCount(count + 1);      
    } else {
      if (text === "minus") {
        if (count > 0) {
          removeFromCart(id);
          setCount(count - 1);
        }
      } else {
        setStartAddToCart(true);
      }
    }
  }

  function addToCart(itemId) {
    if (cart.length === 0) {
      data.map((item, index) => {
        if (index == itemId) {
          setCart((prev) => [...prev, { id: itemId, count: 1, ...item }]);
        }
      });
    } else {
      
      const cartItemIndex = cart.findIndex((cartItem) => cartItem.id == itemId);
      if (cartItemIndex !== -1) {
        setCart((prev) => {
          const updatedCart = [...prev]; // Create a shallow copy of the array
          const itemIndex = updatedCart.findIndex((item) => item.id == itemId); // Find index of the item to update

          if (itemIndex !== -1) {
            updatedCart[itemIndex] = {
              ...updatedCart[itemIndex],
              count: count + 1,
            }; // Update the specific item
          }

          return updatedCart; // Return the updated array
        });
      } else {
        data.map((item, index) => {
          if (itemId === index) {
            setCart((prev) => [...prev, { id: itemId, count: 1, ...item }]);
          }
        });
      }
    }
    console.log(cart);
  }

  function removeFromCart(itemId) {
    setCart((prev) => {
      const updatedCart = [...prev]; // Create a shallow copy of the array
      const itemIndex = updatedCart.findIndex((item) => item.id == itemId); // Find index of the item to update

      if (itemIndex !== -1) {
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          count: updatedCart[itemIndex].count - 1,
        }; // Update the specific item
      }

      return updatedCart; // Return the updated array
    });
        setCart((prev) => {
          return prev.filter((item) => item.count !== 0)
        })
    console.log(cart);
  }

  return (
    <div className= "w-[100%] sm:w-[40%] lg:w-[30%] text-xs lg:text-sm">
      <div className={count > 0 ? "h-[60%] relative mb-5 border-2 border-[#d63310] rounded-[10px]" : "h-[60%] relative mb-5"}>
        <img
          src={items.image.thumbnail}
          alt="nice"
          className="w-full rounded-[10px]"
        />
        {startAddToCart ? (
          <div className="w-[60%] text-xs text-white flex items-center justify-between py-2 px-5 sm:px-2 rounded-[20px] absolute right-[20%] bottom-[-6%] sm:bottom-[-12%] lg:bottom-[-7%] 2xl:bottom-[-5%] bg-[#d63310] z-10">
            <img
              src="./assets/images/icon-decrement-quantity.svg"
              alt="icon"
              className="w-[15px] border rounded-[50%] h-[15px] p-1 hover:cursor-pointer"
              onClick={() => handleChange("minus", id)}
            />
            <span>{count}</span>
            <img
              src="./assets/images/icon-increment-quantity.svg"
              alt="icon"
              className="w-[15px] border rounded-[50%] h-[15px] p-1 hover:cursor-pointer"
              onClick={() => handleChange("add", id)}
            />
          </div>
        ) : (
          <div
            onClick={() => handleChange("addToCart")}
            className="hover:border-[#b30000] hover:text-[#b30000] hover:cursor-pointer w-[60%] text-xs font-medium text-center py-2 px-5 sm:px-2 border border-2 rounded-[20px] absolute right-[20%] bottom-[-6%] sm:bottom-[-12%] lg:bottom-[-7%] 2xl:bottom-[-5%] bg-white z-10"
          >
            <img
              src="./assets/images/icon-add-to-cart.svg"
              alt=""
              className="inline w-[15px]"
            />
            <span className="ml-1">Add to cart</span>
          </div>
        )}
      </div>
      <div className="py-3">
        <h3>{items.category}</h3>
        <h3>{items.name}</h3>
        <p>${items.price}</p>
      </div>
    </div>
  );
};

export default ItemDisplay;
