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
            <div className='hero-banner__desc'>
                <h5 className='hero-banner__desc-title'>Description</h5>
                <p className='hero-banner__desc-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default HeroBanner;
