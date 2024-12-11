import React from "react";

const ItemDisplay = ({items}) => {
  return (
    <div className= "w-[80%]">
      <div className="h-[60%] relative mb-5">
        <img src={items.image.thumbnail} alt="nice" className="w-full rounded-[10px]" />
        <div className="text-sm text-center p-2 w-[50%] border border-2 rounded-[20px] absolute right-[4.5rem] top-[14rem] bg-white z-10"><img src="./assets/images/icon-add-to-cart.svg" alt="" className="inline" /><span>Add to cart</span></div>
      </div>
      <div>
        <h3>{items.category}</h3>
        <h3>{items.name}</h3>
        <p>${items.price}</p>
      </div>
    </div>
  );
};

export default ItemDisplay;
