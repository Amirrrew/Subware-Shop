import React from 'react'
import { NavLink } from 'react-router-dom'

let NavOP = ({title}) => {
  return (
    <li onClick={Close2} id='nav-li' className='nav-li'>{title}</li>
  )
}

let NavDrp = ({title}) => {
  return (
    <li onClick={Close2} id='nav-li'>{title}</li>
  )
}

let Logs = ({icon}) => {
  return (
    <div onClick={Close2}>
      <i className={icon}></i>
    </div>
  )
}

let Void = () => {
  document.body.style = 'overflow-y: hidden;'
  document.getElementById('drp').style.height = '3000px'
  document.getElementById('drp').style.display = 'block'
  document.getElementById('drp-close').style.display = 'block'
  document.getElementById('drp-btn').style.display = 'none'
}

let Close = () => {
  document.body.style = 'overflow-y: scroll;'
  document.getElementById('drp').style.height = '0px'
  document.getElementById('drp').style.display = 'none'
  document.getElementById('drp-close').style.display = 'none'
  document.getElementById('drp-btn').style.display = 'block'
}

let Close2 = () => {
  document.getElementById('drp').style.height = '0px'
  document.getElementById('drp').style.display = 'none'

  if (document.getElementById('drp').style.height = '0px;') {
    document.getElementById('drp-close').style.display = 'none'
    document.getElementById('drp-btn').style.display = 'block'
    document.body.style = 'overflow-y: scroll;'
  }
}

let Dropdown = () => {
  return (
    <div id='drp' className='dropdown'>
      <div>
        <ul className='drp-ul'>
              <NavLink to='/'>
                <NavDrp title={'Home'}></NavDrp>
              </NavLink>
              <NavLink to='/Products'>
                <NavDrp title={'Products'}></NavDrp>
              </NavLink>
              <NavLink to='/Orders'>
                <NavDrp title={'Orders'}></NavDrp>
              </NavLink>
              <NavLink to='/Aboutus'>
                <NavDrp title={'About us'}></NavDrp>
              </NavLink>
              <a href='https://github.com/Amirrrew'>
                <NavDrp title={'Contact us'}></NavDrp>
              </a>
              <div className='flex gap-5 justify-center mt-7'>
                <NavLink to='/login'>
                  <Logs icon={'fa fa-user'}></Logs>
                </NavLink>
                <NavLink to='/Cart'>
                  <Logs icon={'fa fa-shopping-cart'}></Logs>
                </NavLink>
              </div>
        </ul>
      </div>
    </div>
  )
}

export default function Navbar() {

  return (
    <nav id='navbar'>
      <div className='flex flex-row m-5'>
        <div className='flex navleft basis-2/3'>
          <NavLink to='/'>
            <div>
              <img className='w-60' src='../images/logo.png'></img>
            </div>
          </NavLink>
          <div className='nav-options'>
            <ul className='flex mt-3 mx-10 gap-10'>
              <NavLink to='/Products'>
                <NavOP title={'Products'}></NavOP>
              </NavLink>
              <NavLink to='/Orders'>
                <NavOP title={'Orders'}></NavOP>
              </NavLink>
              <NavLink to='/Aboutus'>
                <NavOP title={'About us'}></NavOP>
              </NavLink>
              <a href='https://github.com/Amirrrew'>
                <NavOP title={'Contact us'}></NavOP>
              </a>
            </ul>
          </div>
        </div>
        <div className='flex navright justify-end basis-1/3'>
          <div className='flex m-3 mx-10 gap-5 mt-3 logs'>
            <NavLink to='/login'>
              <div>
                <i className='fa fa-user cursor-pointer'></i>
              </div>
            </NavLink>
            <NavLink to='/Cart'>
              <div>
                <i className='fa fa-shopping-cart cursor-pointer'></i>
              </div>
            </NavLink>
          </div>
          <button id='drp-btn' className='drp-btn' onClick={Void}><i className='fa fa-navicon'></i></button>
          <button style={{display: 'none'}} id='drp-close' className='drp-btn' onClick={Close}><i className='fa fa-close'></i></button>
          <div className='search-box'>
            <input className='search' placeholder='Search'></input>
            <button className='search-btn'><i className='fa fa-search'></i></button>
          </div> 
        </div>
      </div>
      <Dropdown></Dropdown>
    </nav>
  )
}
