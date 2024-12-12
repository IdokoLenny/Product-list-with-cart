import {React, useState} from "react";
import ItemDisplay from "./components/ItemDisplay";
import data from "./data.json"
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState({})

  return (
    <div className="w-[80%] mx-auto flex flex-col sm:flex-row gap-5">
      <div className="flex-2 sm:w-[70%] lg:w-[70%]">
        <h1 className="text-left mt-6 text-3xl font-medium">Deserts</h1>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-5 flex-wrap">
          {data.map((items, index) => 
            <ItemDisplay key={index} items={items} cart={cart} setCart={setCart} id = {index} />
          )}
        </div>
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
