import React from 'react'
import { Link } from 'react-router-dom'

export default function SlideShow() {
  return (
    <div className='slideshow flex'>
        <div className='basis-1/2 m-40 slide-title'>
            <div className=''>
                Men's and Women's Summer / Fall clothings
            </div>
            <div className='text-6xl mt-1 slideT'>
                Up to 30% offer
            </div>
            <div className='text-6xl mt-2 slideT'>
                New arrivals !
            </div>
            <Link to='/Products'>
                <button className='light-btn mt-4'>
                    Shop <i className='fa fa-angle-right'></i>
                </button>
            </Link>
        </div>
        <div className='slide-img'>
            <img src='../images/men-Tshirt.png'></img>
        </div>
    </div>
  )
}
