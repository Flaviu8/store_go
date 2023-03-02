import React from 'react'
import HamburgerIcon from "../../icons/hamburger.svg"
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import ArrowRight from "../../icons/arrow-right.svg"
import ArrowDown from "../../icons/down-arrow.svg"
import PlusIcon from "../../icons/plus.svg"

export default function SideBar() {
    const [shoes, setShoes] = React.useState(false)
    const [sofa, setSofa] = React.useState(false)
    const [shop, setShop] = React.useState(false)
    const [showMore, setShowMore] = React.useState(false)


    const handleShow = () => {
        setShowMore(!showMore)
 
    }

  return (
    <div>
    <div className='sidebar_main'>
        <img src={HamburgerIcon} alt="hamburger-icon"/>
        <h3>ALL CATEGORIES</h3>
    </div>
    <div className='sidebar'>
        <ul>
            <li>
                <Link>Camera</Link>
                <Link>Accesories</Link>
                <Link onMouseEnter={() => setShoes(true)} onMouseLeave={() => setShoes(false)}><div className='arrow_visibility'>
                Shoes {shoes ? <img src={ArrowRight} alt="arrow" /> : <img src={ArrowDown} alt="arrow"/>}</div></Link>
                {shoes ? <div onMouseEnter={() => setShoes(true)} onMouseLeave={() => setShoes(false)} className='sidebar_shoes'>
                    <ul>
                        <li>
                            <Link>Man</Link>
                            <Link>Woman</Link>
                            <Link>Kids</Link>
                        </li>
                    </ul>
                </div> : ""}
                <Link onMouseEnter={() => setSofa(true)} onMouseLeave={() => setSofa(false)}><div className='arrow_visibility'>
                Sofa {sofa ? <img src={ArrowRight} alt="arrow"/> : <img src={ArrowDown} alt="arrow"/>}</div></Link>
                {sofa ? <div onMouseEnter={() => setSofa(true)} onMouseLeave={() => setSofa(false)} className='sidebar_sofa'>
                    <div className='column'>
                    <h3>Designer Sofa</h3>
                    <ul>
                        <li>
                            <Link>Leather Sofa</Link>
                            <Link>Simple Sofa</Link>
                            <Link>Office Sofa</Link>
                        </li>
                    </ul>
                    <img src='https://cdn.shopify.com/s/files/1/0257/0492/3199/files/1_5684c708-e6cc-469c-a6bf-d22b5def8bb3_430x200_crop_center.jpg?v=1633415658' alt="banner"/>
                    </div>
                    <div className='column'>
                    <h3>Leather Sofa</h3>
                    <ul>
                        <li>
                            <Link>Leather Sofa</Link>
                            <Link>Simple Sofa</Link>
                            <Link>Office Sofa</Link>
                        </li>
                    </ul>
                    <img src='https://cdn.shopify.com/s/files/1/0257/0492/3199/files/2_2183ebda-097a-4704-ab2d-0bdbcb611d86_430x200_crop_center.jpg?v=1633415667' alt="banner"/>
                    </div>
                    <div className='column'>
                    <h3>Office Sofa</h3>
                    <ul>
                        <li>
                            <Link>Leather Sofa</Link>
                            <Link>Simple Sofa</Link>
                            <Link>Office Sofa</Link>
                        </li>
                    </ul>
                    <img src='https://cdn.shopify.com/s/files/1/0257/0492/3199/files/3_e66a20b5-6f53-402f-93fd-3159caa8d8e5_430x200_crop_center.jpg?v=1633415680' alt="banner"/>
                    </div>
                </div> : ""}
                <Link onMouseEnter={() => setShop(true)} onMouseLeave={() => setShop(false)}><div className='arrow_visibility'>
                Shop {shop ? <img src={ArrowRight} alt="arrow"/> : <img src={ArrowDown} alt="arrow"/>}</div></Link>
                {shop ? <div onMouseEnter={() => setShop(true)} onMouseLeave={() => setShop(false)} className='sidebar_shop'>
                    <ul>
                        <li>
                            <Link>Featured Product</Link>
                            <Link>Laptop</Link>
                            <Link>Phone</Link>
                            <Link>Speakers</Link>
                            <Link>Televisions</Link>
                        </li>
                    </ul>
                </div> : ""}
                <Link>Cosmetics</Link>
                <Link>Furniture</Link>
                <Link>Electronic</Link>
                <Link>Smart Tv</Link>
                <Link>Laptop</Link>
                    {showMore ? <Link className="show_effect">Speakers</Link> :  <Link id="hidden">Speakers</Link>}
                    {showMore ? <Link id='show_ef' onClick={handleShow}><img src={PlusIcon} alt="plus"/> More</Link> : <Link id='hidden_more' onClick={handleShow}><img src={PlusIcon} alt="plus"/> More</Link>}
            </li>
        </ul>
    </div>
    </div>
  )
}
