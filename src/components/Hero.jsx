import React from 'react'
import HeroImg from "../assets/images/chair.png"

const Hero = () => {
  return (
    <section className='mb-[14px]'>
        <div className='containers'>
            <div className='flex flex-col-reverse lg:flex-row bg-[#154444]'>
            <img className='w-[411px] h-[560px] mx-auto lg:mx-0 mt-[40px] lg:mt-0' src={HeroImg} alt='Hero Img' width={411} height={560}/>
            <div className='pt-[40px] pl-[20px] lg:pt-[101px] lg:pl-[100px]'>
                <h1 className='text-[32px] mb-[12px] leading-[42px] lg:text-[56px] lg:leading-[68px] font-bold text-white lg:mb-5'>We Help You Make Modern Furniture</h1>
                <p className='text-white w-[488px] text-[20px] leading-[25px] mb-[35px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                <button className='w-[172px] border-[2px] border-white hover:bg-transparent hover:border-white hover:text-white duration-300 py-[15px] bg-white text-[#154444] text-[20px] leading-[25px]'>Explore More</button>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Hero