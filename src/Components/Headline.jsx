import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";

function FrontPage() {

    
const [calender,setcal] = useState({
    today:"",
    month:"",
    year:""
  })
  
    useEffect(()=>{
      const today = new Date();
    const day = today.getDate()
    
    const month = today.getMonth()+1;
    const year = today.getFullYear();
  
    setcal({
      today:day,
      month:month,
      year:year
    })
    
    },[])
  return (

    <>
   
  <div className='pl-5 mt-4  text-4xl flex justify-between'>
  <h1 className='  font-extrabold'>Headlines</h1>
  
  <span className="text-lg pr-5 pt-2 font-sans invisible lg:visible">{calender.today}-{calender.month}-{calender.year}</span>
  </div>
  
  <hr className='h-1 ml-4 w-[98%]  bg-[#333] '/>
    <div className=' p-5 grid grid-rows-1 gap-10 lg:grid-cols-5'>
        <div className='w-full  lg:col-span-2 mt-3'>
       
        <left className=''>
            <div className=''>
            <img className='md:mx-auto' src="https://img.etimg.com/thumb/msid-107607974,width-600,height-450,imgsize-676653/disney-reliance-talks-on-merger-reach-last-lap.jpg" alt="" />
            <h1 className='mt-3 text-3xl font-bold'>
                <Link to="/details">
                    Disney, Reliance Talks on Merger Reach Last Lap
                </Link>
            </h1>
            <p className='font-semibold'>
                
            With a week to go before the exclusivity period deadline for bilateral negotiations comes to an end on February 17, Walt Disney Co and Reliance Industries (RIL) are in the last leg of negotiations to finalize their mega stock-and-cash merger to create India’s largest media and entertainment business, said people in the know.

            
            </p > 
            </div>
           
        </left>

        </div>




        <div className='w-full lg:col-span-3 mt-2 '>
            <div className=''>
                <h1 className='text-3xl font-bold'>AI to Speed up India’s Growth on Road to 2047</h1>
                <div className='mt-5 flex-row gap-1 sm:flex font-semibold'>
                    <p className='mt-5'>India, with a “very buoyant” market and a growth rate that is “the best in the world”, is poised to gain tremendously from the era of artificial intelligence-led growth, according to Satya Nadella, chairman and chief executive officer of Microsoft Corporation.</p>
                    <img className='mx-auto mt-5' src="https://img.etimg.com/thumb/msid-107608012,width-240,height-180,imgsize-80794/ai-to-speed-up-indias-growth-on-road-to-2047.jpg" alt="" />
                </div>

            </div>

            <div className='mt-5'>
                <h1 className='text-3xl font-bold'>SIPs TURN INTO GULPS: 2024 Begins with a Bang.</h1>
                <div className='mt-5 flex-row gap-1 sm:flex font-semibold'>
                    <p className='mt-5'>Net addition of systematic investment plan (SIP) accounts rose to a record high at 2.8 million in January, nearly 2.5 times more compared with the monthly average in the past two years, show data from the Association of Mutual Funds in India.</p>
                    <img className='mx-auto mt-5' src='https://img.etimg.com/thumb/msid-107608900,width-240,height-180,imgsize-6750/sips-turn-into-gulps-2024-begins-with-a-bang.jpg' alt="not-found" />
                </div>

            </div>
        </div>

        
        
       

    </div>

    {/* <div className='border flex'>
        <h1 className='text-2xl font-extrabold mt-5 mb-8 sm:hidden'>
                Economy Flies High, So do Corporates: Biz Flyers Top pre-Covid Numbers
        </h1>
        <div className=''>
            <img className='mx-auto w-[240px] h-[180px]' src="https://img.etimg.com/thumb/msid-107607814,width-240,height-180,imgsize-103812/economy-flies-high-so-do-corporates-biz-flyers-top-pre-covid-numbers.jpg" alt="" />
        </div>
        <div className=''> 
            <h1 className='text-2xl font-extrabold invisible sm:visible'>
                Economy Flies High, So do Corporates: Biz Flyers Top pre-Covid Numbers
            </h1>
            <p>Corporate air travel has surpassed pre-pandemic levels, contrary to the perception that it has taken a back seat with virtual meetings becoming the order of the day after Covid-19.</p>
        </div>
    </div> */}
    </>
  )
}

export default FrontPage