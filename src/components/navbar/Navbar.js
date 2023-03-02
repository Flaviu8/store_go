import React from 'react'
import './Navbar.css'
import SearchIcon from "../../icons/search.svg"
import Person from "../../icons/person.svg"
import Basket from "../../icons/basket.svg"
import Phone from "../../icons/phone.svg"
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {




  return (
    <>
    <div className='navbar_main'>
        <div>
          <a href='/'><img className='logo' src='https://cdn.shopify.com/s/files/1/0257/0492/3199/files/logo_50666c98-0cb4-4d05-9771-bf03a00b7f7b_170x.png?v=1646455127' alt='logo'></img></a>
        </div>
        <div className="form">
                <input type="text" id="search" className="form__input" autoComplete="off" placeholder=" " />
                <label htmlFor="text" className="form__label">Search</label>
                <button><img src={SearchIcon} alt="search-icon"/></button>
        </div>
        <div className='navbar_last'>
            <img src={Person} alt="person"/>
            <a href='/'>My Account</a>
            <p>0</p>
            <img src={Basket} alt="person"/>
            <a href='/'>My Cart</a>
        </div>
    </div>
    <nav>
        <ul>
            <li>
                <div className='tooltip'>
                    <NavLink to='/'>HOME</NavLink>
                    <h4 className='tooltiptext'>Home</h4>
                </div>
                <div className='tooltip'>
                    <NavLink to='/'>TOP PRODUCT</NavLink>
                    <h4 className='tooltiptext'>Accessories</h4>
                </div>
                <div className='tooltip'>
                    <NavLink to='/'>SPECIAL PRODUCT</NavLink>
                    <h4 className='tooltiptext'>Special Product</h4>
                </div>
                <div className='tooltip'>
                    <NavLink to='/'>BLOG</NavLink>
                    <h4 className='tooltiptext'>Sub blog</h4>
                </div>
                <div className='tooltip'>
                    <NavLink to='/'>ABOUT US</NavLink>
                    <h4 className='tooltiptext'>About Us</h4>
                </div>
                <div className='tooltip'>
                    <NavLink to='/'>CONTACT US</NavLink>
                    <h4 className='tooltiptext'>Contact Us</h4>
                </div>
            </li>
        </ul>
        <div className='contact_us'>
            <img src={Phone} alt="phone"/>
            <p>CALL US: <span>1112222121211</span></p>
        </div>
    </nav>
    </>
  )
}
