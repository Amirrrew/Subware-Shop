import React from 'react'

export default function AcsTemp({img ,title ,id}) {
  return (
    <div>
        <div className='acs-temp'>
            <img src={img}></img>
        </div>
        <div className='text-center text-xl mt-5'>
            {title}
        </div>
    </div>
  )
}
