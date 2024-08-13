import React, { useState } from 'react'
import Navbar from './Navbar'
import { HeadPhoneData } from '../data/MockData'
import { IHeadphoneData } from '../types & intefaces/Types&Interfaces'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
function Hero() {

    const [activeData, setActiveData] = useState<IHeadphoneData>(HeadPhoneData[0])


  return (
    <section className='bg-red-400 h-screen'>
      <Navbar/>
      
      <div className='container grid grid-col-1 md:grid-cols-2 h-screen md:h-[800px] relative'>
      {/* headphones info section */}
        <div className='flex flex-col text-white justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1'>
                <div className='space-y-4 md:space-y-7 text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-bold'>{activeData.title}</h1>
                    <p className='text-sm leading-loose text-white/80'>{activeData.subtitle}</p>
                    <p className='text-3xl md:text-4xl font-bold'>{activeData.price}</p>
                </div>
                {/* social icons sections */}
                <div className='flex items-center justify-center md:justify-start gap-6 mt-8 text-4xl'>
                    <FaInstagram className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200' />
                    <FaFacebook className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200'/>
                    <FaTwitter className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200'/>
                </div>
            </div>
      {/* headphones image section */}
        <div className='order-1 md:order-2 flex flex-col justify-center items-center'>
            <img src={activeData.imageSrc} alt="{activeData.title}" />
        </div>
      </div>
    
    </section>
  )
}

export default Hero
