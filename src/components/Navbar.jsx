import React from 'react'

export const Navbar = ({item}) => {
    return (
        <li>
        <a className='font-normal hover:text-[#38a7a7] duration-300 text-[16px] leading-[20px] text-[#161616]' href={item.path}>{item.value}</a>
        </li>
    )
}

export default Navbar
