import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../library/client';

import styles from './Product.module.scss';

const Product = ({ products }) => {
    return (
        <div className={styles['products-container']}>
            {products?.map(({ image, name, slug, price, _id }) => (
                <Link key={_id} href={`/product/${slug.current}`}>
                    <div className={styles['product']}>
                        <img
                            src={urlFor(image && image[0])}
                            className={styles['product__image']}
                        />
                        <p className={styles['product__name']}>{name}</p>
                        <p className={styles['product__price']}>${price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Product;
