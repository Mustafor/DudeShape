import React from 'react'
import {  } from '../assets/images/icon'
import furniture1 from '../assets/images/furniture1.png'
import furniture2 from '../assets/images/furniture2.png'
import furniture3 from '../assets/images/furniture3.png'
import Like from '../assets/images/like.svg'
import More from '../assets/images/more.svg'


function Furnitur() {
    return (
        <section className='pb-[140px]'>
        <div className='containers'>
        <div className=''>
        <div>
        <h2 className='text-[32px] font-bold leading-[52px] text-[#242424] mb-[20px]'>Our Popular Furniture</h2>
        <p className='text-[#383738] mb-[80px] w-[819px] leading-[27px] text-[20px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
        </div>
        <ul className='flex items-center gap-[30px] justify-between'>
        <li className='items shadow-2xl w-[380px] bg-white'>
        <img src={furniture1} className='w-[100%]' alt="furniture 1" width={380} height={246}/>
        <div className='flex  p-6 items-center justify-between'>
        <h3 className='text-[20px] font-bold leading-[27px] text-[#242424]'>White Swan Chair</h3>
        <div className='flex items-center gap-[8px]'>
        <a href="#">
        <img src={Like} alt="like img" width={36} height={36}/>
        </a>
        <a href="#">
        <img src={More} alt="More img" width={36} height={36}/>
        </a>
        </div>
        </div>
        <div className='flex px-6 pb-6 items-center justify-between'>
        <span className='text-[#154444] text-[24px] leading-[31px] font-bold'>$40</span>
        <button className='w-[78px] py-[5px] px-[7px] font-bold hover:bg-transparent duration-300 hover:text-[#244D4D] text-white text-[12px] leading-[21px] bg-[#244D4D] '>Buy Now</button>
        </div>
        </li>
        <li className='items shadow-2xl w-[380px] bg-white'>
        <img src={furniture2} className='w-[100%]' alt="furniture 1" width={380} height={246}/>
        <div className='flex  p-6 items-center justify-between'>
        <h3 className='text-[20px] font-bold leading-[27px] text-[#242424]'>White Swan Chair</h3>
        <div className='flex items-center gap-[8px]'>
        <a href="#">
        <img src={Like} alt="like img" width={36} height={36}/>
        </a>
        <a href="#">
        <img src={More} alt="More img" width={36} height={36}/>
        </a>
        </div>
        </div>
        <div className='flex px-6 pb-6 items-center justify-between'>
        <span className='text-[#154444] text-[24px] leading-[31px] font-bold'>$40</span>
        <button className='w-[78px] py-[5px] px-[7px] font-bold hover:bg-transparent duration-300 hover:text-[#244D4D] text-white text-[12px] leading-[21px] bg-[#244D4D] '>Buy Now</button>
        </div>
        </li>
        <li className='items shadow-2xl w-[380px] bg-white'>
        <img src={furniture3} className='w-[100%]' alt="furniture 1" width={380} height={246}/>
        <div className='flex  p-6 items-center justify-between'>
        <h3 className='text-[20px] font-bold leading-[27px] text-[#242424]'>White Swan Chair</h3>
        <div className='flex items-center gap-[8px]'>
        <a href="#">
        <img src={Like} alt="like img" width={36} height={36}/>
        </a>
        <a href="#">
        <img src={More} alt="More img" width={36} height={36}/>
        </a>
        </div>
        </div>
        <div className='flex px-6 pb-6 items-center justify-between'>
        <span className='text-[#154444] text-[24px] leading-[31px] font-bold'>$40</span>
        <button className='w-[78px] py-[5px] px-[7px] font-bold hover:bg-transparent duration-300 hover:text-[#244D4D] text-white text-[12px] leading-[21px] bg-[#244D4D] '>Buy Now</button>
        </div>
        </li>
        </ul>
        </div>
        </div>
        </section>
    )
}

export default Furnitur