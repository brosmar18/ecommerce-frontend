import React from 'react'
import Image from 'next/image';


const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>Small Text</p>
                <h3>Mid Text</h3>
                <Image src='' alt='headphones' className='hero-banner-image' />
            </div>
        </div>
    );
};

export default HeroBanner;
