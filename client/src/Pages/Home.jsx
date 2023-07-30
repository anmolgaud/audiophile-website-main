import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderBanner from '../Compnents/HeaderBanner';
import HomeProduct from '../Compnents/HomeProduct';
import SaleBanner from '../Compnents/SaleBanner';
const Home = () => {

  const [heroBanner, setHeroBanner] = useState({});
  const [saleBanner, setsaleBanner] = useState({});

  const fetchHeroBannerData = async () => {
    try {
      const res = await axios.get(`https://audiophilebackend.onrender.com/api/banner`);
      const banner = res.data.data.filter((temp) => temp.bannerType === 'hero');
      setHeroBanner(banner[0]);
    } catch (error) {
      console.log(error.response);
    }
  }

  const fetchSaleBannerData = async () => {
    try {
      const res = await axios.get("https://audiophilebackend.onrender.com/api/banner");
      const banner = res.data.data.filter((temp) => temp.bannerType === 'sale');
      setsaleBanner(banner[0]);
    } catch (error) {
      console.log(error.response);
    }
  }

  
  useEffect(() => {
    fetchHeroBannerData();
    fetchSaleBannerData();
  }, [])

  return (
    <main>
      <HeaderBanner key={heroBanner._id} {...heroBanner}/>
      <HomeProduct />
      <SaleBanner key={saleBanner._id} {...saleBanner}/>
    </main>
  )
}

export default Home;