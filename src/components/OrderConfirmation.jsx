import React from 'react'

const OrderConfirmation = ({selectedItems}) => {

    function getTotal(items) {
        let sum =0 ;
        items.map((item) => {
            sum += (item.count * item.price);
        })
        return sum;
    }
  return (
    <div className='bg-white rounded-[15px] py-6 px-4 absolute top-[4em] z-40 w-[100%] sm:w-[30%] sm:absolute sm:top-[25%] sm:left-[35%]'>
          <img className='w-[2em]' src="./assets/images/icon-order-confirmed.svg" alt="order confirmed" />
          <h2 className='text-2xl font-bold mt-3'>Order <br /> Confirmed</h2>
          <p className='text-gray-400 text-xs my-2'>We hope you enjoy your food!</p>
          <div className='p-5 bg-[#FFFAF0] rounded-[15px]'>
            {
              selectedItems.map((items, index) => {
                return (                   
                  <div key={index} className='grid grid-cols-12 gap-3 items-center mb-5 border-b-[1px] pb-3'>
                    <div className='col-span-3'>
                      <img src={items.image.thumbnail} alt="item image" className='w-full h-full' />
                    </div>
                    <div className='col-span-7 text-xs'>
                      <h2 className='truncate'>{items.name}</h2>
                      <p className='text-[#d63310] font-bold'>{items.count}x <span className='text-gray-400 ml-3'>@${items.price}</span></p>
                    </div>
                    <div className='col-span-2'>
                      <h1>${items.count * items.price}</h1>
                    </div>
                    
                  </div>
                )                
              })
            }
            <div className='flex justify-between'>
              <h4 className='text-sm'>Order Total</h4>
              <h1 className='text-xl font-bold'>${getTotal(selectedItems)}</h1>
            </div>
          </div>
          <button className='mt-5 bg-[#d63310] text-center text-white w-full py-2 rounded-[50px]'>Start New Order</button>
        </div>
  )
}

export default OrderConfirmation