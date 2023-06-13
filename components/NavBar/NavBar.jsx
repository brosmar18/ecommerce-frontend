import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className='nav'>
            <p className='nav__logo'>
                <Link href="/">Furry Pal News</Link>
            </p>
            <button type='button' className='nav__cart-icon'>
                <AiOutlineShopping />
                <span className='nav__item-qty'>1</span>
            </button>
        </div>
    )
}

export default NavBar;
