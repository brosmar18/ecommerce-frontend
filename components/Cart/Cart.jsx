import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Toast } from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../library/client';
import styles from './Cart.module.scss';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();


    return (
        <div className={styles.cartWrapper} ref={cartRef}>
            <div className={styles.cartContainer}>
                <button type='button' className={styles.cartHeading} onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className={styles.heading}>Your Cart</span>
                    <span className={styles.cartNumItems}>({totalQuantities})</span>
                </button>
            </div>
        </div>
    )
}

export default Cart;
