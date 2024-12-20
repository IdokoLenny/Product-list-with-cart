import React from 'react'
import data from "./../data.json"

const Cart = ({cart, selectedItems, setShowOrder, setCart}) => {
    let counts = 0;
    for (const [key, value] of Object.entries(cart)) {
        counts = counts + value
      }
 
    function getTotal(items) {
        let sum =0 ;
        items.map((item) => {
            sum += (item.count * item.price);
        })
        return sum;
    }

    function removeItem(itemindex) {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            delete updatedCart[itemindex];
            return updatedCart;
          });
        // selectedItems = selectedItems.filter((item, index) => index !== itemindex)
        console.log(cart)
    }

  return (
    <div className="flex-1 mt-6 bg-white p-5 h-[100%] text-xs lg:text-base">
        <h1 className='text-[#d63310] font-medium'>Your Cart ({counts})</h1>
        {
            counts > 0 ? 
            <div>
                <div>
                    {
                        selectedItems.map((item, index) => {
                            return (
                            <div key={index} className='flex items-center justify-between my-3 border-b-[1px] py-2'>
                                <div>
                                    <h4>{item.name}</h4>
                                    <h2 className='text-[#d63310] font-bold'>{item.count}x <span className='ml-3 text-gray-400 font-light'>@${item.price}</span> <span className='ml-3 text-gray-400'>${item.count * item.price}</span></h2>
                                </div>
                                <div className='border-2 rounded-[50%] p-1'>
                                    <img src="./assets/images/icon-remove-item.svg" alt="remove icon" onClick={() => removeItem(index)} />
                                </div>
                            </div>                   
                            )
                        })
                    }
                </div>
                <div className='flex justify-between'>
                    <h3>Order Total</h3>
                    <h1 className='font-bold text[#d63310] text-xl'>${getTotal(selectedItems)}</h1>
                </div>
                <div className='text-sm bg-[#FFFAF0] py-2 my-3 rounded-[10px]'>
                    <img src="./assets/images/icon-carbon-neutral.svg" alt="" className='inline w-[15px]' />
                    <span>This is a <b>carbon-neutral</b> delivery</span>
                </div>
                <button onClick={() => setShowOrder(true)} className='text-white bg-[#d63310] text-center rounded-[20px] w-[100%] py-2'>Confirm order</button>
            </div>
            : 
        <>
            <img src="./assets/images/illustration-empty-cart.svg" alt="" className='w-[30%] mx-auto my-[4em]' />
            <p className='lg:text-sm'>Your added items will appear here</p>
        </>
        } 
    </div>
  )
}

export default Cart