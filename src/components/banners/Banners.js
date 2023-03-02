import React from 'react'
import { Link } from 'react-router-dom'
import "./Banners.css"

export default function Banners() {
  return (
    <div className='banners_main'>
        <div className='banners_main_left'>
        <div className='banners_left'>
            <div className='banner_inner'>
                <p>Get Up To 50% Off</p>
                <h4>Smart Collection</h4>
                <Link>SHOP NOW</Link>   
            </div>
        </div>
        <div className='banners_bottom'>
        <div className='banners_bottom_left'>
            <div className='banner_inner'>
                <p>Get Up To 50% Off</p>
                <h4>Smart Collection</h4>
                <Link>SHOP NOW</Link>   
            </div>
        </div>
        <div className='banners_bottom_right'>
            <div className='banner_inner'>
                <p>Get Up To 50% Off</p>
                <h4>Smart Collection</h4>
                <Link>SHOP NOW</Link>   
            </div>
        </div>
        </div>
        </div>
        <div className='banners_right'>
            <div className='banner_inner'>
                <p>Get Up To 50% Off</p>
                <h4>Smart Collection</h4>
                <Link>SHOP NOW</Link>   
            </div>
        </div>


    </div>
  )
}
