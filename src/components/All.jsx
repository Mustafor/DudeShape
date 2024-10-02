import React from 'react'
import AllImg from '../assets/images/allImg.png'
import LivingRoom from '../assets/images/livingroom.svg'
import Kitchen from '../assets/images/kitchen.svg'
import Dining from '../assets/images/dining.svg'
import Office from '../assets/images/office.svg'
import Bedroom from '../assets/images/bedroom.svg'
import Hallway from '../assets/images/hallway.svg'


function All() {
    return (
        <section className='pb-[140px]'>
        <div className='containers'>
        <div className=''>
        <h2 className='text-center font-bold text-[32px] leading-[48px] text-[#242424] mb-[20px]'>All Furniture</h2>
        <div className='flex items-center justify-center mb-[88px] gap-[100px]'>
        <span className='text-[24px] leading-[27px] text-[#919090]'>Shop By Room</span>
        <span className='text-[24px] leading-[27px] text-[#919090]'>Shop By Category</span>
        <span className='text-[24px] leading-[27px] text-[#919090]'>Shop By Style</span>
        </div>
        <div className='flex items-center justify-between gap-[100px]'>
        <img src={AllImg} alt="all img" width={577} height={410}/>
        <ul className='flex flex-wrap items-center space-y-5 justify-between'>
        <li className='w-[222px] flex flex-col items-center justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={LivingRoom} alt="" />
        <p className='text-[16px] leading-[21px] text-[#808080] text-center'>Living Room</p>
        </div>
        </li>
        <li className='w-[222px] flex flex-col items-center justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={Kitchen} alt="" />
        <span className='text-[16px] leading-[21px] text-[#808080] text-center'>Kitchen</span>
        </div>
        </li>
        <li className='w-[222px] flex flex-col items-center justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={Dining} alt="" />
        <span className='text-[16px] leading-[21px] text-[#808080] text-center'>Dining Room</span>
        </div>
        </li>
        <li className='w-[222px] flex flex-col items-center bg-[#154444] justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={Office} alt="" />
        <span className='text-[16px] leading-[21px] text-[#808080] text-center'>Office</span>
        </div>
        </li>
        <li className='w-[222px] flex flex-col items-center justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={Bedroom} alt="" />
        <span className='text-[16px] leading-[21px] text-[#808080] text-center'>Bed Room</span>
        </div>
        </li>
        <li className='w-[222px] flex flex-col items-center justify-center shadow-2xl'>
        <div className='space-y-[15px] mb-[15px]'>
        <img className='mx-auto mb-[14px] mt-[15px]' src={Hallway} alt="" />
        <span className='text-[16px] leading-[21px] text-[#808080] text-center'>Hallway</span>
        </div>
        </li>
        </ul>
        </div>
        </div>
        </div>
        </section>
    )
}

export default All