import React, { useState } from 'react'
import ItemTemp from '../ItemTemp';
import allprd from '../../Data/Allproducts'
import Category from '../Category';

export default function NavProducts() {
    let [post ,setPost ] = useState(allprd);
  return (
    <div className='mt-20 flex justify-center'>
      <div>
      <div className='flex justify-center'>
        </div>
        <div id='ctg'>
          <Category></Category>
        </div>
        <div className='flex justify-center mt-20'>
          <div className='justify-between flex box-title'>
            <div className='text-3xl wrap title'>All Products</div> 
            <div className='text-gray-400 mt-3'></div>
          </div>
        </div>
          <div className='flex justify-center mt-3'>
              <div className='flex flex-wrap justify-center gap-2 mt-5 prd'>
                  {post.map(item => {
                      return <ItemTemp id={item.id} title={item.title} img={item.img} cat={item.cat} Pevprice={item.Pevprice} price={item.price}></ItemTemp>
                  })}

              </div>
          </div>
          <div className='flex justify-center'>
            <div className='text-gray-500 cursor-pointer mt-20 text-center text-lg'>
              <div>
                Show more
              </div>
              <div>
                <i className='fa fa-angle-down'></i>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}