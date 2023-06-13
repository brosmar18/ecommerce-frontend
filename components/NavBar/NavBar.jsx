import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


const NavBar = () => {
    return (
        <div className='nav'>
            <p className='nav__logo'>
                <Link href="/">Furry Pal News</Link>
            </p>
        </div>
    )
}

export default NavBar;
