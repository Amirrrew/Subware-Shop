import React from 'react'

export default function ArtTemp({title ,id ,img}) {
  return (
    <div className='art-temp'>
        <div className='art-img'>
            <img src={img}></img>
        </div>
        <div className='flex p-5'>
            <div className='text-lg'>
                {title}
            </div>
            <button className='dark-btn'>
                Read more
            </button>
        </div>
    </div>
  )
}
