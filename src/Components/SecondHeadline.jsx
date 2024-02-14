import React from 'react'
import { Link } from 'react-router-dom'

function FrontPage() {
  return (
    <>
   
  <div className='pl-5 mt-10  text-4xl'>
  <h1 className='  font-extrabold'>Pure Politics</h1>
  <hr className='h-1 w-[98%]  bg-[#333] '/>
  </div>
    <div className=' p-5 grid grid-rows-1 gap-10 lg:grid-cols-5'>
        <div className='w-full  lg:col-span-2 mt-3'>
       
        <div className=''>
            <div className=''>
            <img className='md:mx-auto' src="https://img.etimg.com/thumb/msid-107608007,width-600,height-450,imgsize-73142/borders-fortified-ahead-of-proposed-delhi-chalo-march-by-farmers-talks-with-centre.jpg" alt="" />
            <h1 className='mt-3 text-3xl font-bold'>
                <Link to="">
                Borders Fortified Ahead of Proposed ‘Delhi Chalo’ March by Farmers, Talks with Centre
                </Link>
            </h1>
            <p className='font-semibold'>
            Union ministers Piyush Goyal, Arjun Munda and Nityanand Rai are scheduled to hold another round of talks with leaders of farmers’ unions in Chandigarh on Monday, just a day ahead of the proposed ‘Delhi Chalo’ march.
            
            </p > 
            </div>
           
        </div>

        </div>




        <div className='w-full lg:col-span-3 mt-2 '>
            <div className=''>
                <h1 className='text-3xl font-bold'>
                Modified Tractors to Lead Farmers’ Protest: Intel
                </h1>
                <div className='mt-5 flex-row gap-1 sm:flex font-semibold'>
                    <p className='mt-5'>
                    Tractors modified to remove barricades and boulders will lead farmers planned march to Delhi on February 13. According to central intelligence agencies, they have alerted Punjab, UP, Haryana and Delhi police regarding the mass movement of farmers.
                        </p>
                    <img className='mx-auto mt-5' src="https://img.etimg.com/thumb/msid-107607967,width-240,height-180,imgsize-61480/modified-tractors-to-lead-farmers-protest-intel.jpg" alt="" />
                </div>

            </div>

            <div className='mt-5'>
                <h1 className='text-3xl font-bold'>Those who Put Nails in Farmers’ Path, Uproot them from Delhi: Rahul</h1>
                <div className='mt-5 flex-row gap-1 sm:flex font-semibold'>
                    <p className='mt-5'>The Congress on Sunday attacked Prime Minister Narendra Modi over reports of barricading and laying of nails on roads at certain points near the city's border ahead of the farmers' proposed 'Delhi Chalo' march, with Rahul Gandhi urging people to uproot those from Delhi who put nails in the path of farmers.</p>
                    <img className='mx-auto mt-5' src='https://img.etimg.com/thumb/msid-107607995,width-240,height-180,imgsize-1800292/those-who-put-nails-in-farmers-path-uproot-them-from-delhi-rahul.jpg' alt="not-found" />
                </div>

            </div>
        </div>

        
        
       

    </div>
    </>
  )
}

export default FrontPage