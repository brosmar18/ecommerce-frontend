import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../library/client';

import styles from './Product.module.scss';

const Product = ({ products }) => {
    return (
        <>
            <div className={styles['products-heading']}>
                <h2 className={styles['products-heading__title']}>Best Seller Products</h2>
                <p className={styles['products-heading__desc']}>Description of products or selling statement</p>
            </div>
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
        </>
    )
}

export default Product;
