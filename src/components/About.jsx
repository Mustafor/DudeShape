import React from 'react'
import AboutImg from "../assets/images/about.png"
import { About1, About2, About3 } from '../assets/images/icon'

export const About = () => {
  return (
    <section className='pb-[140px]'>
        <div className='containers'>
            <div className='flex gap-[50px] flex-col-reverse lg:flex-row'>
                <img className='mx-auto  md:w-[631px] h-[612]' src={AboutImg} alt='About Img' width={631} height={612}/>
                <div className='py-[47px]'>
                    <h3 className='text-[32px] leading-[40px] mb-[20px] text-[#244D4D]'>About Us</h3>
                    <p className='text-[25px] leading-[25px] text-[#444444] mb-[40px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                    <div className='flex gap-[28px]'>
                        <About1/>
                        <div>
                        <strong className='text-[20px] text-[#244D4D] leading-[26px]'>Best Quality</strong>
                        <p className='text-[18px] text-[#383738] mb-[30px] mt-[14px] w-[271px] leading-[26px]'>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className='flex gap-[28px]'>
                        <About2/>
                        <div>
                        <strong className='text-[20px] text-[#244D4D] leading-[26px]'>Best Quality</strong>
                        <p className='text-[18px] text-[#383738] mt-[14px] w-[271px] mb-[30px] leading-[26px]'>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className='flex gap-[28px]'>
                        <About3/>
                        <div>
                        <strong className='text-[20px] text-[#244D4D] leading-[26px]'>Best Quality</strong>
                        <p className='text-[18px] text-[#383738] mt-[14px] w-[271px] mb-[30px] leading-[26px]'>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About