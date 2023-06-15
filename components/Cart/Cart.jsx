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
        <>
            <div className={styles.cartWrapper} ref={cartRef}>
                <div className={styles.cartContainer}>
                    <button type='button' className={styles.cartHeading} onClick={() => setShowCart(false)}>
                        <AiOutlineLeft />
                        <span className={styles.heading}>Your Cart</span>
                        <span className={styles.cartNumItems}>({totalQuantities})</span>
                    </button>
                    {cartItems.length < 1 && (
                        <div className={styles.emptyCart}>
                            <AiOutlineShopping size={150} />
                            <h3>Your shopping bag is empty</h3>
                            <Link href="/">
                                <button
                                    type='button'
                                    onClick={() => setShowCart(false)} className={styles.btn}>
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    )}

                    <div className={styles.productContainer}>
                        {cartItems.length >= 1 && cartItems.map((item, index) => (
                            <div className={styles.product} key={item._id}>
                                <img src={urlFor(item?.image[0])} className={styles.cartProductImage} />
                                <div className={styles.itemDesc}>
                                    <div className={`${styles.flex} ${styles.top}`}>
                                        <h5>{item.name}</h5>
                                        <h4>${item.price}</h4>
                                    </div>
                                    <div className={`${styles.flex} ${styles.bottom}`}>
                                        <div>
                                            <p className={styles.quantityDesc}>
                                                <span className={styles.minus}> <AiOutlineMinus /></span>
                                                <span className={styles.num}>{item.quantity}</span>
                                                <span className={styles.plus}><AiOutlinePlus /></span>
                                            </p>
                                        </div>
                                        <button
                                            type='button'
                                            className={styles.removeItem}
                                        >
                                            <TiDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartItems.length >= 1 && (
                        <div className={styles.cartBottom}>
                            <div className={styles.total}>
                                <h3>Subtotal:</h3>
                                <h3>${totalPrice}</h3>
                            </div>
                            <div className={styles.btnContainer}>
                                <button type='button' className={styles.btn}>Pay with Stripe</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart;
