import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../library/client';

import styles from './Product.module.scss';

const Product = ({ product: {image, name, slug, price }}) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className='product'>
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className='product__image'
                    />
                    <p className='product__name'>{name}</p>
                    <p className='product__price'>${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product;
