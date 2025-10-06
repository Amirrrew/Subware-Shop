import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemTemp({id, title, img ,Pevprice ,price ,cat}) {

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0
  }


  return (
    <div>
        <div className='item-box'>
            <div className='item-img-box'>
              <img src={img}></img>
            </div>
            <div className='pt-4 px-5'>
              <div className='flex justify-between'>
                <div>
                  <div className='text-base'>{title}</div>
                  <div className='text-gray-400'>{cat}</div>
                </div>
                <div>
                  <div className='text-gray-400'>
                    <del>{Pevprice}$</del>
                  </div>
                  <div className='text-lg'>
                    {price}$
                  </div>
                </div>
              </div>
              <div>
                <Link onClick={Scrollfix} to={`/Products/${id}`}>
                  <button id='shop-btn' className='dark-btn mt-3'>
                    Shop <i className='fa fa-shopping-cart'></i>
                  </button>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}
