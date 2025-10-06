import React from 'react'

export default function Cart() {
  return (
    <div>
        <div className='cart-index'>
            <div className='flex justify-center'>
                <div className='text-4xl flex justify-start title-box mt-10'>
                    <div className='title flex gap-3'>
                        <i className='fa fa-shopping-cart'></i> Your Cart
                    </div>
                </div>
            </div>
            <div className='empty text-center mt-52'>
                There's nothing in your cart !
            </div>
        </div>
    </div>
  )
}
