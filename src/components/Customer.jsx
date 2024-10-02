import React from 'react'
import CustomerImg from '../assets/images/customer.png'
import Mr from '../assets/images/mr.svg'
import Star from '../assets/images/Star.svg'

function Customer() {
    return (
        <section className='pb-[140px]'>
        <div className='containers'>
        <div className='flex items-center justify-between gap-[100px]'>
        <img src={CustomerImg} alt="Customer img" width={564} height={492}/>
        <div className='w-[535px]'>
        <h2 className='font-bold text-[32px] leading-[48px] text-[#242424] mb-[20px]'>Our customers are verry importan to us</h2>
        <p className='text-[20px] leading-[27px] text-[#383738] mb-[40px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
        <div className='flex items-center gap-[10px]'>
        <img src={Mr} alt="Mr img" width={50} height={50}/>
        <div>
        <span className='font-bold text-[16px] leading-[19px] mb-[6px] text-[#000000]'>Mh Jibon</span>
        <div className='flex gap-[8px]'>
        <img src={Star} alt="Star" width={16} height={16}/>
        <span className='font-bold text-[#000000] text-[14px] leading-[15px]'>4.8</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Customer