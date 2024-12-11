import React from "react";
import ItemDisplay from "./components/ItemDisplay";
import data from "./data.json"

function App() {
  return (
    <div>
      <div>
        <h1 className="text-center mt-6">Deserts</h1>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-5">
          {data.map((items, index) => 
            <ItemDisplay key={index} items={items} />
          )}
        </div>
      </div>
      <div>
        <h1>Cart</h1>
      </div>
    </div>
  );
}

export default App;
