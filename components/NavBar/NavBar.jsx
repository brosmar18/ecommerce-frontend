import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from '../Cart/Cart';
import { useStateContext } from '../../context/StateContext';

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles['nav']}>
            <p className={styles['nav__logo']}>
                <Link href="/">Furry Pal News</Link>
            </p>
            <button type='button' className={styles['nav__cart-icon']}>
                <AiOutlineShopping />
                <span className={styles['nav__item-qty']}>1</span>
            </button>
        </div>
    )
}

export default NavBar;
