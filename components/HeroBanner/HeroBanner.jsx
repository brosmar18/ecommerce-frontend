import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './HeroBanner.module.scss';
import { urlFor } from '../../library/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className={styles['hero-banner']}>
            <div>
                <p className={styles['hero-banner__s-text']}>{heroBanner.smallText}</p>
                <h3 className={styles['hero-banner__m-text']}>{heroBanner.midText}</h3>
                <h1 className={styles['hero-banner__l-text']}>{heroBanner.largeText1}</h1>
                <img src={urlFor(heroBanner?.image)} alt='headphones' className={styles['hero-banner__image']} />
            </div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type='button' className={styles['hero-banner__button']}>{heroBanner.buttonText}</button>
            </Link>
            <div className={styles['hero-banner__desc']}>
                <h5 className={styles['hero-banner__desc-title']}>{heroBanner.product}</h5>
                <p className={styles['hero-banner__desc-text']}>{heroBanner.desc}</p>
            </div>
        </div>
    )
}

export default HeroBanner;
