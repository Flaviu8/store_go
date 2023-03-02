import React from 'react'
import Header from "../../components/header/Header"
import SideBar from '../../components/side-bar/SideBar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from '../../components/banner/Banner';
import TopCategory from '../../components/top-category/TopCategory';
import "./Home.css"
import Banners from '../../components/banners/Banners';

export default function Home() {
  return (
    <div>
        <Header />
        <div className='side_bar'>
            <SideBar />
            <Banner />
        </div>
       <TopCategory />
       <Banners />
    </div>
  )
}
