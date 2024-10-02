import React from 'react'
import Email from '../assets/images/email.svg'

function News() {
  return (
    <section className='pb-[140px]'>
    <div className='conatiners bg-[#F4F6F6]'>
    <div className='pt-[65px] pb-[55px]'>
    <h2 className='text-center mb-[20px] text-[#222222] text-[35px] leading-[42px] font-bold'>Subscribe to get the latest news about us</h2>
    <p className='text-[#222222] text-[16px] leading-[24px] text-center w-[493px] mb-[40px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
    <label className='w-[471px] bg-[#FFFFFF] p-3 mx-auto flex items-center gap-[10px]'>
    <img src={Email} alt="email" width={16} height={16}/>
    <input className='outline-none w-[80%] text-[16px] leading-[22px] text-[#BABABA]' type="text" required placeholder='Enter your email' name='EnterYourMail'/>
    <button className='w-[30%] border-[2px] bg-[#305F64] py-[15px] px-[35px] hover:border-[#305F64] text-white text-[16px] leading-[22px] hover:bg-transparent duration-300 hover:text-[#305F64]'>Register</button>
    </label>
    </div>
    </div>
    </section>
  )
}

export default News