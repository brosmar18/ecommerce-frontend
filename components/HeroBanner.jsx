import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../library/client';



const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner'>
            <div>
                <p className='hero-banner__s-text'>{heroBanner.smallText}</p>
                <h3 className='hero-banner__m-text'>{heroBanner.midText}</h3>
                <h1 className='hero-banner__l-text'>{heroBanner.largeText1}</h1>
                <img src={urlFor(heroBanner?.image)} alt='headphones' className='hero-banner__image' />

            </div>
            <Link href="#">
                <button type='button' className='hero-banner__button'>{heroBanner.buttonText}</button>
            </Link>
            <div className='hero-banner__desc'>
                <h5 className='hero-banner__desc-title'>{heroBanner.product}</h5>
                <p className='hero-banner__desc-text'>{heroBanner.desc}</p>
            </div>
        </div>
    )
}

export default HeroBanner;
