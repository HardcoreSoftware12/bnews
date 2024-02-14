import React from 'react'
import Headline from '../Components/Headline'
import SecondHeadline from '../Components/SecondHeadline'
import AdsSection from '../Components/AdsSection'
import Footer from '../Components/Footer'


function Homepage() {
  return (
    <div className='w-[90%] mx-auto relative '>
        <Headline/>
        <SecondHeadline/>
        <AdsSection/>
        <Footer/>
    </div>
  )
}

export default Homepage