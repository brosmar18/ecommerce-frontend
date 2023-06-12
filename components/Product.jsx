import React from 'react';
import Link from 'next/link';
import { urlFor } from '../library/client';

const Product = () => {
    return (
        <div>
            <Link href="#">
                <div className='product'>
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className='product__image'
                    />
                    <p className='product__name'>Name</p>
                    <p className='product__price'>Price</p>
                </div>
            </Link>
        </div>
    )
}

export default Product;
