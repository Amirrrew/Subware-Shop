import React, { useState } from 'react'
import ItemTemp from './ItemTemp';
import offerslist from '../Data/offersList';
import { Link } from 'react-router-dom';


export default function Offers() {
    let [post ,setPost ] = useState(offerslist);


    let Scrollfix = () => {
        document.documentElement.scrollTop = 0
    }


  return (
    <div className='mt-20'>
        <div className='flex justify-center'>
            <div className='flex justify-between w-4/5'>
                <div className='text-3xl'>
                    Special Offers
                </div>
                <Link onClick={Scrollfix} to='/Products'>
                    <button className='dark-btn'>
                        Show all
                    </button>
                </Link>

            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-wrap justify-center gap-2 mt-5'>
                {post.map(item => {
                    return <ItemTemp id={item.id} title={item.title} img={item.img} cat={item.cat} Pevprice={item.Pevprice} price={item.price}></ItemTemp>
                })}
            </div>
        </div>
    </div>
  )
}
