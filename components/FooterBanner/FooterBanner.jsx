import React from 'react';
import Link from 'next/link';

import styles from './FooterBanner.module.scss';
import { urlFor } from '../../library/client';


const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
    return (
        <div className={styles['footer-banner']}>
            <div className={styles['footer-banner__desc']}>
                <div className={styles['footer-banner__left']}>
                    <p>{discount}</p>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <p>{saleTime}</p>
                </div>
                <div className={styles['footer-banner__right']}>
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>Description</p>
                </div>
                <Link href="#">
                    <button className={styles['footer-banner__button']} type='button'>Button Text</button>
                </Link>
                <img
                    src='#'
                    className={styles['.footer-banner__image']}
                />
            </div>
        </div>
    )
}

export default FooterBanner;
