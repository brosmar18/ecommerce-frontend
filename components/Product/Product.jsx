import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../library/client';

import styles from './Product.module.scss';

const Product = ({ products }) => {
    return (
       <div className='products-container'>
        {products?.map(({image, name, slug, price, _id}) => (
            <Link key={_id} href={`/product/${slug.current}`}>
                <div className='product'>
                    <img
                        src={urlFor(image && image[0])}
                        className='product__image'
                    />
                    <p className='product__name'>{name}</p>
                    <p className='product__price'>{price}</p>
                </div>
            </Link>
        ))}
       </div>
    )
}

export default Product;
