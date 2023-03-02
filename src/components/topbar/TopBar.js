import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topbar_main'>
        <p>Get 30% Off On Selected Items</p>
    <div className='topbar_left'>
        <select name="currency" id="currency">
            <option value="United States">United States(USD $)</option>
            <option value="Europe">Europe(EUR &euro;)</option>
        </select>
        <div className='line'></div>
        <select name="country" id="country">
            <option value="English">English</option>
        </select>
        <div className='line'></div>
        <a href='/'>Wishlist</a>
    </div>
    </div>
  )
}
