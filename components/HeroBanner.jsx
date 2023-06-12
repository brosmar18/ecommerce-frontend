import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <div>
                <p className='hero-banner__small-text'>Small Text</p>
                <h3 className='hero-banner__med-text'>Mid Text</h3>
                <Image src='' alt='headphones' className='hero-banner__image' />
            </div>
            <Link href="#">
                <button type='button' className='hero-banner__button'>Button Text</button>
            </Link>
            <div className='hero-banner__desc'>
                <h5>Description</h5>
                <p>Description text</p>
            </div>
        </div>
    );
};

export default HeroBanner;
