import React, { useState } from "react";

const ItemDisplay = ({items, cart, setCart, id}) => {
  const [startAddToCart, setStartAddToCart] = useState(false);
  const [count, setCount] = useState(0)
  
  function handleChange(text, id) {
    if (text === "add") {
      addToCart(id)
      setCount(count + 1)
    }
    else {
      if (text === "minus") {
        if (count > 0) {
          removeFromCart(id)
          setCount(count - 1)
        }
      } else {
        setStartAddToCart(true)
        console.log(cart)
      }
    }
    // text === "add" ? setCount(totalcount + 1) : text === "minus" ? totalcount > 0 ? setCount(totalcount - 1) : "" : setStartAddToCart(true)  
  }

  function addToCart(itemId) {
    if (!cart[itemId]) {
      setCart((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1} ));
    }
    console.log(cart)
  }

  function removeFromCart(itemId) {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1} ));
    console.log(cart)
  }

  

  return (
    <div className= "w-[100%] sm:w-[40%] lg:w-[30%] text-xs lg:text-sm">
      <div className="h-[60%] relative mb-5">
        <img src={items.image.thumbnail} alt="nice" className="w-full rounded-[10px]" />
        { 
          startAddToCart ? 
          <div className="w-[60%] text-xs text-white flex items-center justify-between py-2 px-5 sm:px-2 rounded-[20px] absolute right-[20%] bottom-[-6%] sm:bottom-[-12%] lg:bottom-[-7%] 2xl:bottom-[-5%] bg-[#d63310] z-10">
          <img src="./assets/images/icon-decrement-quantity.svg" alt="icon" className="w-[15px] border rounded-[50%] h-[15px] p-1" onClick={() => handleChange("minus", id)} />
          <span>{id in cart ? count : 0}</span>
          <img src="./assets/images/icon-increment-quantity.svg" alt="icon" className="w-[15px] border rounded-[50%] h-[15px] p-1" onClick={() => handleChange("add", id)} />
        </div>
        :
        <div onClick={() => handleChange("addToCart")} className="w-[60%] text-xs text-center py-2 px-5 sm:px-2 border border-2 rounded-[20px] absolute right-[20%] bottom-[-6%] sm:bottom-[-12%] lg:bottom-[-7%] 2xl:bottom-[-5%] bg-white z-10">
          <img src="./assets/images/icon-add-to-cart.svg" alt="" className="inline w-[15px]" />
          <span>Add to cart</span>
        </div>
        }       
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
