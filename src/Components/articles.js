import React, { useState } from 'react'
import artlist from '../Data/artList'
import ArtTemp from './artTemp'

export default function Arts() {
    let [art ,setArt] = useState(artlist)
  return (
    <div className='flex flex-wrap mt-24 justify-center gap-3'>
        {art.map(item => {
            return <ArtTemp title={item.title} img={item.img}/>
        })}
    </div>
  )
}
