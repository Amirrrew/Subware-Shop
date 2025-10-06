import React, { useState } from 'react'
import acslist from '../Data/acsList'
import AcsTemp from './acsTemp'
import { Link } from 'react-router-dom'

export default function Acs() {
    let [acs ,setAcs] = useState(acslist)

    let Scrollfix = () => {
        document.documentElement.scrollTop = 0
    }


  return (
    <div className='mt-20'>
        <div className='flex justify-center'>
            <div className='flex justify-between w-4/5'>
                <div className='text-3xl'>
                    Men's Accessories
                </div>
                <Link onClick={Scrollfix} to='/Products'>
                    <button className='dark-btn'>
                        Show all
                    </button>
                </Link>
            </div>
        </div>
        <div className='flex justify-center mt-10 gap-10 flex-wrap'>
            {acs.map(item => {
                return <AcsTemp title={item.title} img={item.img} />
            })}
        </div>
    </div>
    )
}
