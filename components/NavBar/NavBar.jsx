import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from '../';
import { useStateContext } from '../../context/StateContext';

import styles from './NavBar.module.scss';

const NavBar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div className={styles['nav']}>
            <p className={styles['nav__logo']}>
                <Link href="/">Furry Pal News</Link>
            </p>
            <button type='button' className={styles['nav__cart-icon']} onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className={styles['nav__item-qty']}>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default NavBar;
