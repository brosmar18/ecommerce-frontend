import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={styles['footer']}>
            <p>&copy; 2023 Furry Pal News All rights reserved</p>
            <p className={styles['footer__icons']}>
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer;
