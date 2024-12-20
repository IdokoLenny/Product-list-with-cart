import {React, useState} from "react";
import ItemDisplay from "./components/ItemDisplay";
import data from "./data.json"
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [cart, setCart] = useState({})
  const [showOrder, setShowOrder] = useState(false)

  let selectedItems = [];
    for (const [key, value] of Object.entries(cart)) {
      data.map((item, index) => {
          if (key == index) {
              console.log(index)
              selectedItems.push({...item, count : value})
          }
      })
  }

  return (
    <>
    <div className={showOrder ? "w-[80%] mx-auto flex flex-col sm:flex-row gap-5 relative opacity-15" : "w-[80%] mx-auto flex flex-col sm:flex-row gap-5 relative"}>
      <div className={showOrder ? "flex-2 sm:w-[65%] lg:w-[70%] z-1" : "flex-2 sm:w-[65%] lg:w-[70%]"}>
        <h1 className="text-left mt-6 text-3xl font-medium">Deserts</h1>
        <div className={showOrder ? "hidden sm:flex sm:flex-row sm:items-center sm:gap-6 sm:mt-5 sm:flex-wrap" : "flex flex-col sm:flex-row items-center gap-6 mt-5 flex-wrap"}>
          {data.map((items, index) => 
            <ItemDisplay key={index} items={items} cart={cart} setCart={setCart} id = {index} />
          )}
        </div>
 
      </div>
      <Cart cart={cart} selectedItems={selectedItems} setShowOrder={setShowOrder} setCart={setCart} />      
    </div>
     {
      showOrder ? <OrderConfirmation selectedItems={selectedItems} /> : ""
    }
    </>
  );
}

export default App;
