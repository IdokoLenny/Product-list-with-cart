import React from 'react'

const Cart = ({cart}) => {
    let count = 0;
    for (const [key, value] of Object.entries(cart)) {
        console.log(`${key}: ${value}`);
        count = count + value
      }
     console.log(cart)
  return (
    <div className="flex-1 mt-6 bg-white p-5 h-[100%] text-xs lg:text-base">
        <h1 className='text-[#d63310] font-medium'>Your Cart ({count})</h1>
        {
            count > 0 ? 
            <div>
                <div>
                    
                </div>
                <div className='text-sm bg-[#FFFAF0] py-2 my-3 rounded-[10px]'>
                    <img src="./assets/images/icon-carbon-neutral.svg" alt="" className='inline w-[15px]' />
                    <span>This is a <b>carbon-neutral</b> delivery</span>
                </div>
                <button className='text-white bg-[#d63310] text-center rounded-[20px] w-[100%] py-2'>Confirm order</button>
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