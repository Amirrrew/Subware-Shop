import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer mt-28'>
        <div className='p-6'>
            <Link to='/'>
                <img className='w-80' src='../images/logo-transparent.png'></img>
            </Link>
        </div>
        <div className='flex flex-wrap p-10 gap-20'>
            <div>
                <div className='text-xl'>Products</div>
                <ul className='footers mt-3'>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>Pants</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div>
                <div className='text-xl'>Orders</div>
                <ul className='footers mt-3'>
                    <li>Dresses</li>
                    <li>Sport outfits</li>
                    <li>Socks</li>
                    <li>Uniforms</li>
                    <li>Underwears</li>
                </ul>
            </div>            
            <div>
                <div className='text-xl'>About us</div>
                <ul className='footers mt-3'>
                    <li>Who are we?</li>
                    <li>Where are we?</li>
                    <li>Our points</li>
                    <li>Our rules</li>
                    <li>Our goals</li>
                    <li>Our abilities</li>
                </ul>
            </div>            
            <div>
                <div className='text-xl'>Contact us</div>
                <ul className='footers mt-3'>
                    <li>Phone1 : 243957820</li>
                    <li>Phone2 : 249968945</li>
                    <li>Telephone : 120049</li>
                    <li>Telegram : https:/t.me/@SubwareSupport</li>
                    <li>Whatsapp : 249850356</li>
                </ul>
            </div>
            <div>
                <div className='text-xl'>
                    Socials
                </div>
                <div className='flex justify-start gap-3'>
                    <i className='fa fa-telegram fa-2x'></i>
                    <i className='fa fa-instagram fa-2x'></i>
                    <i className='fa fa-twitter fa-2x'></i>
                    <i className='fa fa-whatsapp fa-2x'></i>
                    <i className='fa fa-discord fa-2x'></i>
                    <i className='fa fa-reddit fa-2x'></i>
                </div>
            </div>
        </div>
        <div className='flex gap-3 mx-8'>
            <img className='profile' src='../images/arthur.jpg'></img>
            <div className='text-gray-500 mt-1'>
                <div>
                    Designed and Coded by Amirrrew
                </div>
                <div className='text-sm'>
                    <i className='fa fa-info-circle'></i> Amir Nobakht - 2024
                </div>
            </div>
        </div>
    </div>
  )
}
