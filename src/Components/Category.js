import React from 'react'

export default function Category() {
  return (
    <div className='flex justify-center mt-16'>
        <div className='flex justify-center gap-1 flex-wrap'>
            <div id='women-ctg' className='ctg-box'>
                <div className='ctg-title'>
                    Women's
                </div>
            </div>
            <div id='men-ctg' className='ctg-box'>
                <div className='ctg-title'>
                    Men's
                </div>
            </div>            
            <div id='acs-ctg' className='ctg-box'>
                <div className='ctg-title'>
                    Accessories
                </div>
            </div>
        </div>
    </div>
  )
}
