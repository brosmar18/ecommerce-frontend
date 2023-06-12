import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <div>
                <p className='hero-banner__s-text'>Small Text</p>
                <h3 className='hero-banner__m-text'>Med Text</h3>
                <h1 className='hero-banner__l-text'>Large Text</h1>
            </div>
            <Link href="#">
                <button type='button' className='hero-banner__button'>Button Text</button>
            </Link>
        </div>
    )
}

export default HeroBanner;
