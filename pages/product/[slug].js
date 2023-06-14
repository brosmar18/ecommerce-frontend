import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import client, { urlFor } from '../../library/client';
import { Product } from '../../components';

import styles from './[slug].module.scss';

const ProductDetails = ({ products, product }) => {
    const { image, name, details, price } = product;
    // const [index, setIndex] = useState(0);

    return (
        <div>
            <div className={styles.productDetails}>
                <div>
                    <div className={styles.productDetailsImage}>
                        <img src={urlFor(image && image[0])} />
                    </div>
                    {/* <div className='product-details__small-image'>
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div> */}
                </div>
                <div className={styles.productDetailsDesc}>
                    <h1>{name}</h1>
                    <div className={styles.reviews}>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className={styles.productDetailsPrice}>${price}</p>
                    <div className={styles.productDetailsQuantity}>
                        <h3>Quantity:</h3>
                        <p className={styles.quantityDesc}>
                            <span className={styles.minus} onClick={''}><AiOutlineMinus /></span>
                            <span className={styles.num}>0</span>
                            <span className={styles.plus} onClick={''}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className={styles.productDetailsButtons}>
                        <button type='button' className={styles.addToCart}>Add to Cart</button>
                        <button type='button' className={styles.buyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className={styles.recommendedProducts}>
                <h2>You May also like</h2>
                <div className={styles.marquee}>
                    <div className={styles.recommendedProductsContainerTrack}>
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: {
            products, product }
    }
}

export default ProductDetails;
