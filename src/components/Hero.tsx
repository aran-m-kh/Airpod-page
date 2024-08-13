import { useEffect, useState } from 'react'

import Navbar from './Navbar'

import { HeadPhoneData } from '../data/MockData'
import { IHeadphoneData } from '../types & intefaces/Types&Interfaces'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

import {motion, AnimatePresence, easeInOut} from "framer-motion"
import { SlideRight } from '../utility/animateSlide'
function Hero() {

    const [activeData, setActiveData] = useState<IHeadphoneData>(HeadPhoneData[0])
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % HeadPhoneData.length)
        }, 3000)
        return () => clearInterval(interval)  
    }, [index])

    useEffect(() => {
        setActiveData(HeadPhoneData[index])
    }, [index])

  return (
    <motion.section 
        initial = {{backgroundImage : `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`}}
        animate = {{backgroundImage : `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor} 70%)`}}
        transition={{duration: 0.8}}
    >
      <Navbar/>
      
      <div className='container grid grid-col-1 md:grid-cols-2 h-screen md:h-[700px] relative'>
      
      
      {/* headphones info section */}
        <div className='flex flex-col text-white font-poppins justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1'>
                <div className='space-y-4 flex flex-col md:space-y-7 text-center md:text-left'>
                    <AnimatePresence mode='wait'>
                        <motion.h1
                        key= {activeData.id}
                        variants= {SlideRight(0.2)}
                        initial="hidden"
                        animate="show"
                        exit= "exit"
                        className='text-3xl md:text-4xl font-bold'>{activeData.title}</motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                    <motion.p
                        key= {activeData.id}
                        variants= {SlideRight(0.4)}
                        initial="hidden"
                        animate="show"
                        exit= "exit"
                        className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                    <motion.p
                        key= {activeData.id}
                        variants= {SlideRight(0.4)}
                        initial="hidden"
                        animate="show"
                        exit= "exit"
                        className='text-3xl md:text-4xl font-bold'>{activeData.price}</motion.p>
                    </AnimatePresence>
                </div>
                
                
                {/* social icons sections */}
                <div className='flex items-center justify-center md:justify-start gap-6 mt-8 text-4xl'>
                    <FaInstagram className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200' />
                    <FaFacebook className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200'/>
                    <FaTwitter className='border p-[6px] rounded-full cursor-pointer hover:bg-emerald-500 duration-200'/>
                </div>
            </div>
      
      
      {/* headphones image section */}
        <div className='order-1 md:order-2 flex flex-col justify-center items-center relative'>
            <AnimatePresence mode='wait'>
            <motion.img
                key={activeData.id}
                initial={{opacity: 0, x:100}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.4, ease: easeInOut, delay: 0}}
                exit={{opacity: 0, x: -100}}
                className='w-[300px] md:w-[400px] xl:w-[500px] relative z-10' 
                src={activeData.imageSrc} 
                alt="{activeData.title}" />
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeData.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.4, ease: easeInOut, delay: 0}}
                    exit={{opacity: 0}}
                    className='text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-extrabold text-white/5 z-0'>{activeData.modal}</motion.div>
            </AnimatePresence>
        </div>
        
        
        {/*chat icon section */}
        <div className='absolute bottom-10 right-10 z-[999]'>
            <FaMessage className='text-2xl text-white cursor-pointer hover:text-emerald-500 duration-200'/>
        </div>
      </div>
    
    </motion.section>
  )
}

export default Hero
