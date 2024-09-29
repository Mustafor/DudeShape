import React from 'react'
import { Logo, More, SearchIcon } from '../assets/images/icon'
import Navbar from './Navbar'

const Header = () => {
    const NavbarList = [
        {
            id:1,
            value:"Home",
            path:"#"
        },      
        {
            id:2,
            value:"About",
            path:"#"
        },
        {
            id:3,
            value:"Features",
            path:"#"
        },
        {
            id:4,
            value:"Contact",
            path:"#"
        }
    ]
    return (
        <header className='my-[40px] sm:my-0 sm:mt-[44px] sm:mb-[26px]'>
            <div className='containers'>
                <div className='flex items-center justify-between'>
                    <a className='inline-block' href='/'>
                    <Logo/>
                    </a>
                    <ul className='hidden md:flex items-center gap-[70px]'>{NavbarList.map(item => <Navbar key={item.id} item={item}/>)}</ul>
                    <div className='flex items-center gap-[30px]'>
                        <button className='hidden sm:block'><SearchIcon/></button>
                        <button><More/></button>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header