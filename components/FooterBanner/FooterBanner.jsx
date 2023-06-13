import React from 'react';
import Link from 'next/link';

import styles from './FooterBanner.module.scss';
import { urlFor } from '../../library/client';


const FooterBanner = ({ footerBanner }) => {
    return (
        <div className={styles['footer-banner']}>
            <div className={styles['footer-banner__desc']}>
                <div className={styles['footer-banner__left']}>
                    <p>Discount</p>
                    <h3>Large Text 1</h3>
                    <h3>Large Text 2</h3>
                    <p>Sale Time</p>
                </div>
                <div className={styles['footer-banner__right']}>
                    <p>Small Text</p>
                    <h3>Mid Text</h3>
                    <p>Description</p>
                </div>
                <Link href="#">
                    <button className={styles['footer-banner__button']} type='button'>Button Text</button>
                </Link>
                <img
                    src='#'
                />
            </div>
        </div>
    )
}

export default FooterBanner;
