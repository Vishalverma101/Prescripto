import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Stats from '../components/Stats'
import LatestUpdates from '../components/LatestUpdates'
import Testimonials from '../components/Testimonials'
import AppDownload from '../components/AppDownload'

const Home = () => {
  return (
    <div>
      <Header />
      <Features/>
      <HowItWorks/>
      <Stats/>
      <SpecialityMenu />
      <TopDoctors />
      <Banner /> 
      <LatestUpdates/>
      <Testimonials/>
      
      
      <AppDownload/>
    </div>
  )
}

export default Home