import React from 'react'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VerifiedIcon from '@mui/icons-material/Verified';
const LastSection = () => {
  return (
    <>
        <section className='flex justify-around items-center my-14'>
            <div className='text-center p-2 m-2'>
                
                <AirportShuttleIcon className='h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3'/>
                <h2 className='my-2 font-semibold'> FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>

            </div>
            <div className='text-center p-2 m-2'>
                <HeadphonesIcon className='h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3'/>
                <h2 className='my-2 font-semibold'>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>

            </div>
            <div className='text-center p-2 m-2'>
                <VerifiedIcon className='h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3'/>
                <h2 className='my-2 font-semibold'>MONEY BACK GUARANTEE</h2>
                <p>We reurn money within 30 days</p>

            </div>

        </section>
    </>
  )
}

export default LastSection